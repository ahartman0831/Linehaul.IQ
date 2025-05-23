import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function POST(req: Request): Promise<Response> {
  const { driver_id, route_id, scheduled_date, shift_type, created_by }: {
    driver_id: string, route_id: string, scheduled_date: string, shift_type: string, created_by: string
  } = await req.json();

  const { error } = await supabaseAdmin.from('schedules').insert({
    driver_id, route_id, scheduled_date, shift_type, created_by
  });

  return new Response(JSON.stringify({ success: !error, error }), { status: error ? 400 : 200 });
}
