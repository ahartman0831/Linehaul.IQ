
import DriverBehaviorFlagCard from '../../components/AIManager/DriverBehaviorFlagCard';

export default function DriverFlagReview() {
  const testFlag = {
    message: "Multiple late responses and missed confirmations",
    driverName: "Marcus H.",
    scoreDelta: "-12"
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">Driver Behavior Review</h2>
      <DriverBehaviorFlagCard flag={testFlag} />
    </div>
  );
}
