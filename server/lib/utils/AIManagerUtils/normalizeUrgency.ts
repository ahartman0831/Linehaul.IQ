
export function normalizeUrgency(label: string): number {
  switch (label.toLowerCase()) {
    case "critical":
    case "escalated":
      return 3;
    case "high":
      return 2;
    case "medium":
      return 1;
    default:
      return 0;
  }
}
