import { useState } from 'react';

const ResponseCard = ({ text }: { text: string }) => {
  const [audioSrc, setAudioSrc] = useState<string | null>(null);

  const handleGenerateAudio = async () => {
    const response = await fetch('/api/ai-manager/generateSpeech', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setAudioSrc(url);
  };

  return (
    <div className="p-4 border rounded">
      <p>{text}</p>
      <button onClick={handleGenerateAudio} className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">
        Play AI Voice
      </button>
      {audioSrc && <audio controls src={audioSrc} className="mt-2 w-full" />}
    </div>
  );
};

export default ResponseCard;