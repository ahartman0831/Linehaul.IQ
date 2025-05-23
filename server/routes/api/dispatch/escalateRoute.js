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
exports.escalateRoute = escalateRoute;
const escalationTrigger_1 = require("@/lib/utils/DispatchUtils/escalationTrigger");
function escalateRoute(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const dispatchId = req.body.dispatchId || req.query.dispatchId;
        try {
            const { contact_name, contact_phone, dispatchData } = yield (0, escalationTrigger_1.runEscalationLogic)(dispatchId);
            if (!dispatchData || !dispatchData.id) {
                console.error('[escalateRoute] Missing dispatch ID in response');
                res.status(500).json({ error: 'Dispatch not found' });
                return;
            }
            console.log('[escalateRoute] Escalation successful for', dispatchData.id);
            res.status(200).json({
                message: 'Escalation complete',
                contact: contact_name,
                phone: contact_phone
            });
        }
        catch (error) {
            console.error('[escalateRoute] Error:', error.message);
            res.status(500).json({ error: 'Escalation failed' });
        }
    });
}
