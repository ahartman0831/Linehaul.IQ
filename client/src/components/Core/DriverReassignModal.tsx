
const DriverReassignModal = ({ driverId, onReassign }) => {
  return (
    <div className="p-4 bg-white border rounded shadow">
      <h3 className="font-bold mb-2">Reassign Driver</h3>
      <button onClick={() => onReassign(driverId)} className="bg-blue-500 text-white px-4 py-2 rounded">Reassign</button>
    </div>
  );
};

export default DriverReassignModal;
