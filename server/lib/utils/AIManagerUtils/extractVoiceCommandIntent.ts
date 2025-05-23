
export function extractVoiceCommandIntent(gptResponse: any): { action: string; target: string; details: string } {
  if (!gptResponse || typeof gptResponse !== 'object') return { action: "", target: "", details: "" };
  return {
    action: gptResponse.action || "",
    target: gptResponse.target || "",
    details: gptResponse.details || ""
  };
}
