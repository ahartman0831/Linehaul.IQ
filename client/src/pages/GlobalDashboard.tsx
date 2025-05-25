import { Link } from 'react-router-dom';

const modules = [
  { name: "Core Operations", path: "/core" },
  { name: "AI Manager", path: "/ai" },
  { name: "Dispatch", path: "/dispatch" },
  { name: "Maintenance", path: "/maintenance" },
  { name: "Compliance", path: "/compliance" },
  { name: "Driver Engagement", path: "/engagement" },
  { name: "Data Intelligence", path: "/data-intel" },
  { name: "Safety", path: "/safety" },
  { name: "Finance Engine", path: "/finance" },
  { name: "Reporting and Comms", path: "/reporting" },
];

const GlobalDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">LinehaulIQ Global Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod) => (
          <Link
            key={mod.name}
            to={mod.path}
            className="block p-4 bg-white rounded shadow hover:shadow-lg border border-gray-200 hover:bg-gray-50"
          >
            <h2 className="text-lg font-semibold">{mod.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GlobalDashboard;
