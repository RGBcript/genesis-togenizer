use crate::memory::{Message as BrainMessage, Role};
use log::{error, info};
use reqwest::Client;
use serde::{Deserialize, Serialize};
use std::error::Error;

// Estructura para enviar mensajes
#[derive(Serialize)]
struct ChatRequest {
    model: String,
    messages: Vec<ApiMessage>,
}

#[derive(Serialize, Deserialize)]
struct ApiMessage {
    role: String,
    content: String,
}

// Estructura para recibir respuestas (simplificada)
#[derive(Deserialize)]
struct ChatResponse {
    choices: Vec<Choice>,
}

#[derive(Deserialize)]
struct Choice {
    message: ApiMessage,
}

pub struct MasterProxy {
    client: Client,
    api_url: String,
    model_name: String,
}

impl MasterProxy {
    // Constructor: Le dices a dónde conectar (ej: localhost:11434 para Ollama)
    pub fn new(url: &str, model: &str) -> Self {
        Self {
            client: Client::new(),
            api_url: url.to_string(),
            model_name: model.to_string(),
        }
    }

    // Función asíncrona para consultar al maestro
    pub async fn ask(&self, history: &[BrainMessage]) -> Result<String, Box<dyn Error>> {
        info!(
            "Consultando al Maestro [{}] en {}",
            self.model_name, self.api_url
        );

        // Convertir BrainMessage a ApiMessage
        let api_messages: Vec<ApiMessage> = history.iter().map(|msg| {
            ApiMessage {
                role: match msg.role {
                    Role::User => "user".to_string(),
                    Role::Assistant => "assistant".to_string(),
                },
                content: msg.content.clone(),
            }
        }).collect();

        let request = ChatRequest {
            model: self.model_name.clone(),
            messages: api_messages,
        };

        // Hacemos el POST
        let res = self
            .client
            .post(&self.api_url)
            .json(&request)
            .send()
            .await?;

        if res.status().is_success() {
            let body: ChatResponse = res.json().await?;
            if let Some(choice) = body.choices.first() {
                return Ok(choice.message.content.clone());
            }
        }

        error!("El maestro falló o no respondió");
        Ok("Silencio... (Error de conexión)".to_string())
    }
}
