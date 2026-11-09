const mongoose = require('mongoose');

const specialistSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  speciality: { type: String, required: true, trim: true },
  qualifications: [{ type: String, trim: true }],
  bio: { type: String, trim: true },
  photo: { url: String, publicId: String },
  isActive: { type: Boolean, default: true },

  // Internal/admin-only fields. select:false prevents accidental public query exposure.
  visitingDates: [{ type: Date, select: false }],
  specialistFee: { type: Number, min: 0, select: false },
  internalNotes: { type: String, select: false }
}, { timestamps: true });

module.exports = mongoose.model('Specialist', specialistSchema);
