"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
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
fs_1.default.writeFileSync('./supabase/seed/template.json', JSON.stringify(template, null, 2));
console.log('[GenerateSeedTemplate] Blank template written to supabase/seed/template.json');
