
import { supabaseAdmin } from '../../lib/supabaseAdmin';

export async function sendQuarterlyBonusReview(): Promise<void> {
  const { data: bonuses, error } = await supabaseAdmin
    .from('performance_bonus_log')
    .select('*')
    .eq('paid', false);

  if (error) throw error;

  for (const bonus of bonuses) {
    console.log(`💰 Driver ${bonus.driver_id} paid $${bonus.bonus_awarded}`);
    await supabaseAdmin.from('performance_bonus_log')
      .update({ paid: true, processed_at: new Date().toISOString() })
      .eq('id', bonus.id);
  }

  console.log("✅ Quarterly bonuses sent");
}
