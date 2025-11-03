import { ChatOption, ChatMessage } from './types';

export class UIManager {
  private container: HTMLElement | null = null;
  private chatWindow: HTMLElement | null = null;
  private messagesContainer: HTMLElement | null = null;
  private floatingButton: HTMLElement | null = null;

  constructor(private config: { iconUrl: string; primaryColor: string }) {}

  init(): void {
    this.createFloatingButton();
    this.createChatWindow();
  }

  private createFloatingButton(): void {
    this.floatingButton = document.createElement('div');
    this.floatingButton.id = 'aivo-chatbot-button';
    this.floatingButton.innerHTML = `
      <img src="${this.config.iconUrl}" alt="AIVO Chatbot" />
      <div class="aivo-chat-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
    `;
    document.body.appendChild(this.floatingButton);
  }

  private createChatWindow(): void {
    this.container = document.createElement('div');
    this.container.id = 'aivo-chatbot-container';
    this.container.className = 'aivo-chatbot-hidden';

    this.container.innerHTML = `
      <div class="aivo-chatbot-window">
        <div class="aivo-chatbot-header">
          <div class="aivo-chatbot-header-content">
            <img src="${this.config.iconUrl}" alt="AIVO" class="aivo-chatbot-avatar" />
            <div class="aivo-chatbot-header-text">
              <span class="aivo-chatbot-title">HERO AIVO</span>
              <span class="aivo-chatbot-status">オンライン</span>
            </div>
          </div>
          <div class="aivo-chatbot-header-actions">
            <button class="aivo-chatbot-reset" id="aivo-chatbot-reset" title="会話をリセット">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M3 21v-5h5"></path>
              </svg>
            </button>
            <button class="aivo-chatbot-close" id="aivo-chatbot-close" title="閉じる">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        <div class="aivo-chatbot-messages" id="aivo-chatbot-messages"></div>
        <div class="aivo-chatbot-footer">
          <span class="aivo-chatbot-footer-text">Powered by HERO AIVO</span>
        </div>
      </div>
    `;

    document.body.appendChild(this.container);
    this.messagesContainer = document.getElementById('aivo-chatbot-messages');
  }

  toggleChat(): void {
    if (!this.container) return;

    const isHidden = this.container.classList.contains('aivo-chatbot-hidden');

    if (isHidden) {
      this.container.classList.remove('aivo-chatbot-hidden');
      this.container.classList.add('aivo-chatbot-visible');
      this.floatingButton?.classList.add('aivo-chatbot-button-hidden');
    } else {
      this.container.classList.remove('aivo-chatbot-visible');
      this.container.classList.add('aivo-chatbot-hidden');
      this.floatingButton?.classList.remove('aivo-chatbot-button-hidden');
    }
  }

  closeChat(): void {
    if (!this.container) return;
    this.container.classList.remove('aivo-chatbot-visible');
    this.container.classList.add('aivo-chatbot-hidden');
    this.floatingButton?.classList.remove('aivo-chatbot-button-hidden');
  }

  addBotMessage(text: string, options?: ChatOption[]): void {
    if (!this.messagesContainer) return;

    const messageEl = document.createElement('div');
    messageEl.className = 'aivo-message aivo-message-bot';

    const bubbleEl = document.createElement('div');
    bubbleEl.className = 'aivo-message-bubble aivo-message-bubble-bot';

    // Convert markdown-like formatting to HTML
    const formattedText = this.formatText(text);
    bubbleEl.innerHTML = formattedText;

    messageEl.appendChild(bubbleEl);
    this.messagesContainer.appendChild(messageEl);

    if (options && options.length > 0) {
      const optionsEl = this.createOptionsElement(options);
      this.messagesContainer.appendChild(optionsEl);
    }

    this.scrollToBottom();
  }

  addUserMessage(text: string): void {
    if (!this.messagesContainer) return;

    const messageEl = document.createElement('div');
    messageEl.className = 'aivo-message aivo-message-user';

    const bubbleEl = document.createElement('div');
    bubbleEl.className = 'aivo-message-bubble aivo-message-bubble-user';
    bubbleEl.textContent = text;

    messageEl.appendChild(bubbleEl);
    this.messagesContainer.appendChild(messageEl);

    this.scrollToBottom();
  }

  private createOptionsElement(options: ChatOption[]): HTMLElement {
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'aivo-options-container';

    options.forEach((option) => {
      const button = document.createElement('button');
      button.className = 'aivo-option-button';
      button.dataset.optionId = option.id;
      button.innerHTML = `${option.icon ? option.icon + ' ' : ''}${option.label}`;
      optionsContainer.appendChild(button);
    });

    return optionsContainer;
  }

  private formatText(text: string): string {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>')
      .replace(/^(.*)$/, '<p>$1</p>')
      .replace(/<p><\/p>/g, '')
      .replace(/^<p>(.*)<\/p>$/, '$1');
  }

  removeLastOptions(): void {
    if (!this.messagesContainer) return;
    const lastOptions = this.messagesContainer.querySelector('.aivo-options-container:last-child');
    if (lastOptions) {
      lastOptions.remove();
    }
  }

  clearMessages(): void {
    if (this.messagesContainer) {
      this.messagesContainer.innerHTML = '';
    }
  }

  private scrollToBottom(): void {
    if (this.messagesContainer) {
      setTimeout(() => {
        this.messagesContainer!.scrollTop = this.messagesContainer!.scrollHeight;
      }, 100);
    }
  }

  getFloatingButton(): HTMLElement | null {
    return this.floatingButton;
  }

  getCloseButton(): HTMLElement | null {
    return document.getElementById('aivo-chatbot-close');
  }

  getMessagesContainer(): HTMLElement | null {
    return this.messagesContainer;
  }

  getResetButton(): HTMLElement | null {
    return document.getElementById('aivo-chatbot-reset');
  }

  showTypingIndicator(): void {
    if (!this.messagesContainer) return;

    const typingEl = document.createElement('div');
    typingEl.className = 'aivo-message aivo-message-bot';
    typingEl.id = 'aivo-typing-indicator';

    const bubbleEl = document.createElement('div');
    bubbleEl.className = 'aivo-message-bubble aivo-message-bubble-bot aivo-typing-bubble';
    bubbleEl.innerHTML = `
      <div class="aivo-typing-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;

    typingEl.appendChild(bubbleEl);
    this.messagesContainer.appendChild(typingEl);
    this.scrollToBottom();
  }

  hideTypingIndicator(): void {
    const typingEl = document.getElementById('aivo-typing-indicator');
    if (typingEl) {
      typingEl.remove();
    }
  }
}
