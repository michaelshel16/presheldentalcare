const GalleryItem = require('../models/GalleryItem');
exports.publicList = async (_req, res) => res.json({
  gallery: await GalleryItem.find({ isPublished: true }).sort({ displayOrder: 1, createdAt: -1 })
});
exports.adminList = async (_req, res) => res.json({ gallery: await GalleryItem.find().sort({ createdAt: -1 }) });
exports.adminCreate = async (req, res) => res.status(201).json({ item: await GalleryItem.create(req.body) });
exports.adminUpdate = async (req, res) => {
  const item = await GalleryItem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!item) return res.status(404).json({ message: 'Gallery item not found' });
  res.json({ item });
};
exports.adminDelete = async (req, res) => {
  const item = await GalleryItem.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ message: 'Gallery item not found' });
  res.json({ message: 'Gallery item deleted' });
};
