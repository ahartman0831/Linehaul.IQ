
import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function sendWeeklyDigest(req: Request, res: Response): Promise<void> {
  try {
    const { driver_id, summary, tip } = req.body;

    const { data, error } = await supabaseAdmin
      .from('summaries_weekly')
      .insert([{ driver_id, summary, tip, created_at: new Date().toISOString() }]);

    if (error) throw error;

    console.log("Weekly digest stored:", data);
    res.status(200).json({ status: 'success', data });
  } catch (err) {
    console.error("Weekly digest error:", err);
    res.status(500).json({ status: 'error', error: err.message });
  }
}
