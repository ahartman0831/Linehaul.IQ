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
const writeWeeklyRouteBrief_1 = require("@/routes/gpt/writeWeeklyRouteBrief");
const vitest_1 = require("vitest");
vitest_1.vi.mock('openai', () => ({
    OpenAI: vitest_1.vi.fn().mockImplementation(() => ({
        chat: {
            completions: {
                create: vitest_1.vi.fn().mockResolvedValue({
                    choices: [{ message: { content: 'Mocked ETA message' } }]
                })
            }
        }
    }))
}));
(0, vitest_1.describe)('generateETAMessage', () => {
    (0, vitest_1.it)('should generate a professional ETA message', () => __awaiter(void 0, void 0, void 0, function* () {
        const msg = yield (0, writeWeeklyRouteBrief_1.generateETAMessage)({ eta: '10:30 AM', reason: 'snow delay' });
        (0, vitest_1.expect)(typeof msg).toBe('string');
    }), 10000);
});
