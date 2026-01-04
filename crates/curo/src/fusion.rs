use anyhow::Result;
use ort::session::{Session, builder::GraphOptimizationLevel};
use ort::value::Value;
use ndarray::Array2;

pub struct UnifiedEmbeddingSpace {
    session: Session,
}

impl UnifiedEmbeddingSpace {
    pub fn new(model_path: &str) -> Result<Self> {
        let session = Session::builder()?
            .with_optimization_level(GraphOptimizationLevel::Level3)?
            .with_intra_threads(4)?
            .commit_from_file(model_path)?;

        Ok(Self { session })
    }

    /// Realiza la fusión multimodal de visión y texto.
    /// Retorna (fused_embedding, proj_vis, proj_txt)
    pub fn fuse(&mut self, z_vis: &[f32], z_txt: &[f32]) -> Result<(Vec<f32>, Vec<f32>, Vec<f32>)> {
        // Validar dimensiones
        if z_vis.len() != 48 {
            return Err(anyhow::anyhow!("z_vis debe tener 48 dimensiones, tiene {}", z_vis.len()));
        }
        if z_txt.len() != 768 {
            return Err(anyhow::anyhow!("z_txt debe tener 768 dimensiones, tiene {}", z_txt.len()));
        }

        // Preparar inputs (Batch size 1)
        let z_vis_array = Array2::from_shape_vec((1, 48), z_vis.to_vec())?;
        let z_txt_array = Array2::from_shape_vec((1, 768), z_txt.to_vec())?;

        let z_vis_val = Value::from_array(z_vis_array)?;
        let z_txt_val = Value::from_array(z_txt_array)?;

        // Ejecutar inferencia
        let outputs = self.session.run(ort::inputs![
            "z_vis" => z_vis_val,
            "z_txt" => z_txt_val,
        ])?;

        // Extraer outputs
        let fused = outputs["fused_embedding"]
            .try_extract_tensor::<f32>()?
            .1
            .to_vec();

        let proj_vis = outputs["proj_vis"]
            .try_extract_tensor::<f32>()?
            .1
            .to_vec();

        let proj_txt = outputs["proj_txt"]
            .try_extract_tensor::<f32>()?
            .1
            .to_vec();

        Ok((fused, proj_vis, proj_txt))
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::path::PathBuf;

    #[test]
    fn test_binding_layer_loading_and_inference() -> Result<()> {
        // Localizar el modelo relativo al workspace
        let mut model_path = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
        model_path.push("../../assets/models/binding_layer.onnx");

        if !model_path.exists() {
            println!("⚠️ Modelo no encontrado en {:?}, saltando test.", model_path);
            return Ok(());
        }

        let mut fusion_layer = UnifiedEmbeddingSpace::new(model_path.to_str().unwrap())?;

        // Dummy inputs
        let z_vis = vec![0.0f32; 48];
        let z_txt = vec![0.0f32; 768];

        let (fused, p_vis, p_txt) = fusion_layer.fuse(&z_vis, &z_txt)?;

        println!("Fused dim: {}", fused.len());
        println!("Proj Vis dim: {}", p_vis.len());
        println!("Proj Txt dim: {}", p_txt.len());

        assert_eq!(fused.len(), 256);
        assert_eq!(p_vis.len(), 256);
        assert_eq!(p_txt.len(), 256);

        Ok(())
    }
}
