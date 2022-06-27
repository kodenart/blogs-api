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

module.exports = {
  create,
};