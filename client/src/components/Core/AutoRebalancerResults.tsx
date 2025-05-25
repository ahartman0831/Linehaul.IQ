
const AutoRebalancerResults = ({ results }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="font-bold">Auto Rebalance Results</h3>
      <ul>
        {results.map((r, i) => <li key={i}>{r.driver} reassigned to {r.new_route}</li>)}
      </ul>
    </div>
  );
};

export default AutoRebalancerResults;
