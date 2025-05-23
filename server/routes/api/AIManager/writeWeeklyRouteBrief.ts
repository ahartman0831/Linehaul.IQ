import { Request, Response } from 'express';
// Update the import path if the file is located elsewhere, for example:
import { writeWeeklyRouteBrief } from '../../../services/AIManagerService';
// Or, if the file does not exist, create it at the expected path:
// /Users/alexhartman/Linehaul.IQ/server/services/aiManagerService.ts

export const writeWeeklyRouteBriefHandler = async (req: Request, res: Response) => {
  try {
    const result = await writeWeeklyRouteBrief(req.body);
    res.status(200).json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
};