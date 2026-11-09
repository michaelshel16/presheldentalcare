const mongoose = require('mongoose');

const galleryItemSchema = new mongoose.Schema({
  title: { type: String, trim: true },
  description: { type: String, trim: true },
  imageUrl: { type: String, required: true },
  cloudinaryPublicId: { type: String },
  category: { type: String, trim: true },
  isPublished: { type: Boolean, default: true },
  displayOrder: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('GalleryItem', galleryItemSchema);
