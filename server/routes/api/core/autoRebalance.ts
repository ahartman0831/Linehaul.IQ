import { supabaseAdmin } from '../../../lib/supabaseAdmin';

async function runSmartScheduler({ route_id }: { route_id: string }): Promise<{ suggested_driver_id: string, notes: string }> {
  // TODO: Replace this mock with real GPT logic
  return {
    suggested_driver_id: 'mock-driver-123',
    notes: 'Suggested based on availability and HOS'
  };
}

export async function POST(req: Request): Promise<Response> {
  const { route_id }: { route_id: string } = await req.json();
  const suggestion = await runSmartScheduler({ route_id });
  return new Response(JSON.stringify({ suggestion }), { status: 200 });
}
