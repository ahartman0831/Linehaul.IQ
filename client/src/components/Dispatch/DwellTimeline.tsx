
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const DwellTimeline = ({ dispatchId }: { dispatchId: string }) => {
  const [dwellData, setDwellData] = useState<any[]>([]);

  useEffect(() => {
    const fetchDwell = async () => {
      const { data, error } = await supabase.from('dwell_time_records').select('*').eq('dispatch_id', dispatchId);
      if (!error) setDwellData(data);
    };
    fetchDwell();
  }, [dispatchId]);

  return (
    <div>
      <h3>Dwell Timeline</h3>
      {dwellData.map((record, index) => (
        <div key={index}>
          <p>Yard: {record.yard}</p>
          <p>Arrival: {record.arrival_time}</p>
          <p>Departure: {record.departure_time}</p>
        </div>
      ))}
    </div>
  );
};

export default DwellTimeline;
