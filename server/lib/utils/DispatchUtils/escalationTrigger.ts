// server/lib/utils/DispatchUtils/escalationTrigger.ts

import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function runEscalationLogic(dispatchId: string) {
  try {
    console.log('[escalationTrigger] Running escalation for dispatch:', dispatchId);

    const { data: dispatch, error } = await supabaseAdmin
      .from('dispatches')
      .select('*')
      .eq('id', dispatchId)
      .single();

    if (error) {
      console.error('[escalationTrigger] Error fetching dispatch:', error.message);
      throw new Error('Dispatch not found');
    }

    console.log('[escalationTrigger] Loaded dispatch:', dispatch);

    const contact_name = 'Dispatch Manager';  // Placeholder
    const contact_phone = '+1-800-555-1234';  // Placeholder

    return { contact_name, contact_phone, dispatchData: dispatch };
  } catch (error: any) {
    console.error('[escalationTrigger] Error:', error.message);
    throw new Error(error.message);
  }
}
