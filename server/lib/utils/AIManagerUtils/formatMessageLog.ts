
export function formatMessageLog(messages: any[]): string {
  return messages.map(msg => `[${msg.timestamp}] ${msg.channel}: ${msg.content}`).join('\n');
}
