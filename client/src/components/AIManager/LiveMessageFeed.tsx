
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Message {
  timestamp: string;
  channel: string;
  content: string;
  flag?: string;
}

export default function LiveMessageFeed() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get('/api/chat/monitor');
        setMessages(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Error fetching messages", error);
      }
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded-lg overflow-y-auto max-h-[70vh]">
      <h2 className="text-lg font-semibold mb-3">Live Message Feed</h2>
      {messages.map((msg, idx) => (
        <div key={idx} className="mb-2 border-b pb-2">
          <div className="text-sm text-gray-500">{msg.timestamp} — {msg.channel}</div>
          <div className="text-sm">{msg.content}</div>
          {msg.flag && <div className="text-xs text-red-500 mt-1">Flag: {msg.flag}</div>}
        </div>
      ))}
    </div>
  );
}
