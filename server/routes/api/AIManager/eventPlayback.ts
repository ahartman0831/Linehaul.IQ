import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function eventPlayback(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.query;
    const { data, error } = await supabaseAdmin
      .from('comms_events')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    res.status(200).json(data);
  } catch (err) {
    console.error("Playback event fetch error:", err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
