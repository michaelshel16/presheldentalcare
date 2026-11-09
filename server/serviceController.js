const Service = require('../models/Service');

exports.publicList = async (_req, res) => {
  const services = await Service.find({ isPublished: true })
    .select('name slug category description image patientPrice priceLabel requiresSpecialist displayOrder')
    .sort({ displayOrder: 1, name: 1 });
  res.json({ services });
};
exports.adminList = async (_req, res) => {
  const services = await Service.find().select('+internalCost +specialistFee').sort({ displayOrder: 1 });
  res.json({ services });
};
exports.adminCreate = async (req, res) => res.status(201).json({ service: await Service.create(req.body) });
exports.adminUpdate = async (req, res) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .select('+internalCost +specialistFee');
  if (!service) return res.status(404).json({ message: 'Service not found' });
  res.json({ service });
};
exports.adminDelete = async (req, res) => {
  const service = await Service.findByIdAndDelete(req.params.id);
  if (!service) return res.status(404).json({ message: 'Service not found' });
  res.json({ message: 'Service deleted' });
};
