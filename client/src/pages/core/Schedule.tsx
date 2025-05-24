import React, { useEffect, useState } from 'react';
import ScheduleBuilder from '@/components/ScheduleBuilder';
import { supabase } from '@/lib/supabaseClient';

export default function SchedulePage() {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      const { data, error } = await supabase.from('schedules').select('*');
      if (!error) setScheduleData(data);
    };
    fetchSchedule();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Weekly Schedule</h1>
      <ScheduleBuilder schedule={scheduleData} />
    </div>
  );
}
