
import { Request, Response } from 'express';
import { OpenAI } from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function generateWeeklyBrief(req: Request, res: Response) {
  try {
    const { route_id } = req.body;
    const promptTemplate = fs.readFileSync(path.resolve(__dirname, '../../../prompts/dispatch/weekly_route_digest.txt'), 'utf-8');
    const prompt = promptTemplate.replace('{{route_id}}', route_id);

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-4-turbo'
    });

    const summary = completion.choices[0]?.message?.content?.trim() || 'No summary generated';
    res.status(200).json({ summary });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
