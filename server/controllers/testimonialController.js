const Testimonial = require('../models/Testimonial');
exports.publicList = async (_req, res) => res.json({
  testimonials: await Testimonial.find({ isApproved: true }).sort({ displayOrder: 1, createdAt: -1 })
});
exports.adminList = async (_req, res) => res.json({ testimonials: await Testimonial.find().sort({ createdAt: -1 }) });
exports.adminCreate = async (req, res) => res.status(201).json({ testimonial: await Testimonial.create(req.body) });
exports.adminUpdate = async (req, res) => {
  const item = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!item) return res.status(404).json({ message: 'Testimonial not found' });
  res.json({ testimonial: item });
};
exports.adminDelete = async (req, res) => {
  const item = await Testimonial.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ message: 'Testimonial not found' });
  res.json({ message: 'Testimonial deleted' });
};
