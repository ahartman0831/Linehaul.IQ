
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const DispatchTimeline = ({ dispatchId }: { dispatchId: string }) => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchTimeline = async () => {
      const { data, error } = await supabase.from('trip_logs').select('*').eq('dispatch_id', dispatchId).order('event_time', { ascending: true });
      if (!error) setEvents(data);
    };
    fetchTimeline();
  }, [dispatchId]);

  return (
    <div>
      <h3>Dispatch Timeline</h3>
      {events.map((event, idx) => (
        <div key={idx}>
          <p>{event.event_type} - {new Date(event.event_time).toLocaleString()}</p>
          <p>{event.notes}</p>
        </div>
      ))}
    </div>
  );
};

export default DispatchTimeline;
