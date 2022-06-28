const express = require('express');
const postController = require('../controllers/post');
const authValidation = require('../middlewares/validateToken');
const userValidation = require('../middlewares/validateUser');
const { validatePost } = require('../middlewares/validateInput');

const route = express.Router();

route.post('/', authValidation, validatePost, postController.create);
route.get('/', authValidation, postController.getAll);
route.get('/:id', authValidation, postController.getById);
route.put('/:id', authValidation, userValidation, postController.update);

module.exports = route;