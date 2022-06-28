const CategoryServices = require('../services/categories');
const PostServices = require('../services/post');
const PostCategoriesServices = require('../services/postCategories');

const create = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  const isValid = await CategoryServices.checkIdArr(categoryIds);
  if (!isValid) return next({ statusCode: 400, message: '"categoryIds" not found' });

  const newPost = await PostServices.create({ title, content, userId: req.user.id });
  await PostCategoriesServices.create(categoryIds, newPost.id);

  return res.status(201).json(newPost);
};

module.exports = {
  create,
};