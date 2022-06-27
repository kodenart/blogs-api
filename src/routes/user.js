const express = require('express');
const userController = require('../controllers/user');
const validateInput = require('../middlewares/validateInput');

const route = express.Router();

route.post('/', validateInput, userController.create);

module.exports = route;