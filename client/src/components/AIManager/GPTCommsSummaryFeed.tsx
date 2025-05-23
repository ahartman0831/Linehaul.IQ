
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Summary {
  summary: string;
  generated_at: string;
}

export default function GPTCommsSummaryFeed() {
  const [summaries, setSummaries] = useState<Summary[]>([]);

  useEffect(() => {
    axios.get('/api/summaries/daily')
      .then(res => setSummaries(Array.isArray(res.data) ? res.data : []))
      .catch(err => console.error("GPT summary fetch failed", err));
  }, []);

  return (
    <div className="p-4 bg-slate-50 shadow rounded">
      <h2 className="text-md font-semibold text-slate-700 mb-2">Daily AI Comms Summaries</h2>
      <ul className="text-sm space-y-3">
        {summaries.map((s, i) => (
          <li key={i} className="border-b pb-2">
            <div>{s.summary}</div>
            <div className="text-xs text-gray-400 mt-1">{s.generated_at}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
