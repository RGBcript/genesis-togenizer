// Vertex shader (no usado en compute, pero requerido por estructura a veces)
// Compute Shader para el Cortex Visual
// Simula el procesamiento paralelo de una matriz de entrada (retina)

@group(0) @binding(0)
var<storage, read> input_buffer: array<f32>;

@group(0) @binding(1)
var<storage, read_write> output_buffer: array<f32>;

@group(0) @binding(2)
var<storage, read> weights: array<f32>;

// Uniforms (Constantes globales)
struct Uniforms {
    width: u32,
    height: u32,
    dt: f32,
}
@group(0) @binding(3)
var<uniform> params: Uniforms;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) global_id: vec3<u32>) {
    let index = global_id.x;
    
    // Evitar salir de los límites
    if (index >= arrayLength(&output_buffer)) {
        return;
    }

    // 1. Lectura del input (Retina)
    let val = input_buffer[index];
    
    // 2. Procesamiento Simulado (Convolución simplificada o activación)
    // En este ejemplo, aplicamos una función de activación sigmoide modificada por el peso
    let weight = weights[index];
    let activation = 1.0 / (1.0 + exp(-val * weight));
    
    // 3. Aplicar factor de tiempo (dt)
    let result = activation * params.dt;

    // 4. Escritura en output (Nervio Óptico)
    output_buffer[index] = result;
}
