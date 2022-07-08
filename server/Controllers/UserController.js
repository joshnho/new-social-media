import UserModel from '../Models/userModel.js';

// Find user in database
export const findUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);
    user && res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
