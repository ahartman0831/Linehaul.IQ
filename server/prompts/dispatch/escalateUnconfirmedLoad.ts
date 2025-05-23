import { OpenAI } from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateEscalationSummary(route: any) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are a dispatch escalation assistant. Write a human-readable summary for a load escalation.'
      },
      {
        role: 'user',
        content: JSON.stringify(route)
      }
    ],
    temperature: 0.25
  });

  return response.choices[0].message.content;
}
