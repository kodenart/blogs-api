const { BlogPost } = require('../database/models');

const create = async ({ title, content, userId }) => {
  const post = BlogPost.create({ title, content, userId });
  return post;
};

module.exports = {
  create,
};