
import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export default async function confirmRoute(req: Request, res: Response) {
  const { driverId, routeId, confirmation } = req.body;

  if (!driverId || !routeId || !confirmation) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const { data, error } = await supabaseAdmin.from('driver_assignments').update({ confirmed: confirmation }).match({ driver_id: driverId, route_id: routeId });
    if (error) throw error;

    console.log('[confirmRoute] Confirmation updated:', driverId, routeId);
    res.status(200).json({ message: 'Route confirmation updated', data });
  } catch (error: any) {
    console.error('[confirmRoute] Error:', error.message);
    res.status(500).json({ error: error.message });
  }
}
