
import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function getEngagementScores(req: Request, res: Response): Promise<void> {
  try {
    const { data, error } = await supabaseAdmin.from('driver_engagement_state').select('*');
    if (error) throw error;

    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching engagement scores:", err);
    res.status(500).json({ error: err.message });
  }
}
