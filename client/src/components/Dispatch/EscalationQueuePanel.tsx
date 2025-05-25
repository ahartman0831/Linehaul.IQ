
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const EscalationQueuePanel = () => {
  const [escalations, setEscalations] = useState<any[]>([]);

  useEffect(() => {
    const fetchEscalations = async () => {
      const { data, error } = await supabase.from('escalation_events').select('*').order('triggered_at', { ascending: false });
      if (!error) setEscalations(data);
    };
    fetchEscalations();
  }, []);

  return (
    <div>
      <h3>Escalation Queue</h3>
      {escalations.map((event, idx) => (
        <div key={idx}>
          <p>{event.dispatch_id} - {event.level} - {new Date(event.triggered_at).toLocaleString()}</p>
          <p>{event.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default EscalationQueuePanel;
