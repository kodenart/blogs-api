const express = require('express');
const userController = require('../controllers/user');
const validateInput = require('../middlewares/validateInput');
const authValidation = require('../middlewares/validateToken');

const route = express.Router();

route.post('/', validateInput, userController.create);
route.get('/', authValidation, userController.getAll);
route.get('/:id', authValidation, userController.getById);

module.exports = route;