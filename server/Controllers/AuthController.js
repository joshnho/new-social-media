import UserModel from '../Models/userModel.js';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
  const { username, password, firstName, lastName } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new UserModel({
    username,
    password: hashedPassword,
    firstName,
    lastName,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      passwordMatch && res.status(200).json(user);
    }
    res.status(400).json('Invalid credentials');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
