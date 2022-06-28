const { PostCategory } = require('../database/models');

const create = async (idArr, postId) => {
  const creationArr = idArr.map((categoryId) => PostCategory.create({ postId, categoryId }));
  const resolved = await Promise.all(creationArr);
  return resolved;
};

module.exports = {
  create,
};