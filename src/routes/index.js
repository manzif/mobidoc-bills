import express from 'express';
import bills  from './bills';

const router = express.Router();

router.use('/api/bills', bills);

export default router;