import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function ReceiptUploader({ driverId }) {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    const { data, error } = await supabase.storage.from('receipts').upload(`receipts/${file.name}`, file);
    if (error) return setStatus('Upload failed');

    const { error: insertError } = await supabase.from('driver_receipts').insert({
      driver_id: driverId,
      file_url: data.path,
      uploaded_at: new Date().toISOString()
    });

    if (insertError) setStatus('Insert failed');
    else setStatus('Uploaded successfully');
  };

  return (
    <div className="space-y-4">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} className="bg-indigo-600 text-white px-4 py-2 rounded">Upload Receipt</button>
      {status && <p>{status}</p>}
    </div>
  );
}
