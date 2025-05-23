
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import validateHookPhoto from './routes/api/dispatch/validateHookPhoto';
import logHookPhotoSecure from './routes/api/dispatch/logHookPhotoSecure';

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

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Existing Dispatch Routes
app.post('/api/dispatch/validateHookPhoto', validateHookPhoto);
app.post('/api/dispatch/logHookPhotoSecure', logHookPhotoSecure);

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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚚 LinehaulIQ server running on http://localhost:${PORT}`);
});
