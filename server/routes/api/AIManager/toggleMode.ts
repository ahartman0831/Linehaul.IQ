import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function toggleMode(req: Request, res: Response): Promise<void> {
  try {
    if (req.method === 'GET') {
      const { data, error } = await supabaseAdmin
        .from('ai_control_flags')
        .select('*')
        .eq('key', 'routing_mode')
        .single();
      if (error) throw error;
      res.status(200).json({ mode: data.value });
    }

    const { mode } = req.body;
    const { data, error } = await supabaseAdmin
      .from('ai_control_flags')
      .upsert({ key: 'routing_mode', value: mode });

    if (error) throw error;
    res.status(200).json({ mode });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
