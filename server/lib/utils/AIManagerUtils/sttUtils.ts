import { OpenAI } from 'openai';
import fs from 'fs';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const transcribeAudio = async (filePath: string) => {
  const file = fs.createReadStream(filePath);
  const transcription = await openai.audio.transcriptions.create({ file, model: 'whisper-1' });
  return transcription.text;
};
