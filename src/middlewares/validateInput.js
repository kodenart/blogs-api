const Joi = require('joi');

const validate = async (req, res, next) => {
  const {
    displayName,
    email,
    password,
    image,
  } = req.body;

  const { error } = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } })
      .required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  }).validate({ displayName, email, password, image });

  if (error) {
    return next({ statusCode: 400, message: error.message });
  }

  next();
};

module.exports = validate;