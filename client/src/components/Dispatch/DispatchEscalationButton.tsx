import React, { useState } from "react";

type Props = {
  dispatchId: string;
};

const DispatchEscalationButton: React.FC<Props> = ({ dispatchId }) => {
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleEscalation = async () => {
    if (!confirmed) return;
    setLoading(true);
    try {
      const res = await fetch("/api/dispatch/escalateRoute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dispatchId })
      });
      const result = await res.json();
      alert(result?.message || "Escalation triggered.");
    } catch (err) {
      console.error("Escalation failed", err);
      alert("Escalation failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {!confirmed ? (
        <button
          className="text-sm text-yellow-600 underline"
          onClick={() => setConfirmed(true)}
        >
          Confirm Escalation?
        </button>
      ) : (
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
          onClick={handleEscalation}
          disabled={loading}
        >
          {loading ? "Escalating..." : "Escalate Dispatch"}
        </button>
      )}
    </div>
  );
};

export default DispatchEscalationButton;