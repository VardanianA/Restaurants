import express from 'express';
import { createData, getData } from './controller';

const router = express.Router();

router.get('/', getData);
router.post('/create', createData);

export default router;