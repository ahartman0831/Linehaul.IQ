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
const reviewHookPhoto_1 = require("@/routes/gpt/reviewHookPhoto");
const vitest_1 = require("vitest");
vitest_1.vi.mock('openai', () => ({
    OpenAI: vitest_1.vi.fn().mockImplementation(() => ({
        chat: {
            completions: {
                create: vitest_1.vi.fn().mockResolvedValue({
                    choices: [{ message: { content: 'Mocked GPT feedback' } }]
                })
            }
        }
    }))
}));
(0, vitest_1.describe)('analyzeHookPhoto', () => {
    (0, vitest_1.it)('should return a hook photo analysis object', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, reviewHookPhoto_1.analyzeHookPhoto)('http://fakeurl.com/photo.jpg', {});
        (0, vitest_1.expect)(result).toHaveProperty('clarity');
    }), 10000);
});
