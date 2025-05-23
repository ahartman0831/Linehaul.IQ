
import { supabaseAdmin } from '../../lib/supabaseAdmin';
import { callGPT } from '../../lib/gpt';
import { formatMessageLog } from '../../lib/utils/AIManagerUtils/formatMessageLog';

export async function runWeeklyDriverScan(): Promise<void> {
  const { data: drivers, error } = await supabaseAdmin.from('drivers').select('*');
  if (error) throw error;

  for (const driver of drivers) {
    const { data: logs } = await supabaseAdmin
      .from('driver_behavior_logs')
      .select('*')
      .eq('driver_id', driver.id)
      .gte('timestamp', new Date(Date.now() - 7 * 86400000).toISOString());

    const formatted = formatMessageLog(logs || []);
    const summary = await callGPT(`Summarize this week's behavior for ${driver.name}:
${formatted}`);

    await supabaseAdmin.from('driver_gpt_logs').insert([{ driver_id: driver.id, summary }]);
  }

  console.log("✅ Weekly driver scans completed");
}
