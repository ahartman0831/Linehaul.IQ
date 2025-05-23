

export default function CommsConfidenceScoreTag({ score }: { score: number }) {
  let color = "text-gray-500";
  if (score >= 90) color = "text-green-600";
  else if (score >= 70) color = "text-yellow-600";
  else color = "text-red-600";

  return (
    <span className={`text-xs font-medium ${color}`}>
      GPT Confidence: {score}%
    </span>
  );
}
