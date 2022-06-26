const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = (email) => jwt.sign({ email }, secret);