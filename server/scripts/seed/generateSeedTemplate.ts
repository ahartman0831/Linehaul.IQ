import fs from 'fs';

const template = {
  drivers: [],
  routes: [],
  dispatches: [],
  dispatch_photos: [],
  dispatch_scores: [],
  hook_slips: [],
  dwell_logs: [],
  escalation_events: [],
  eta_updates: []
};

fs.writeFileSync('./supabase/seed/template.json', JSON.stringify(template, null, 2));
console.log('[GenerateSeedTemplate] Blank template written to supabase/seed/template.json');
