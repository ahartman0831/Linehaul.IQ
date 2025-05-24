export default function RouteSelector({ selectedId }) {
  return (
    <div>
      <label className="block text-sm font-medium">Route</label>
      <select defaultValue={selectedId} className="w-full border rounded p-2">
        <option value="">Select Route</option>
        {/* Populate from context or props */}
      </select>
    </div>
  );
}
