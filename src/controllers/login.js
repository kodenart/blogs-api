const validateAccount = require('../services/validateAccount');
const generateToken = require('../utils/generateToken');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    const err = {
        statusCode: 400,
        message: 'Some required fields are missing',
      };
    return next(err);
    } 
        
  const isValid = await validateAccount(email, password);
  if (!isValid) {
    const err = {
        statusCode: 400,
        message: 'Invalid fields',
      };
    return next(err);
  }
  const token = generateToken(email);
  return res.status(200).json({ token });
};

module.exports = login;