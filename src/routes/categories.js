const express = require('express');
const categoriesController = require('../controllers/categories');
const authValidation = require('../middlewares/validateToken');
const { validateCategories } = require('../middlewares/validateInput');

const route = express.Router();

route.post('/', authValidation, validateCategories, categoriesController.create);
route.get('/', authValidation, categoriesController.getAll);

module.exports = route;