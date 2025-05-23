
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function NightOverrideStatusToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    axios.get<{ enabled: boolean }>('/api/ai/nightOverrideStatus').then(res => {
      setEnabled(res.data?.enabled ?? false);
    }).catch(err => console.error("Fetch override status failed", err));
  }, []);

  const toggleOverride = async () => {
    try {
      const res = await axios.post<{ enabled: boolean }>('/api/ai/nightOverrideStatus', { enabled: !enabled });
      setEnabled(res.data?.enabled);
    } catch (err) {
      console.error("Failed to toggle override", err);
    }
  };

  return (
    <div className="bg-gray-100 p-3 rounded flex justify-between items-center">
      <span className="text-sm font-medium">Night Override Mode</span>
      <button
        onClick={toggleOverride}
        className={`px-3 py-1 rounded text-sm ${enabled ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`}
      >
        {enabled ? "Enabled" : "Disabled"}
      </button>
    </div>
  );
}
