import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function getDispatches(req: Request, res: Response): Promise<void> {
  const { data, error } = await supabaseAdmin
    .from('dispatches')
    .select('*')
    .neq('status', 'complete');

  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data);
}
