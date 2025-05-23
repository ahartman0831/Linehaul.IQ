
import React from 'react';

export default function DecisionAuditTrail({ audit }) {
  return (
    <div className="p-4 bg-gray-50 rounded border">
      <h3 className="text-md font-bold mb-2">GPT Decision Trail</h3>
      <ul className="text-sm list-disc ml-4">
        {audit?.steps?.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ul>
    </div>
  );
}
