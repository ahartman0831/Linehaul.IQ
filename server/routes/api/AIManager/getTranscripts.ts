
import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function getTranscripts(req: Request, res: Response): Promise<void> {
  try {
    const { limit = 10 } = req.query;
    const { data, error } = await supabaseAdmin
      .from('voice_transcripts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(Number(limit));

    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    console.error("Transcript fetch error:", err);
    res.status(500).json({ error: err.message });
  }
}
