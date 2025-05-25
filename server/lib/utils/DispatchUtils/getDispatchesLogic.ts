
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function getDispatchesLogic(query: any) {
  const { status, driverId, routeId, dateRange } = query;

  let supabaseQuery = supabaseAdmin
    .from('dispatches')
    .select('*');

  if (status) {
    supabaseQuery = supabaseQuery.eq('status', status);
  } else {
    supabaseQuery = supabaseQuery.neq('status', 'complete');
  }

  if (driverId) {
    supabaseQuery = supabaseQuery.eq('driver_id', driverId);
  }

  if (routeId) {
    supabaseQuery = supabaseQuery.eq('route_id', routeId);
  }

  if (dateRange) {
    const [start, end] = dateRange.split(',');
    supabaseQuery = supabaseQuery.gte('dispatch_date', start).lte('dispatch_date', end);
  }

  const { data, error } = await supabaseQuery;

  if (error) {
    console.error('[getDispatchesLogic] Supabase error:', error.message);
    throw new Error(error.message);
  }

  return data;
}
