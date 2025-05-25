
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const ETANotifierCard = ({ dispatchId }: { dispatchId: string }) => {
  const [eta, setEta] = useState<any>(null);

  useEffect(() => {
    const fetchETA = async () => {
      const { data, error } = await supabase.from('eta_messages').select('*').eq('dispatch_id', dispatchId).single();
      if (!error) setEta(data);
    };
    fetchETA();
  }, [dispatchId]);

  return (
    <div>
      <h3>ETA Notifier</h3>
      {eta ? <p>ETA: {eta.eta} | Message: {eta.message}</p> : <p>No ETA available</p>}
    </div>
  );
};

export default ETANotifierCard;
