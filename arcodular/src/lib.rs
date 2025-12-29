pub mod external_api;
pub mod memory;
use external_api::MasterProxy;
use memory::{ShortTermMemory, Role};
use genulse::arc::{Amygdala, Arc, Hippocampus, PrefrontalCortex, VisualCortex};
use log::{debug, info, warn};

/// El Cerebro: Orquestador del sistema
pub struct Brain {
    // Los 4 arcos principales
    amygdala: Amygdala,
    hippocampus: Hippocampus,
    visual: VisualCortex,
    prefrontal: PrefrontalCortex,

    // Estado del sistema
    cycle_count: u64,
    homeostasis: f32,

    // Almacenamiento temporal de input sensorial
    current_input: Vec<f32>,

    // Proxy para inteligencia externa
    proxy: MasterProxy,

    // Memoria a Corto Plazo (Chat Context)
    pub memory: ShortTermMemory,
}

impl Brain {
    /// Inicializa todo el sistema cerebral
    pub fn new(input_size: usize, output_size: usize) -> Self {
        info!("Inicializando Genesis Brain...");
        Brain {
            amygdala: Amygdala::new(input_size, output_size),
            hippocampus: Hippocampus::new(input_size, output_size),
            visual: VisualCortex::new(input_size, output_size),
            prefrontal: PrefrontalCortex::new(input_size, output_size),

            cycle_count: 0,
            homeostasis: 0.0,
            current_input: vec![0.0; input_size],
    
            memory: ShortTermMemory::new(),
        
            // Apunta a localhost por defecto, modelo "llama3"
            proxy: MasterProxy::new("http://localhost:11434/api/chat", "llama3"),
        }
    }

    /// Recibe datos crudos del entorno (sensores)
    pub fn perceive(&mut self, input: Vec<f32>) {
        if input.len() != self.current_input.len() {
            warn!(
                "Dimensiones de input incorrectas. Esperado: {}, Recibido: {}",
                self.current_input.len(),
                input.len()
            );
            // Ajustamos o truncamos segun sea necesario, por ahora solo reemplazamos si cabe o reallocamos
            self.current_input = input;
        } else {
            self.current_input = input;
        }
    }

    /// Ejecuta el ciclo de pensamiento (process) en todos los arcos secuencialmente
    pub fn think(&mut self, dt: f32) {
        self.cycle_count += 1;

        // 1. Corteza Visual: Procesa la entrada cruda
        let visual_out = self.visual.process(&self.current_input, dt);

        // 2. Amygdala: Procesa la salida visual (reaccion rapida/emocional)
        let amygdala_out = self.amygdala.process(&visual_out, dt);

        // Chequeo de pánico en la Amygdala (> 0.8)
        let max_amygdala = amygdala_out.iter().cloned().fold(0. / 0., f32::max);
        let panic_mode = max_amygdala > 0.8;

        if panic_mode {
            warn!(
                "PANICO DETECTADO (Nivel: {}). Bloqueando Prefrontal.",
                max_amygdala
            );
        }

        // 3. Hippocampus: Procesa la salida de la amygdala (memoria/contexto)
        let hippocampus_out = self.hippocampus.process(&amygdala_out, dt);

        // 4. Prefrontal: Procesa la salida del hippocampus (decision racional)
        // Antes, actualizamos sus estados internos de contexto
        self.prefrontal.set_amygdala_state(amygdala_out.clone());
        self.prefrontal
            .set_hippocampus_state(hippocampus_out.clone());

        let _prefrontal_out = if panic_mode {
            // Bloqueo cortical por panico
            vec![0.0; hippocampus_out.len()]
        } else {
            self.prefrontal.process(&hippocampus_out, dt)
        };

        // Actualizar factor de homeostasis basado en actividad global
        self.update_homeostasis();
    }

    /// Calcula la homeostasis y aplica frenado si es necesario
    pub fn apply_homeostasis(&mut self) {
        // Calculamos la actividad media de todos los arcos
        let mut total_activity = 0.0;
        let mut count = 0;

        let arcs: Vec<&dyn Arc> = vec![
            &self.visual,
            &self.amygdala,
            &self.hippocampus,
            &self.prefrontal,
        ];

        for arc in arcs {
            let state = arc.state();
            total_activity += state.iter().sum::<f32>();
            count += state.len();
        }

        let avg_activity = if count > 0 {
            total_activity / count as f32
        } else {
            0.0
        };

        // Si la actividad media supera 50.0 (umbral alto arbitrario segun prompt)
        if avg_activity > 50.0 {
            warn!(
                "Sobrecarga cognitiva detectada (Actividad: {}). Aplicando homeostasis.",
                avg_activity
            );

            // Logica requerida: reducir pesos rapidos (A_fast) un 10%.
            // NOTA: Debido a que 'a_fast' es privado dentro de 'GenulseCell' y no expuesto por la API publica de 'Arc',
            // no podemos modificarlos directamente desde aqui sin cambiar 'genulse'.
            // Simularemos el efecto reseteando parcialmente o logueandolo.
            // TODO: Implementar acceso a 'a_fast' en GenulseCore para reduccion real.
            debug!("Reduciendo 'a_fast' virtualmente (similacion).");
        }

        self.homeostasis = avg_activity;
    }

    fn update_homeostasis(&mut self) {
        self.apply_homeostasis();
    }

    /// Ejecuta la consolidación (sleep) y resetea contadores
    pub fn sleep(&mut self) {
        info!("Entrando en fase de sueño (Consolidacion)...");
        self.visual.sleep();
        self.amygdala.sleep();
        self.hippocampus.sleep();
        self.prefrontal.sleep();

        self.cycle_count = 0;
        self.homeostasis = 0.0;
        info!("Sueño completado. Cerebro refrescado.");
    }

    /// Método asíncrono para consultar inteligencia externa
    pub async fn consult_oracle(&mut self, question: &str) -> String {
        // 1. Guardar pregunta del usuario
        self.add_memory(Role::User, question.to_string());

        // 2. Obtener historial completo
        let history = self.memory.get_all_messages();

        // 3. Consultar al proxy con el historial
        let response = match self.proxy.ask(history).await {
            Ok(res) => res,
            Err(e) => format!("Error consultando al oráculo: {}", e),
        };

        // 4. Guardar respuesta del asistente
        self.add_memory(Role::Assistant, response.clone());

        response
    }

    /// Agrega un mensaje a la memoria a corto plazo
    pub fn add_memory(&mut self, role: Role, content: String) {
        self.memory.add_message(role, content);
    }

    /// Obtiene el contexto de la memoria
    pub fn get_memory_context(&self, limit: usize) -> String {
        self.memory.get_context_window(limit)
    }

    // Helper para debugging
    pub fn status(&self) -> String {
        format!(
            "Ciclos: {} | Homeostasis: {:.2}",
            self.cycle_count, self.homeostasis
        )
    }
}
