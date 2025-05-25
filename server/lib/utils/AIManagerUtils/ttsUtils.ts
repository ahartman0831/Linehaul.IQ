import axios from 'axios';
import fs from 'fs';

export const synthesizeSpeech = async (text: string, voiceId = 'Rachel') => {
  const response = await axios.post(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    { text, model_id: 'eleven_multilingual_v2' },
    { headers: { 'xi-api-key': process.env.ELEVENLABS_API_KEY }, responseType: 'arraybuffer' }
  );

  const outputPath = `/tmp/speech_${Date.now()}.mp3`;
  fs.writeFileSync(outputPath, response.data as Buffer);
  return outputPath;
};

export const getAvailableVoices = async () => {
  const response = await axios.get('https://api.elevenlabs.io/v1/voices', {
    headers: { 'xi-api-key': process.env.ELEVENLABS_API_KEY },
  });
  return (response.data as { voices: any[] }).voices;
};
