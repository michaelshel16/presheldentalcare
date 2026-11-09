const Enquiry = require('../models/Enquiry');
exports.create = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ message: 'Name, email and message are required' });
  const enquiry = await Enquiry.create({ name, email, phone, subject, message });
  res.status(201).json({ message: 'Enquiry submitted', id: enquiry._id });
};
exports.adminList = async (_req, res) => res.json({
  enquiries: await Enquiry.find().select('+adminNotes').sort({ createdAt: -1 })
});
exports.adminUpdate = async (req, res) => {
  const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .select('+adminNotes');
  if (!enquiry) return res.status(404).json({ message: 'Enquiry not found' });
  res.json({ enquiry });
};
