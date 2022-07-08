import express from 'express';
import { findUser } from '../Controllers/UserController/UserController.js';

const router = express.Router();

router.get('/:id', findUser);

export default router;
