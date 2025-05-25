
import { useState } from 'react';
// Update the import path below if the file is named differently or located elsewhere
// Update the import path below if the file is named differently or located elsewhere
// Update the import path below if the file is named differently or located elsewhere
import CallTranscriptViewer from '../../components/AIManager/CallTranscriptViewer'; // <-- Update this path to the correct one, e.g. './CallTranscriptViewer' or correct casing
import DispatchCallSummaryModal from '../../components/AIManager/DispatchCallSummaryModal';

export default function CallReviewPage() {
  const [selectedCallId, setSelectedCallId] = useState<string | null>("demo-call-id-001");

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">Call Review Center</h2>
      <CallTranscriptViewer callId={selectedCallId ?? ''} />
      <div className="mt-6">
        <DispatchCallSummaryModal callId={selectedCallId ?? ''} onClose={() => setSelectedCallId(null)} />
      </div>
    </div>
  );
}
