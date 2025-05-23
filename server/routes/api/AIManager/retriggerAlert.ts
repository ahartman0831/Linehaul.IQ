
import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function retriggerAlert(req: Request, res: Response): Promise<void> {
  try {
    const { data, error } = await supabaseAdmin
      .from('retry_log')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(25);

    if (error) throw error;

    res.status(200).json(data);
  } catch (err) {
    console.error("Error retrieving retry log:", err);
    res.status(500).json({ error: err.message });
  }
}
