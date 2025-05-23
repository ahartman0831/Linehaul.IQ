import { Request, Response } from 'express';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { generateETAMessage } from '@/backend/gpt/writeWeeklyRouteBrief';

export async function updateETA(req: Request, res: Response): Promise<void> {
  const { dispatchId, newETA, reason } = req.body;

  const gptMessage = await generateETAMessage({ eta: newETA, reason });

  const { error } = await supabaseAdmin.from('eta_updates').insert([
    { dispatch_id: dispatchId, eta_time: newETA, eta_reason: gptMessage }
  ]);

  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ message: gptMessage });
}
