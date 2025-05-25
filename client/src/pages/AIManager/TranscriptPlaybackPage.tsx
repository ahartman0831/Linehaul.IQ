
import { useState } from 'react';
import TranscriptPlaybackPanel from '../../components/AIManager/TranscriptPlaybackPanel';
import CommsEventPlaybackCard from '../../components/AIManager/CommsEventPlaybackCard';

export default function TranscriptPlaybackPage() {
  const [selectedId, setSelectedId] = useState("sample-event-001");

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-lg font-bold">Transcript Playback</h2>
      <CommsEventPlaybackCard
        message={{ id: "sample-event-001", channel: "Voice", type: "Dispatch", timestamp: "10:43 PM" }}
        onReplay={(id) => setSelectedId(id)}
      />
      <TranscriptPlaybackPanel eventId={selectedId} />
    </div>
  );
}
