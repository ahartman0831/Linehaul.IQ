
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const DispatchTimelineBar = ({ dispatchId }: { dispatchId: string }) => {
  const [timeline, setTimeline] = useState<any[]>([]);

  useEffect(() => {
    const fetchTimeline = async () => {
      const { data, error } = await supabase.from('trip_logs').select('*').eq('dispatch_id', dispatchId).order('event_time', { ascending: true });
      if (!error) setTimeline(data);
    };
    fetchTimeline();
  }, [dispatchId]);

  return (
    <div>
      <h3>Dispatch Timeline Bar</h3>
      <ul>
        {timeline.map((event, idx) => (
          <li key={idx}>{new Date(event.event_time).toLocaleString()} - {event.event_type}</li>
        ))}
      </ul>
    </div>
  );
};

export default DispatchTimelineBar;
