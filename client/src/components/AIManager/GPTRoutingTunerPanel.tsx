
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function GPTRoutingTunerPanel() {
  const [mode, setMode] = useState("auto");

  useEffect(() => {
    axios.get('/api/ai/toggleMode').then(res => setMode(res.data?.mode || "auto"));
  }, []);

  const handleToggle = async () => {
    try {
      const res = await axios.post('/api/ai/toggleMode', { mode: mode === "auto" ? "manual" : "auto" });
      setMode(res.data.mode);
    } catch (err) {
      console.error("Toggle routing mode failed", err);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-md font-medium">Message Routing Mode</h3>
      <div className="mt-2 flex items-center space-x-2">
        <span className="text-sm">Current: {mode.toUpperCase()}</span>
        <button
          onClick={handleToggle}
          className="px-3 py-1 text-sm bg-indigo-500 text-white rounded"
        >
          Switch to {mode === "auto" ? "Manual" : "Auto"}
        </button>
      </div>
    </div>
  );
}
