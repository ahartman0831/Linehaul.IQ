import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function TimeOffCalendar({ driverId, requests }) {
  const [form, setForm] = useState({ start_date: '', end_date: '', reason: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('time_off_requests').insert({
      driver_id: driverId,
      start_date: form.start_date,
      end_date: form.end_date,
      reason: form.reason,
      status: 'pending'
    });
    if (error) return setMessage('Error submitting request');
    setMessage('Request submitted!');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Start Date</label>
          <input type="date" value={form.start_date} onChange={e => setForm({ ...form, start_date: e.target.value })} className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">End Date</label>
          <input type="date" value={form.end_date} onChange={e => setForm({ ...form, end_date: e.target.value })} className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Reason</label>
          <input type="text" value={form.reason} onChange={e => setForm({ ...form, reason: e.target.value })} className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit Request</button>
        {message && <p className="mt-2 text-sm">{message}</p>}
      </form>

      <div className="mt-6">
        <h2 className="font-semibold mb-2">Submitted Requests</h2>
        <ul>
          {requests.map(r => (
            <li key={r.id} className="text-sm">{r.start_date} to {r.end_date} — {r.reason} ({r.status})</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
