const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const loginRoute = require('./routes/login');
const userRoute = require('./routes/user');
const categoriesRoute = require('./routes/categories');

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoriesRoute);

app.use(errorHandler);

module.exports = app;
