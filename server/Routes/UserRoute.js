import express from 'express';
import {
  deleteUser,
  findUser,
  followUser,
  unfollowUser,
  updateUser,
} from '../Controllers/UserController.js';

const router = express.Router();

router.get('/:id', findUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.put('/:id/follow', followUser);
router.put('/:id/unfollow', unfollowUser);

export default router;
