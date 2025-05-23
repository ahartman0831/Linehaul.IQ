import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function evaluateBehaviorFlag(req: Request, res: Response): Promise<void> {
  try {
    const { driver_id, message, scoreDelta } = req.body;

    const { data, error } = await supabaseAdmin
      .from('driver_behavior_logs')
      .insert([{ driver_id, message, score_delta: scoreDelta }]);

    if (error) throw error;

    res.status(200).json({ status: 'success', data });
  } catch (err) {
    console.error("Error logging behavior flag:", err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
