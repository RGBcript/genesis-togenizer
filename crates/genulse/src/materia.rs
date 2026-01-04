use ort::session::{Session, builder::GraphOptimizationLevel, builder::SessionBuilder};
use ort::value::Value;
use ndarray::{Array4};
use togen::ToGen;

pub struct MateriaEncoder {
    session: Session,
}

impl MateriaEncoder {
    pub fn new(model_path: &str) -> Result<Self, Box<dyn std::error::Error>> {
        // ort 2.0: Environment is created via init()
        ort::init()
            .with_name("MateriaEncoder")
            .commit()?;

        // SessionBuilder::new() takes no arguments in 2.0
        // Use commit_from_file instead of with_model_from_file
        let session = SessionBuilder::new()?
            .with_optimization_level(GraphOptimizationLevel::Level3)?
            .with_intra_threads(1)?
            .commit_from_file(model_path)?;

        Ok(Self { session })
    }

    /// Encodes a batch of images into Materia Togens
    /// Input: [Batch, 3, 64, 64] normalized float array
    pub fn encode(&mut self, input_tensor: Array4<f32>) -> Result<Vec<ToGen>, Box<dyn std::error::Error>> {
        // 1. Prepare Input
        // ort 2.0: Value::from_array works with ndarray::Array
        // We need to pass the array directly, but ort expects OwnedTensorArrayData
        // ndarray::Array implements this, but maybe there's a version mismatch or trait bound issue.
        // Let's try converting to a standard Vec or slice if direct array fails, 
        // but usually Array4<f32> should work.
        // The error says: `ArrayBase<OwnedRepr<f32>, Dim<[usize; 4]>>: OwnedTensorArrayData<_>` is not satisfied
        // This often happens if `ndarray` version in `ort` differs from the one in `Cargo.toml`.
        // Let's try creating the tensor from raw data and shape to be safe.
        
        let shape = input_tensor.shape();
        let shape_vec: Vec<i64> = shape.iter().map(|&x| x as i64).collect();
        // We need to clone the data into a Vec because from_array expects ownership for (Shape, Vec)
        let data_vec: Vec<f32> = input_tensor.as_slice().ok_or("Input tensor is not contiguous")?.to_vec();
        
        let input_value = Value::from_array((shape_vec, data_vec))?;
        
        // 2. Run Inference
        // Inputs: "input_image"
        // Outputs: "togen_bits", "raw_physics"
        // ort::inputs! macro returns a collection that can be passed to run
        let outputs = self.session.run(ort::inputs![input_value])?;
        
        // 3. Extract Outputs
        // try_extract_tensor returns a tuple (shape, data_slice)
        let (bits_shape, bits_data) = outputs["togen_bits"].try_extract_tensor::<f32>()?;
        let (raw_shape, raw_data) = outputs["raw_physics"].try_extract_tensor::<f32>()?;
        
        // Reconstruct ndarray views from the raw data
        // We know the shape is [Batch, 48]
        let batch_size = bits_shape[0] as usize;
        let bits_dim = bits_shape[1] as usize;
        let raw_dim = raw_shape[1] as usize;

        // Create views manually since we have flat slices
        let bits_view = ndarray::ArrayView2::from_shape((batch_size, bits_dim), bits_data)?;
        let raw_view = ndarray::ArrayView2::from_shape((batch_size, raw_dim), raw_data)?;
        
        let mut togens = Vec::new();
        
        // Iterate over batch
        for i in 0..batch_size {
            // Extract 48 bits (they come as floats 0.0 or 1.0)
            let bits_slice = bits_view.slice(ndarray::s![i, ..]);
            let mut quantized_u64: u64 = 0;
            
            for (idx, &val) in bits_slice.iter().enumerate() {
                if val > 0.5 {
                    quantized_u64 |= 1 << idx;
                }
            }
            
            // Extract raw physics
            let raw_slice = raw_view.slice(ndarray::s![i, ..]);
            let mut raw_u64: u64 = 0;
            for (idx, &val) in raw_slice.iter().enumerate() {
                let bits = val.to_bits() as u64;
                raw_u64 ^= bits.rotate_left(idx as u32);
            }
            
            togens.push(ToGen::new_materia(quantized_u64, raw_u64));
        }
        
        Ok(togens)
    }
}
