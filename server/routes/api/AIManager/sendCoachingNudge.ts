import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function sendCoachingNudge(req: Request, res: Response): Promise<void> {
  try {
    const { driver_id, tip } = req.body;
    const { data, error } = await supabaseAdmin
      .from('coaching_sessions')
      .insert([{ driver_id, tip, delivered_at: new Date().toISOString() }]);

    if (error) throw error;

    console.log("Coaching nudge logged:", data);
    res.status(200).json({ status: 'success', data });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
