
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const DispatchMapPanel = ({ dispatchId }: { dispatchId: string }) => {
  const [locationData, setLocationData] = useState<any[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const { data, error } = await supabase.from('trip_logs').select('location').eq('dispatch_id', dispatchId);
      if (!error) setLocationData(data);
    };
    fetchLocations();
  }, [dispatchId]);

  return (
    <div>
      <h3>Dispatch Map Panel (Placeholder for Map Integration)</h3>
      <ul>
        {locationData.map((loc, idx) => (
          <li key={idx}>{loc.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default DispatchMapPanel;
