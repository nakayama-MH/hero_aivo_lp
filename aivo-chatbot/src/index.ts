import { AivoChatbot } from './chatbot';
import { ChatData } from './types';
import './styles.css';

// Import QA data
import chatDataJson from '../knowledge/qa-data.json';

// Type assertion for JSON data
const chatData = chatDataJson as ChatData;

// Initialize chatbot
const chatbot = new AivoChatbot(chatData, {
  iconUrl: '/icon.png',
  primaryColor: '#FF0000',
  botName: 'HERO AIVO',
});

// Auto-initialize
chatbot.init();

// Export for global access (optional)
(window as any).AivoChatbot = chatbot;
