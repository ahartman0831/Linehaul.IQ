
const FatigueStatusPanel = ({ fatigueLevel }) => {
  return (
    <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500">
      <h3 className="font-bold">Fatigue Status</h3>
      <p>{fatigueLevel}</p>
    </div>
  );
};

export default FatigueStatusPanel;
