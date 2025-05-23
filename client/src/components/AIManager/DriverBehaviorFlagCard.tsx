

export default function DriverBehaviorFlagCard({ flag }: { flag: { message: string, driverName: string, scoreDelta: string } }) {
  if (!flag) return null;

  return (
    <div className="p-3 bg-red-100 border-l-4 border-red-600 rounded mb-3">
      <div className="text-sm font-medium text-red-800">Behavior Alert</div>
      <div className="text-sm text-red-700 mt-1">{flag.message}</div>
      <div className="text-xs text-gray-500 mt-2">Driver: {flag.driverName} — Score Impact: {flag.scoreDelta}</div>
    </div>
  );
}
