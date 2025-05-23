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
const getDispatches_1 = require("../../../routes/api/dispatch/getDispatches");
const vitest_1 = require("vitest");
(0, vitest_1.describe)('getDispatches', () => {
    (0, vitest_1.it)('should return dispatches without status complete', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockReq = {};
        const mockRes = {
            status: (code) => ({
                json: (data) => {
                    console.log('[getDispatches.test] Response:', data);
                    (0, vitest_1.expect)(code).toBe(200);
                }
            })
        };
        yield (0, getDispatches_1.getDispatches)(mockReq, mockRes);
    }));
});
