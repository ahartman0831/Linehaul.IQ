import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SchedulePage from '@/pages/core/Schedule';
import TimeOffPage from '@/pages/core/TimeOff';
import NewScheduleForm from '@/components/NewScheduleForm';
import TimeOffForm from '@/components/TimeOffForm';
import ConfirmRouteModal from '@/components/ConfirmRouteModal';
import ReceiptUploader from '@/components/ReceiptUploader';
import HookPhotoSubmit from '@/pages/dispatch/HookPhotoSubmit';
import HookPhotoReview from '@/pages/dispatch/HookPhotoReview';
import AIManagerDashboard from './pages/AIManagerDashboard';
import CallReviewPage from './pages/CallReviewPage';
import DriverFlagReview from './pages/DriverFlagReview';
import TranscriptPlaybackPage from './pages/TranscriptPlaybackPage';
import TerminalProfilePage from './pages/TerminalProfilePage';

export default function App() {
  const testDriverId = 'test-driver-123';
  const testRouteId = 'route-001';

  return (
    <BrowserRouter>
      <div className="p-4">
        <nav className="space-x-4 border-b pb-2 mb-4">
          <Link to="/schedule" className="text-blue-600">View Schedule</Link>
          <Link to="/timeoff" className="text-blue-600">Time Off</Link>
          <Link to="/assign" className="text-blue-600">Assign Schedule</Link>
          <Link to="/submit-pto" className="text-blue-600">Submit Time Off</Link>
          <Link to="/upload" className="text-blue-600">Upload Receipt</Link>
          <Link to="/confirm" className="text-blue-600">Confirm Route</Link>
          <Link to="/dispatch/photo" className="text-blue-600">Submit Hook Photo</Link>
          <Link to="/dispatch/review" className="text-blue-600">Review Hook Photos</Link>
                      <li><Link to="/">Dashboard</Link></li>
                      <li><Link to="/calls">Call Review</Link></li>
                      <li><Link to="/flags">Driver Flags</Link></li>
                      <li><Link to="/playback">Transcript Playback</Link></li>
                      <li><Link to="/terminal">Terminal Profile</Link></li>
          
       
        </nav>
        <Routes>
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/timeoff" element={<TimeOffPage />} />
          <Route path="/assign" element={<NewScheduleForm />} />
          <Route path="/submit-pto" element={<TimeOffForm driverId={testDriverId} />} />
          <Route path="/upload" element={<ReceiptUploader driverId={testDriverId} />} />
          <Route path="/confirm" element={<ConfirmRouteModal routeId={testRouteId} driverId={testDriverId} onClose={() => alert('Modal closed')} />} />
          <Route path="/dispatch/photo" element={<HookPhotoSubmit driverId={testDriverId} routeId={testRouteId} />} />
          <Route path="/dispatch/review" element={<HookPhotoReview />} />
                    <Route path="/" element={<AIManagerDashboard />} />
                    <Route path="/calls" element={<CallReviewPage />} />
                    <Route path="/flags" element={<DriverFlagReview />} />
                    <Route path="/playback" element={<TranscriptPlaybackPage />} />
                    <Route path="/terminal" element={<TerminalProfilePage />} />
          
          <Route path="/" element={<h1 className="text-xl">Welcome to LinehaulIQ Dev Mode</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
