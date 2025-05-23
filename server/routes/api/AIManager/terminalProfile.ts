
import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function terminalProfile(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.query;
    const { data, error } = await supabaseAdmin
      .from('fxg_terminal_profiles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    res.status(200).json(data);
  } catch (err) {
    console.error("Terminal profile fetch error:", err);
    res.status(500).json({ error: err.message });
  }
}
