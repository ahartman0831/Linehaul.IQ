
import { useState } from 'react';

const EscalationTemplateDropdown = ({ onSelect }: { onSelect: (template: string) => void }) => {
  const templates = [
    "Late dispatch notification",
    "Driver no-show escalation",
    "Hook slip mismatch alert",
    "ETA update required"
  ];

  const [selected, setSelected] = useState<string>('');

  return (
    <div>
      <select value={selected} onChange={(e) => { setSelected(e.target.value); onSelect(e.target.value); }}>
        <option value="">Select Escalation Template</option>
        {templates.map((t, idx) => <option key={idx} value={t}>{t}</option>)}
      </select>
    </div>
  );
};

export default EscalationTemplateDropdown;
