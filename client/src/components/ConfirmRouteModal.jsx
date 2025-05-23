import React from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function ConfirmRouteModal({ routeId, driverId, onClose }) {
  const handleConfirm = async (status) => {
    const { error } = await supabase.from('route_confirmations').insert({
      route_id: routeId,
      driver_id: driverId,
      status,
      confirmation_time: new Date().toISOString(),
      confirmation_type: 'manual'
    });
    if (!error) onClose();
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">Confirm This Route?</h2>
      <div className="flex space-x-4">
        <button onClick={() => handleConfirm('confirmed')} className="bg-blue-600 text-white px-4 py-2 rounded">YES</button>
        <button onClick={() => handleConfirm('declined')} className="bg-red-600 text-white px-4 py-2 rounded">NO</button>
        <button onClick={onClose} className="ml-auto text-sm underline">Cancel</button>
      </div>
    </div>
  );
}
