const Appointment = require('../models/Appointment');
const Enquiry = require('../models/Enquiry');
const Specialist = require('../models/Specialist');

exports.summary = async (_req, res) => {
  const [totalAppointments, pendingAppointments, confirmedAppointments, newEnquiries, activeSpecialists] = await Promise.all([
    Appointment.countDocuments(),
    Appointment.countDocuments({ status: 'pending' }),
    Appointment.countDocuments({ status: 'confirmed' }),
    Enquiry.countDocuments({ status: 'new' }),
    Specialist.countDocuments({ isActive: true })
  ]);
  res.json({ stats: { totalAppointments, pendingAppointments, confirmedAppointments, newEnquiries, activeSpecialists } });
};
