import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key:', supabaseKey ? 'loaded' : 'missing');

if (!supabaseUrl || !supabaseKey) {
  throw new Error('SUPABASE_URL or SERVICE_ROLE_KEY not loaded!');
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseKey, { auth: { persistSession: false } });
