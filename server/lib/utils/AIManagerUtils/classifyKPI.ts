
export function classifyKPI(message: string): string[] {
  const tags = [];
  const lower = message.toLowerCase();
  if (lower.includes("late") || lower.includes("delay")) tags.push("On-Time");
  if (lower.includes("safety") || lower.includes("accident")) tags.push("Safety");
  if (lower.includes("no response") || lower.includes("ignored")) tags.push("Communication");
  return tags.length > 0 ? tags : ["General"];
}
