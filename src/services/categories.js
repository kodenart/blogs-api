const { Category } = require('../database/models');

const create = async (name) => {
  const { id } = await Category.create({ name });
  return { id, name };
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

const checkIdArr = async (arr) => {
  const promises = arr.map((id) => Category.findOne({ where: { id } }));
  const resolved = await Promise.all(promises);
  const isArrValid = resolved.every((elem) => elem);
  return isArrValid;
};

module.exports = {
  create,
  getAll,
  checkIdArr,
};