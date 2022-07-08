import UserModel from '../Models/userModel.js';
import bcrypt from 'bcrypt';

// Find user in database
export const findUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id).select('-password');
    user ? res.status(200).json(user) : res.status(404).json('User not found');
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      user && res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json('Access denied');
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json('User deleted');
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json('Access denied');
  }
};

// Follow a user
export const followUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;

  if (id === currentUserId) {
    res.status(403).json('Action forbidden');
    return;
  }

  try {
    const userToFollow = await UserModel.findById(id);
    const currentUser = await UserModel.findById(currentUserId);

    if (!userToFollow.followers.includes(currentUserId)) {
      await userToFollow.updateOne({ $push: { followers: currentUserId } });
      await currentUser.updateOne({ $push: { following: id } });
      res.status(200).json('Following user');
    } else {
      res.status(403).json('You are already following this user');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Unfollow a user
export const unfollowUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;

  if (id === currentUserId) res.status(403).json('Action forbidden');

  try {
    const userToFollow = await UserModel.findById(id);
    const currentUser = await UserModel.findById(currentUserId);

    if (userToFollow.followers.includes(currentUserId)) {
      await userToFollow.updateOne({ $pull: { followers: currentUserId } });
      await currentUser.updateOne({ $pull: { following: id } });
      res.status(200).json('You are not following this user anymore');
    } else {
      res.status(403).json('You are not following this user');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
