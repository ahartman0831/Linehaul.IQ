import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';
import { callGPT } from '../../../lib/gpt';

export async function summarizeDailyGPTDigest(req: Request, res: Response): Promise<void> {
  try {
    const { messages } = req.body;

    const prompt = `Summarize these messages into a clear nightly digest:\n${messages.map((m: string) => `- ${m}`).join("\n")}`;
    const gptResponse = await callGPT(prompt);

    const { data, error } = await supabaseAdmin
      .from('summaries_night')
      .insert([{ summary: gptResponse, generated_at: new Date().toISOString() }]);

    if (error) throw error;

    res.status(200).json({ summary: gptResponse });
  } catch (err) {
    console.error("GPT digest error:", err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
