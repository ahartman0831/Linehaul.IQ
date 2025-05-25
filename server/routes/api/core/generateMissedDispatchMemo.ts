
import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export default async function generateMissedDispatchMemo(req: Request, res: Response) {
  try {
    const promptPath = path.resolve(__dirname, '../../../prompts/core/routeDisruptionMemo.txt');
    const prompt = fs.readFileSync(promptPath, 'utf-8');
    console.log('[generateMissedDispatchMemo] Prompt loaded:', prompt);

    res.status(200).json({ message: 'Memo generated' });
  } catch (error: any) {
    console.error('[generateMissedDispatchMemo] Error:', error.message);
    res.status(500).json({ error: error.message });
  }
}
