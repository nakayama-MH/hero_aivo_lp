export interface ChatOption {
  id: string;
  label: string;
  icon?: string;
}

export interface ChatNode {
  id: string;
  type: 'message' | 'redirect';
  text?: string;
  options?: ChatOption[];
}

export interface ChatData {
  [key: string]: ChatNode;
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
  options?: ChatOption[];
}

export interface ChatbotConfig {
  iconUrl?: string;
  primaryColor?: string;
  botName?: string;
  welcomeMessage?: string;
}
