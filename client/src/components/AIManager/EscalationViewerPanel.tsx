
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function EscalationViewerPanel() {
  const [escalations, setEscalations] = useState([]);

  useEffect(() => {
    const loadEscalations = async () => {
      try {
        const res = await axios.get('/api/ai/escalate?status=active');
        setEscalations(res.data || []);
      } catch (error) {
        console.error("Error loading escalations", error);
      }
    };

    loadEscalations();
  }, []);

  return (
    <div className="p-4 bg-red-50 shadow rounded-lg">
      <h2 className="text-lg font-semibold text-red-700">Active Escalations</h2>
      {escalations.length === 0 && <p className="text-sm text-gray-500 mt-2">No active escalations.</p>}
      {escalations.map((item, idx) => (
        <div key={idx} className="mt-3 border-l-4 border-red-500 pl-3">
          <div className="text-sm font-medium">{item.type} — {item.status}</div>
          <div className="text-xs text-gray-600">{item.summary}</div>
        </div>
      ))}
    </div>
  );
}
