use curo::{CuroConfig, CuroModel};
use candle_core::{DType, Device, Tensor, Module};
use candle_nn::{VarBuilder, VarMap, Optimizer};
use std::path::Path;

fn main() -> anyhow::Result<()> {
    println!("👁️ Curo Vision: Entrenando con VIDEO REAL (Big Buck Bunny)...");
    println!("-----------------------------------------------------------");
    
    let device = Device::Cpu;
    
    // 1. Cargar Datos Reales
    // Buscamos el archivo en varias rutas posibles
    let possible_paths = [
        "training/data/vision_data.safetensors",
        "../training/data/vision_data.safetensors",
        "../../training/data/vision_data.safetensors"
    ];
    
    let mut loaded_tensors = None;
    for p in possible_paths {
        if Path::new(p).exists() {
            println!("📂 Cargando datos desde: {}", p);
            loaded_tensors = Some(candle_core::safetensors::load(p, &device)?);
            break;
        }
    }
    
    let tensors = loaded_tensors.expect("❌ No se encontró vision_data.safetensors. Ejecuta prepare_dataset.py primero.");
    let full_sequence = tensors.get("vision_sequence").expect("❌ El archivo no contiene 'vision_sequence'");
    
    // Intentar cargar mean/std si existen (para pasarlos al sueño)
    let mean_tensor = tensors.get("mean").cloned();
    let std_tensor = tensors.get("std").cloned();

    // Shape: (1, 1000, 48)
    let (_b, total_frames, d_model_real) = full_sequence.dims3()?;
    println!("   - Frames Totales: {}", total_frames);
    println!("   - Dimensión Latente: {}", d_model_real);

    // 2. Configurar Modelo
    let mut config = CuroConfig::default();
    config.d_model = d_model_real; // Adaptar cerebro a la realidad (48)
    config.d_inner = config.d_model * config.expand;
    config.dt_rank = (config.d_model + 15) / 16;
    
    let mut varmap = VarMap::new();
    let vb = VarBuilder::from_varmap(&varmap, DType::F32, &device);
    let model = CuroModel::new(&config, vb.clone())?;

    // Cargar Checkpoint si existe
    let checkpoint_path = "training/checkpoints/curo_vision_v1.safetensors";
    if Path::new(checkpoint_path).exists() {
        println!("♻️ Cargando memoria previa desde: {}", checkpoint_path);
        varmap.load(checkpoint_path)?;
    } else {
        println!("✨ Iniciando nueva memoria (desde cero)");
    }
    
    let mut opt = candle_nn::AdamW::new_lr(varmap.all_vars(), 0.001)?;

    // 3. Bucle de Entrenamiento
    let batch_size = 4;
    let seq_len = 32; // Ventana de tiempo para aprender causalidad
    let steps = 500; // Aumentado para aprender mejor

    println!("\n🚀 Iniciando entrenamiento...");

    for step in 0..steps {
        // Samplear batches aleatorios de la secuencia larga
        // Queremos predecir t+1 dado t
        
        let mut input_list = Vec::new();
        let mut target_list = Vec::new();
        
        for _ in 0..batch_size {
            // Elegir un punto de inicio aleatorio
            // Asegurar que hay espacio para seq_len + 1 (target)
            let max_start = total_frames - seq_len - 1;
            let start_idx = (rand::random::<u32>() as usize) % max_start;
            
            let seq = full_sequence.narrow(1, start_idx, seq_len)?;
            let target = full_sequence.narrow(1, start_idx + 1, seq_len)?;
            
            input_list.push(seq.squeeze(0)?); // (Seq, D)
            target_list.push(target.squeeze(0)?);
        }
        
        let input_batch = Tensor::stack(&input_list, 0)?; // (B, Seq, D)
        let target_batch = Tensor::stack(&target_list, 0)?;

        // Forward
        let prediction = model.forward_vision(&input_batch)?;
        
        // Loss
        let diff = (prediction - target_batch)?;
        let loss = diff.sqr()?.mean_all()?;
        
        opt.backward_step(&loss)?;

        if step % 10 == 0 {
            println!("   Paso {:03}: MSE Loss = {:.6}", step, loss.to_scalar::<f32>()?);
        }
    }
    
    println!("\n✅ Entrenamiento Finalizado.");
    println!("   Curo ha visto 'Big Buck Bunny' y entiende sus patrones de movimiento.");

    // 4. Guardar Modelo
    let checkpoint_path = "training/checkpoints/curo_vision_v1.safetensors";
    // Asegurar que el directorio existe
    if let Some(parent) = std::path::Path::new(checkpoint_path).parent() {
        std::fs::create_dir_all(parent)?;
    }
    println!("💾 Guardando cerebro entrenado en: {}", checkpoint_path);
    varmap.save(checkpoint_path)?;

    // 5. Fase de Sueño (Generación)
    println!("💤 Iniciando fase de sueño (Generación de 60 frames)...");
    let dream_len = 60; 
    let seed_len = 32;
    
    // Usar el final del video como semilla
    let start_idx = total_frames - seed_len - 1;
    let seed = full_sequence.narrow(1, start_idx, seed_len)?; // (1, 32, 48)
    
    let mut current_seq = seed.clone();
    let mut dream_frames = Vec::new();
    
    for _ in 0..dream_len {
        // Forward
        let prediction = model.forward_vision(&current_seq)?;
        // Tomar la predicción del último paso
        let (_b, s, _d) = prediction.dims3()?;
        let next_frame = prediction.narrow(1, s-1, 1)?; // (1, 1, 48)
        
        // IMPORTANTE: Detach para evitar Stack Overflow por grafo infinito
        let next_frame = next_frame.detach();
        
        dream_frames.push(next_frame.clone());
        
        // Actualizar secuencia (Sliding Window)
        // Concatenamos y mantenemos el tamaño de contexto o dejamos crecer
        // Para Mamba, dejar crecer es mejor, pero por memoria cortamos si es muy largo
        current_seq = Tensor::cat(&[&current_seq, &next_frame], 1)?;
        
        // Opcional: Cortar si excede cierto tamaño
        let (_b, s_new, _d) = current_seq.dims3()?;
        if s_new > 128 {
             current_seq = current_seq.narrow(1, s_new - 128, 128)?;
        }
    }
    
    // Usar stack en lugar de cat para evitar recursión profunda en grafos grandes si candle lo hace así
    // Pero el error de stack overflow suele ser por grafos de computación muy profundos en modo debug
    // O recursión en Drop.
    // Vamos a intentar detach() para romper el grafo de computación durante la generación
    // ya que no necesitamos gradientes aquí.
    let dream_tensor = Tensor::cat(&dream_frames, 1)?; // (1, 60, 48)
    
    // Guardar sueño con metadatos para poder des-normalizar
    let mut tensors_map = std::collections::HashMap::new();
    tensors_map.insert("dream".to_string(), dream_tensor);
    
    if let Some(m) = mean_tensor {
        tensors_map.insert("mean".to_string(), m);
    }
    if let Some(s) = std_tensor {
        tensors_map.insert("std".to_string(), s);
    }

    let dream_path = "training/data/dream.safetensors";
    candle_core::safetensors::save(&tensors_map, dream_path)?;
    println!("✨ Sueño guardado en: {}", dream_path);
    
    Ok(())
}
