use wasm_bindgen::prelude::*;
use std::fmt;

/// Dual-TOGEN Protocol Implementation
/// 
/// Structure:
/// - 128 bits total container
/// - Header (8 bits): Type identification
/// - Payload: Variable structure based on type
#[wasm_bindgen]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct ToGen(u128);

#[wasm_bindgen]
impl ToGen {
    // ==========================================
    // CONSTANTS & MASKS
    // ==========================================
    
    // Header: Bits 120-127 (8 bits)
    // pub const HEADER_OFFSET: u32 = 120;
    // pub const HEADER_MASK: u128 = 0xFF << 120;
    
    // Types (Top 2 bits of header)
    // pub const TYPE_MATERIA: u8 = 0b01;    // 01XXXXXX
    // pub const TYPE_NOMATERIA: u8 = 0b10;  // 10XXXXXX

    // MATERIA LAYOUT (104 bits used)
    // [Header: 8] [Quantized: 48] [Raw: 48] [Padding: 24]
    // Quantized: Bits 72-119 (48 bits)
    // Raw Data: Bits 24-71 (48 bits)
    //   - Space: 16 bits
    //   - Temp: 16 bits
    //   - Force: 16 bits (truncated from 32 for symmetry in raw, or full in quantized)
    
    // NO-MATERIA LAYOUT (120 bits used)
    // [Header: 8] [Quantized: 56] [Raw: 56] [Padding: 8]
    
    #[wasm_bindgen(constructor)]
    pub fn new_empty() -> Self {
        ToGen(0)
    }

    /// Creates a MATERIA Togen (Physical/Topological)
    /// 
    /// components:
    /// - quantized (48 bits): The learned discrete representation
    /// - raw_data (48 bits): The continuous data for reconstruction (Space + Temp + Force)
    #[wasm_bindgen]
    pub fn new_materia(quantized: u64, raw_data: u64) -> Self {
        let mut bits: u128 = 0;
        
        // 1. Set Header (01000000)
        let header = (0b01 as u128) << 6; // Shift to top of 8-bit header
        bits |= header << 120;
        
        // 2. Set Quantized Data (48 bits)
        // Placed at bits 72-119
        bits |= ((quantized as u128) & 0xFFFFFFFFFFFF) << 72;
        
        // 3. Set Raw Data (48 bits)
        // Placed at bits 24-71
        bits |= ((raw_data as u128) & 0xFFFFFFFFFFFF) << 24;
        
        ToGen(bits)
    }

    /// Creates a NO-MATERIA Togen (Abstract/Semantic)
    /// 
    /// components:
    /// - quantized (56 bits): The learned discrete representation
    /// - raw_data (56 bits): The continuous data (Semantic + Abstract)
    #[wasm_bindgen]
    pub fn new_nomateria(quantized: u64, raw_data: u64) -> Self {
        let mut bits: u128 = 0;
        
        // 1. Set Header (10000000)
        let header = (0b10 as u128) << 6;
        bits |= header << 120;
        
        // 2. Set Quantized Data (56 bits)
        // Placed at bits 64-119
        bits |= ((quantized as u128) & 0xFFFFFFFFFFFFFF) << 64;
        
        // 3. Set Raw Data (56 bits)
        // Placed at bits 8-63
        bits |= ((raw_data as u128) & 0xFFFFFFFFFFFFFF) << 8;
        
        ToGen(bits)
    }

    #[wasm_bindgen]
    pub fn to_hex(&self) -> String {
        format!("{:032x}", self.0)
    }

    #[wasm_bindgen]
    pub fn get_type(&self) -> String {
        let header = (self.0 >> 120) as u8;
        let type_id = header >> 6;
        match type_id {
            0b01 => "MATERIA".to_string(),
            0b10 => "NO_MATERIA".to_string(),
            _ => "UNKNOWN".to_string(),
        }
    }

    pub fn get_quantized_materia(&self) -> u64 {
        // Quantized: Bits 72-119 (48 bits)
        ((self.0 >> 72) & 0xFFFFFFFFFFFF) as u64
    }
    
    /// Gets the raw data field (48 bits) for MATERIA type
    pub fn get_raw_materia(&self) -> u64 {
        // Raw: Bits 24-71 (48 bits)
        ((self.0 >> 24) & 0xFFFFFFFFFFFF) as u64
    }
    
    // ==========================================
    // SUB-ATOMIC FIELD ACCESSORS (MATERIA)
    // Layout: [Space: 16] [Time: 16] [Force: 16]
    // Within raw data bits 24-71
    // ==========================================
    
    /// Gets the Space component (16 bits) - Spatial position/features
    /// Bits 24-39 of the ToGen
    #[wasm_bindgen]
    pub fn get_space(&self) -> u16 {
        ((self.0 >> 24) & 0xFFFF) as u16
    }
    
    /// Gets the Time component (16 bits) - Temporal context
    /// Bits 40-55 of the ToGen
    #[wasm_bindgen]
    pub fn get_time(&self) -> u16 {
        ((self.0 >> 40) & 0xFFFF) as u16
    }
    
    /// Gets the Force component (16 bits) - Intensity/Energy
    /// Bits 56-71 of the ToGen
    #[wasm_bindgen]
    pub fn get_force(&self) -> u16 {
        ((self.0 >> 56) & 0xFFFF) as u16
    }
    
    /// Creates a new ToGen with modified Space field
    #[wasm_bindgen]
    pub fn with_space(&self, space: u16) -> Self {
        let mut bits = self.0;
        // Clear existing space bits (24-39)
        bits &= !(0xFFFF_u128 << 24);
        // Set new space value
        bits |= (space as u128) << 24;
        ToGen(bits)
    }
    
    /// Creates a new ToGen with modified Time field
    #[wasm_bindgen]
    pub fn with_time(&self, time: u16) -> Self {
        let mut bits = self.0;
        // Clear existing time bits (40-55)
        bits &= !(0xFFFF_u128 << 40);
        // Set new time value
        bits |= (time as u128) << 40;
        ToGen(bits)
    }
    
    /// Creates a new ToGen with modified Force field
    #[wasm_bindgen]
    pub fn with_force(&self, force: u16) -> Self {
        let mut bits = self.0;
        // Clear existing force bits (56-71)
        bits &= !(0xFFFF_u128 << 56);
        // Set new force value
        bits |= (force as u128) << 56;
        ToGen(bits)
    }
    
    /// Creates a MATERIA ToGen from individual sub-atomic components
    #[wasm_bindgen]
    pub fn from_components(quantized: u64, space: u16, time: u16, force: u16) -> Self {
        let raw_data = (space as u64) | ((time as u64) << 16) | ((force as u64) << 32);
        Self::new_materia(quantized, raw_data)
    }
    
    // Helper to inspect raw bits for debugging
    pub fn raw(&self) -> u128 {
        self.0
    }
}

// Rust-only implementation for Tests and Backend
impl ToGen {
    /// Creates a Togen from text string (Mock implementation for tests)
    pub fn new(text: &str) -> Self {
        // FNV-1a hash implementation for determinism
        let mut h: u64 = 0xcbf29ce484222325;
        for byte in text.bytes() {
            h = h ^ (byte as u64);
            h = h.wrapping_mul(0x1099511628211909);
        }
        
        // Split hash into semantic and structural (mock)
        let semantico = (h >> 32) as u32;
        let estructural = h as u32;
        
        let mut bits: u128 = 0;
        // Header for Text (0x01) - Using NoMateria type (0b10) for abstract concepts like text
        let header = (0b10 as u128) << 6;
        bits |= header << 120;
        
        // Store Semantic in Quantized (bits 64-119)
        bits |= (semantico as u128) << 64;
        
        // Store Structural in Raw (bits 8-63)
        bits |= (estructural as u128) << 8;
        
        ToGen(bits)
    }

    pub fn get_semantico(&self) -> u32 {
        ((self.0 >> 64) & 0xFFFFFFFF) as u32
    }

    pub fn get_estructural(&self) -> u32 {
        ((self.0 >> 8) & 0xFFFFFFFF) as u32
    }
}

impl fmt::Display for ToGen {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "ToGen(0x{:032x})", self.0)
    }
}
