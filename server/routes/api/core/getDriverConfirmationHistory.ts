import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function POST(req: Request): Promise<Response> {
  const { driver_id }: { driver_id: string } = await req.json();

  const { data, error } = await supabaseAdmin
    .from('route_confirmations')
    .select('*')
    .eq('driver_id', driver_id)
    .order('confirmation_time', { ascending: false })
    .limit(10);

  return new Response(JSON.stringify({ history: data || [], error }), { status: error ? 500 : 200 });
}
