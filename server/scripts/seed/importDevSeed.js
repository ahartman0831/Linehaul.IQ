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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supabaseAdmin_1 = require("@/lib/supabaseAdmin");
const dev_json_1 = __importDefault(require("./supabase/seed/dev.json"));
function importDevSeed() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('[ImportSeed] Seeding dev data...');
        const insert = (table, rows) => __awaiter(this, void 0, void 0, function* () {
            const { error } = yield supabaseAdmin_1.supabaseAdmin.from(table).insert(rows);
            if (error)
                console.error(`[ImportSeed] Failed to insert into ${table}:`, error.message);
            else
                console.log(`[ImportSeed] Inserted into ${table}:`, rows.length);
        });
        yield insert('drivers', dev_json_1.default.drivers);
        yield insert('routes', dev_json_1.default.routes);
        yield insert('dispatches', dev_json_1.default.dispatches);
        yield insert('dispatch_photos', dev_json_1.default.dispatch_photos);
        yield insert('dispatch_scores', dev_json_1.default.dispatch_scores);
    });
}
importDevSeed();
