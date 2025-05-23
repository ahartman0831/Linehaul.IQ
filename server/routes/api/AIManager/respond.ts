
import { Request, Response } from 'express';
import { callGPT } from '../../../lib/gpt';

export async function respond(req: Request, res: Response): Promise<void> {
  try {
    const { message } = req.body;
    const reply = await callGPT(`Respond professionally to: "${message}"`);
    res.status(200).json({ reply });
  } catch (err) {
    console.error("GPT response error:", err);
    res.status(500).json({ error: err.message });
  }
}
