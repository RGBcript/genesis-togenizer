use curo::{CuroConfig, CuroModel};
use candle_core::{Device, Tensor, DType};
use candle_nn::VarBuilder;

fn main() -> anyhow::Result<()> {
    println!("🧠 Curo: Iniciando proceso de pensamiento (Inferencia)...");
    println!("---------------------------------------------------------");
    
    // 1. Configuración (Biología digital)
    let config = CuroConfig::default();
    let device = Device::Cpu;
    
    // 2. Inicializar Cerebro (Pesos en Cero - Tabula Rasa)
    // En el futuro, aquí cargaremos el "genoma" entrenado.
    // Usamos ceros para verificar que la estructura matemática es estable.
    let vb = VarBuilder::zeros(DType::F32, &device);
    let model = CuroModel::new(&config, vb)?;

    println!("✅ Modelo Mamba-3 (SSM) inicializado.");
    println!("   - Capas (Profundidad): {}", config.n_layers);
    println!("   - Estado Oculto (Memoria Recurrente): {}", config.d_state);
    println!("   - Dimensión del Modelo: {}", config.d_model);

    // 3. Estímulo (Input)
    // Simulamos una secuencia de 'tokens' (conceptos) que entran al cerebro
    // Digamos que [1, 5, 10, 50] representa "Hola mundo soy Genesis"
    let input_ids = Tensor::new(&[[1u32, 5, 10, 50]], &device)?;
    println!("\n👁️  Percibiendo estímulo (Tokens): [1, 5, 10, 50]");

    // 4. Pensamiento (Forward Pass con Selective Scan)
    // Aquí es donde ocurre la magia: el Selective Scan comprime el pasado en el estado 'h'
    let start = std::time::Instant::now();
    let logits = model.forward(&input_ids)?;
    let duration = start.elapsed();

    println!("⚡ Pensamiento completado en {:?}", duration);
    println!("   - Forma del pensamiento (Batch, Seq, Vocab): {:?}", logits.dims());

    // 5. Decisión (Output)
    // Tomamos la predicción para el siguiente instante
    let (_b, seq_len, _vocab) = logits.dims3()?;
    let last_token_logits = logits.get(0)?.get(seq_len - 1)?;
    let next_token = last_token_logits.argmax(0)?;
    
    println!("🗣️  Respuesta generada (Token ID): {}", next_token);
    
    println!("\n---------------------------------------------------------");
    println!("CONCLUSIÓN:");
    println!("El flujo de 'pensamiento' funciona. La señal entró, fue procesada por");
    println!("el Selective Scan (comprimiendo el contexto) y generó una salida.");
    println!("Ahora solo falta que 'aprenda' (entrenamiento) para que esa salida tenga sentido.");

    Ok(())
}
