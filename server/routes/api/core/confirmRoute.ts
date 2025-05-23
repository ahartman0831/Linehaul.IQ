import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function POST(req: Request): Promise<Response> {
  const { driver_id, route_id, scheduled_time, confirmation_type, status }: {
    driver_id: string, route_id: string, scheduled_time: string, confirmation_type: string, status: string
  } = await req.json();

  const { error } = await supabaseAdmin.from('route_confirmations').insert({
    driver_id,
    route_id,
    scheduled_time,
    confirmation_time: new Date().toISOString(),
    confirmation_type,
    status
  });

  return new Response(JSON.stringify({ success: !error, error }), { status: error ? 400 : 200 });
}
