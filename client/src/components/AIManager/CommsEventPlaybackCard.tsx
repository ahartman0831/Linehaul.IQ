
import React from 'react';

export default function CommsEventPlaybackCard({ message, onReplay }) {
  return (
    <div className="p-3 bg-white border shadow-sm rounded flex justify-between items-center">
      <div>
        <div className="text-sm font-medium">{message.channel} – {message.type}</div>
        <div className="text-xs text-gray-600">{message.timestamp}</div>
      </div>
      <button
        onClick={() => onReplay(message.id)}
        className="text-xs text-indigo-600 hover:underline"
      >
        Replay
      </button>
    </div>
  );
}
