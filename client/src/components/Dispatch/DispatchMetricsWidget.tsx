
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const DispatchMetricsWidget = ({ dispatchId }: { dispatchId: string }) => {
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      const { data, error } = await supabase.from('eta_messages').select('*').eq('dispatch_id', dispatchId).single();
      if (!error) setMetrics(data);
    };
    fetchMetrics();
  }, [dispatchId]);

  if (!metrics) return <p>No metrics available.</p>;

  return (
    <div>
      <h3>Dispatch Metrics</h3>
      <p>ETA: {metrics.eta}</p>
      <p>Notes: {metrics.message}</p>
    </div>
  );
};

export default DispatchMetricsWidget;
