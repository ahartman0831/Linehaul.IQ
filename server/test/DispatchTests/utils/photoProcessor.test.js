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
const photoProcessor_1 = require("../../../lib/utils/DispatchUtils/photoProcessor");
const vitest_1 = require("vitest");
(0, vitest_1.describe)('processPhoto', () => {
    (0, vitest_1.it)('should return empty object on invalid photo url', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, photoProcessor_1.processPhoto)('invalid_url');
        console.log('[photoProcessor.test] Metadata:', result);
        (0, vitest_1.expect)(result).toEqual({});
    }));
});
