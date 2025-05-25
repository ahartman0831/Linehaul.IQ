
import { Request, Response } from 'express';
import { OpenAI } from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function parseHookSlip(req: Request, res: Response) {
  try {
    const { image_url } = req.body;
    const promptTemplate = fs.readFileSync(path.resolve(__dirname, '../../../prompts/dispatch/hook_slip_parser.txt'), 'utf-8');
    const prompt = promptTemplate.replace('{{image_url}}', image_url);

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-4-turbo'
    });

    const parsedText = completion.choices[0]?.message?.content?.trim() || 'No text extracted';
    res.status(200).json({ parsedText });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
