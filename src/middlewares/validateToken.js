const jwt = require('jsonwebtoken');
const UserServices = require('../services/user');

const secret = process.env.JWT_SECRET;
const invalidToken = { statusCode: 401, message: 'Expired or invalid token' };

const validate = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return next({ statusCode: 401, message: 'Token not found' });
  try {
    const { email } = jwt.verify(authorization, secret);  
    const user = await UserServices.getByEmail(email);
    if (email !== user.email) return next(invalidToken); 
    // other middlewares may need this information
    req.user = user.dataValues;
    return next();
  } catch (error) {
    return next(invalidToken);
  }
};

module.exports = validate;