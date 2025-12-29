#[derive(Debug, Clone)]
pub enum Role {
    User,
    Assistant,
}

#[derive(Debug, Clone)]
pub struct Message {
    pub role: Role,
    pub content: String,
}

pub struct ShortTermMemory {
    messages: Vec<Message>,
}

impl ShortTermMemory {
    pub fn new() -> Self {
        Self { messages: Vec::new() }
    }

    pub fn add_message(&mut self, role: Role, content: String) {
        self.messages.push(Message { role, content });
    }

    pub fn get_all_messages(&self) -> &[Message] {
        &self.messages
    }

    pub fn get_context_window(&self, limit: usize) -> String {
        let start = if self.messages.len() > limit {
            self.messages.len() - limit
        } else {
            0
        };

        self.messages[start..]
            .iter()
            .map(|msg| {
                let role_str = match msg.role {
                    Role::User => "User",
                    Role::Assistant => "Assistant",
                };
                format!("{}: {}", role_str, msg.content)
            })
            .collect::<Vec<String>>()
            .join("\n")
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_memory_context_window() {
        let mut memory = ShortTermMemory::new();
        
        memory.add_message(Role::User, "Hola".to_string());
        memory.add_message(Role::Assistant, "Hola, soy Genesis".to_string());
        memory.add_message(Role::User, "¿Cómo estás?".to_string());

        // Test limit 2 (debería traer los últimos 2)
        let context = memory.get_context_window(2);
        // Verificamos que contenga los últimos 2 mensajes
        assert!(context.contains("Assistant: Hola, soy Genesis"));
        assert!(context.contains("User: ¿Cómo estás?"));
        // No debería contener el primero pegado al principio (aunque contains es laxo, verificamos líneas)
        let lines: Vec<&str> = context.lines().collect();
        assert_eq!(lines.len(), 2);
        assert_eq!(lines[0], "Assistant: Hola, soy Genesis");

        // Test limit mayor que historial
        let full_context = memory.get_context_window(10);
        assert_eq!(full_context.lines().count(), 3);
    }
}
