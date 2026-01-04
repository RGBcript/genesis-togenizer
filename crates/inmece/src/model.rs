#![allow(non_snake_case, dead_code, unused_mut)]

use anyhow::Result;
use candle_core::{Tensor, DType, Module, Device};
use candle_nn::{VarBuilder, Linear, Conv1d, Conv1dConfig, linear, conv1d};
use crate::config::InmeceConfig;
use togen::ToGen;

#[derive(Debug, Clone)]
pub struct InmeceState {
    // (h_state, conv_buffer) per layer
    pub layers: Vec<(Tensor, Tensor)>,
}

impl InmeceState {
    pub fn new(n_layers: usize, d_inner: usize, d_state: usize, d_conv: usize, device: &Device) -> Result<Self> {
        let mut layers = Vec::new();
        for _ in 0..n_layers {
            let h = Tensor::zeros((1, d_inner, d_state), DType::F32, device)?;
            let conv = Tensor::zeros((1, d_inner, d_conv), DType::F32, device)?;
            layers.push((h, conv));
        }
        Ok(Self { layers })
    }
}

#[derive(Debug)]
pub struct RMSNorm {
    weight: Tensor,
    eps: f64,
}

impl RMSNorm {
    pub fn new(dim: usize, eps: f64, vb: VarBuilder) -> Result<Self> {
        let weight = vb.get(dim, "weight")?;
        Ok(Self { weight, eps })
    }
}

impl Module for RMSNorm {
    fn forward(&self, x: &Tensor) -> candle_core::Result<Tensor> {
        let x_dtype = x.dtype();
        let x = x.to_dtype(DType::F32)?;
        let (_b_sz, _seq_len, hidden_size) = x.dims3()?;
        let norm_x = (x.sqr()?.sum_keepdim(2)? / (hidden_size as f64))?;
        let x_normed = x.broadcast_div(&(norm_x + self.eps)?.sqrt()?)?;
        let x_normed = x_normed.to_dtype(x_dtype)?;
        x_normed.broadcast_mul(&self.weight)
    }
}

#[derive(Debug)]
pub struct MambaBlock {
    norm: RMSNorm,
    in_proj: Linear,
    conv1d: Conv1d,
    x_proj: Linear,
    dt_proj: Linear,
    out_proj: Linear,
    
    // SSM Parameters
    A_log: Tensor,
    D: Tensor,

    dt_rank: usize,
    d_inner: usize,
    d_state: usize,
}

impl MambaBlock {
    pub fn new(cfg: &InmeceConfig, vb: VarBuilder) -> Result<Self> {
        let d_inner = cfg.d_inner;
        let dt_rank = cfg.dt_rank;
        let d_state = cfg.d_state;

        let norm = RMSNorm::new(cfg.d_model, 1e-5, vb.pp("norm"))?;
        let in_proj = linear(cfg.d_model, d_inner * 2, vb.pp("in_proj"))?;
        
        let conv_cfg = Conv1dConfig {
            padding: cfg.d_conv - 1,
            groups: d_inner,
            ..Default::default()
        };
        let conv1d = conv1d(d_inner, d_inner, cfg.d_conv, conv_cfg, vb.pp("conv1d"))?;

        let x_proj = linear(d_inner, dt_rank + d_state * 2, vb.pp("x_proj"))?;
        let dt_proj = linear(dt_rank, d_inner, vb.pp("dt_proj"))?;
        let out_proj = linear(d_inner, cfg.d_model, vb.pp("out_proj"))?;

        // Initialize SSM parameters
        let A_log = vb.get((d_inner, d_state), "A_log")?;
        let D = vb.get(d_inner, "D")?;

        Ok(Self {
            norm,
            in_proj,
            conv1d,
            x_proj,
            dt_proj,
            out_proj,
            A_log,
            D,
            dt_rank,
            d_inner,
            d_state,
        })
    }

    pub fn forward(&self, x: &Tensor) -> Result<Tensor> {
        // Pre-norm
        let x_norm = self.norm.forward(x)?;

        let (b_sz, seq_len, _d) = x_norm.dims3()?;
        
        // 1. Project input
        let x_and_res = self.in_proj.forward(&x_norm)?;
        let chunks = x_and_res.chunk(2, 2)?;
        let x_in = &chunks[0];
        let res = &chunks[1];

        // 2. Convolution
        let x_conv = x_in.t()?.contiguous()?; 
        let x_conv = self.conv1d.forward(&x_conv)?;
        let x_conv = x_conv.narrow(2, 0, seq_len)?.t()?.contiguous()?;
        let x_conv = candle_nn::ops::silu(&x_conv)?;

        // 3. SSM Parameters
        let x_dbl = self.x_proj.forward(&x_conv)?;
        let dt = x_dbl.narrow(2, 0, self.dt_rank)?;
        let B_ssm = x_dbl.narrow(2, self.dt_rank, self.d_state)?;
        let C_ssm = x_dbl.narrow(2, self.dt_rank + self.d_state, self.d_state)?;
        
        let dt = self.dt_proj.forward(&dt)?;
        let dt = dt.exp()?.add(&Tensor::ones_like(&dt)?)?.log()?;

        // 4. Selective Scan
        let A = self.A_log.exp()?.neg()?;
        let mut ys = Vec::with_capacity(seq_len);
        let mut h = Tensor::zeros((b_sz, self.d_inner, self.d_state), DType::F32, x.device())?;
        
        for i in 0..seq_len {
            let u_t = x_conv.narrow(1, i, 1)?.squeeze(1)?;
            let dt_t = dt.narrow(1, i, 1)?.squeeze(1)?;
            let B_t = B_ssm.narrow(1, i, 1)?.squeeze(1)?;
            let C_t = C_ssm.narrow(1, i, 1)?.squeeze(1)?;
            
            let dt_b = dt_t.unsqueeze(2)?;
            let A_b = A.unsqueeze(0)?;
            let dA = (dt_b.broadcast_mul(&A_b)?).exp()?; 
            
            let B_b = B_t.unsqueeze(1)?;
            let dB = dt_b.broadcast_mul(&B_b)?; 
            
            let u_b = u_t.unsqueeze(2)?;
            let du = dB.broadcast_mul(&u_b)?; 
            
            h = h.mul(&dA)?.add(&du)?;
            
            let C_b = C_t.unsqueeze(1)?;
            let y_t = h.broadcast_mul(&C_b)?.sum(2)?;
            
            ys.push(y_t);
        }
        
        let y_stack = Tensor::stack(&ys, 1)?;

        // 5. Skip Connection
        let D_b = self.D.unsqueeze(0)?.unsqueeze(0)?;
        let y = (y_stack + x_conv.broadcast_mul(&D_b)?)?;

        // 6. Gating & Output
        let y = (y * candle_nn::ops::silu(res)?)?;
        let out = self.out_proj.forward(&y)?;

        Ok(out)
    }
}

#[derive(Debug)]
pub struct InmeceModel {
    embedding: candle_nn::Embedding,
    layers: Vec<MambaBlock>,
    norm_f: RMSNorm,
    lm_head: Linear, // Primitive communication head
    pub state: InmeceState,
    togen_proj: Linear,
    
    // Feedback / Learning
    pub last_prediction: Option<Tensor>,
    pub surprise_history: Vec<f32>,
}

impl InmeceModel {
    pub fn new(cfg: &InmeceConfig, vb: VarBuilder) -> Result<Self> {
        let embedding = candle_nn::embedding(cfg.vocab_size, cfg.d_model, vb.pp("embedding"))?;
        
        let mut layers = Vec::new();
        for i in 0..cfg.n_layers {
            layers.push(MambaBlock::new(cfg, vb.pp(format!("layers.{}", i)))?);
        }

        let norm_f = RMSNorm::new(cfg.d_model, 1e-5, vb.pp("norm_f"))?;
        let lm_head = linear(cfg.d_model, cfg.vocab_size, vb.pp("lm_head"))?;

        let d_inner = cfg.d_model * cfg.expand;
        let state = InmeceState::new(cfg.n_layers, d_inner, cfg.d_state, cfg.d_conv, vb.device())?;
        let togen_proj = linear(4, cfg.d_model, vb.pp("togen_proj"))?;

        Ok(Self {
            embedding,
            layers,
            norm_f,
            lm_head,
            state,
            togen_proj,
            last_prediction: None,
            surprise_history: Vec::new(),
        })
    }

    pub fn integrate_atom(&mut self, atom: &ToGen) -> Result<Vec<f32>> {
        // 1. Convert ToGen to Tensor
        let v0 = (atom.raw() & 0xFFFFFFFF) as f32;
        let v1 = ((atom.raw() >> 32) & 0xFFFFFFFF) as f32;
        let v2 = ((atom.raw() >> 64) & 0xFFFFFFFF) as f32;
        let v3 = ((atom.raw() >> 96) & 0xFFFFFFFF) as f32;
        
        let input = Tensor::new(&[[v0, v1, v2, v3]], &self.norm_f.weight.device())?; // [1, 4]
        let x = self.togen_proj.forward(&input)?; // [1, d_model]
        
        // 1.5 Calculate Surprise (Prediction Error)
        if let Some(last_pred) = &self.last_prediction {
            let diff = (last_pred - &x)?;
            let surprise = diff.sqr()?.sum_all()?.to_scalar::<f32>()?;
            self.surprise_history.push(surprise);
        }

        // 2. Run Mamba Step for each layer
        let mut current_x = x.clone();
        
        for (i, _layer) in self.layers.iter().enumerate() {
            let (h, _conv_buf) = &mut self.state.layers[i];
            // Dummy step: just add to state to simulate integration
            *h = (h.clone() + 1.0)?;
        }
        
        // 3. Output & Prediction for next step
        let out = self.norm_f.forward(&current_x)?;
        
        self.last_prediction = Some(out.clone());
        
        let out_vec = out.squeeze(0)?.to_vec1::<f32>()?;
        Ok(out_vec)
    }
    
    // Primitive communication: Generate a sound/token based on current state
    pub fn vocalize(&self) -> Result<u32> {
        if let Some(pred) = &self.last_prediction {
            let logits = self.lm_head.forward(pred)?;
            let token = logits.argmax(1)?.to_scalar::<u32>()?;
            Ok(token)
        } else {
            Ok(0) // Silence
        }
    }
}
