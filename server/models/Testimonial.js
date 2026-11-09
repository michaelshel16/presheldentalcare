const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  patientDisplayName: { type: String, required: true, trim: true },
  content: { type: String, required: true, maxlength: 1200 },
  rating: { type: Number, min: 1, max: 5, required: true },
  isApproved: { type: Boolean, default: false },
  displayOrder: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);
