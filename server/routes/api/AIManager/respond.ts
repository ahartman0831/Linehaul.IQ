import { Request, Response } from 'express';
import { callGPT } from '../../../lib/gpt';

export async function respond(req: Request, res: Response): Promise<void> {
  try {
    const { message } = req.body;
    const reply = await callGPT(`Respond professionally to: "${message}"`);
    res.status(200).json({ reply });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
