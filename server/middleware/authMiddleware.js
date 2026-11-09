const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

exports.requireAdmin = async (req, res, next) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ message: 'Admin authentication required' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(payload.sub).select('_id name email isActive');
    if (!admin || !admin.isActive) return res.status(401).json({ message: 'Invalid admin session' });
    req.admin = admin;
    next();
  } catch (_err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
