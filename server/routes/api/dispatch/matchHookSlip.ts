
import { Request, Response } from 'express';
import { OpenAI } from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function matchHookSlip(req: Request, res: Response) {
  try {
    const { slip_text, dispatch_id } = req.body;
    const promptTemplate = fs.readFileSync(path.resolve(__dirname, '../../../prompts/dispatch/hook_slip_matcher.txt'), 'utf-8');
    const prompt = promptTemplate.replace('{{slip_text}}', slip_text).replace('{{dispatch_id}}', dispatch_id);

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-4-turbo'
    });

    const matchResult = completion.choices[0]?.message?.content?.trim() || 'No match result';
    res.status(200).json({ matchResult });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
