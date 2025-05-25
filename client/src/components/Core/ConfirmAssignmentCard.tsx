
const ConfirmAssignmentCard = ({ driverId, onConfirm }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="font-bold mb-2">Confirm Assignment</h3>
      <button onClick={() => onConfirm(driverId)} className="bg-green-500 text-white px-4 py-2 rounded">Confirm</button>
    </div>
  );
};

export default ConfirmAssignmentCard;
