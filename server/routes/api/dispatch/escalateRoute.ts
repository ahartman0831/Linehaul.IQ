import { Request, Response } from 'express';
import { runEscalationLogic } from '@/lib/utils/DispatchUtils/escalationTrigger';

export async function escalateRoute(req: Request, res: Response) {
  const dispatchId = req.body.dispatchId || req.query.dispatchId;

  try {
    const { contact_name, contact_phone, dispatchData } = await runEscalationLogic(dispatchId);

    if (!dispatchData || !dispatchData.id) {
      console.error('[escalateRoute] Missing dispatch ID in response');
      res.status(500).json({ error: 'Dispatch not found' });
      return;
    }

    console.log('[escalateRoute] Escalation successful for', dispatchData.id);

    res.status(200).json({
      message: 'Escalation complete',
      contact: contact_name,
      phone: contact_phone
    });
  } catch (error: any) {
    console.error('[escalateRoute] Error:', error.message);
    res.status(500).json({ error: 'Escalation failed' });
  }
}
