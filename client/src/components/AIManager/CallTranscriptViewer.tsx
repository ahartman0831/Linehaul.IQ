
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CallTranscriptViewer({ callId }: { callId: string }) {
  const [transcript, setTranscript] = useState<any>(null);

  useEffect(() => {
    const fetchTranscript = async () => {
      try {
        const res = await axios.get(`/api/voice/transcripts?id=${callId}`);
        setTranscript(res.data);
      } catch (err) {
        console.error("Failed to fetch transcript", err);
      }
    };

    if (callId) fetchTranscript();
  }, [callId]);

  if (!transcript) return <div className="p-4 text-gray-500">Loading transcript...</div>;

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Call Transcript</h2>
      <div className="whitespace-pre-wrap text-sm">{transcript.text}</div>
      <div className="mt-4 text-xs text-gray-600">
        Score: {transcript.score}/10 — Tone: {transcript.tone} — Summary: {transcript.summary}
      </div>
    </div>
  );
}
