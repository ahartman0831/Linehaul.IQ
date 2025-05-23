import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function POST(req: Request): Promise<Response> {
  const { driver_id, start_date, end_date, reason }: {
    driver_id: string, start_date: string, end_date: string, reason: string
  } = await req.json();

  const { error } = await supabaseAdmin.from('time_off_requests').insert({
    driver_id, start_date, end_date, reason, status: 'pending'
  });

  return new Response(JSON.stringify({ success: !error, error }), { status: error ? 400 : 200 });
}
