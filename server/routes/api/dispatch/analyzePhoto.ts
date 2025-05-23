import { Request, Response } from 'express';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { analyzeHookPhoto } from '@/backend/gpt/reviewHookPhoto';
import { processPhoto } from '@/lib/utils/photoProcessor';

export async function analyzePhoto(req: Request, res: Response): Promise<void> {
  const { photoUrl, dispatchId, driverId } = req.body;

  const exifData = await processPhoto(photoUrl);
  const gptResult = await analyzeHookPhoto(photoUrl, exifData);

  const { data: photoRecord, error: insertError } = await supabaseAdmin
    .from('dispatch_photos')
    .insert([{ photo_url: photoUrl, dispatch_id: dispatchId, driver_id: driverId, validated: true, validation_notes: gptResult.notes }])
    .select()
    .single();

  if (insertError) return res.status(500).json({ error: insertError.message });

  await supabaseAdmin.from('dispatch_scores').insert([{
    photo_id: photoRecord.id,
    clarity_score: gptResult.clarity,
    seal_score: gptResult.seal,
    dolly_lock_score: gptResult.dolly,
    trailer_match_score: gptResult.trailer,
    gpt_feedback: gptResult.feedback
  }]);

  res.status(200).json({ success: true, result: gptResult });
}
