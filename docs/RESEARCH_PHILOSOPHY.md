# 🧬 Filosofía de Investigación: Genesis-Zero

> *"La coordinación entre agentes no puede delegarse al poder de los LLM... Sugiero estudiar el paradigma de Flow Based Programming."* — **Datapture** (Genesis Research Team)

Este documento define los principios teóricos que guían el desarrollo de **Genesis**. No estamos construyendo un chatbot; estamos construyendo un organismo digital basado en principios biológicos y causales.

---

## 1. El Problema de la IA Actual (Correlación vs. Causalidad)

Los Modelos de Lenguaje (LLMs) como GPT-4 son motores de **correlación estadística**.
*   Saben que `P(Humo | Fuego)` es alta.
*   Pero no entienden el mecanismo físico: `Fuego -> Causa -> Humo`.

Si intervienes en el sistema (ej. pones una máquina de humo sin fuego), un modelo puramente estadístico puede confundirse y alucinar fuego. Un modelo causal entiende que la intervención rompió la correlación habitual.

### La Solución Genesis: Inferencia Causal
Genesis busca modelar los **Mecanismos Causales Independientes (ICM)**.
*   **Genulse (The Physics):** Modela las ecuaciones diferenciales (Neural ODEs) que gobiernan el cambio de estado.
*   **Arcodular (The Mind):** No es una "sopa" de neuronas, sino un grafo dirigido de módulos funcionales.

---

## 2. Arquitectura FBP (Flow-Based Programming)

Siguiendo la sugerencia de Datapture, adoptamos el paradigma FBP para la arquitectura del sistema.

### Principios FBP en Genesis:
1.  **Cajas Negras (Black Boxes):** Cada `Arc` (Visual, Auditivo, Broca) es un proceso independiente.
2.  **Sin Memoria Global:** Los Arcos no comparten variables globales. Se comunican exclusivamente pasando mensajes (**Togens**).
3.  **Conexiones Explícitas:** La lógica del "pensamiento" no está oculta en los pesos de una red neuronal gigante, sino que es un grafo visible y editable de flujos de datos.

```mermaid
graph LR
    A[Ojo (Sensor)] -->|Togen Visual| B(Visual Cortex)
    C[Oído (Sensor)] -->|Togen Auditivo| D(Auditory Cortex)
    B --> E{Broca's Arc}
    D --> E
    E -->|Asociación Hebbiana| F[Concepto / Significado]
```

---

## 3. El Problema del "Symbol Grounding" (La Pastilla Roja)

¿Cómo sabe una IA lo que significa "Manzana"?
*   **Enfoque Clásico (LLM):** "Manzana" es el vector `[0.2, -0.5, ...]` que suele aparecer cerca de "Roja".
*   **Enfoque Genesis (Broca's Arc):** "Manzana" es la activación simultánea de:
    1.  Un patrón en el `VisualCortex` (Forma redonda).
    2.  Un patrón en el `AuditoryCortex` (Sonido "Manzana").
    3.  Un patrón en el `SensoryCortex` (Sabor dulce).

Esto se llama **Grounding** (Anclaje). Los símbolos del lenguaje deben estar "anclados" a la realidad sensorial física.

### Implementación: "Baby Genesis"
No pre-entrenamos el lenguaje. El sistema nace mudo.
Debe aprender a hablar asociando **Togens Visuales** con **Togens Auditivos** a través de la plasticidad Hebbiana (`Wire together, fire together`).

---

## 📚 Referencias

1.  **Flow-Based Programming:** [J. Paul Morrison / Bitspark](https://medium.com/bitspark/what-the-hell-is-flow-based-programming-d9e88a6a7265)
2.  **Causal Inference & Markov Factorization:** [Ferenc Huszár (inFERENCe)](https://www.inference.vc/causal-inference-4/)
3.  **The Symbol Grounding Problem:** Stevan Harnad (1990).

---
*Documento mantenido por RGBcript & Genesis Research Team.*
