
import { Link } from 'react-router-dom';

const AISidebar = () => {
  return (
    <div className="w-64 bg-gray-100 p-4 h-full">
      <h2 className="text-lg font-bold mb-4">24/7 AI Manager</h2>
      <ul className="space-y-2">
        <li><Link to="/ai/live-message-feed" className="text-blue-600 hover:underline">Live Message Feed</Link></li>
        <li><Link to="/ai/escalation-log" className="text-blue-600 hover:underline">Escalation Log</Link></li>
        <li><Link to="/ai/gpt-summary" className="text-blue-600 hover:underline">Daily AI Comms Summaries</Link></li>
        <li><Link to="/ai/night-sms" className="text-blue-600 hover:underline">Night SMS Digest</Link></li>
        <li><Link to="/ai/alert-retry" className="text-blue-600 hover:underline">Alert Retry Log</Link></li>
        <li><Link to="/ai/breakdown-event" className="text-blue-600 hover:underline">Breakdown Event Card</Link></li>
        <li><Link to="/ai/behavior-flag" className="text-blue-600 hover:underline">Behavior Flags</Link></li>
        <li><Link to="/ai/decision-trail" className="text-blue-600 hover:underline">GPT Decision Trail</Link></li>
        <li><Link to="/ai/transcript" className="text-blue-600 hover:underline">Call Transcript Viewer</Link></li>
        <li><Link to="/ai/comms-playback" className="text-blue-600 hover:underline">Comms Playback</Link></li>
        <li><Link to="/ai/confidence-score" className="text-blue-600 hover:underline">Confidence Score</Link></li>
        <li><Link to="/ai/night-override" className="text-blue-600 hover:underline">Night Override</Link></li>
        <li><Link to="/ai/night-tree" className="text-blue-600 hover:underline">Night Routing Tree</Link></li>
        <li><Link to="/ai/terminal-profile" className="text-blue-600 hover:underline">Terminal Snapshot</Link></li>
        <li><Link to="/ai/terminal-scorecard" className="text-blue-600 hover:underline">Terminal Scorecard</Link></li>
      </ul>
    </div>
  );
};

export default AISidebar;
