
import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function escalate(req: Request, res: Response): Promise<void> {
  try {
    const { eventType, summary, urgency } = req.body;

    const { data, error } = await supabaseAdmin
      .from('escalation_log')
      .insert([{ event_type: eventType, summary, urgency, created_at: new Date().toISOString() }]);

    if (error) throw error;

    console.log("Escalation logged:", data);
    res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Error escalating:", err);
    res.status(500).json({ error: err.message });
  }
}
