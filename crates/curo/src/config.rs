use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CuroConfig {
    pub d_model: usize,
    pub n_layers: usize,
    pub vocab_size: usize,
    pub d_state: usize, // SSM state dimension (N)
    pub d_conv: usize,  // Convolution kernel size
    pub expand: usize,  // Expansion factor (E)
    pub dt_rank: usize, // Delta rank (rank of dt projection)
    pub d_inner: usize, // Inner dimension (d_model * expand)
}

impl Default for CuroConfig {
    fn default() -> Self {
        let d_model = 256;
        let expand = 2;
        Self {
            d_model,
            n_layers: 4,
            vocab_size: 1000,
            d_state: 16,
            d_conv: 4,
            expand,
            dt_rank: (d_model + 15) / 16, // Typically d_model / 16
            d_inner: d_model * expand,
        }
    }
}
