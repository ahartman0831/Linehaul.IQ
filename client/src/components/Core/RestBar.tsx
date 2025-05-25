
const RestBar = ({ hoursLeft }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div className="bg-green-500 h-4 rounded-full" style={{ width: `${hoursLeft * 10}%` }}></div>
    </div>
  );
};

export default RestBar;
