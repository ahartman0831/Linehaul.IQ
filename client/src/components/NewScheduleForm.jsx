import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function NewScheduleForm({ onSuccess }) {
  const [form, setForm] = useState({ driver_id: '', route_id: '', scheduled_date: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('schedules').insert(form);
    if (error) console.error(error);
    else {
      alert('Schedule created!');
      if (onSuccess) onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="driver_id" onChange={handleChange} placeholder="Driver ID" className="border p-2 w-full" />
      <input type="text" name="route_id" onChange={handleChange} placeholder="Route ID" className="border p-2 w-full" />
      <input type="date" name="scheduled_date" onChange={handleChange} className="border p-2 w-full" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Assign Schedule</button>
    </form>
  );
}
