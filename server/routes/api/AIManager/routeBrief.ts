import express from 'express';
import { getRouteBrief } from '../../../controllers/AIManagerController';

const router = express.Router();

router.get('/routeBrief', async (req, res) => {
  try {
    const routeBrief = await getRouteBrief(req.query);
    res.json(routeBrief);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
});

export default router;