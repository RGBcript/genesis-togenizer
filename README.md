# 🧬 MAINI - Modular Artificial Intelligence Neural Infrastructure

> A biologically-inspired AGI architecture built on atomic information units (ToGens) and State Space Models (Mamba).

## 🌟 Overview

MAINI implements a novel approach to artificial general intelligence based on:

- **ToGen (128-bit Atomic Units)**: Fundamental information carriers inspired by physical atoms
- **Mamba SSM (State Space Model)**: World Model with O(n) complexity replacing attention
- **Predictive Processing**: Free Energy Principle / Karl Friston's theories
- **Atomic Flow**: Process information atom-by-atom, biologically correct

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        MAINI                                 │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐     │
│  │  ToGen  │──▶│  Curo   │──▶│ Genulse │──▶│Arcodular│     │
│  │ (Atom)  │   │ (Brain) │   │  (GPU)  │   │(Memory) │     │
│  └─────────┘   └─────────┘   └─────────┘   └─────────┘     │
│       │             │             │             │           │
│       ▼             ▼             ▼             ▼           │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Genesis Runtime                         │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## 📦 Crates

### `togen` - The Atomic Unit
128-bit information atom with sub-atomic structure:
```
┌────────┬──────────────┬─────────┬─────────┬─────────┐
│ Header │  Quantized   │  Space  │  Time   │  Force  │
│  8-bit │    48-bit    │  16-bit │  16-bit │  16-bit │
└────────┴──────────────┴─────────┴─────────┴─────────┘
```

- **MATERIA**: Physical/sensory information
- **NO_MATERIA**: Abstract/conceptual information

### `curo` - The Brain (World Model)
Mamba-based State Space Model for predictive processing:
- **d_model**: 128 dimensions
- **n_layers**: 3 Mamba blocks
- **togen_proj**: Atom encoder (4 → 128)
- **togen_out**: Atom decoder (128 → 4)
- **Surprise tracking**: Prediction error history

### `genulse` - GPU Computation Engine
WGPU-based parallel processing for:
- Materia (visual/sensory) encoding
- Real-time inference
- Shader-based computation

### `arcodular` - Memory System
External memory and knowledge storage:
- Episodic memory
- Semantic knowledge graphs
- ONNX model integration

### `genesis_runtime` - Orchestrator
Main runtime coordinating all components.

### `inmece` - Internal Mechanism
Introspection and internal state management.

## 🚀 Quick Start

### Prerequisites
- Rust 1.75+
- Python 3.10+ (for training)
- CUDA/ROCm (optional, for GPU)

### Build
```bash
cd MAINI
cargo build --release
```

### Train Atomic Model
```bash
# 1. Prepare atomic dataset from videos
cd training
python prepare_atomic_dataset.py

# 2. Train Curo (Mamba World Model)
cargo run --release --bin train_atomic -p curo

# 3. Visualize atomic dreams
python visualize_atomic_dream.py
```

## 📂 Project Structure

```
MAINI/
├── Cargo.toml              # Workspace config
├── README.md               # This file
├── assets/
│   └── models/             # ONNX models
├── crates/
│   ├── arcodular/          # Memory system
│   ├── curo/               # Brain (Mamba SSM)
│   │   └── src/
│   │       ├── lib.rs
│   │       ├── model.rs    # CuroModel + MambaBlock
│   │       ├── config.rs
│   │       └── bin/
│   │           └── train_atomic.rs
│   ├── genesis_runtime/    # Main runtime
│   ├── genulse/            # GPU engine
│   ├── inmece/             # Internal mechanism
│   └── togen/              # Atomic unit
│       └── src/
│           └── lib.rs      # ToGen struct
├── docs/
│   └── RESEARCH_PHILOSOPHY.md
└── training/
    ├── prepare_atomic_dataset.py
    ├── train_autoencoder.py
    ├── visualize_atomic_dream.py
    └── README_TRAINING.md
```

## 🧠 Core Concepts

### Atomic Flow
Information flows atom-by-atom through the system:
```
Sensory Input → ToGen atoms → Mamba processing → Prediction → Action
```

### Predictive Processing
The brain constantly predicts the next atom:
- **Prediction**: What atom comes next?
- **Surprise**: Difference between prediction and reality
- **Learning**: Minimize surprise (Free Energy)

### State Space Model (Mamba)
Unlike Transformers with O(n²) attention:
- **Linear complexity**: O(n)
- **Continuous state**: h(t) = A·h(t-1) + B·x(t)
- **Selective mechanism**: Learn what to remember

## 📊 Training Results

Atomic training on video data:
- **Loss**: 5.36 → 0.38 (14x reduction)
- **Atoms generated**: 60 per dream
- **Force diversity**: 51 unique spatial values

## 🔬 Research Philosophy

MAINI is based on several theoretical foundations:
- **Free Energy Principle** (Karl Friston)
- **Predictive Coding** (Rao & Ballard)
- **State Space Models** (Mamba, S4)
- **Atomic Information Theory** (Original)

See [docs/RESEARCH_PHILOSOPHY.md](docs/RESEARCH_PHILOSOPHY.md) for details.

## 📜 License

MIT License - See LICENSE file

## 🤝 Contributing

Contributions welcome! Please read the research philosophy first.

---

*"Intelligence is prediction. Prediction is compression. Compression is understanding."*
