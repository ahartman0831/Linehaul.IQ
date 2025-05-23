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
exports.runEscalationLogic = runEscalationLogic;
const supabaseAdmin_1 = require("../../../lib/supabaseAdmin");
function runEscalationLogic(dispatchId) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('[escalationTrigger] Running escalation for dispatch:', dispatchId);
        const { data: dispatch, error } = yield supabaseAdmin_1.supabaseAdmin
            .from('dispatches')
            .select('*')
            .eq('id', dispatchId)
            .single();
        if (error) {
            console.error('[escalationTrigger] Error fetching dispatch:', error.message);
            throw new Error('Dispatch not found');
        }
        console.log('[escalationTrigger] Loaded dispatch:', dispatch);
        const contact = 'ops@yourdomain.com'; // Placeholder contact logic
        return Object.assign(Object.assign({}, dispatch), { contact });
    });
}
