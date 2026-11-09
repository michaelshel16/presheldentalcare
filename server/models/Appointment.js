const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patient: {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, lowercase: true, trim: true }
  },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  consultationType: { type: String, enum: ['general', 'specialist'], default: 'general' },
  specialist: { type: mongoose.Schema.Types.ObjectId, ref: 'Specialist', default: null },
  preferredDate: { type: Date, required: true },
  preferredTime: { type: String, trim: true },
  confirmedDate: { type: Date, default: null },
  confirmedTime: { type: String, trim: true },
  message: { type: String, trim: true, maxlength: 2000 },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled', 'rejected'],
    default: 'pending'
  },
  adminNotes: { type: String, select: false },

  // Admin-only accounting. Patient-facing price is separate.
  patientPrice: { type: Number, min: 0 },
  specialistFee: { type: Number, min: 0, select: false },
  clinicInternalCost: { type: Number, min: 0, select: false },
  amountPaid: { type: Number, min: 0, default: 0, select: false },
  paymentStatus: { type: String, enum: ['unpaid', 'part-paid', 'paid', 'refunded'], default: 'unpaid', select: false }
}, { timestamps: true });

appointmentSchema.index({ preferredDate: 1, status: 1 });
appointmentSchema.index({ 'patient.phone': 1, createdAt: -1 });

module.exports = mongoose.model('Appointment', appointmentSchema);
