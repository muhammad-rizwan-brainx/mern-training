const User = require("../models/userModel");

const createUser = async (userName, email, password) => {
  const user = new User({
    userName,
    email,
    password
  });

  return await user.save();
};

const findUser = async (email) => {
  return await User.findOne({ email });
};

const updatePassword = async (user, newPassword) => {
  user.password = newPassword;
  user.resetToken = null;

  return await user.save();
};

const findUserWithResetToken = async(resetPasswordToken)=>{
  return await User.findOne({ resetPasswordToken });
}


const updateResetToken = async (user, resetToken, expiration) => {
  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = expiration;
  return await user.save();
};

module.exports = {
  findUserWithResetToken,
  updateResetToken,
  updatePassword,
  findUser,
  createUser,
};