import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function HookPhotoReview() {
  const [photos, setPhotos] = useState([]);
  const [results, setResults] = useState({});

  useEffect(() => {
    const loadPhotos = async () => {
      const { data } = await supabase.from('hook_photos').select('*').order('submitted_at', { ascending: false });
      setPhotos(data || []);
    };
    loadPhotos();
  }, []);

  const handleValidate = async (photo) => {
    const response = await fetch('/api/dispatch/validateHookPhoto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        photo_url: `https://YOUR_SUPABASE_PROJECT_ID.supabase.co/storage/v1/object/public/hook-photos/${photo.photo_url}`,
        route_id: photo.route_id,
        driver_id: photo.driver_id
      })
    });

    const data = await response.json();
    setResults((prev) => ({ ...prev, [photo.id]: data }));
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-xl font-bold">Hook Photo Submissions</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {photos.map((p) => (
          <li key={p.id} className="border rounded shadow p-4">
            <p className="text-sm text-gray-600">Route: {p.route_id} • Driver: {p.driver_id}</p>
            <img src={`https://YOUR_SUPABASE_PROJECT_ID.supabase.co/storage/v1/object/public/hook-photos/${p.photo_url}`} alt="hook" className="w-full mt-2" />
            <button onClick={() => handleValidate(p)} className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">
              Validate
            </button>
            {results[p.id] && (
              <div className="mt-2 text-sm">
                <strong>{results[p.id].passed ? '✅ PASS' : '❌ FAIL'}</strong><br />
                {results[p.id].explanation}<br />
                Confidence: {results[p.id].confidence}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
