import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalDashboard from './pages/GlobalDashboard';
import AIManagerDashboard from './pages/AIManager/AIManagerDashboard';
import DispatchDashboardPanel from './components/Dispatch/DispatchDashboardPanel';

// Import other dashboards as you create them
// import MaintenanceDashboard from './pages/Maintenance/MaintenanceDashboard';
// import ComplianceDashboard from './pages/Compliance/ComplianceDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GlobalDashboard />} />
        <Route path="/ai/*" element={<AIManagerDashboard />} />
        <Route path="/dispatch/*" element={<DispatchDashboardPanel />} />
        {/* <Route path="/maintenance/*" element={<MaintenanceDashboard />} /> */}
        {/* <Route path="/compliance/*" element={<ComplianceDashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}