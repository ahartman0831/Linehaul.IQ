
import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function breakdown(req: Request, res: Response): Promise<void> {
  try {
    const { driver_id, location, notes } = req.body;
    const { data, error } = await supabaseAdmin
      .from('maintenance_issues')
      .insert([{ driver_id, location, notes, type: 'Breakdown', reported_at: new Date().toISOString() }]);

    if (error) throw error;
    res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Breakdown intake error:", err);
    res.status(500).json({ error: err.message });
  }
}
