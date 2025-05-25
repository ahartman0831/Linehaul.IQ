
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const DispatchDashboardPanel = () => {
  const [dispatches, setDispatches] = useState<any[]>([]);

  useEffect(() => {
    const fetchDispatches = async () => {
      const { data, error } = await supabase.from('dispatches').select('*');
      if (!error) setDispatches(data);
    };
    fetchDispatches();
  }, []);

  return (
    <div>
      <h3>Dispatch Dashboard</h3>
      {dispatches.map((d, idx) => (
        <div key={idx}>
          <p><strong>Route:</strong> {d.route_id} | <strong>Driver:</strong> {d.driver_id}</p>
          <p>Status: {d.status}</p>
        </div>
      ))}
    </div>
  );
};

export default DispatchDashboardPanel;
