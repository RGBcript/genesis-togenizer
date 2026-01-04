use ort::session::{Session, builder::GraphOptimizationLevel, builder::SessionBuilder};
use ort::value::Value;
use ndarray::Array4;
use togen::ToGen;

pub struct MateriaDecoder {
    session: Session,
}

impl MateriaDecoder {
    pub fn new(model_path: &str) -> Result<Self, Box<dyn std::error::Error>> {
        // ort::init() is global, usually called once. 
        // If called multiple times it might error or be ignored.
        // We'll assume it's already initialized or try to init and ignore error.
        let _ = ort::init()
            .with_name("MateriaDecoder")
            .commit();

        let session = SessionBuilder::new()?
            .with_optimization_level(GraphOptimizationLevel::Level3)?
            .with_intra_threads(1)?
            .commit_from_file(model_path)?;

        Ok(Self { session })
    }

    /// Decodes a single Togen into an Image
    /// Input: ToGen
    /// Output: [1, 3, 64, 64] float array (image)
    pub fn decode(&mut self, togen: &ToGen) -> Result<Array4<f32>, Box<dyn std::error::Error>> {
        // 1. Extract Bits
        let quantized = togen.get_quantized_materia();
        
        // Convert u64 bits to float vector [1, 48]
        // The model expects floats 0.0 or 1.0
        let mut input_vec = Vec::with_capacity(48);
        for i in 0..48 {
            if (quantized >> i) & 1 == 1 {
                input_vec.push(1.0f32);
            } else {
                input_vec.push(0.0f32);
            }
        }
        
        let input_shape = vec![1, 48];
        let input_value = Value::from_array((input_shape, input_vec))?;
        
        // 2. Run Inference
        let outputs = self.session.run(ort::inputs![input_value])?;
        
        // 3. Extract Output
        let (shape, data) = outputs["reconstructed_image"].try_extract_tensor::<f32>()?;
        
        // Shape should be [1, 3, 64, 64]
        let output_array = Array4::from_shape_vec(
            (shape[0] as usize, shape[1] as usize, shape[2] as usize, shape[3] as usize),
            data.to_vec()
        )?;
        
        Ok(output_array)
    }
}
