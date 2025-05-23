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
exports.generateETAMessage = generateETAMessage;
const openai_1 = require("openai");
if (!process.env.OPENAI_API_KEY)
    throw new Error('OPENAI_API_KEY is NOT loaded!');
const openai = new openai_1.OpenAI({ apiKey: process.env.OPENAI_API_KEY });
function generateETAMessage(context) {
    return __awaiter(this, void 0, void 0, function* () {
        const { eta, reason } = context;
        const response = yield openai.chat.completions.create({
            model: 'gpt-4',
            messages: [
                {
                    role: 'system',
                    content: 'You are a dispatch assistant. Generate a professional ETA update.'
                },
                {
                    role: 'user',
                    content: `The new ETA is ${eta}. Reason: ${reason}.`
                }
            ],
            temperature: 0.3
        });
        return response.choices[0].message.content;
    });
}
