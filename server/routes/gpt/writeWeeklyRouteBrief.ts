import { OpenAI } from 'openai';
import dotenv from 'dotenv';


if (!process.env.OPENAI_API_KEY) throw new Error('OPENAI_API_KEY is NOT loaded!');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateETAMessage(context: { eta: string, reason: string }) {
  const { eta, reason } = context;
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are a dispatch assistant. Generate a professional ETA update.'
      },
      {
        role: 'user',
        content: `The new ETA is ${eta}. Reason: ${reason}.`
      }
    ],
    temperature: 0.3
  });

  return response.choices[0].message.content;
}
