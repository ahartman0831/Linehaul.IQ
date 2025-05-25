
import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export default async function driverAvailability(req: Request, res: Response) {
  try {
    const { data, error } = await supabaseAdmin.from('driver_availability').select('*');
    if (error) throw error;

    res.status(200).json({ data });
  } catch (error: any) {
    console.error('[driverAvailability] Error:', error.message);
    res.status(500).json({ error: error.message });
  }
}
