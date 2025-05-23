
import React from 'react';

export default function AlertRetryCard({ alert }) {
  if (!alert) return null;
  return (
    <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
      <div className="text-sm font-semibold text-red-700">Retry Alert</div>
      <p className="text-sm">{alert.reason}</p>
      <div className="text-xs text-gray-500">{alert.timestamp}</div>
    </div>
  );
}
