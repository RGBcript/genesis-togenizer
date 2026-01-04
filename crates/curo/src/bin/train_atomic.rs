use curo::{CuroConfig, CuroModel};
use candle_core::{DType, Device, Tensor, Module};
use candle_nn::{VarBuilder, VarMap, Optimizer};
use std::path::Path;
use togen::ToGen;

fn main() -> anyhow::Result<()> {
    println!("🧬 Curo Atomic Training: Flujo Biológico Real");
    println!("==================================================");
    
    let device = Device::Cpu;
    
    // 1. Cargar Datos Atómicos
    let data_path = "training/data/atomic_data.safetensors";
    
    if !Path::new(data_path).exists() {
        println!("❌ No se encontró atomic_data.safetensors");
        println!("   Ejecuta: python training/prepare_atomic_dataset.py");
        return Ok(());
    }
    
    println!("📂 Cargando átomos desde: {}", data_path);
    let tensors = candle_core::safetensors::load(data_path, &device)?;
    
    let quantized = tensors.get("quantized").expect("Missing quantized");
    let space = tensors.get("space").expect("Missing space");
    let time_field = tensors.get("time_field").expect("Missing time_field");
    let force = tensors.get("force").expect("Missing force");
    let num_atoms = tensors.get("num_atoms").expect("Missing num_atoms");
    
    let total_atoms = num_atoms.to_vec1::<i64>()?[0] as usize;
    println!("   - Total átomos: {}", total_atoms);
    
    // Convertir tensores a vectores para fácil acceso
    let quantized_vec = quantized.to_vec1::<i64>()?;
    let space_vec: Vec<i64> = space.to_vec1::<i64>()?;
    let time_vec: Vec<i64> = time_field.to_vec1::<i64>()?;
    let force_vec: Vec<i64> = force.to_vec1::<i64>()?;
    
    // 2. Reconstruir ToGens
    println!("🔄 Reconstruyendo ToGens...");
    let mut togens: Vec<ToGen> = Vec::with_capacity(total_atoms);
    
    for i in 0..total_atoms {
        let togen = ToGen::from_components(
            quantized_vec[i] as u64,
            space_vec[i] as u16,
            time_vec[i] as u16,
            force_vec[i] as u16,
        );
        togens.push(togen);
    }
    
    println!("   ✅ {} ToGens reconstruidos", togens.len());
    
    // Mostrar ejemplo
    if let Some(first) = togens.first() {
        println!("\n   Ejemplo de ToGen:");
        println!("   - Hex: {}", first.to_hex());
        println!("   - Space: {}", first.get_space());
        println!("   - Time: {}", first.get_time());
        println!("   - Force: {}", first.get_force());
    }
    
    // 3. Configurar Modelo (d_model = 128 para integrate_atom)
    // togen_proj: 4 -> d_model
    let config = CuroConfig {
        d_model: 128,
        n_layers: 3,
        vocab_size: 256,
        d_state: 16,
        d_conv: 4,
        expand: 2,
        dt_rank: 8,
        d_inner: 256,
    };
    
    let mut varmap = VarMap::new();
    let vb = VarBuilder::from_varmap(&varmap, DType::F32, &device);
    let mut model = CuroModel::new(&config, vb.clone())?;
    
    // Cargar checkpoint si existe
    let checkpoint_path = "training/checkpoints/curo_atomic_v1.safetensors";
    if Path::new(checkpoint_path).exists() {
        println!("♻️ Cargando memoria previa desde: {}", checkpoint_path);
        varmap.load(checkpoint_path)?;
    } else {
        println!("✨ Iniciando nueva memoria atómica (desde cero)");
    }
    
    // 4. Entrenamiento Atómico
    // En el flujo biológico, procesamos átomo por átomo
    // y aprendemos a predecir el siguiente átomo
    
    println!("\n🚀 Iniciando entrenamiento atómico...");
    
    // LR más conservador para evitar NaN
    let mut opt = candle_nn::AdamW::new_lr(varmap.all_vars(), 0.001)?;
    let epochs = 20;  // Más epochs con LR bajo
    let atoms_per_step = 32; // Mini-batch de átomos
    let scale = 1e9_f32;
    
    for epoch in 0..epochs {
        let mut total_loss = 0.0;
        let mut steps = 0;
        
        // Iterar sobre secuencias de átomos
        let mut i = 0;
        while i + atoms_per_step < togens.len() {
            // Crear secuencia de inputs como un solo tensor [1, seq, 4]
            let seq_len = atoms_per_step - 1;
            let mut seq_inputs: Vec<f32> = Vec::new();
            let mut seq_targets: Vec<f32> = Vec::new();
            
            for j in 0..seq_len {
                let atom = &togens[i + j];
                let next_atom = &togens[i + j + 1];
                
                // Input: átomo actual (normalizado)
                seq_inputs.push((atom.raw() & 0xFFFFFFFF) as f32 / scale);
                seq_inputs.push(((atom.raw() >> 32) & 0xFFFFFFFF) as f32 / scale);
                seq_inputs.push(((atom.raw() >> 64) & 0xFFFFFFFF) as f32 / scale);
                seq_inputs.push(((atom.raw() >> 96) & 0xFFFFFFFF) as f32 / scale);
                
                // Target: siguiente átomo (normalizado)
                seq_targets.push((next_atom.raw() & 0xFFFFFFFF) as f32 / scale);
                seq_targets.push(((next_atom.raw() >> 32) & 0xFFFFFFFF) as f32 / scale);
                seq_targets.push(((next_atom.raw() >> 64) & 0xFFFFFFFF) as f32 / scale);
                seq_targets.push(((next_atom.raw() >> 96) & 0xFFFFFFFF) as f32 / scale);
            }
            
            // Tensores: [seq_len, 4]
            let inputs = Tensor::new(&seq_inputs[..], &device)?.reshape((seq_len, 4))?;
            let targets = Tensor::new(&seq_targets[..], &device)?;
            
            // Forward: proyectar inputs a d_model y luego procesar secuencia
            // inputs: [seq, 4] -> [seq, d_model] -> [1, seq, d_model] para Mamba
            let x = model.togen_proj.forward(&inputs)?; // [seq, d_model]
            let x = x.unsqueeze(0)?; // [1, seq, d_model]
            
            // Pasar por capas Mamba
            let mut current_x = x;
            for layer in &model.layers {
                let residual = current_x.clone();
                current_x = (residual + layer.forward(&current_x)?)?;
            }
            
            // Normalizar y proyectar a espacio de átomos
            let out = model.norm_f.forward(&current_x)?; // [1, seq, d_model]
            let out = out.squeeze(0)?; // [seq, d_model]
            let pred = model.togen_out.forward(&out)?; // [seq, 4]
            let pred_flat = pred.flatten_all()?; // [seq * 4]
            
            // Loss MSE
            let diff = (pred_flat - targets)?;
            let loss = diff.sqr()?.mean_all()?;
            
            // Backward y update
            opt.backward_step(&loss)?;
            
            total_loss += loss.to_scalar::<f32>()?;
            steps += 1;
            
            i += atoms_per_step;
            
            if steps % 10 == 0 && steps > 0 {
                println!("   Epoch {} | Step {} | Loss: {:.6}", epoch + 1, steps, total_loss / steps as f32);
            }
        }
        
        let avg_loss = if steps > 0 { total_loss / steps as f32 } else { 0.0 };
        println!("📊 Epoch {}/{} completado | Loss promedio: {:.6}", epoch + 1, epochs, avg_loss);
        
        // Guardar checkpoint después de cada epoch
        if let Some(parent) = std::path::Path::new(checkpoint_path).parent() {
            std::fs::create_dir_all(parent)?;
        }
        varmap.save(checkpoint_path)?;
    }
    
    println!("\n✅ Entrenamiento Atómico Finalizado");
    println!("💾 Modelo guardado en: {}", checkpoint_path);
    
    // 5. Fase de Sueño Atómico
    println!("\n💤 Iniciando sueño atómico (generación de 60 átomos)...");
    
    let dream_len = 60;
    let mut dream_togens: Vec<ToGen> = Vec::new();
    
    // Usar los últimos átomos como semilla
    let seed_atoms = &togens[togens.len().saturating_sub(10)..];
    
    // Alimentar semilla
    for atom in seed_atoms {
        let _ = model.integrate_atom(atom)?;
    }
    
    // Generar nuevos átomos
    // Por ahora, generamos basándonos en el último estado
    // En el futuro, el modelo debería poder "soñar" sin input
    
    let last_atom = togens.last().unwrap();
    let mut current_atom = last_atom.clone();
    
    for _ in 0..dream_len {
        let output = model.integrate_atom(&current_atom)?;
        
        // Convertir output a ToGen
        // Los primeros 4 valores del output se mapean a los campos del ToGen
        let quantized = ((output[0].abs() * 1e6) as u64) & 0xFFFFFFFFFFFF;
        let space = ((output[1].abs() * 1000.0) as u16) % 256;
        let time_val = current_atom.get_time().wrapping_add(1);
        let force = ((output[2].abs() * 10000.0) as u16).min(65535);
        
        let new_atom = ToGen::from_components(quantized, space, time_val, force);
        dream_togens.push(new_atom.clone());
        current_atom = new_atom;
    }
    
    // Guardar sueño
    let dream_quantized: Vec<i64> = dream_togens.iter().map(|t| t.get_quantized_materia() as i64).collect();
    let dream_space: Vec<i64> = dream_togens.iter().map(|t| t.get_space() as i64).collect();
    let dream_time: Vec<i64> = dream_togens.iter().map(|t| t.get_time() as i64).collect();
    let dream_force: Vec<i64> = dream_togens.iter().map(|t| t.get_force() as i64).collect();
    
    let mut dream_tensors = std::collections::HashMap::new();
    dream_tensors.insert("quantized".to_string(), Tensor::new(&dream_quantized[..], &device)?);
    dream_tensors.insert("space".to_string(), Tensor::new(&dream_space[..], &device)?);
    dream_tensors.insert("time_field".to_string(), Tensor::new(&dream_time[..], &device)?);
    dream_tensors.insert("force".to_string(), Tensor::new(&dream_force[..], &device)?);
    dream_tensors.insert("num_atoms".to_string(), Tensor::new(&[dream_len as i64], &device)?);
    
    let dream_path = "training/data/atomic_dream.safetensors";
    candle_core::safetensors::save(&dream_tensors, dream_path)?;
    println!("✨ Sueño atómico guardado en: {}", dream_path);
    
    // Estadísticas del sueño
    println!("\n📈 Estadísticas del sueño:");
    println!("   - Átomos generados: {}", dream_len);
    println!("   - Force promedio: {:.2}", dream_force.iter().map(|&x| x as f32).sum::<f32>() / dream_len as f32);
    
    Ok(())
}
