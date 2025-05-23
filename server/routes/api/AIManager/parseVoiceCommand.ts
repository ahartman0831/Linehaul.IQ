
import { Request, Response } from 'express';
import { callGPT } from '../../../lib/gpt';

export async function parseVoiceCommand(req: Request, res: Response): Promise<void> {
  try {
    const { audio_text } = req.body;

    const prompt = `Interpret the following voice command and return the task in JSON:\n"${audio_text}"`;
    const gptResponse = await callGPT(prompt);

    res.status(200).json({ task: gptResponse });
  } catch (err) {
    console.error("Voice command parse error:", err);
    res.status(500).json({ error: err.message });
  }
}
