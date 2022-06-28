const express = require('express');
const userController = require('../controllers/user');
const { validateUser } = require('../middlewares/validateInput');
const authValidation = require('../middlewares/validateToken');

const route = express.Router();

route.post('/', validateUser, userController.create);
route.get('/', authValidation, userController.getAll);
route.get('/:id', authValidation, userController.getById);
route.delete('/me', authValidation, userController.deleteMe);

module.exports = route;