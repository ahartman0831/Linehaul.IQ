
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface AlertRetry {
  alertType: string;
  reason: string;
  timestamp: string;
}

export default function RetryAlertLogViewer() {
  const [logs, setLogs] = useState<AlertRetry[]>([]);

  useEffect(() => {
    axios.get('/api/ai/retriggerAlert').then(res => {
      setLogs(res.data || []);
    }).catch(err => console.error("Failed to load retry logs", err));
  }, []);

  return (
    <div className="p-4 bg-yellow-50 rounded shadow">
      <h3 className="font-semibold text-yellow-700 mb-2">Retry Alert Log</h3>
      {logs.length === 0 ? (
        <p className="text-sm text-gray-500">No retries logged recently.</p>
      ) : (
        <ul className="text-sm">
          {logs.map((log, idx) => (
            <li key={idx} className="mb-2 border-b pb-1">
              <div className="font-medium">{log.alertType}</div>
              <div className="text-xs text-gray-600">Reason: {log.reason}</div>
              <div className="text-xs text-gray-400">{log.timestamp}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
