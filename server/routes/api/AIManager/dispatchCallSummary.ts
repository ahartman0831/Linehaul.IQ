import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function dispatchCallSummary(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.query;
    const { data, error } = await supabaseAdmin
      .from('voice_transcripts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching call summary:", err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
