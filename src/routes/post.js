const express = require('express');
const postController = require('../controllers/post');
const authValidation = require('../middlewares/validateToken');
const { validatePost } = require('../middlewares/validateInput');

const route = express.Router();

route.post('/', authValidation, validatePost, postController.create);
route.get('/', authValidation, postController.getAll);
route.get('/:id', authValidation, postController.getById);

module.exports = route;