
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DispatchCallSummaryModal({ callId, onClose }: { callId: string; onClose: () => void }) {
  const [summary, setSummary] = useState<any>(null);

  useEffect(() => {
    if (!callId) return;
    axios.get(`/api/ai/dispatchCallSummary?id=${callId}`)
      .then(res => setSummary(res.data))
      .catch(err => console.error("Summary fetch failed", err));
  }, [callId]);

  if (!callId) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>×</button>
        <h2 className="text-lg font-semibold mb-3">Call Summary</h2>
        {summary ? (
          <>
            <p className="text-sm">{summary.text}</p>
            <div className="mt-2 text-xs text-gray-500">Confidence: {summary.confidence}%</div>
          </>
        ) : (
          <p className="text-sm text-gray-400">Loading summary...</p>
        )}
      </div>
    </div>
  );
}
