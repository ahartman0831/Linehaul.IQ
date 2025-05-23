import { supabaseAdmin } from '@/lib/supabaseAdmin';
import seed from './supabase/seed/dev.json';

async function importDevSeed() {
  console.log('[ImportSeed] Seeding dev data...');

  const insert = async (table: string, rows: any[]) => {
    const { error } = await supabaseAdmin.from(table).insert(rows);
    if (error) console.error(`[ImportSeed] Failed to insert into ${table}:`, error.message);
    else console.log(`[ImportSeed] Inserted into ${table}:`, rows.length);
  };

  await insert('drivers', seed.drivers);
  await insert('routes', seed.routes);
  await insert('dispatches', seed.dispatches);
  await insert('dispatch_photos', seed.dispatch_photos);
  await insert('dispatch_scores', seed.dispatch_scores);
}

importDevSeed();
