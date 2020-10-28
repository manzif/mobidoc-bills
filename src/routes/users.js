import express from 'express';
import users from '../controllers/users';

const route = express.Router();

route.post('/nid', users.checkId);

export default route;