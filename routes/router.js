import express from 'express';

import PingController from '../controllers/ping.js'

const router = express.Router();

router.get('/ping', PingController.ping);

export default router