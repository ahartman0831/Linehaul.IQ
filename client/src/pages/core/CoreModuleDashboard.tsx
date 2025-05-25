
import { Link } from 'react-router-dom';

const CoreModuleDashboard = () => {
  const tools = [
    { name: 'Schedule', path: '/core/schedule' },
    { name: 'Time Off Requests', path: '/core/timeoff' },
    { name: 'Payroll', path: '/core/payroll' },
    { name: 'Receipts', path: '/core/receipts' },
    { name: 'Readiness Snapshot', path: '/core/readiness' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Core Operations Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.name}
            to={tool.path}
            className="block p-4 bg-white rounded shadow hover:shadow-lg border border-gray-200 hover:bg-gray-50"
          >
            <h2 className="text-lg font-semibold">{tool.name}</h2>
            <p className="text-sm text-gray-500">Manage {tool.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoreModuleDashboard;
