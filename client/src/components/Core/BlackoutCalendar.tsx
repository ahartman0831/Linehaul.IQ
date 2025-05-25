
const BlackoutCalendar = ({ blackouts }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="font-bold">Blackout Dates</h3>
      <ul>
        {blackouts.map((b, i) => <li key={i}>{b.date}: {b.reason}</li>)}
      </ul>
    </div>
  );
};

export default BlackoutCalendar;
