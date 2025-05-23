export default function generateReadinessSnapshot({
  driver,
  lastShift,
  recentFlags,
  fatigueSignals
}: {
  driver: any;
  lastShift: any;
  recentFlags: any[];
  fatigueSignals: any[];
}) {
  return {
    context: { driver, lastShift, recentFlags, fatigueSignals },
    instruction: "Evaluate if the driver is safe and ready for dispatch today. Consider fatigue, recent flags, route history, and coaching logs. Return readiness = true/false and notes.",
    response_format: "json"
  };
}
