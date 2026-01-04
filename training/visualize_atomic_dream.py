"""
Visualize Atomic Dreams - Convert ToGens back to images
Uses the trained autoencoder to decode atomic dreams into visual form
"""

import numpy as np
import torch
from safetensors.torch import load_file, save_file
from PIL import Image
import os

def togens_to_latents(togens: list) -> np.ndarray:
    """
    Convert a list of ToGens (128-bit atoms) back to latent vectors.
    Each ToGen has: quantized(48) + space(16) + time(16) + force(16)
    
    For visualization, we use the 4 components as a latent representation.
    """
    latents = []
    for togen_hex in togens:
        # Parse the 128-bit ToGen
        raw = int(togen_hex, 16) if isinstance(togen_hex, str) else togen_hex
        
        v0 = (raw & 0xFFFFFFFF) / 1e9
        v1 = ((raw >> 32) & 0xFFFFFFFF) / 1e9  
        v2 = ((raw >> 64) & 0xFFFFFFFF) / 1e9
        v3 = ((raw >> 96) & 0xFFFFFFFF) / 1e9
        
        latents.append([v0, v1, v2, v3])
    
    return np.array(latents, dtype=np.float32)

def load_atomic_dream(path: str):
    """Load atomic dream from safetensors."""
    data = load_file(path)
    
    # Reconstruct ToGens from components
    space = data["space"].numpy().astype(np.int64)
    time_f = data["time_field"].numpy().astype(np.int64)
    force = data["force"].numpy().astype(np.int64)
    
    n_atoms = len(space)
    print(f"📂 Loaded {n_atoms} atoms from dream")
    print(f"   Space range: [{space.min()}, {space.max()}]")
    print(f"   Time range: [{time_f.min()}, {time_f.max()}]")
    print(f"   Force range: [{force.min()}, {force.max()}]")
    
    # Return as raw values for processing
    return space, time_f, force

def dream_to_image_grid(space, time_f, force, grid_size=8):
    """
    Create a visual representation of the atomic dream.
    Maps atomic properties to RGB values.
    """
    n_atoms = len(space)
    
    # Normalize values to 0-255 range
    def normalize_to_255(arr):
        arr = arr.astype(np.float32)
        if arr.max() > arr.min():
            return ((arr - arr.min()) / (arr.max() - arr.min()) * 255).astype(np.uint8)
        return np.zeros_like(arr, dtype=np.uint8)
    
    space_norm = normalize_to_255(space)
    time_norm = normalize_to_255(time_f)
    force_norm = normalize_to_255(force)
    
    # Create grid image
    cells = min(n_atoms, grid_size * grid_size)
    img_size = grid_size * 16  # 16 pixels per atom
    
    img = np.zeros((img_size, img_size, 3), dtype=np.uint8)
    
    for i in range(cells):
        row = (i // grid_size) * 16
        col = (i % grid_size) * 16
        
        # R = force (energy), G = space, B = time
        r = force_norm[i] if i < len(force_norm) else 0
        g = space_norm[i] if i < len(space_norm) else 0
        b = time_norm[i] if i < len(time_norm) else 0
        
        img[row:row+16, col:col+16] = [r, g, b]
    
    return Image.fromarray(img)

def dream_to_waveform(space, time_f, force, width=512, height=128):
    """
    Create a waveform-like visualization of the dream.
    """
    n = len(force)
    
    # Create image
    img = np.zeros((height, width, 3), dtype=np.uint8)
    
    # Normalize force to image height
    force_f = force.astype(np.float32)
    if force_f.max() > force_f.min():
        force_norm = (force_f - force_f.min()) / (force_f.max() - force_f.min())
    else:
        force_norm = np.zeros_like(force_f)
    
    # Draw waveform
    for i in range(n):
        x = int(i * width / n)
        y = int((1 - force_norm[i]) * (height - 1))
        
        # Color based on space
        space_val = int(space[i]) % 256 if i < len(space) else 128
        
        # Draw vertical line from bottom to y
        for yy in range(y, height):
            img[yy, x] = [space_val, 100, 255 - space_val]
    
    return Image.fromarray(img)

def main():
    print("🧠 Atomic Dream Visualization")
    print("=" * 50)
    
    # Use absolute path relative to this script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    dream_path = os.path.join(script_dir, "data", "atomic_dream.safetensors")
    
    if not os.path.exists(dream_path):
        print(f"❌ Dream file not found: {dream_path}")
        return
    
    # Load dream
    space, time_f, force = load_atomic_dream(dream_path)
    
    # Create visualizations
    print("\n🎨 Generating visualizations...")
    
    # Grid view
    grid_img = dream_to_image_grid(space, time_f, force)
    grid_path = os.path.join(script_dir, "data", "dream_grid.png")
    grid_img.save(grid_path)
    print(f"   ✅ Grid saved: {grid_path}")
    
    # Waveform view
    wave_img = dream_to_waveform(space, time_f, force)
    wave_path = os.path.join(script_dir, "data", "dream_waveform.png")
    wave_img.save(wave_path)
    print(f"   ✅ Waveform saved: {wave_path}")
    
    # Stats
    print("\n📊 Dream Statistics:")
    print(f"   Total atoms: {len(force)}")
    print(f"   Force mean: {force.mean():.2f}")
    print(f"   Force std: {force.std():.2f}")
    print(f"   Space unique values: {len(np.unique(space))}")
    
    # Create a larger composite image showing temporal evolution
    print("\n🎬 Creating temporal sequence...")
    
    sequence_width = 800
    sequence_height = 100
    n = len(force)
    
    seq_img = np.zeros((sequence_height, sequence_width, 3), dtype=np.uint8)
    
    for i in range(n):
        x_start = int(i * sequence_width / n)
        x_end = int((i + 1) * sequence_width / n)
        
        # Normalize values for this atom
        r = int(min(255, force[i] / 1000 * 255)) if force.max() > 0 else 0
        g = int(space[i] % 256) if i < len(space) else 0
        b = int(time_f[i] % 256) if i < len(time_f) else 0
        
        seq_img[:, x_start:x_end] = [r, g, b]
    
    seq_path = os.path.join(script_dir, "data", "dream_sequence.png")
    Image.fromarray(seq_img).save(seq_path)
    print(f"   ✅ Sequence saved: {seq_path}")
    
    print("\n✨ Dream visualization complete!")
    print(f"   Open the PNG files in {os.path.join(script_dir, 'data')} to see the atomic dream!")

if __name__ == "__main__":
    main()
