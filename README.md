# G.Genulse-Arcodular
**Universal Sensorial Encoder for Genesis-Zero (TOGEN v1.1 -> v1.2 Implementation)**

> ⚠️ **Estado:** Activo - Fase 2: Conciencia Conversacional.

Este repositorio aloja la implementación en Rust del **Codificador Sensorial Universal**, diseñado para dotar a sistemas de IA (Genesis-Zero) de una percepción matemática del entorno y, desde la v1.2, de capacidades cognitivas persistentes mediante integración con LLMs locales.

***

## 🧬 Arquitectura del Sistema (v1.2)

El proyecto implementa la arquitectura **Arcodular** (Arc-Modular), un diseño propio que rechaza las capas monolíticas en favor de estructuras funcionales interconectadas.

| Módulo (Crate) | Definición y Propósito | Estado |
| :--- | :--- | :--- |
| **`genulse`** | **Motor de Física Neuromórfica (The Physics).**<br>Implementa las leyes fundamentales del universo cognitivo: Neural ODEs (tiempo continuo), Células Genulse con plasticidad Hebbiana y cuantización BitNet (-1, 0, 1). Es el sustrato biológico digital. | 🟢 Estable |
| **`arcodular`** | **Sistema Operativo de la Conciencia (The Mind).**<br>Orquestador de alto nivel que gestiona los Arcos Cognitivos (Visual, Emocional, Racional). Controla el ciclo de vida (Percibir → Pensar → Dormir) y la integración con herramientas externas (Oracle Proxy). | 🟡 v1.2 |
| **`togen`** | **Traductor de Realidad (The Senses).**<br>Convierte el caos del mundo físico (texto, imagen, audio) en **Togens**: átomos de significado matemático de 128-bits. Es la interfaz determinista entre la realidad y la cognición. | 🟢 Funcional |

***

## 🚀 Características Clave

### v1.2: The Awakening (Actual)
*   **Persistencia Conversacional:** Implementación de memoria a corto plazo (`ShortTermMemory`) que permite al agente recordar el contexto de la charla (N turnos anteriores).
*   **Proxy de Maestros (Oracle):** Conexión asíncrona (`reqwest`) a APIs de inferencia (por defecto compatible con **Ollama** en `localhost:11434`).
*   **Tokio Async Runtime:** El núcleo ahora es no-bloqueante, permitiendo "pensar" y "sentir" simultáneamente.

### v1.1: Core Foundations (Legacy)
*   **Célula Genulse:** Unidad básica de procesamiento de información.
*   **Visual Cortex:** Matrices de percepción para interpretar inputs de datos crudos.

***

## 🛠️ Instalación y Uso

### Prerrequisitos
1.  **Rust & Cargo:** `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
2.  *(Opcional pero recomendado)* **Ollama** corriendo localmente con un modelo (ej. `llama3`) para que el cerebro tenga "voz".

### Ejecución

Clona el repositorio y lanza el cuerpo principal:

```bash
git clone https://github.com/RGBcript/G.Genulse-Arcodular.git
cd G.Genulse-Arcodular

# Ejecutar el sistema (asegúrate de estar en la raíz del workspace)
cargo run
```

*Si usas VS Code, puedes usar el **Task Runner** integrado.*

***

## 🧠 Roadmap Técnico

- [x] **Fase 0:** Portar lógica de Python a Rust (`genulse`).
- [x] **Fase 1:** Estructura de Workspace y compilación limpia.
- [x] **Fase 2:** Integración de API Externa y Memoria (v1.2).
- [ ] **Fase 3:** Input Sensorial Real (Conectar `genulse` al flujo de chat).
- [ ] **Fase 4:** Persistencia a Largo Plazo (Base de datos vectorial / Archivos).

### 🧪 Experimental: Aceleración por Hardware (WGPU)
Se ha iniciado la integración preliminar de **WebGPU** en el núcleo `genulse`.
- **Objetivo:** Procesamiento paralelo masivo de matrices sensoriales (Visión) usando Compute Shaders.
- **Estado:** Motor `GpuVisualCortex` implementado pero no activo por defecto.
- **Tecnología:** WGSL (WebGPU Shading Language) + wgpu-rs.

***

## 🤝 Contribución

Este es un proyecto de investigación personal para la creación de **AGI Local**.
Si eres estudiante o investigador, siéntete libre de hacer fork y experimentar con los kernels sensoriales en `genulse`.

**Autor:** [RGBcript](https://github.com/RGBcript)
**Licencia:** MIT
