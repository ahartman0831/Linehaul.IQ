
import { supabaseAdmin } from '../../lib/supabaseAdmin';

export async function autoBadgeAwards(): Promise<void> {
  const { data: drivers } = await supabaseAdmin.from('drivers').select('*');
  for (const driver of drivers) {
    const { data: metrics } = await supabaseAdmin
      .from('driver_metrics_portal_cache')
      .select('*')
      .eq('driver_id', driver.id)
      .single();

    if (metrics?.login_streak >= 5) {
      await supabaseAdmin.from('badge_events').insert([{
        driver_id: driver.id,
        badge_name: 'App Streak 5+',
        points_awarded: 10,
        category: 'engagement',
        triggered_by: 'system'
      }]);
    }
  }

  console.log('🏅 Badge auto-awards complete');
}
