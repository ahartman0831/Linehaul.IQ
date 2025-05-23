import React, { useState } from "react";
import DwellTimeCard from "@/components/Dispatch/DwellTimeCard";

const DwellTimePanel: React.FC = () => {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");

  const calculateDwellMinutes = () => {
    const start = new Date(arrival);
    const end = new Date(departure);
    const diff = (end.getTime() - start.getTime()) / 60000;
    return Math.max(0, Math.round(diff));
  };

  const dwell = arrival && departure ? calculateDwellMinutes() : null;

  return (
    <div className="p-6 space-y-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold">Dwell Time Manager</h1>
      <input
        type="datetime-local"
        value={arrival}
        onChange={(e) => setArrival(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Arrival Time"
      />
      <input
        type="datetime-local"
        value={departure}
        onChange={(e) => setDeparture(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Departure Time"
      />
      {dwell !== null && <DwellTimeCard dwellMinutes={dwell} isOvertime={dwell > 30} />}
    </div>
  );
};

export default DwellTimePanel;