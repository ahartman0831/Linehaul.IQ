
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TerminalProfileSnapshotCard({ terminalId }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!terminalId) return;
    axios.get(`/api/fedex/terminalProfile?id=${terminalId}`)
      .then(res => setProfile(res.data))
      .catch(err => console.error("Failed to load terminal profile", err));
  }, [terminalId]);

  if (!profile) return <p className="text-sm text-gray-400">Loading terminal profile...</p>;

  return (
    <div className="p-4 bg-gray-50 rounded border border-gray-200 shadow">
      <h4 className="text-md font-semibold mb-2">Terminal Profile: {profile.name}</h4>
      <p className="text-sm text-gray-700">Region: {profile.region}</p>
      <p className="text-sm text-gray-700">Contact: {profile.contact}</p>
      <p className="text-sm text-gray-700">Recent Issues: {profile.issues_summary}</p>
    </div>
  );
}
