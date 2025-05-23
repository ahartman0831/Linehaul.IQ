// server/lib/gptVision.ts
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

export async function callGPTVision(imageUrl: string): Promise<{ score: string, notes: string }> {
  const res = await openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    messages: [{
      role: 'user',
      content: [
        { type: 'text', text: 'Grade this truck hook-up photo for visibility, clarity, and DOT compliance.' },
        { type: 'image_url', image_url: { url: imageUrl } }
      ]
    }],
    max_tokens: 300
  });

  return {
    score: 'A', // you'd parse this from res if needed
    notes: res.choices[0].message.content || ''
  };
}
