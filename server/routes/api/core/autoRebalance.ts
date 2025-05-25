
import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';
import fs from 'fs';
import path from 'path';

export default async function autoRebalance(req: Request, res: Response) {
  try {
    const promptPath = path.resolve(__dirname, '../../../prompts/core/gpt_rebalance_plan.txt');
    const prompt = fs.readFileSync(promptPath, 'utf-8');
    console.log('[autoRebalance] Prompt loaded:', prompt);

    res.status(200).json({ message: 'Rebalance simulated' });
  } catch (error: any) {
    console.error('[autoRebalance] Error:', error.message);
    res.status(500).json({ error: error.message });
  }
}
