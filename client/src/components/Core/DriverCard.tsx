
const DriverCard = ({ driver }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{driver.name}</h3>
      <p>Assigned Route: {driver.route_id}</p>
      <p>Fatigue Status: {driver.fatigue_status}</p>
    </div>
  );
};

export default DriverCard;
