import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function runEscalationLogic(dispatchId: string): Promise<any> {
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

  const contact = 'ops@yourdomain.com'; // Placeholder contact logic
  return { ...dispatch, contact };
}
