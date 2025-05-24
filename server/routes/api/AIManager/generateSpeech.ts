import express from 'express';
import { synthesizeSpeech } from '../../../lib/utils/AIManagerUtils/ttsUtils';

const router = express.Router();

router.post('/', async (req, res) => {
  const { text, voiceId } = req.body;
  try {
    const filePath = await synthesizeSpeech(text, voiceId);
    res.download(filePath);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate speech' });
  }
});

export default router;
