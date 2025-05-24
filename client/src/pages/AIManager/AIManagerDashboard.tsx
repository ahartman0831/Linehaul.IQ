
import React from 'react';
import LiveMessageFeed from '../components/AIManager/LiveMessageFeed';
import EscalationViewerPanel from '../components/AIManager/EscalationViewerPanel';
import OwnerSMSDigestCard from '../components/AIManager/OwnerSMSDigestCard';
import GPTCommsSummaryFeed from '../components/AIManager/GPTCommsSummaryFeed';
import GPTRoutingTunerPanel from '../components/AIManager/GPTRoutingTunerPanel';

export default function AIManagerDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-bold">24/7 AI Intelligence Manager</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LiveMessageFeed />
        <EscalationViewerPanel />
        <GPTCommsSummaryFeed />
        <OwnerSMSDigestCard />
        <GPTRoutingTunerPanel />
      </div>
    </div>
  );
}
