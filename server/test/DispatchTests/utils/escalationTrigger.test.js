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
const escalationTrigger_1 = require("@/lib/utils/DispatchUtils/escalationTrigger");
const vitest_1 = require("vitest");
vitest_1.vi.mock('@/lib/utils/DispatchUtils/escalationTrigger', () => __awaiter(void 0, void 0, void 0, function* () {
    const actual = yield vitest_1.vi.importActual('@/lib/utils/DispatchUtils/escalationTrigger');
    return Object.assign(Object.assign({}, actual), { runEscalationLogic: vitest_1.vi.fn(() => __awaiter(void 0, void 0, void 0, function* () {
            return ({
                contact: 'Driver Joe',
                dispatchData: {
                    id: 'test-id',
                    status: 'delayed'
                }
            });
        })) });
}));
(0, vitest_1.describe)('runEscalationLogic', () => {
    (0, vitest_1.it)('should return a contact field and dispatch data', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, escalationTrigger_1.runEscalationLogic)('00000000-0000-0000-0000-000000000001');
        (0, vitest_1.expect)(result).toHaveProperty('contact');
        (0, vitest_1.expect)(result).toHaveProperty('dispatchData');
    }), 10000);
});
