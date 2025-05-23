interface NightTreeState {
  auto: boolean;
  override: boolean;
  last_escalation: string;
}

export default function NightTreeStatusPanel({ state }: { state: NightTreeState }) {
  return (
    <div className="p-4 border rounded bg-slate-50">
      <h4 className="text-sm font-bold">Night Routing Tree Status</h4>
      <ul className="mt-2 text-xs text-gray-700">
        <li>Auto Mode: {state.auto ? "Enabled" : "Disabled"}</li>
        <li>Override Active: {state.override ? "Yes" : "No"}</li>
        <li>Last Escalation: {state.last_escalation}</li>
      </ul>
    </div>
  );
}
