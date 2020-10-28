import express from 'express';
import bills from '../controllers/bills';

const route = express.Router();

route.get('/bills', bills.getAllBillings);

export default route;