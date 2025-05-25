
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const TimeOffRequestForm = () => {
  const [driverId, setDriverId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('pto_requests').insert([{ driver_id: driverId, start_date: startDate, end_date: endDate, reason }]);
    if (error) {
      console.error('[TimeOffRequestForm] Error:', error.message);
      setStatus('Error submitting request');
    } else {
      setStatus('Request submitted');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <h3 className="font-bold">Submit Time Off</h3>
      <input value={driverId} onChange={(e) => setDriverId(e.target.value)} placeholder="Driver ID" className="border p-2 w-full my-2" />
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border p-2 w-full my-2" />
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border p-2 w-full my-2" />
      <textarea value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Reason" className="border p-2 w-full my-2"></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default TimeOffRequestForm;
