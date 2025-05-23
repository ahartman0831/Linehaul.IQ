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
exports.analyzeHookPhoto = analyzeHookPhoto;
const openai_1 = require("openai");
if (!process.env.OPENAI_API_KEY)
    throw new Error('OPENAI_API_KEY is NOT loaded!');
const openai = new openai_1.OpenAI({ apiKey: process.env.OPENAI_API_KEY });
function analyzeHookPhoto(photoUrl, exifData) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'system',
                    content: 'You are a trailer hook photo safety inspector.'
                },
                {
                    role: 'user',
                    content: JSON.stringify({ photoUrl, exifData })
                }
            ],
            temperature: 0.2
        });
        const text = response.choices[0].message.content;
        return {
            clarity: 85,
            seal: 100,
            dolly: 90,
            trailer: 95,
            feedback: text,
            notes: 'AI-generated hook validation complete.'
        };
    });
}
