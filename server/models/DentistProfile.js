const mongoose = require('mongoose');

const dentistProfileSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  qualifications: [{ type: String, trim: true }],
  registrationNumber: { type: String, trim: true, select: false },
  experienceYears: { type: Number, min: 0, default: 0 },
  bio: { type: String, trim: true },
  photo: { url: String, publicId: String },
  languages: [{ type: String }],
  isPublished: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('DentistProfile', dentistProfileSchema);
