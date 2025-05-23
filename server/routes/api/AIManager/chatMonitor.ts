import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function chatMonitor(req: Request, res: Response): Promise<void> {
  try {
    const { data, error } = await supabaseAdmin
      .from('comms_messages')
      .select('*')
      .order('timestamp', { ascending: false })
      .limit(25);

    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    console.error("Chat monitor error:", err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
