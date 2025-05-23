import { Request, Response } from 'express';
import OpenAI from 'openai';
import reviewHookPhotoPrompt from '../../../prompts/dispatch/reviewHookPhotoPrompt';

export function validateHookPhoto(req: Request, res: Response): void {
  const { photo_url, route_id, driver_id } = req.body;

  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ Missing OPENAI_API_KEY');
    res.status(500).json({ error: 'OPENAI_API_KEY not set' });
    return;
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const prompt = reviewHookPhotoPrompt({ route_id, driver_id });

  openai.chat.completions
    .create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: prompt.instruction },
        { role: 'user', content: photo_url }
      ],
      temperature: 0.2
    })
    .then((result) => {
      const gptResponse = result.choices[0]?.message?.content ?? '';
      const passed = gptResponse.toLowerCase().includes('pass');
      res.status(200).json({
        passed,
        explanation: gptResponse,
        confidence: result.usage?.completion_tokens || 0
      });
    })
    .catch((err: any) => {
      console.error('OpenAI error:', err);
      res.status(500).json({ error: 'GPT call failed', detail: err.message });
    });
}

export default validateHookPhoto;
