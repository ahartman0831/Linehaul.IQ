import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function getWeeklySummaries(req: Request, res: Response): Promise<void> {
  try {
    const { week } = req.query;
    const { data, error } = await supabaseAdmin
      .from('summaries_weekly')
      .select('*')
      .gte('created_at', week); // assuming week = ISO string

    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    console.error("Weekly summaries fetch error:", err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
