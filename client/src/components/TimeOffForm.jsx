import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function TimeOffForm({ driverId, onSuccess }) {
  const [form, setForm] = useState({ start_date: '', end_date: '', reason: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('time_off_requests').insert({
      driver_id: driverId,
      ...form,
      status: 'pending'
    });
    if (error) setStatus('Error submitting');
    else {
      setStatus('Submitted!');
      if (onSuccess) onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="date" name="start_date" value={form.start_date} onChange={handleChange} className="border p-2 w-full" placeholder="Start Date" required />
      <input type="date" name="end_date" value={form.end_date} onChange={handleChange} className="border p-2 w-full" placeholder="End Date" required />
      <input type="text" name="reason" value={form.reason} onChange={handleChange} className="border p-2 w-full" placeholder="Reason" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      {status && <p>{status}</p>}
    </form>
  );
}
