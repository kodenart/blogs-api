const CategoriesServices = require('../services/categories');

const create = async (req, res, _next) => {
  const { name } = req.body;
  const category = await CategoriesServices.create(name);
  return res.status(201).json(category);
};

const getAll = async (req, res, _next) => {
  const categories = await CategoriesServices.getAll();
  return res.status(200).json(categories);
};

module.exports = {
  create,
  getAll,
};