import { Request, Response } from 'express';

export async function getConfidenceScore(req: Request, res: Response): Promise<void> {
  try {
    const { message } = req.query;

    // Simulated GPT confidence scoring
    const confidence = Math.floor(Math.random() * 31) + 60; // 60-90%

    console.log("Confidence score for message:", message, confidence);
    res.status(200).json({ message, confidence });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
