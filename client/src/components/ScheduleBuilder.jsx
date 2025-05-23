import React from 'react';
import DriverSelector from '@/components/shared/DriverSelector';
import RouteSelector from '@/components/shared/RouteSelector';

export default function ScheduleBuilder({ schedule }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {schedule.map((entry) => (
        <div key={entry.id} className="border p-4 rounded shadow">
          <h2 className="font-semibold">Scheduled Date: {entry.scheduled_date}</h2>
          <DriverSelector selectedId={entry.driver_id} />
          <RouteSelector selectedId={entry.route_id} />
        </div>
      ))}
    </div>
  );
}
