import React, { useState, useEffect } from 'react';
import TimeOffCalendar from '@/components/TimeOffCalendar';
import { supabase } from '@/lib/supabaseClient';

export default function TimeOffPage() {
  const [requests, setRequests] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (!user) return;
    const fetchRequests = async () => {
      const { data, error } = await supabase
        .from('time_off_requests')
        .select('*')
        .eq('driver_id', user.id);
      if (!error) setRequests(data);
    };
    fetchRequests();
  }, [user]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">My Time-Off Requests</h1>
      {user && <TimeOffCalendar driverId={user.id} requests={requests} />}
    </div>
  );
}
