const PostServices = require('../services/post');

const validate = async (req, res, next) => {
  const { user } = req;
  const { id } = req.params;
  const post = await PostServices.getById(id);
  if (post.userId !== user.id) return next({ statusCode: 401, message: 'Unauthorized user' });
  return next();
};

module.exports = validate;