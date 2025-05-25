
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const WeeklyBriefCard = ({ routeId }: { routeId: string }) => {
  const [brief, setBrief] = useState<any>(null);

  useEffect(() => {
    const fetchBrief = async () => {
      const { data, error } = await supabase.from('briefing_logs').select('*').eq('route_id', routeId).single();
      if (!error) setBrief(data);
    };
    fetchBrief();
  }, [routeId]);

  return (
    <div>
      <h3>Weekly Brief for Route {routeId}</h3>
      {brief ? <p>{brief.summary_text}</p> : <p>Loading...</p>}
    </div>
  );
};

export default WeeklyBriefCard;
