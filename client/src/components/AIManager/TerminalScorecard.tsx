
import React from 'react';

export default function TerminalScorecard({ terminal }) {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h3 className="text-md font-bold">{terminal.name}</h3>
      <p className="text-sm">Region: {terminal.region}</p>
      <p className="text-sm">Response Rate: {terminal.response_rate}%</p>
      <p className="text-sm">Alerts: {terminal.alert_count}</p>
    </div>
  );
}
