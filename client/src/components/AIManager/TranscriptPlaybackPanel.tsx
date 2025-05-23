
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TranscriptPlaybackPanel({ eventId }: { eventId: string }) {
  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    if (!eventId) return;
    axios.get(`/api/chat/eventPlayback?id=${eventId}`).then(res => {
      setEvent(res.data);
    }).catch(err => console.error("Playback load failed", err));
  }, [eventId]);

  if (!event) return <div className="text-sm text-gray-500">Loading event...</div>;

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-md font-semibold mb-2">Playback Summary</h3>
      <p className="text-sm whitespace-pre-wrap">{event.transcript}</p>
      <div className="text-xs text-gray-600 mt-2">Timestamp: {event.timestamp}</div>
    </div>
  );
}
