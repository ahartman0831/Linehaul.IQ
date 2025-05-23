
import React from 'react';

export default function ChatToneMonitor({ toneReport }) {
  if (!toneReport) return null;
  return (
    <div className="bg-blue-100 p-4 rounded shadow">
      <div className="text-sm font-semibold text-blue-700">Chat Tone</div>
      <p className="text-sm">{toneReport.assessment}</p>
      <div className="text-xs text-gray-600">Confidence: {toneReport.confidence}%</div>
    </div>
  );
}
