require('dotenv').config();
require('express-async-errors');

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorMiddleware');

const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const specialistRoutes = require('./routes/specialistRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_ORIGIN ? process.env.CLIENT_ORIGIN.split(',') : true,
  credentials: true
}));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'Preshel Dental Care API' }));
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/specialists', specialistRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/admin/dashboard', dashboardRoutes);

app.use((req, res) => res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` }));
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
connectDB()
  .then(() => app.listen(PORT, () => console.log(`Preshel API running on port ${PORT}`)))
  .catch(err => { console.error('Database connection failed:', err.message); process.exit(1); });

module.exports = app;
