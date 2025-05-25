
const ReadinessScoreCard = ({ score }) => {
  return (
    <div className="p-4 border rounded shadow bg-green-50">
      <h3 className="font-bold">Driver Readiness</h3>
      <p>Score: {score}</p>
    </div>
  );
};

export default ReadinessScoreCard;
