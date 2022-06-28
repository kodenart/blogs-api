const PostServices = require('../services/post');

const errorObj = { statusCode: 401, message: 'Unauthorized user' };

const validate = async (req, res, next) => {
  const { user } = req;
  const { id } = req.params;
  const post = await PostServices.getById(id);
  if (!post) return next();
  if (post.userId !== user.id) return next(errorObj);
  return next();
};

module.exports = validate;