import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function tagKPI(req: Request, res: Response): Promise<void> {
  try {
    const { event_id, tags } = req.body;

    const { data, error } = await supabaseAdmin
      .from('system_kpi_events')
      .insert([{ event_id, tags, timestamp: new Date().toISOString() }]);

    if (error) throw error;
    res.status(200).json({ success: true, data });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error("KPI tag insert error:", message);
    res.status(500).json({ error: message });
  }
}
