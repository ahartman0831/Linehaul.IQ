
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Digest {
  summary: string;
  generated_at: string;
}

export default function OwnerSMSDigestCard() {
  const [digest, setDigest] = useState<Digest | null>(null);

  useEffect(() => {
    const getDigest = async () => {
      try {
        const res = await axios.get('/api/summary/nightDigest');
        setDigest(res.data);
      } catch (error) {
        console.error("Failed to fetch nightly digest", error);
      }
    };

    getDigest();
  }, []);

  if (!digest) return <div className="p-4 text-sm text-gray-400">Loading digest...</div>;

  return (
    <div className="bg-blue-50 p-4 rounded shadow">
      <h3 className="text-md font-bold text-blue-700 mb-2">Night SMS Digest</h3>
      <div className="text-sm">{digest.summary}</div>
      <div className="mt-2 text-xs text-gray-600">Generated: {digest.generated_at}</div>
    </div>
  );
}
