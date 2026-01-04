"""
Genesis Atomic Dataset Preparer

Convierte frames de video en ToGens (átomos de realidad de 128 bits).
Cada ToGen contiene:
- quantized: 48 bits (representación aprendida/comprimida)
- space: 16 bits (posición espacial de la característica más saliente)
- time: 16 bits (índice temporal del frame)
- force: 16 bits (intensidad/energía del frame)
"""

import cv2
import numpy as np
import onnxruntime as ort
from safetensors.numpy import save_file
import os
import glob
import hashlib

# Configuración
OUTPUT_DIR = "training/data"
MODEL_PATH = "assets/models/materia_encoder.onnx"
TARGET_SIZE = (128, 128)
MAX_FRAMES_PER_VIDEO = 1000
VIDEOS_PATH = "training/raw_videos/*.mp4"

def embedding_to_togen_components(embedding: np.ndarray, frame_idx: int) -> tuple:
    """
    Convierte un embedding del autoencoder a componentes de ToGen.
    
    Args:
        embedding: Vector de floats del encoder (256 dims)
        frame_idx: Índice temporal del frame
    
    Returns:
        (quantized, space, time, force) como enteros
    """
    # 1. QUANTIZED (48 bits)
    # Usamos un hash determinista de los valores más importantes
    # Esto simula la cuantización del espacio latente
    top_indices = np.argsort(np.abs(embedding))[-24:]  # Top 24 features
    top_values = embedding[top_indices]
    
    # Convertir a bits: cada valor > 0 es un 1, <= 0 es un 0
    quantized = 0
    for i, val in enumerate(top_values):
        if val > 0:
            quantized |= (1 << (i * 2))
        if abs(val) > 0.5:  # Feature fuerte
            quantized |= (1 << (i * 2 + 1))
    
    # Añadir hash de todo el vector para más unicidad
    embedding_bytes = embedding.astype(np.float32).tobytes()
    hash_val = int(hashlib.md5(embedding_bytes).hexdigest()[:12], 16)
    quantized = (quantized & 0xFFFFFF) | ((hash_val & 0xFFFFFF) << 24)
    
    # 2. SPACE (16 bits)
    # Posición de la característica más activa
    max_idx = np.argmax(np.abs(embedding))
    space = max_idx & 0xFFFF
    
    # 3. TIME (16 bits)
    # Índice temporal del frame
    time = frame_idx & 0xFFFF
    
    # 4. FORCE (16 bits)
    # Intensidad general del frame (magnitud promedio)
    force = int(np.clip(np.mean(np.abs(embedding)) * 10000, 0, 65535))
    
    return (quantized, space, time, force)


def process_all_videos():
    """Procesa todos los videos y genera el dataset atómico."""
    
    print("🧬 Genesis Atomic Dataset Preparer")
    print("=" * 50)
    
    # 1. Cargar Encoder
    if not os.path.exists(MODEL_PATH):
        print(f"❌ Error: No se encuentra el encoder en {MODEL_PATH}")
        return
    
    session = ort.InferenceSession(MODEL_PATH)
    input_name = session.get_inputs()[0].name
    print(f"✅ Encoder cargado: {MODEL_PATH}")
    
    # 2. Buscar videos
    video_files = glob.glob(VIDEOS_PATH)
    if not video_files:
        print(f"❌ No se encontraron videos en {VIDEOS_PATH}")
        return
    
    print(f"📹 Encontrados {len(video_files)} videos")
    
    # Arrays para almacenar componentes de ToGens
    all_quantized = []
    all_space = []
    all_time = []
    all_force = []
    
    global_frame_idx = 0
    
    for video_path in video_files:
        print(f"\n   → Procesando: {os.path.basename(video_path)}")
        
        cap = cv2.VideoCapture(video_path)
        frame_count = 0
        
        while cap.isOpened() and frame_count < MAX_FRAMES_PER_VIDEO:
            ret, frame = cap.read()
            if not ret:
                break
            
            # Preprocesamiento
            frame = cv2.resize(frame, TARGET_SIZE)
            frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            frame_norm = frame.astype(np.float32) / 255.0
            frame_t = np.transpose(frame_norm, (2, 0, 1))
            input_tensor = np.expand_dims(frame_t, axis=0)
            
            # Inferencia
            outputs = session.run(None, {input_name: input_tensor})
            embedding = outputs[0][0]  # (256,)
            
            # Convertir a ToGen
            quantized, space, time, force = embedding_to_togen_components(
                embedding, global_frame_idx
            )
            
            all_quantized.append(quantized)
            all_space.append(space)
            all_time.append(time)
            all_force.append(force)
            
            frame_count += 1
            global_frame_idx += 1
            
            if frame_count % 200 == 0:
                print(f"      Frames: {frame_count}")
        
        cap.release()
        print(f"      Total frames de este video: {frame_count}")
    
    print(f"\n📊 Total átomos generados: {len(all_quantized)}")
    
    # 3. Guardar como Safetensors
    # Los guardamos como arrays de u64/u16 empaquetados para Rust
    
    # Convertir a numpy arrays
    quantized_arr = np.array(all_quantized, dtype=np.uint64)
    space_arr = np.array(all_space, dtype=np.uint16)
    time_arr = np.array(all_time, dtype=np.uint16)
    force_arr = np.array(all_force, dtype=np.uint16)
    
    # Safetensors no soporta u64/u16 directamente, así que usamos vistas
    # Convertimos a float32 para compatibilidad (Rust los reinterpretará)
    # O mejor: guardamos como bytes/int32
    
    # Opción más limpia: guardar como int64 (que sí soporta)
    tensors = {
        "quantized": quantized_arr.astype(np.int64),  # (N,)
        "space": space_arr.astype(np.int32),          # (N,)
        "time_field": time_arr.astype(np.int32),      # (N,) - "time" puede ser palabra reservada
        "force": force_arr.astype(np.int32),          # (N,)
        "num_atoms": np.array([len(all_quantized)], dtype=np.int64),
    }
    
    output_path = os.path.join(OUTPUT_DIR, "atomic_data.safetensors")
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    save_file(tensors, output_path)
    
    print(f"\n✅ Dataset atómico guardado en: {output_path}")
    print(f"   - Átomos: {len(all_quantized)}")
    print(f"   - Quantized shape: {quantized_arr.shape}")
    
    # 4. Estadísticas
    print("\n📈 Estadísticas de los ToGens:")
    print(f"   - Force promedio: {np.mean(force_arr):.2f}")
    print(f"   - Force max: {np.max(force_arr)}")
    print(f"   - Force min: {np.min(force_arr)}")
    print(f"   - Space más común: {np.bincount(space_arr).argmax()}")


if __name__ == "__main__":
    process_all_videos()
