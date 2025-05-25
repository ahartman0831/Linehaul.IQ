
const TripDetailsPopup = ({ trip }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="font-bold">Trip Details</h3>
      <p>Driver: {trip.driver}</p>
      <p>Miles: {trip.miles}</p>
      <p>Start: {trip.start_time}</p>
      <p>End: {trip.end_time}</p>
    </div>
  );
};

export default TripDetailsPopup;
