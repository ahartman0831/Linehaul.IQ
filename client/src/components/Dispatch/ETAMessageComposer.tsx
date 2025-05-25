
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const ETAMessageComposer = ({ dispatchId }: { dispatchId: string }) => {
  const [eta, setEta] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = async () => {
    const { data, error } = await supabase.from('eta_messages').insert([{ dispatch_id: dispatchId, eta, message }]);
    if (error) alert('Failed to send ETA');
    else alert('ETA sent!');
  };

  return (
    <div>
      <h3>Send ETA Update</h3>
      <input type="datetime-local" value={eta} onChange={(e) => setEta(e.target.value)} />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message details..." />
      <button onClick={handleSend}>Send ETA</button>
    </div>
  );
};

export default ETAMessageComposer;
