import { Request, Response } from 'express';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export async function getPhotoScorecard(req: Request, res: Response): Promise<void> {
  const { driverId } = req.query;

  const { data, error } = await supabaseAdmin
    .from('dispatch_scores')
    .select('*, dispatch_photos(*)')
    .eq('dispatch_photos.driver_id', driverId);

  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data);
}
