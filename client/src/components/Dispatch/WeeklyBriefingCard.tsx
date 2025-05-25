
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const WeeklyBriefingCard = ({ routeId }: { routeId: string }) => {
  const [briefing, setBriefing] = useState<any>(null);

  useEffect(() => {
    const fetchBrief = async () => {
      const { data, error } = await supabase.from('briefing_logs').select('*').eq('route_id', routeId).single();
      if (!error) setBriefing(data);
    };
    fetchBrief();
  }, [routeId]);

  return (
    <div>
      <h3>Weekly Route Brief</h3>
      {briefing ? <p>{briefing.summary_text}</p> : <p>Loading...</p>}
    </div>
  );
};

export default WeeklyBriefingCard;
