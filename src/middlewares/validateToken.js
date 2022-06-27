const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const validate = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return next({ statusCode: 401, message: 'Token not found' });
  try {
    const decode = jwt.verify(authorization, secret);  
    req.user = decode;
    return next();
  } catch (error) {
    return next({ statusCode: 401, message: 'Expired or invalid token' });
  }
};

module.exports = validate;