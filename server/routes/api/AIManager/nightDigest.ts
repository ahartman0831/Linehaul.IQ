import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function nightDigest(req: Request, res: Response): Promise<void> {
  try {
    const { data, error } = await supabaseAdmin
      .from('summaries_night')
      .select('*')
      .order('generated_at', { ascending: false })
      .limit(1)
      .single();

    if (error) throw error;

    res.status(200).json(data);
  } catch (err) {
    console.error("Night digest fetch error:", err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
