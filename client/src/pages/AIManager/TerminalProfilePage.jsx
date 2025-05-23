
import React from 'react';
import TerminalProfileSnapshotCard from '../components/AIManager/TerminalProfileSnapshotCard';

export default function TerminalProfilePage() {
  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">Terminal Profile Lookup</h2>
      <TerminalProfileSnapshotCard terminalId="FXG-D123" />
    </div>
  );
}
