import { Request, Response } from 'express';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function logHookPhotoSecure(req: Request, res: Response): Promise<void> {
  const { driver_id, route_id, photo_url } = req.body;

  if (!driver_id || !route_id || !photo_url) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const { error } = await supabase.from('hook_photos').insert({
    driver_id,
    route_id,
    photo_url,
    submitted_at: new Date().toISOString()
  });

  if (error) {
    console.error('❌ Supabase insert error:', error);
    return res.status(500).json({ error: 'Insert failed', detail: error.message });
  }

  console.log('✅ Hook photo logged securely for', driver_id, photo_url);
  res.status(200).json({ status: 'success' });
}
