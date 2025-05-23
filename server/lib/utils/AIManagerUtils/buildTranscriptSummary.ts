
export function buildTranscriptSummary(transcript: string): string {
  const cleaned = transcript.trim().slice(0, 1000);
  return `Summarize this call transcript:\n${cleaned}`;
}
