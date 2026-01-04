pub mod config;
pub mod model;
pub mod fusion;

pub use config::CuroConfig;
pub use model::CuroModel;
pub use fusion::UnifiedEmbeddingSpace;

#[cfg(test)]
mod tests {
    use super::*;
    use candle_core::{Device, Tensor};
    use candle_nn::VarBuilder;

    #[test]
    fn test_curo_init() {
        let config = CuroConfig::default();
        let device = Device::Cpu;
        let vb = VarBuilder::zeros(candle_core::DType::F32, &device);
        let model = CuroModel::new(&config, vb).unwrap();
        
        // Test forward pass with dummy input
        let input_ids = Tensor::zeros((1, 10), candle_core::DType::U32, &device).unwrap();
        let output = model.forward(&input_ids).unwrap();
        
        assert_eq!(output.dims(), &[1, 10, config.vocab_size]);
    }
}


