import express from 'express';
import activity from '../controllers/activity';

const route = express.Router();

route.post('/login', activity.login);

export default route;