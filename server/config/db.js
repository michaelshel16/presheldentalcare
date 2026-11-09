const mongoose = require('mongoose');

module.exports = async function connectDB() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is missing from .env');
  mongoose.set('strictQuery', true);
  await mongoose.connect(process.env.DATABASE_URL);
  console.log('MongoDB connected');
};
