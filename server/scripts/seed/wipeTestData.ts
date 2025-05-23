import { supabaseAdmin } from '@/lib/supabaseAdmin';

async function wipeDispatchTestData() {
  console.log('[WipeTestData] Deleting all dispatch-related test data...');

  const tables = [
    'dispatch_scores',
    'dispatch_photos',
    'hook_slips',
    'dwell_logs',
    'escalation_events',
    'eta_updates',
    'dispatches'
  ];

  for (const table of tables) {
    const { error } = await supabaseAdmin.from(table).delete().neq('id', '');
    if (error) console.error(`[WipeTestData] Failed to wipe ${table}:`, error.message);
    else console.log(`[WipeTestData] Wiped: ${table}`);
  }
}

wipeDispatchTestData();
