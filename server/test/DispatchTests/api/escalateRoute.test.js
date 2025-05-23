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
const escalateRoute_1 = require("@/routes/api/dispatch/escalateRoute");
const vitest_1 = require("vitest");
vitest_1.vi.mock('@/lib/utils/DispatchUtils/escalationTrigger', () => ({
    runEscalationLogic: vitest_1.vi.fn().mockResolvedValue({
        contact_name: 'Sam Manager',
        contact_phone: '555-123-4567',
        dispatchData: {
            id: '00000000-0000-0000-0000-000000000001',
            route_name: 'FXG123A',
            trailer_number: 'TR123456',
            team_lead_name: 'John TL',
            team_lead_phone: '555-222-3333',
            assigned_driver: 'Alex Driver',
            expected_hook_time: '2024-05-22T04:00:00Z',
            actual_hook_time: '2024-05-22T04:30:00Z',
            delay_reason: 'gate congestion',
            is_adhoc: false
        }
    })
}));
(0, vitest_1.describe)('escalateRoute', () => {
    (0, vitest_1.it)('should log escalation summary', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = { body: { dispatchId: '00000000-0000-0000-0000-000000000001' } };
        const res = {
            status: vitest_1.vi.fn().mockReturnThis(),
            json: vitest_1.vi.fn()
        };
        yield (0, escalateRoute_1.escalateRoute)(req, res);
        (0, vitest_1.expect)(res.status).toHaveBeenCalledWith(200);
    }), 10000);
});
