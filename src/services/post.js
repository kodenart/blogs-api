const { BlogPost, User, Category } = require('../database/models');

const create = async ({ title, content, userId }) => {
  const post = BlogPost.create({ title, content, userId });
  return post;
};

const getAll = async () => {
  const posts = await BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });
  return posts;
};

const getById = async (id) => {
  const posts = await BlogPost.findByPk(id, { include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });
  return posts;
};

const update = async (id, title, content) => {
  const updatedPost = await BlogPost.update({ title, content }, { where: { id } });
  return updatedPost;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};