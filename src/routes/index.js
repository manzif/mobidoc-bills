import express from 'express';
import activity  from './activity';

const router = express.Router();

// router.use('/api/bills', bills);
router.use('/api/activity', activity);

export default router;