
import { Request, Response } from 'express';
import { OpenAI } from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function getPhotoScorecard(req: Request, res: Response) {
  try {
    const { photo_url } = req.body;
    const promptTemplate = fs.readFileSync(path.resolve(__dirname, '../../../prompts/dispatch/hook_photo_scorer.txt'), 'utf-8');
    const prompt = promptTemplate.replace('{{photo_url}}', photo_url);

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-4-turbo'
    });

    const scorecard = completion.choices[0]?.message?.content?.trim() || 'No score generated';
    res.status(200).json({ scorecard });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
