import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function ingestMessage(req: Request, res: Response): Promise<void> {
  try {
    const { source, message, channel, timestamp } = req.body;

    const { data, error } = await supabaseAdmin
      .from('comms_messages')
      .insert([{ source, message, channel, timestamp }]);

    if (error) throw error;

    console.log("Message ingested:", data);
    res.status(200).json({ status: 'success', data });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
