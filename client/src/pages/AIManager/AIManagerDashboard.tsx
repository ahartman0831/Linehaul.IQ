import { Routes, Route } from 'react-router-dom';
import AISidebar from '../../components/AIManager/AISidebar';

import AlertRetryCard from '../../components/AIManager/AlertRetryCard';
import BreakdownEventCard from '../../components/AIManager/BreakdownEventCard';
import CallTranscriptSearch from '../../components/AIManager/CallTranscriptSearch';
import CallTranscriptViewer from '../../components/AIManager/CallTranscriptViewer';
import ChatToneMonitor from '../../components/AIManager/ChatToneMonitor';
import CommsConfidenceScoreTag from '../../components/AIManager/CommsConfidenceScoreTag';
import CommsEventPlaybackCard from '../../components/AIManager/CommsEventPlaybackCard';
import DecisionAuditTrail from '../../components/AIManager/DecisionAuditTrail';
import DispatchCallSummaryModal from '../../components/AIManager/DispatchCallSummaryModal';
import DriverBehaviorFlagCard from '../../components/AIManager/DriverBehaviorFlagCard';
import EscalationViewerPanel from '../../components/AIManager/EscalationViewerPanel';
import GPTActionConfirmBar from '../../components/AIManager/GPTActionConfirmBar';
import GPTCommsSummaryFeed from '../../components/AIManager/GPTCommsSummaryFeed';
import GPTRoutingTunerPanel from '../../components/AIManager/GPTRoutingTunerPanel';
import LiveMessageFeed from '../../components/AIManager/LiveMessageFeed';
import NightOverrideStatusToggle from '../../components/AIManager/NightOverrideStatusToggle';
import NightTreeStatusPanel from '../../components/AIManager/NightTreeStatusPanel';
import OwnerSMSDigestCard from '../../components/AIManager/OwnerSMSDigestCard';
import ResponseCard from '../../components/AIManager/ResponseCard';
import RetryAlertLogViewer from '../../components/AIManager/RetryAlertLogViewer';
import TerminalProfileSnapshotCard from '../../components/AIManager/TerminalProfileSnapshotCard';
import TerminalScorecard from '../../components/AIManager/TerminalScorecard';
import TranscriptPlaybackPanel from '../../components/AIManager/TranscriptPlaybackPanel';

export default function AIManagerDashboard() {
  return (
    <div className="flex h-screen">
      <AISidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Routes>
          <Route path="alert-retry" element={<AlertRetryCard />} />
          <Route path="breakdown-event" element={<BreakdownEventCard event={{
            driver: 'John Doe',
            notes: 'Overheat warning',
            location: 'I-80 West',
            reported_at: new Date().toISOString()
          }} />} />
          <Route path="call-transcript-search" element={<CallTranscriptSearch onSearch={() => {}} />} />
          <Route path="call-transcript-viewer" element={<CallTranscriptViewer callId="test-call" />} />
          <Route path="chat-tone-monitor" element={<ChatToneMonitor />} />
          <Route path="comms-confidence-score" element={<CommsConfidenceScoreTag score={92} />} />
          <Route path="comms-event-playback" element={<CommsEventPlaybackCard message={{
            id: 'msg-1',
            channel: 'sms',
            type: 'outbound',
            timestamp: new Date().toISOString()
          }} onReplay={() => {}} />} />
          <Route path="decision-audit-trail" element={<DecisionAuditTrail audit={{ steps: [] }} />} />
          <Route path="dispatch-call-summary" element={<DispatchCallSummaryModal callId="call-xyz" onClose={() => {}} />} />
          <Route path="driver-behavior-flag" element={<DriverBehaviorFlagCard flag={{ message: 'Hard braking', driverName: 'Jane Smith', scoreDelta: '-5' }} />} />
          <Route path="escalation-viewer" element={<EscalationViewerPanel />} />
          <Route path="gpt-action-confirm" element={<GPTActionConfirmBar message="Proceed with escalation?" onConfirm={() => {}} />} />
          <Route path="gpt-comms-summary" element={<GPTCommsSummaryFeed />} />
          <Route path="gpt-routing-tuner" element={<GPTRoutingTunerPanel />} />
          <Route path="live-message-feed" element={<LiveMessageFeed />} />
          <Route path="night-override-toggle" element={<NightOverrideStatusToggle />} />
          <Route path="night-tree-status" element={<NightTreeStatusPanel state={{ auto: true, override: false, last_escalation: new Date().toISOString() }} />} />
          <Route path="owner-sms-digest" element={<OwnerSMSDigestCard />} />
          <Route path="response-card" element={<ResponseCard text="AI Response example" />} />
          <Route path="retry-alert-log" element={<RetryAlertLogViewer />} />
          <Route path="terminal-profile-snapshot" element={<TerminalProfileSnapshotCard terminalId="terminal-001" />} />
          <Route path="terminal-scorecard" element={<TerminalScorecard terminal={{ name: 'Terminal A', region: 'West', response_rate: 95, alert_count: 2 }} />} />
          <Route path="transcript-playback" element={<TranscriptPlaybackPanel eventId="event-abc" />} />
        </Routes>
      </main>
    </div>
  );
}
