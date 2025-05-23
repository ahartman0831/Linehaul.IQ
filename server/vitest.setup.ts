import dotenvFlow from 'dotenv-flow';

dotenvFlow.config();

console.log('[VITEST SETUP] ENV LOADED');
console.log('  SUPABASE_URL:', process.env.SUPABASE_URL);
console.log('  SERVICE_ROLE:', process.env.SUPABASE_SERVICE_ROLE_KEY);
console.log('  OPENAI_API_KEY:', process.env.OPENAI_API_KEY);
