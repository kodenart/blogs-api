const { User } = require('../database/models');

const validateEmail = async (email) => {
  const isValid = await User.findOne({ where: { email } });
  return isValid;
};

const create = async (newUser) => {
  const response = await User.create(newUser);
  return response.id;
};

module.exports = {
  validateEmail,
  create,
};