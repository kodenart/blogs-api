const { User } = require('../database/models');

const validateEmail = async (email) => {
  const isValid = await User.findOne({ where: { email } });
  return isValid;
};

const create = async (newUser) => {
  const response = await User.create(newUser);
  return response.id;
};

const getAll = async () => {
  const response = await User.findAll({ attributes: { exclude: ['password'] } });
  return response;
};

const getById = async (id) => {
  // if not existent, returns null
  const response = await User.findOne({ attributes: { exclude: ['password'] }, where: { id } });
  return response;
};

module.exports = {
  validateEmail,
  create,
  getAll,
  getById,
};