
import { supabaseAdmin } from '../../lib/supabaseAdmin';
import { formatMessageLog } from '../../lib/utils/AIManagerUtils/formatMessageLog';
import { callGPT } from '../../lib/gpt';

export async function summarizeAndStoreNightlyDigest(): Promise<void> {
  const { data: messages } = await supabaseAdmin
    .from('comms_messages')
    .select('*')
    .gte('timestamp', new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString());

  const formatted = formatMessageLog(messages || []);
  const summary = await callGPT(`Summarize all overnight messages:
${formatted}`);

  await supabaseAdmin.from('summaries_night').insert([{ summary, generated_at: new Date().toISOString() }]);

  console.log('🌙 Night digest generated');
}
