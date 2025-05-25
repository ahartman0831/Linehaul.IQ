
const ReadinessSnapshotPanel = ({ data }) => {
  return (
    <div className="p-4 border rounded shadow bg-blue-50">
      <h3 className="font-bold">Driver Readiness Snapshot</h3>
      <ul>
        {data.map((item, i) => <li key={i}>{item.label}: {item.value}</li>)}
      </ul>
    </div>
  );
};

export default ReadinessSnapshotPanel;
