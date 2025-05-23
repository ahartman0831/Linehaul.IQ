import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function runDwellMonitor(): Promise<void> {
  console.log('[dwellMonitor] Checking for ongoing or overdue dwell sessions...');
  const now = new Date().toISOString();

  const { data: dispatches, error } = await supabaseAdmin
    .from('dispatches')
    .select('*')
    .eq('status', 'assigned');

  if (error) {
    console.error('[dwellMonitor] Error fetching dispatches:', error.message);
    return;
  }

  for (const dispatch of dispatches) {
    const { data: dwellLogs } = await supabaseAdmin
      .from('dwell_logs')
      .select('*')
      .eq('dispatch_id', dispatch.id);

    const latest = dwellLogs?.at(-1);
    if (latest && !latest.end_time) {
      const explanation = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'Explain possible causes for dwell based on status: assigned, not yet hooked, and timestamp.' },
          { role: 'user', content: `Dwell started at ${latest.start_time}, still ongoing at ${now}.` }
        ]
      });

      await supabaseAdmin
        .from('dwell_logs')
        .update({ gpt_generated_explanation: explanation.choices[0].message.content })
        .eq('id', latest.id);

      console.log('[dwellMonitor] Dwell explanation added for dispatch:', dispatch.id);
    }
  }
}
