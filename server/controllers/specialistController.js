const Specialist = require('../models/Specialist');

// Public response deliberately excludes private visiting dates, fees and internal notes.
exports.publicList = async (_req, res) => {
  const specialists = await Specialist.find({ isActive: true })
    .select('name speciality qualifications bio photo');
  res.json({ specialists });
};
exports.adminList = async (_req, res) => {
  const specialists = await Specialist.find()
    .select('+visitingDates +specialistFee +internalNotes')
    .sort({ name: 1 });
  res.json({ specialists });
};
exports.adminCreate = async (req, res) => res.status(201).json({ specialist: await Specialist.create(req.body) });
exports.adminUpdate = async (req, res) => {
  const specialist = await Specialist.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .select('+visitingDates +specialistFee +internalNotes');
  if (!specialist) return res.status(404).json({ message: 'Specialist not found' });
  res.json({ specialist });
};
exports.adminDelete = async (req, res) => {
  const specialist = await Specialist.findByIdAndDelete(req.params.id);
  if (!specialist) return res.status(404).json({ message: 'Specialist not found' });
  res.json({ message: 'Specialist deleted' });
};
