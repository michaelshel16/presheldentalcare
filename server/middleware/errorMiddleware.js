module.exports = (err, req, res, _next) => {
  console.error(err);
  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: 'Validation failed', errors: Object.values(err.errors).map(e => e.message) });
  }
  if (err.code === 11000) return res.status(409).json({ message: 'A record with this value already exists' });
  const status = err.statusCode || 500;
  res.status(status).json({ message: status === 500 ? 'Internal server error' : err.message });
};
