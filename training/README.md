# 🎓 MAINI Training Pipeline

## Overview

This directory contains scripts for training the MAINI system using atomic (ToGen-based) learning.

## Prerequisites

```bash
pip install torch torchvision safetensors pillow numpy opencv-python
```

## Training Steps

### 1. Prepare Videos

Place training videos in `raw_videos/`:
```
raw_videos/
├── video1.mp4
├── video2.mp4
└── ...
```

### 2. Generate Atomic Dataset

Convert videos to ToGen atoms:
```bash
python prepare_atomic_dataset.py
```

This creates `data/atomic_data.safetensors` with:
- **space**: Spatial position (0-255)
- **time_field**: Temporal index
- **force**: Visual intensity/energy

### 3. Train Curo (World Model)

Train the Mamba-based brain to predict next atoms:
```bash
# From MAINI root
cargo run --release --bin train_atomic -p curo
```

Output: `checkpoints/curo_atomic_v1.safetensors`

### 4. Visualize Dreams

Generate and visualize atomic dreams:
```bash
python visualize_atomic_dream.py
```

Creates in `data/`:
- `dream_grid.png`: Grid visualization
- `dream_waveform.png`: Temporal waveform
- `dream_sequence.png`: Sequential view

## File Descriptions

| File | Description |
|------|-------------|
| `prepare_atomic_dataset.py` | Converts videos → ToGen atoms |
| `train_autoencoder.py` | Trains visual encoder/decoder |
| `visualize_atomic_dream.py` | Renders atomic dreams to images |

## Data Format

### atomic_data.safetensors
```python
{
    "space": tensor([n_atoms]),      # u32 - spatial position
    "time_field": tensor([n_atoms]), # u32 - temporal index  
    "force": tensor([n_atoms])       # u32 - energy/intensity
}
```

### Atomic Dream Flow
```
Videos → Frames → ToGens → Curo Training → Dream Generation → Visualization
```

## Results

After training:
- **Loss**: ~0.38 (from 5.36)
- **Dream atoms**: 60 per generation
- **Force range**: 13,000-38,000
