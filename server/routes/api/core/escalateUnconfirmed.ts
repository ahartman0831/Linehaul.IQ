
import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export default async function escalateUnconfirmed(req: Request, res: Response) {
  try {
    const { data, error } = await supabaseAdmin.from('driver_assignments').select('*').eq('confirmed', false);
    if (error) throw error;

    res.status(200).json({ message: 'Escalation candidates fetched', data });
  } catch (error: any) {
    console.error('[escalateUnconfirmed] Error:', error.message);
    res.status(500).json({ error: error.message });
  }
}
