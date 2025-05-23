import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function POST(req: Request): Promise<Response> {
  const { route_id }: { route_id: string } = await req.json();

  // Fetch driver + confirmation info
  const { data, error } = await supabaseAdmin
    .from('route_confirmations')
    .select('driver_id, scheduled_time')
    .eq('route_id', route_id)
    .order('scheduled_time', { ascending: false })
    .limit(1)
    .single();

  if (error) return new Response(JSON.stringify({ error }), { status: 500 });

  const summary = {
    message: 'Escalation triggered. No confirmation received.',
    driver_id: data.driver_id,
    route_id,
    time: new Date().toISOString()
  };

  // Log escalation (you can extend this with alert emails, SMS, etc.)
  await supabaseAdmin.from('route_confirmations').update({ status: 'escalated', escalation_level: 2 }).eq('route_id', route_id);

  return new Response(JSON.stringify({ success: true, summary }), { status: 200 });
}
