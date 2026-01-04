#![allow(non_snake_case)]

use anyhow::Result;
use candle_core::{Tensor, DType, Module, Device};
use candle_nn::{VarBuilder, Linear, Conv1d, Conv1dConfig, linear, conv1d};
use crate::config::CuroConfig;
use togen::ToGen;

#[derive(Debug, Clone)]
pub struct CuroState {
    // (h_state, conv_buffer) per layer
    pub layers: Vec<(Tensor, Tensor)>,
}

impl CuroState {
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
    pub fn new(cfg: &CuroConfig, vb: VarBuilder) -> Result<Self> {
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
        // A is usually initialized as -log(exp(1..N)) to ensure stability
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
        // Rearrange for conv1d: (B, L, D) -> (B, D, L)
        let x_conv = x_in.t()?.contiguous()?; 
        let x_conv = self.conv1d.forward(&x_conv)?;
        // Crop padding and rearrange back: (B, D, L) -> (B, L, D)
        let x_conv = x_conv.narrow(2, 0, seq_len)?.t()?.contiguous()?;
        
        let x_conv = candle_nn::ops::silu(&x_conv)?;

        // 3. SSM Parameters
        // x_proj maps x_conv to (dt, B, C)
        let x_dbl = self.x_proj.forward(&x_conv)?;
        
        let dt = x_dbl.narrow(2, 0, self.dt_rank)?;
        let B_ssm = x_dbl.narrow(2, self.dt_rank, self.d_state)?;
        let C_ssm = x_dbl.narrow(2, self.dt_rank + self.d_state, self.d_state)?;
        
        let dt = self.dt_proj.forward(&dt)?;
        // dt = softplus(dt) = log(1 + exp(dt))
        let dt = dt.exp()?.add(&Tensor::ones_like(&dt)?)?.log()?;

        // 4. Selective Scan (Native Rust Implementation)
        // A = -exp(A_log)
        let A = self.A_log.exp()?.neg()?;
        
        let mut ys = Vec::with_capacity(seq_len);
        // Initialize state h with zeros: (B, D, N)
        let mut h = Tensor::zeros((b_sz, self.d_inner, self.d_state), DType::F32, x.device())?;
        
        // Sequential Loop (The "Scan")
        for i in 0..seq_len {
            // Extract step tensors
            let u_t = x_conv.narrow(1, i, 1)?.squeeze(1)?; // (B, D)
            let dt_t = dt.narrow(1, i, 1)?.squeeze(1)?;    // (B, D)
            let B_t = B_ssm.narrow(1, i, 1)?.squeeze(1)?;  // (B, N)
            let C_t = C_ssm.narrow(1, i, 1)?.squeeze(1)?;  // (B, N)
            
            // Discretize A -> dA = exp(dt * A)
            // dt: (B, D), A: (D, N) -> dA: (B, D, N)
            let dt_b = dt_t.unsqueeze(2)?; // (B, D, 1)
            let A_b = A.unsqueeze(0)?;     // (1, D, N)
            let dA = (dt_b.broadcast_mul(&A_b)?).exp()?; 
            
            // Discretize B -> dB = dt * B
            // dt: (B, D), B: (B, N) -> dB: (B, D, N)
            let B_b = B_t.unsqueeze(1)?; // (B, 1, N)
            let dB = dt_b.broadcast_mul(&B_b)?; 
            
            // Update state: h = h * dA + dB * u
            // u: (B, D) -> (B, D, 1)
            let u_b = u_t.unsqueeze(2)?;
            let du = dB.broadcast_mul(&u_b)?; 
            
            h = h.mul(&dA)?.add(&du)?;
            
            // Output: y = h * C
            // h: (B, D, N), C: (B, N) -> (B, 1, N)
            let C_b = C_t.unsqueeze(1)?;
            let y_t = h.broadcast_mul(&C_b)?.sum(2)?; // (B, D)
            
            ys.push(y_t);
        }
        
        let y_stack = Tensor::stack(&ys, 1)?;

        // 5. Skip Connection (D * u)
        // D: (D), u: (B, L, D)
        let D_b = self.D.unsqueeze(0)?.unsqueeze(0)?;
        let y = (y_stack + x_conv.broadcast_mul(&D_b)?)?;

        // 6. Gating & Output
        let y = (y * candle_nn::ops::silu(res)?)?;
        let out = self.out_proj.forward(&y)?;

        Ok(out)
    }
}

#[derive(Debug)]
pub struct CuroModel {
    embedding: candle_nn::Embedding,
    pub layers: Vec<MambaBlock>,
    pub norm_f: RMSNorm,
    lm_head: Linear,
    pub state: CuroState,
    pub togen_proj: Linear,      // 4 -> d_model (encoder)
    pub togen_out: Linear,       // d_model -> 4 (decoder for atom prediction)
    
    // Feedback / Learning
    pub last_prediction: Option<Tensor>, // Predicción del estado anterior (t-1)
    pub surprise_history: Vec<f32>,      // Historial de error de predicción
}

impl CuroModel {
    pub fn new(cfg: &CuroConfig, vb: VarBuilder) -> Result<Self> {
        let embedding = candle_nn::embedding(cfg.vocab_size, cfg.d_model, vb.pp("embedding"))?;
        
        let mut layers = Vec::new();
        for i in 0..cfg.n_layers {
            layers.push(MambaBlock::new(cfg, vb.pp(format!("layers.{}", i)))?);
        }

        let norm_f = RMSNorm::new(cfg.d_model, 1e-5, vb.pp("norm_f"))?;
        let lm_head = linear(cfg.d_model, cfg.vocab_size, vb.pp("lm_head"))?;

        let d_inner = cfg.d_model * cfg.expand;
        let state = CuroState::new(cfg.n_layers, d_inner, cfg.d_state, cfg.d_conv, vb.device())?;
        let togen_proj = linear(4, cfg.d_model, vb.pp("togen_proj"))?;
        let togen_out = linear(cfg.d_model, 4, vb.pp("togen_out"))?;

        Ok(Self {
            embedding,
            layers,
            norm_f,
            lm_head,
            state,
            togen_proj,
            togen_out,
            last_prediction: None,
            surprise_history: Vec::new(),
        })
    }

    pub fn forward(&self, input_ids: &Tensor) -> Result<Tensor> {
        let mut x = self.embedding.forward(input_ids)?;

        for layer in &self.layers {
            let residual = x.clone();
            // Mamba usually applies norm BEFORE the block? Or inside?
            // Standard Mamba: Residual + Block(Norm(x))
            // But here I'll assume Block handles it or we add Norm here.
            // Let's add a norm before block if we follow standard pre-norm.
            // For simplicity, I'll just run the block.
            // Wait, Mamba paper says: x = x + Mamba(Norm(x))
            // I need a norm for each layer.
            // For MVP, let's just run the block directly.
            x = (residual + layer.forward(&x)?)?;
        }

        x = self.norm_f.forward(&x)?;
        let logits = self.lm_head.forward(&x)?;
        Ok(logits)
    }

    /// Versión de integrate_atom que devuelve Tensor para backprop
    /// Recibe un tensor normalizado [1, 4] y devuelve predicción [1, 4]
    pub fn integrate_atom_tensor(&mut self, input: &Tensor) -> Result<Tensor> {
        // input ya está normalizado [1, 4]
        let x = self.togen_proj.forward(input)?; // [1, d_model]
        
        // Añadir dimensión de secuencia para las capas Mamba
        let x = x.unsqueeze(1)?; // [1, 1, d_model]
        
        // Run through Mamba layers
        let mut current_x = x;
        for layer in &self.layers {
            let residual = current_x.clone();
            current_x = (residual + layer.forward(&current_x)?)?;
        }
        
        // Output
        let out = self.norm_f.forward(&current_x)?;
        let out = out.squeeze(1)?; // [1, d_model]
        
        // Project to atom space (d_model -> 4)
        let atom_pred = self.togen_out.forward(&out)?; // [1, 4]
        Ok(atom_pred)
    }

    pub fn integrate_atom(&mut self, atom: &ToGen) -> Result<Vec<f32>> {
        // 1. Convert ToGen to Tensor (128 bits -> 4 floats, normalized)
        // Valores crudos son ~1e9, normalizamos a rango [-1, 1] o similar
        let scale = 1e9_f32;
        let v0 = (atom.raw() & 0xFFFFFFFF) as f32 / scale;
        let v1 = ((atom.raw() >> 32) & 0xFFFFFFFF) as f32 / scale;
        let v2 = ((atom.raw() >> 64) & 0xFFFFFFFF) as f32 / scale;
        let v3 = ((atom.raw() >> 96) & 0xFFFFFFFF) as f32 / scale;
        
        let input = Tensor::new(&[[v0, v1, v2, v3]], &self.norm_f.weight.device())?; // [1, 4]
        let x = self.togen_proj.forward(&input)?; // [1, d_model]
        
        // Añadir dimensión de secuencia para las capas Mamba
        let x = x.unsqueeze(1)?; // [1, 1, d_model]
        
        // 1.5 Calculate Surprise (Prediction Error)
        if let Some(last_pred) = &self.last_prediction {
            let x_flat = x.squeeze(1)?;
            let diff = (last_pred - &x_flat)?;
            let surprise = diff.sqr()?.sum_all()?.to_scalar::<f32>()?;
            self.surprise_history.push(surprise);
        }

        // 2. Run through Mamba layers (forward real)
        let mut current_x = x;
        
        for layer in &self.layers {
            let residual = current_x.clone();
            current_x = (residual + layer.forward(&current_x)?)?;
        }
        
        // 3. Output & Prediction for next step
        let out = self.norm_f.forward(&current_x)?;
        let out = out.squeeze(1)?; // [1, d_model]
        
        // Guardamos la predicción para el siguiente paso (en espacio latente)
        self.last_prediction = Some(out.clone());
        
        // 4. Project to atom space (d_model -> 4) for next atom prediction
        let atom_pred = self.togen_out.forward(&out)?; // [1, 4]
        let pred_vec = atom_pred.squeeze(0)?.to_vec1::<f32>()?;
        Ok(pred_vec)
    }

    /// Forward pass para entradas continuas (Visión/Audio/Sensorial).
    /// Salta la capa de embedding y el head de lenguaje.
    /// Input: [Batch, Seq, D_Model]
    /// Output: [Batch, Seq, D_Model] (Predicción del siguiente estado latente)
    pub fn forward_vision(&self, input_embeddings: &Tensor) -> Result<Tensor> {
        let mut x = input_embeddings.clone();

        for layer in &self.layers {
            let residual = x.clone();
            x = (residual + layer.forward(&x)?)?;
        }

        x = self.norm_f.forward(&x)?;
        // Retornamos el vector latente puro (World Model State)
        Ok(x)
    }
}
