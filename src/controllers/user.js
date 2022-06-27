const UserServices = require('../services/user');
const tokenGen = require('../utils/generateToken');

const create = async (req, res, next) => {
  const {
    displayName,
    email,
    password,
    image,
  } = req.body;

  const alreadyExists = await UserServices.validateEmail(email);
  if (alreadyExists) {
    return next({ statusCode: 409, message: 'User already registered' });
  }
  
  await UserServices.create({ displayName, email, password, image });

  const token = tokenGen(email);
  return res.status(201).json({ token });
};

const getAll = async (_req, res, _next) => {
  const users = await UserServices.getAll();
  return res.status(200).json(users);
};

const getById = async (req, res, next) => {
  const user = await UserServices.getById(req.params.id);
  if (!user) return next({ statusCode: 404, message: 'User does not exist' });
  return res.status(200).json(user);
};

module.exports = {
  create,
  getAll,
  getById,
};