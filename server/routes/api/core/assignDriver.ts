
import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';
import fs from 'fs';
import path from 'path';

export default async function assignDriver(req: Request, res: Response) {
  const { driverId, routeId, date } = req.body;

  if (!driverId || !routeId || !date) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const { data, error } = await supabaseAdmin.from('driver_assignments').insert([{ driver_id: driverId, route_id: routeId, assignment_date: date }]);
    if (error) throw error;

    console.log('[assignDriver] Driver assigned:', driverId, routeId, date);
    res.status(200).json({ message: 'Driver assigned successfully', data });
  } catch (error: any) {
    console.error('[assignDriver] Error:', error.message);
    res.status(500).json({ error: error.message });
  }
}
