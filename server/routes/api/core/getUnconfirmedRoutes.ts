import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function GET(): Promise<Response> {
  const { data, error } = await supabaseAdmin
    .from('route_confirmations')
    .select('*')
    .eq('status', 'pending');

  return new Response(JSON.stringify({ routes: data || [], error }), { status: error ? 500 : 200 });
}
