const Appointment = require('../models/Appointment');

exports.create = async (req, res) => {
  const { name, phone, email, service, consultationType, specialist, preferredDate, preferredTime, message } = req.body;
  if (!name || !phone || !service || !preferredDate) {
    return res.status(400).json({ message: 'Name, phone, service and preferred date are required' });
  }
  const appointment = await Appointment.create({
    patient: { name, phone, email }, service, consultationType, specialist,
    preferredDate, preferredTime, message
  });
  res.status(201).json({ message: 'Appointment request received', appointment });
};

exports.publicStatus = async (req, res) => {
  const { id } = req.params;
  const appointment = await Appointment.findById(id)
    .select('service consultationType confirmedDate confirmedTime status createdAt')
    .populate('service', 'name');
  if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
  // Returns status and confirmed slot only; add OTP/email verification before enabling patient self-service lookup.
  res.json({ appointment });
};

exports.adminList = async (_req, res) => {
  const appointments = await Appointment.find()
    .select('+adminNotes +specialistFee +clinicInternalCost +amountPaid +paymentStatus')
    .populate('service', 'name patientPrice')
    .populate('specialist', 'name speciality')
    .sort({ createdAt: -1 });
  res.json({ appointments });
};

exports.adminUpdate = async (req, res) => {
  const allowed = ['status', 'confirmedDate', 'confirmedTime', 'adminNotes', 'patientPrice',
    'specialistFee', 'clinicInternalCost', 'amountPaid', 'paymentStatus'];
  const update = {};
  for (const key of allowed) if (req.body[key] !== undefined) update[key] = req.body[key];
  const appointment = await Appointment.findByIdAndUpdate(req.params.id, update, {
    new: true, runValidators: true
  }).select('+adminNotes +specialistFee +clinicInternalCost +amountPaid +paymentStatus');
  if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
  res.json({ appointment });
};
