
import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function scheduleDowntime(req: Request, res: Response): Promise<void> {
  try {
    const { unit_id, start, end, reason } = req.body;
    const { data, error } = await supabaseAdmin
      .from('downtime_events')
      .insert([{ unit_id, start, end, reason }]);

    if (error) throw error;
    res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Downtime scheduling error:", err);
    res.status(500).json({ error: err.message });
  }
}
