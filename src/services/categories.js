const { Category } = require('../database/models');

const create = async (name) => {
  const { id } = await Category.create({ name });
  return { id, name };
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  create,
  getAll,
};