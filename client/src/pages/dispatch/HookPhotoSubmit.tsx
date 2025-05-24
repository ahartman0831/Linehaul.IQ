import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function HookPhotoSubmit({ driverId = 'test-driver-123', routeId = 'route-001' }) {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleUpload = async () => {
    if (!file) return setStatus('❌ No file selected');

    const filePath = `${routeId}/${file.name}`;
    console.log('🛠 Uploading to:', filePath);

    const { data, error } = await supabase.storage.from('hook-photos').upload(filePath, file, {
      cacheControl: '3600',
      upsert: true,
      contentType: file.type || 'image/jpeg'
    });

    if (error) {
      console.error('📛 Upload error:', error);
      return setStatus('❌ Upload failed: ' + error.message);
    }

    const photo_url = data.path;

    // Step 2: call backend to log the uploaded photo
    const res = await fetch('/api/dispatch/logHookPhotoSecure', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ driver_id: driverId, route_id: routeId, photo_url })
    });

    const result = await res.json();
    if (!res.ok) {
      console.error('📛 Log photo error:', result);
      return setStatus('⚠️ Upload worked but server log failed');
    }

    setStatus('✅ Upload and server log succeeded!');
  };

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-lg font-bold">Submit Hook Photo</h2>
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} className="bg-indigo-600 text-white px-4 py-2 rounded">Upload Photo</button>
      {status && <p className="text-sm mt-2">{status}</p>}
    </div>
  );
}
