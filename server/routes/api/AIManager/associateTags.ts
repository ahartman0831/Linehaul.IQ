import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function associateTags(req: Request, res: Response): Promise<void> {
  try {
    const { message_id, kpi_tags } = req.body;

    const { data, error } = await supabaseAdmin
      .from('digest_meta_kpi')
      .insert([{ message_id, tags: kpi_tags }]);

    if (error) throw error;

    res.status(200).json({ success: true, data });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
