use curo::{CuroConfig, CuroModel};
use candle_core::{DType, Device, Tensor, Module};
use candle_nn::{VarBuilder, VarMap, Optimizer};

fn main() -> anyhow::Result<()> {
    println!("🏋️ Curo: Iniciando Entrenamiento (Gym)...");
    println!("-----------------------------------------");

    // 1. Configuración
    let device = Device::Cpu;
    let varmap = VarMap::new();
    // Usamos inicialización aleatoria (Kaiming) por defecto al usar VarMap
    let vb = VarBuilder::from_varmap(&varmap, DType::F32, &device);
    
    let config = CuroConfig::default();
    let model = CuroModel::new(&config, vb.clone())?;

    // 2. Optimizador (AdamW)
    // Learning rate 0.01 para ver resultados rápidos en este ejemplo simple
    let mut opt = candle_nn::AdamW::new_lr(varmap.all_vars(), 0.01)?;

    println!("✅ Modelo inicializado. Parámetros entrenables: {}", varmap.all_vars().len());

    // 3. Bucle de Entrenamiento
    // Tarea: Aprender la secuencia numérica 0 -> 1 -> 2 -> ... -> 9 -> 0
    let vocab_size = config.vocab_size; // 1000
    let batch_size = 4;
    let seq_len = 8;
    let steps = 50;

    println!("\n📚 Aprendiendo patrón: Secuencia cíclica 0-9");
    
    for step in 0..steps {
        // Generar datos sintéticos
        // Input:  [0, 1, 2, 3, 4, 5, 6, 7]
        // Target: [1, 2, 3, 4, 5, 6, 7, 8]
        let start_idx = (step * batch_size) % 10;
        let mut input_vec = Vec::new();
        let mut target_vec = Vec::new();

        for b in 0..batch_size {
            for i in 0..seq_len {
                let val = (start_idx + b + i) % 10;
                input_vec.push(val as u32);
                target_vec.push(((val + 1) % 10) as u32);
            }
        }

        let input_ids = Tensor::from_vec(input_vec, (batch_size, seq_len), &device)?;
        let target_ids = Tensor::from_vec(target_vec, (batch_size * seq_len,), &device)?;

        // Forward
        let logits = model.forward(&input_ids)?;
        
        // Reshape para Loss: (Batch * Seq, Vocab)
        let logits_flat = logits.reshape((batch_size * seq_len, vocab_size))?;
        
        // Loss (Cross Entropy)
        let loss = candle_nn::loss::cross_entropy(&logits_flat, &target_ids)?;
        
        // Backward & Step
        opt.backward_step(&loss)?;

        if step % 10 == 0 {
            println!("   Paso {:03}: Loss = {:.4}", step, loss.to_scalar::<f32>()?);
        }
    }

    println!("\n✅ Entrenamiento completado.");
    println!("-----------------------------------------");

    // 4. Prueba de Inferencia (Validación)
    println!("🧠 Probando predicción post-entrenamiento...");
    
    // Le damos la secuencia [0, 1, 2] y esperamos que prediga 3
    let test_seq = vec![0u32, 1, 2];
    let test_input = Tensor::from_vec(test_seq.clone(), (1, 3), &device)?; // Shape (1, 3)
    
    let logits = model.forward(&test_input)?;
    let (_b, s, _v) = logits.dims3()?;
    
    // Miramos la predicción del último token
    let last_token_logits = logits.get(0)?.get(s-1)?;
    let prediction = last_token_logits.argmax(0)?.to_scalar::<u32>()?;

    println!("   Input: {:?} -> Predicción: {}", test_seq, prediction);
    
    if prediction == 3 {
        println!("🎉 ¡ÉXITO! El modelo ha aprendido la secuencia.");
    } else {
        println!("⚠️  Aún necesita más entrenamiento.");
    }

    Ok(())
}
