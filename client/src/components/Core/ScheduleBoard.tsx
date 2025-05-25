
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const ScheduleBoard = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      const { data, error } = await supabase.from('driver_assignments').select('*');
      if (error) {
        console.error('[ScheduleBoard] Error fetching schedules:', error.message);
      } else {
        setSchedules(data);
      }
    };
    fetchSchedules();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Schedule Board</h2>
      <ul>
        {schedules.map((schedule) => (
          <li key={schedule.id}>{schedule.driver_name} - {schedule.route_id}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleBoard;
