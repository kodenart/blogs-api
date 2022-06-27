module.exports = (err, _req, res, _next) => {
  const { statusCode, message } = err;
  return res.status(statusCode || 500).json({ message });
};