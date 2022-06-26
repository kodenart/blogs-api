module.exports = (err, _req, res, _next) => {
  const { statusCode, message } = err;
  if (statusCode && message) {
    return res.status(statusCode).json({ message });
  }
  return res.status(500).json({ message });
};