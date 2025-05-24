import express from 'express';
import multer from 'multer';
// Update the import path below if 'sttUtils' is located elsewhere
import path from 'path';
// Update the import path below if 'sttUtils' is located elsewhere
import { transcribeAudio } from '../../../lib/utils/AIManagerUtils/sttUtils';
// Fix the import path to correctly resolve sttUtils
// The current file is at: /server/routes/api/AIManager/transcribe.ts
// The target is at:      /server/lib/utils/AIManager/sttUtils.ts
// So, relative path is:  ../../../lib/utils/AIManager/sttUtils
import { Request } from 'express';

interface MulterRequest extends Request {
  file: Express.Multer.File;
}

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/', upload.single('audio'), async (req, res) => {
  const mReq = req as MulterRequest;
  const transcription = await transcribeAudio(mReq.file.path);
  res.json({ transcription });
});

export default router;
