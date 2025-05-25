
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const DispatchPhotoUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  const handleUpload = async () => {
    if (!file) return;
    const { error } = await supabase.storage.from('dispatch-photos').upload(`hook/${file.name}`, file);
    if (error) setMessage('Error uploading photo');
    else setMessage('Photo uploaded!');
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload}>Upload Hook Photo</button>
      <p>{message}</p>
    </div>
  );
};

export default DispatchPhotoUploader;
