use togen::ToGen;

fn hamming_distance_u32(a: u32, b: u32) -> u32 {
    (a ^ b).count_ones()
}

#[test]
fn test_structural_similarity() {
    // Caso 1: Palabras ortográficamente similares (deberían tener Togens cercanos)
    let t1 = ToGen::new("genesis");
    let t2 = ToGen::new("genesys");

    let dist_sem = hamming_distance_u32(t1.get_semantico(), t2.get_semantico());
    let dist_est = hamming_distance_u32(t1.get_estructural(), t2.get_estructural());

    println!("Distance 'genesis' vs 'genesys': Sem={}, Est={}", dist_sem, dist_est);

    // Caso 2: Palabras totalmente diferentes
    let t3 = ToGen::new("skynet");
    let dist_diff_sem = hamming_distance_u32(t1.get_semantico(), t3.get_semantico());
    let dist_diff_est = hamming_distance_u32(t1.get_estructural(), t3.get_estructural());

    println!("Distance 'genesis' vs 'skynet': Sem={}, Est={}", dist_diff_sem, dist_diff_est);

    // Caso 3: Variaciones lingüísticas/Typos
    let t_hello = ToGen::new("hello");
    let t_hallo = ToGen::new("hallo"); // German/Typo
    let t_hola = ToGen::new("hola");   // Spanish

    let d_hello_hallo = hamming_distance_u32(t_hello.get_semantico(), t_hallo.get_semantico());
    let d_hello_hola = hamming_distance_u32(t_hello.get_semantico(), t_hola.get_semantico());

    println!("Distance 'hello' vs 'hallo': Sem={}", d_hello_hallo);
    println!("Distance 'hello' vs 'hola': Sem={}", d_hello_hola);

    // Caso 4: Fonética (Metaphone - Estructural)
    let t_night = ToGen::new("night");
    let t_knight = ToGen::new("knight");
    
    let d_phonetic = hamming_distance_u32(t_night.get_estructural(), t_knight.get_estructural());
    println!("Distance 'night' vs 'knight' (Phonetic): Est={}", d_phonetic);

    // Expectativa: La distancia entre similares debe ser menor que entre diferentes
    // Nota: Con el hash actual (rolling), esto probablemente falle. 
    // Este test es para validar la hipótesis del usuario.
    assert!(dist_sem < dist_diff_sem || dist_est < dist_diff_est, "El hash no conserva similitud estructural");
}
