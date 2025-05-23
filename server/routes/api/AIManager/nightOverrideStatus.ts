import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function nightOverrideStatus(req: Request, res: Response): Promise<void> {
  try {
    if (req.method === 'GET') {
      const { data, error } = await supabaseAdmin
        .from('ai_control_flags')
        .select('*')
        .eq('key', 'night_override')
        .single();

      if (error) throw error;
      res.status(200).json({ enabled: data?.value === 'true' });
    } else if (req.method === 'POST') {
      const { enabled } = req.body;
      const { data, error } = await supabaseAdmin
        .from('ai_control_flags')
        .upsert({ key: 'night_override', value: enabled ? 'true' : 'false' });

      if (error) throw error;
      res.status(200).json({ enabled });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
