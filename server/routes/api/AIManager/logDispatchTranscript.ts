
import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function logDispatchTranscript(req: Request, res: Response): Promise<void> {
  try {
    const { call_id, text, summary, score, tone } = req.body;

    const { data, error } = await supabaseAdmin
      .from('voice_transcripts')
      .insert([{ id: call_id, text, summary, score, tone, created_at: new Date().toISOString() }]);

    if (error) throw error;
    res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Transcript log error:", err);
    res.status(500).json({ error: err.message });
  }
}
