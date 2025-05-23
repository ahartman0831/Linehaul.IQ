import { Request, Response } from 'express';
import { getCallSummary } from '../services/callSummaryService';

export const dispatchCallSummary = async (req: Request, res: Response) => {
  try {
    const callSummary = await getCallSummary(req.params.callId);
    res.status(200).json(callSummary);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
};