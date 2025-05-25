
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const ReceiptUploader = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleUpload = async () => {
    if (!file) return;
    const { error } = await supabase.storage.from('receipts').upload(`uploads/${file.name}`, file);
    if (error) {
      console.error('[ReceiptUploader] Error:', error.message);
      setStatus('Upload failed');
    } else {
      setStatus('Upload successful');
    }
  };

  return (
    <div className="p-4 border rounded shadow">
      <h3 className="font-bold">Upload Receipt</h3>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="my-2" />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
      <p>{status}</p>
    </div>
  );
};

export default ReceiptUploader;
