import { OpenAI } from 'openai';

export async function callGPT(prompt: string): Promise<string> {
  // instantiate OpenAI
  const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

  const res = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'system', content: prompt }]
  });

  return res.choices[0].message.content || '';
}
