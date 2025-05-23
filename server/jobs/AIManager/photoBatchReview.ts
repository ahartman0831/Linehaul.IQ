
import { supabaseAdmin } from '../../lib/supabaseAdmin';
import { callGPTVision } from '../../lib/gptVision';

export async function photoBatchReview(): Promise<void> {
  const { data: photos } = await supabaseAdmin
    .from('ai_photo_grades')
    .select('*')
    .eq('grade', null)
    .limit(20);

  for (const photo of photos) {
    const grade = await callGPTVision(photo.photo_url);
    await supabaseAdmin
      .from('ai_photo_grades')
      .update({ grade: grade.score, feedback: grade.notes })
      .eq('id', photo.id);
  }

  console.log('📸 Hook-up/pretrip photo grading complete');
}
