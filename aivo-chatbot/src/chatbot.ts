import { ConversationManager } from './conversation';
import { UIManager } from './ui';
import { ChatData, ChatbotConfig } from './types';

export class AivoChatbot {
  private conversation: ConversationManager;
  private ui: UIManager;
  private isInitialized = false;

  constructor(
    private chatData: ChatData,
    private config: ChatbotConfig = {}
  ) {
    this.conversation = new ConversationManager(chatData);
    this.ui = new UIManager({
      iconUrl: config.iconUrl || '/chatbot/icon.png',
      primaryColor: config.primaryColor || '#FF0000',
    });
  }

  init(): void {
    if (this.isInitialized) return;

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }

    this.isInitialized = true;
  }

  private setup(): void {
    this.ui.init();
    this.attachEventListeners();
    this.showWelcomeMessage();
  }

  private attachEventListeners(): void {
    // Toggle chat on button click
    const floatingButton = this.ui.getFloatingButton();
    if (floatingButton) {
      floatingButton.addEventListener('click', () => {
        this.ui.toggleChat();
      });
    }

    // Close button
    const closeButton = this.ui.getCloseButton();
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        this.ui.closeChat();
      });
    }

    // Reset button
    const resetButton = this.ui.getResetButton();
    if (resetButton) {
      resetButton.addEventListener('click', () => {
        this.reset();
      });
    }

    // Option buttons (event delegation)
    const messagesContainer = this.ui.getMessagesContainer();
    if (messagesContainer) {
      messagesContainer.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const button = target.closest('.aivo-option-button') as HTMLElement;

        if (button && button.dataset.optionId) {
          this.handleOptionClick(button.dataset.optionId, button.textContent || '');
        }
      });
    }
  }

  private showWelcomeMessage(): void {
    const welcomeNode = this.conversation.getCurrentNode();

    if (welcomeNode && welcomeNode.text) {
      this.ui.addBotMessage(welcomeNode.text, welcomeNode.options);
    }
  }

  private handleOptionClick(optionId: string, optionText: string): void {
    // Remove previous option buttons
    this.ui.removeLastOptions();

    // Add user message
    const cleanText = optionText.trim();
    this.ui.addUserMessage(cleanText);

    // Show typing indicator
    this.ui.showTypingIndicator();

    // Get next node
    const nextNode = this.conversation.selectOption(optionId);

    // Add bot response after typing delay (1 second)
    setTimeout(() => {
      this.ui.hideTypingIndicator();

      if (nextNode && nextNode.text) {
        this.ui.addBotMessage(nextNode.text, nextNode.options);
      }
    }, 1000);
  }

  reset(): void {
    this.conversation.reset();
    this.ui.clearMessages();
    this.showWelcomeMessage();
  }
}
