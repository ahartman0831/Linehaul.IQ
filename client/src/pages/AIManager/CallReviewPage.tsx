
import React, { useState } from 'react';
import CallTranscriptViewer from '../components/AIManager/CallTranscriptViewer';
import DispatchCallSummaryModal from '../components/AIManager/DispatchCallSummaryModal';

export default function CallReviewPage() {
  const [selectedCallId, setSelectedCallId] = useState("demo-call-id-001");

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">Call Review Center</h2>
      <CallTranscriptViewer callId={selectedCallId} />
      <div className="mt-6">
        <DispatchCallSummaryModal callId={selectedCallId} onClose={() => setSelectedCallId(null)} />
      </div>
    </div>
  );
}
