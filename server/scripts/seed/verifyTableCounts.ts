import { supabaseAdmin } from '@/lib/supabaseAdmin';

async function verifyDispatchTableCounts() {
  console.log('[VerifyCounts] Checking record counts...');

  const tables = [
    'drivers',
    'routes',
    'dispatches',
    'dispatch_photos',
    'dispatch_scores',
    'hook_slips',
    'dwell_logs',
    'escalation_events',
    'eta_updates'
  ];

  for (const table of tables) {
    const { count, error } = await supabaseAdmin.from(table).select('*', { count: 'exact', head: true });
    if (error) console.error(`[VerifyCounts] Failed to count ${table}:`, error.message);
    else console.log(`[VerifyCounts] ${table}: ${count}`);
  }
}

verifyDispatchTableCounts();
