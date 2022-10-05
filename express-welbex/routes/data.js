import express from 'express';
import controlles from '../controllers/data.js';
const router = express.Router();
const { getData, postData } = controlles;

router.get('/data', getData);
router.post('/data', postData);


export default router;