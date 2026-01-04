use genulse::{GpuVisualCortex, MateriaDecoder};
use std::path::Path;

#[tokio::main]
async fn main() {
    println!("🧠 INICIANDO GENESIS SYSTEM v2.0 (Dual-TOGEN Test)...");

    // 1. Verificar Modelos ONNX
    let encoder_path = "assets/models/materia_encoder.onnx";
    let decoder_path = "assets/models/materia_decoder.onnx";
    
    if !Path::new(encoder_path).exists() {
        println!("❌ ERROR CRÍTICO: No se encuentra '{}'.", encoder_path);
        return;
    }
    if !Path::new(decoder_path).exists() {
        println!("❌ ERROR CRÍTICO: No se encuentra '{}'.", decoder_path);
        return;
    }

    // 2. Inicializar Cortex Visual (GPU + Neural)
    println!("👁️  Inicializando GpuVisualCortex...");
    let cortex = GpuVisualCortex::new().await;
    
    // Inicializar Imaginarium (Decoder)
    println!("💭 Inicializando Imaginarium (Decoder)...");
    let mut decoder = match MateriaDecoder::new(decoder_path) {
        Ok(d) => {
            println!("✅ MateriaDecoder cargado correctamente.");
            Some(d)
        },
        Err(e) => {
            println!("⚠️ Error cargando decoder: {}", e);
            None
        }
    };

    match cortex {
        Some(mut ctx) => {
            println!("✅ Cortex Visual inicializado correctamente.");
            
            // 3. Simular Percepción
            println!("📸 Capturando estímulo visual simulado...");
            // Creamos un buffer dummy de imagen (64x64 RGB)
            let dummy_image = vec![0u8; 64 * 64 * 3]; 
            
            if let Some(togen) = ctx.perceive(&dummy_image, 64, 64) {
                println!("✨ ¡PERCEPCIÓN EXITOSA!");
                println!("   Togen Generado: {}", togen.to_hex());
                println!("   Tipo: {}", togen.get_type());
                println!("   Raw Bits: {:032b}", togen.raw());
                
                // 4. Simular Imaginación (Reconstrucción)
                if let Some(dec) = &mut decoder {
                    println!("🎨 Imaginando (Reconstruyendo desde Togen)...");
                    match dec.decode(&togen) {
                        Ok(image) => {
                            println!("✨ ¡IMAGINACIÓN EXITOSA!");
                            println!("   Imagen reconstruida: {:?}", image.shape());
                            // Podríamos guardar la imagen aquí si tuviéramos crate image
                        },
                        Err(e) => println!("❌ Fallo al imaginar: {}", e),
                    }
                }
                
            } else {
                println!("⚠️ El cortex no generó percepción (¿Fallo en inferencia?)");
            }
        },
        None => {
            println!("❌ Fallo al inicializar GPU/Cortex. ¿Tienes drivers de Vulkan/DX12?");
        }
    }
}
