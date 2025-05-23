"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const supabaseAdmin_1 = require("@/lib/supabaseAdmin");
function wipeDispatchTestData() {
    return __awaiter(this, void 0, void 0, function* () {
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
            const { error } = yield supabaseAdmin_1.supabaseAdmin.from(table).delete().neq('id', '');
            if (error)
                console.error(`[WipeTestData] Failed to wipe ${table}:`, error.message);
            else
                console.log(`[WipeTestData] Wiped: ${table}`);
        }
    });
}
wipeDispatchTestData();
