
import { useState } from 'react';

interface CallTranscriptSearchProps {
  onSearch: (term: string) => void;
}

export default function CallTranscriptSearch({ onSearch }: CallTranscriptSearchProps) {
  const [term, setTerm] = useState("");

  return (
    <div className="mb-4">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search call transcript..."
        className="border p-2 w-full rounded"
      />
      <button
        onClick={() => onSearch(term)}
        className="mt-2 px-4 py-1 bg-indigo-600 text-white rounded"
      >
        Search
      </button>
    </div>
  );
}
