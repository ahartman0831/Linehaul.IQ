import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateWeeklyDispatchSummary(): Promise<void> {
  console.log('[weeklyDispatchSummary] Generating weekly route summaries...');
  const { data: dispatches, error } = await supabaseAdmin
    .from('dispatches')
    .select('*')
    .gte('arrival_time', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());

  if (error || !dispatches) {
    console.error('[weeklyDispatchSummary] Dispatch query failed:', error?.message);
    return;
  }

  for (const dispatch of dispatches) {
    const summaryPrompt = {
      role: 'user',
      content: `Dispatch route ${dispatch.route_id} summary: arrived ${dispatch.arrival_time}, hooked at ${dispatch.hook_time}, departed ${dispatch.departure_time}.`
    };

    const gptResponse = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'Summarize route performance in a friendly weekly update for the owner.' },
        summaryPrompt
      ]
    });

    await supabaseAdmin.from('route_briefings').insert([{
      dispatch_id: dispatch.id,
      briefing_text: gptResponse.choices[0].message.content
    }]);

    console.log('[weeklyDispatchSummary] Briefing created for dispatch:', dispatch.id);
  }
}
