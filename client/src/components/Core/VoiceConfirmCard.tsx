
const VoiceConfirmCard = ({ driverName, onConfirm }) => {
  return (
    <div className="p-4 border rounded shadow bg-green-100">
      <h3 className="font-bold mb-2">Voice Confirmation</h3>
      <p>Driver: {driverName}</p>
      <button onClick={onConfirm} className="bg-green-500 text-white px-4 py-2 rounded">Confirm</button>
    </div>
  );
};

export default VoiceConfirmCard;
