export default function reviewHookPhotoPrompt({
  route_id,
  driver_id,
}: {
  route_id: string;
  driver_id: string;
}) {
  return {
    instruction: `
You are a FedEx Ground dispatch safety auditor.

Evaluate the attached image for hook photo readiness. Look for:
- 5th wheel latch closed
- All hoses (air/electric) connected
- Trailer alignment (centered)
- Landing gear fully retracted

Reply with:
- PASS or FAIL
- One-sentence explanation
- Confidence (High / Medium / Low)

Example:
PASS - All components properly connected and clearly visible. Confidence: High.
If any safety-critical element is missing, FAIL the image.
`,
  };
}
