const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  category: { type: String, trim: true },
  description: { type: String, required: true },
  image: { url: String, publicId: String },
  patientPrice: { type: Number, min: 0 }, // Public-facing price, if clinic chooses to display it.
  priceLabel: { type: String, trim: true }, // e.g. "Starting from ₹..."
  requiresSpecialist: { type: Boolean, default: false },
  isPublished: { type: Boolean, default: true },
  displayOrder: { type: Number, default: 0 },

  // Internal financial figures: never return in public API responses.
  internalCost: { type: Number, min: 0, select: false },
  specialistFee: { type: Number, min: 0, select: false }
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
