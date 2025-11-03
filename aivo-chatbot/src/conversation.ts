import { ChatData, ChatNode, ChatMessage } from './types';

export class ConversationManager {
  private chatData: ChatData;
  private messageHistory: ChatMessage[] = [];
  private currentNodeId: string = 'welcome';

  constructor(chatData: ChatData) {
    this.chatData = chatData;
  }

  getCurrentNode(): ChatNode {
    return this.chatData[this.currentNodeId];
  }

  selectOption(optionId: string): ChatNode {
    const node = this.chatData[optionId];

    if (!node) {
      console.error(`Node ${optionId} not found`);
      return this.chatData['welcome'];
    }

    // Handle redirect nodes
    if (node.type === 'redirect' && node.id !== optionId) {
      this.currentNodeId = node.id;
      return this.chatData[node.id];
    }

    this.currentNodeId = optionId;
    return node;
  }

  addMessage(message: ChatMessage): void {
    this.messageHistory.push(message);
  }

  getHistory(): ChatMessage[] {
    return this.messageHistory;
  }

  reset(): void {
    this.currentNodeId = 'welcome';
    this.messageHistory = [];
  }

  hasHistory(): boolean {
    return this.messageHistory.length > 0;
  }
}
