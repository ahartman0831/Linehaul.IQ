
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const DwellAlertCard = ({ dispatchId }: { dispatchId: string }) => {
  const [alerts, setAlerts] = useState<any[]>([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      const { data, error } = await supabase.from('dwell_time_records').select('*').eq('dispatch_id', dispatchId).gt('duration_minutes', 60);
      if (!error) setAlerts(data);
    };
    fetchAlerts();
  }, [dispatchId]);

  return (
    <div>
      <h3>Dwell Alerts</h3>
      {alerts.length === 0 ? <p>No high-dwell events.</p> : alerts.map((alert, idx) => (
        <div key={idx}>
          <p>{alert.yard} - {alert.arrival_time} to {alert.departure_time}</p>
        </div>
      ))}
    </div>
  );
};

export default DwellAlertCard;
