const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email and password are required' });
  const admin = await Admin.findOne({ email: email.toLowerCase() }).select('+passwordHash');
  if (!admin || !admin.isActive || !(await bcrypt.compare(password, admin.passwordHash))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ sub: admin._id.toString(), role: 'admin' }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '1d'
  });
  res.json({ token, admin: { id: admin._id, name: admin.name, email: admin.email } });
};

// Run once from a trusted local environment to create the clinic's sole admin.
// Protect this endpoint with a one-time setup secret; do not leave it enabled in production.
exports.setup = async (req, res) => {
  if (!process.env.ADMIN_SETUP_SECRET || req.headers['x-setup-secret'] !== process.env.ADMIN_SETUP_SECRET) {
    return res.status(403).json({ message: 'Setup not authorized' });
  }
  if (await Admin.exists({})) return res.status(409).json({ message: 'Admin already exists' });
  const { name, email, password } = req.body;
  if (!name || !email || !password || password.length < 12) {
    return res.status(400).json({ message: 'Name, email and password (minimum 12 characters) are required' });
  }
  const passwordHash = await bcrypt.hash(password, 12);
  const admin = await Admin.create({ name, email, passwordHash });
  res.status(201).json({ id: admin._id, email: admin.email, message: 'Admin created' });
};
