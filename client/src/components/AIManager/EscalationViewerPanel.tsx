import { useEffect, useState } from 'react';
import axios from 'axios';

interface EscalationLog {
  id: string;
  type: string;
  status?: string;
  summary: string;
  timestamp?: string;
}

export default function EscalationViewerPanel() {
  const [logs, setLogs] = useState<EscalationLog[]>([]);

  useEffect(() => {
    axios.get('/api/ai/retriggerAlert')
      .then(res => setLogs(Array.isArray(res.data) ? res.data : []))
      .catch(err => console.error("Failed to load escalations", err));
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h3 className="text-md font-bold mb-3">Escalation Log</h3>
      {logs.map((log) => (
        <div key={log.id} className="border-b border-gray-200 pb-2 mb-2">
          <div className="text-sm font-medium">{log.type} – {log.status}</div>
          <div className="text-xs text-gray-600">{log.summary}</div>
        </div>
      ))}
    </div>
  );
}
