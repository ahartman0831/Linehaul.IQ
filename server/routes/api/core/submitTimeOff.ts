
import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export default async function submitTimeOff(req: Request, res: Response) {
  const { driverId, startDate, endDate, reason } = req.body;

  if (!driverId || !startDate || !endDate) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const { data, error } = await supabaseAdmin.from('pto_requests').insert([{ driver_id: driverId, start_date: startDate, end_date: endDate, reason }]);
    if (error) throw error;

    console.log('[submitTimeOff] PTO submitted:', driverId, startDate, endDate);
    res.status(200).json({ message: 'PTO submitted successfully', data });
  } catch (error: any) {
    console.error('[submitTimeOff] Error:', error.message);
    res.status(500).json({ error: error.message });
  }
}
