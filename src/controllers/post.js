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

const getAll = async (req, res, _next) => {
  const posts = await PostServices.getAll();
  res.status(200).json(posts);
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const post = await PostServices.getById(id);
  if (!post) return next({ statusCode: 404, message: 'Post does not exist' });
  res.status(200).json(post);
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { title, content } = req.body;
  if (!title || !content) {
    return next({ statusCode: 400, message: 'Some required fields are missing' }); 
  }
  await PostServices.update(id, title, content);

  const post = await PostServices.getById(id);
  return res.status(200).json(post);
};

const destroy = async (req, res, next) => {
  const { id } = req.params;
  const post = await PostServices.destroy(id);
  if (!post) return next({ statusCode: 404, message: 'Post does not exist' });
  return res.status(204).end();
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  destroy,
};