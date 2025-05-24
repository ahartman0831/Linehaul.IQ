import 'dotenv/config';
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import type { Request, Response, NextFunction, RequestHandler } from 'express';

import validateHookPhoto from './routes/api/dispatch/validateHookPhoto';
import { logHookPhotoSecure } from './routes/api/dispatch/logHookPhotoSecure';

// 24/7 AI Intelligence Manager imports
import { ingestMessage } from './routes/api/AIManager/ingestMessage';
import { dispatchCallSummary } from './routes/api/AIManager/dispatchCallSummary';
import { nightOverrideStatus } from './routes/api/AIManager/nightOverrideStatus';
import { escalate } from './routes/api/AIManager/escalate';
import { getConfidenceScore } from './routes/api/AIManager/getConfidenceScore';
import { sendWeeklyDigest } from './routes/api/AIManager/sendWeeklyDigest';
import { toggleMode } from './routes/api/AIManager/toggleMode';
import { getEngagementScores } from './routes/api/AIManager/getEngagementScores';
import { sendCoachingNudge } from './routes/api/AIManager/sendCoachingNudge';
import { terminalProfile } from './routes/api/AIManager/terminalProfile';
import { eventPlayback } from './routes/api/AIManager/eventPlayback';
import { retriggerAlert } from './routes/api/AIManager/retriggerAlert';
import { evaluateBehaviorFlag } from './routes/api/AIManager/evaluateBehaviorFlag';
import { nightDigest } from './routes/api/AIManager/nightDigest';
import { getVolatilityScore } from './routes/api/AIManager/getVolatilityScore';
import { summarizeDailyGPTDigest } from './routes/api/AIManager/summarizeDailyGPTDigest';
import { tagKPI } from './routes/api/AIManager/tagKPI';
import { logDispatchTranscript } from './routes/api/AIManager/logDispatchTranscript';
import { associateTags } from './routes/api/AIManager/associateTags';
import { parseVoiceCommand } from './routes/api/AIManager/parseVoiceCommand';
import { respond } from './routes/api/AIManager/respond';
import { chatMonitor } from './routes/api/AIManager/chatMonitor';
import { breakdown } from './routes/api/AIManager/breakdown';
import { scheduleDowntime } from './routes/api/AIManager/scheduleDowntime';
import { contractorRadar } from './routes/api/AIManager/contractorRadar';
import { getWeeklySummaries } from './routes/api/AIManager/getWeeklySummaries';
import { getTranscripts } from './routes/api/AIManager/getTranscripts';
import { writeWeeklyRouteBriefHandler } from './routes/api/AIManager/writeWeeklyRouteBrief';
import twilioWebhook from './routes/api/AIManager/twilio/webhook';

dotenv.config();

export const app = express();
app.use(bodyParser.json());

// Utility to wrap async route handlers
const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>): RequestHandler =>
  (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

// Existing Dispatch Routes
app.post('/api/dispatch/validateHookPhoto', validateHookPhoto);
app.post('/api/dispatch/logHookPhotoSecure', asyncHandler(logHookPhotoSecure));

// AI Intelligence Manager Routes
app.post('/api/ai/ingestMessage', ingestMessage);
app.get('/api/ai/dispatchCallSummary', dispatchCallSummary);
app.all('/api/ai/nightOverrideStatus', nightOverrideStatus);
app.post('/api/ai/escalate', escalate);
app.get('/api/ai/confidenceScore', getConfidenceScore);
app.post('/api/engagement/sendWeeklyDigest', sendWeeklyDigest);
app.all('/api/ai/toggleMode', toggleMode);
app.get('/api/engagement/getEngagementScores', getEngagementScores);
app.post('/api/coach/nudgeDriver', sendCoachingNudge);
app.get('/api/fedex/terminalProfile', terminalProfile);
app.get('/api/chat/eventPlayback', eventPlayback);
app.get('/api/ai/retriggerAlert', retriggerAlert);
app.post('/api/ai/behavioralFlag', evaluateBehaviorFlag);
app.get('/api/summary/nightDigest', nightDigest);
app.get('/api/data-intel/getVolatilityScore', getVolatilityScore);
app.post('/api/summaries/daily', summarizeDailyGPTDigest);
app.post('/api/data-intel/tagKPI', tagKPI);
app.post('/api/ai/logDispatchTranscript', logDispatchTranscript);
app.post('/api/data-intel/associateTags', associateTags);
app.post('/api/voice/parseCommand', parseVoiceCommand);
app.post('/api/ai/respond', respond);
app.get('/api/chat/monitor', chatMonitor);
app.post('/api/maintenance/breakdown', breakdown);
app.post('/api/maintenance/schedule', scheduleDowntime);
app.get('/api/analytics/contractorRadar', contractorRadar);
app.get('/api/summaries/weekly', getWeeklySummaries);
app.get('/api/voice/transcripts', getTranscripts);
app.post('/api/ai/writeWeeklyRouteBrief', writeWeeklyRouteBriefHandler);
app.use('/api/ai-manager/twilio', twilioWebhook);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚚 LinehaulIQ server running on http://localhost:${PORT}`);
});
