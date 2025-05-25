
import { Request, Response } from 'express';
import { getDispatchesLogic } from '../../../lib/utils/DispatchUtils/getDispatchesLogic';

export async function getDispatches(req: Request, res: Response) {
  try {
    const dispatches = await getDispatchesLogic(req.query);
    res.status(200).json(dispatches);
  } catch (error: any) {
    console.error('[getDispatches] Error:', error.message);
    res.status(500).json({ error: 'Failed to get dispatches' });
  }
}
