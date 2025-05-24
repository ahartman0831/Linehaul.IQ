export default function DriverSelector({ selectedId }) {
  return (
    <div>
      <label className="block text-sm font-medium">Driver</label>
      <select defaultValue={selectedId} className="w-full border rounded p-2">
        <option value="">Select Driver</option>
        {/* Populate from context or props */}
      </select>
    </div>
  );
}
