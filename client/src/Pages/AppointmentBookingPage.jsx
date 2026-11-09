
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  CalendarDays,
  Clock,
  User,
  Phone,
  Mail,
  Stethoscope,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  ClipboardList,
  ChevronRight,
} from "lucide-react";

const services = [
  "General Dental Checkup",
  "Teeth Cleaning & Scaling",
  "Root Canal Treatment",
  "Dental Implants",
  "Teeth Whitening",
  "Braces & Orthodontics",
  "Tooth Extraction",
  "Cosmetic Dentistry",
  "Other",
];

const dentists = [
  "Any Available Dentist",
  "Dr. Sarah Johnson",
  "Dr. Michael Thomas",
  "Dr. Emily Wilson",
];

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
];

export default function AppointmentPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    patientType: "New Patient",
    service: "",
    dentist: "Any Available Dentist",
    date: "",
    time: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toLocaleDateString("en-CA");

  const updateField = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
        <div className="w-full max-w-xl rounded-3xl bg-white p-8 text-center shadow-xl sm:p-12">

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-teal-50">
            <CheckCircle2 size={44} className="text-teal-600" />
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            Appointment Request Received!
          </h1>

          <p className="mt-4 leading-relaxed text-slate-500">
            Thank you, {formData.fullName}. Your appointment request has
            been recorded in this demo. The clinic will need to confirm
            the appointment separately.
          </p>

          <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-left">
            <h3 className="mb-4 font-bold text-slate-800">
              Appointment Details
            </h3>

            <div className="space-y-3 text-sm text-slate-600">
              <p>
                <strong>Patient:</strong> {formData.fullName}
              </p>
              <p>
                <strong>Service:</strong> {formData.service}
              </p>
              <p>
                <strong>Dentist:</strong> {formData.dentist}
              </p>
              <p>
                <strong>Date:</strong> {formData.date}
              </p>
              <p>
                <strong>Time:</strong> {formData.time}
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
            className="mt-8 w-full rounded-xl bg-teal-600 px-6 py-4 font-semibold text-white transition hover:bg-teal-700"
          >
            Return to Homepage
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-cyan-800 px-4 py-16 text-white sm:py-20">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-7xl">

          <button
            onClick={() => navigate("/")}
            className="mb-8 flex items-center gap-2 text-sm text-teal-100 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Home
          </button>

          <div className="max-w-2xl">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest">
              DentaCare Appointment
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Your Healthier Smile Starts Here.
            </h1>

            <p className="mt-5 max-w-xl leading-relaxed text-teal-50">
              Schedule your dental consultation with our team.
              Choose your preferred service, dentist and appointment time.
            </p>
          </div>

        </div>
      </section>

      {/* BOOKING CONTENT */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-3 lg:px-8 lg:py-16">

        {/* LEFT INFORMATION PANEL */}
        <aside className="space-y-6 lg:col-span-1">

          <div className="rounded-3xl bg-white p-7 shadow-sm">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
              <CalendarDays size={25} />
            </div>

            <h2 className="text-xl font-bold text-slate-900">
              Book with Confidence
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              We make scheduling your dental care simple, convenient
              and comfortable.
            </p>

            <div className="mt-7 space-y-5">

              <div className="flex gap-3">
                <CheckCircle2 className="shrink-0 text-teal-600" size={20} />
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Experienced Dental Team
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Professional care for your dental needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="shrink-0 text-teal-600" size={20} />
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Convenient Scheduling
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Select a date and preferred time.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="shrink-0 text-teal-600" size={20} />
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Patient-Focused Care
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Your comfort and smile matter to us.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="rounded-3xl bg-teal-700 p-7 text-white">
            <Phone size={27} />

            <h3 className="mt-5 text-xl font-bold">
              Need Assistance?
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-teal-50">
              Contact our clinic if you need help scheduling your visit.
            </p>

            <p className="mt-5 text-lg font-bold">
              +91 XXXXX XXXXX
            </p>

            <p className="mt-1 text-xs text-teal-100">
              Replace this with your clinic's actual phone number.
            </p>
          </div>

        </aside>

        {/* APPOINTMENT FORM */}
        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-9 lg:col-span-2">

          <div className="mb-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <ClipboardList size={25} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Appointment Details
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Fill in the information below to request an appointment.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* PATIENT INFORMATION */}
            <div>
              <h3 className="mb-5 flex items-center gap-2 font-bold text-slate-800">
                <User size={19} className="text-teal-600" />
                Patient Information
              </h3>

              <div className="grid gap-5 sm:grid-cols-2">

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={updateField}
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address *
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 text-slate-400" size={18} />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={updateField}
                      placeholder="example@email.com"
                      required
                      className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone Number *
                  </label>

                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 text-slate-400" size={18} />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={updateField}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      pattern="[+]?[0-9\s-]{10,15}"
                      title="Enter a valid phone number"
                      className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Patient Type
                  </label>

                  <select
                    name="patientType"
                    value={formData.patientType}
                    onChange={updateField}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-teal-500"
                  >
                    <option>New Patient</option>
                    <option>Existing Patient</option>
                  </select>
                </div>

              </div>
            </div>

            <div className="border-t border-slate-100" />

            {/* SERVICE INFORMATION */}
            <div>
              <h3 className="mb-5 flex items-center gap-2 font-bold text-slate-800">
                <Stethoscope size={19} className="text-teal-600" />
                Dental Service
              </h3>

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Select Service *
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={updateField}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-teal-500"
                  >
                    <option value="">Choose a service</option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Preferred Dentist
                  </label>

                  <select
                    name="dentist"
                    value={formData.dentist}
                    onChange={updateField}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-teal-500"
                  >
                    {dentists.map((dentist) => (
                      <option key={dentist} value={dentist}>
                        {dentist}
                      </option>
                    ))}
                  </select>
                </div>

              </div>
            </div>

            <div className="border-t border-slate-100" />

            {/* DATE AND TIME */}
            <div>
              <h3 className="mb-5 flex items-center gap-2 font-bold text-slate-800">
                <CalendarDays size={19} className="text-teal-600" />
                Preferred Date & Time
              </h3>

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Appointment Date *
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={updateField}
                    min={today}
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Clock size={16} />
                    Preferred Time *
                  </label>

                  <select
                    name="time"
                    value={formData.time}
                    onChange={updateField}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-teal-500"
                  >
                    <option value="">Select a time</option>

                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              <p className="mt-3 text-xs text-slate-400">
                These are sample time slots. Actual availability must be
                verified by the clinic.
              </p>
            </div>

            <div className="border-t border-slate-100" />

            {/* ADDITIONAL NOTES */}
            <div>
              <label className="mb-2 block font-bold text-slate-800">
                Additional Information
              </label>

              <textarea
                name="notes"
                value={formData.notes}
                onChange={updateField}
                rows={4}
                placeholder="Describe your dental concern or any special requirements..."
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              />
            </div>

            {/* PRIVACY NOTICE */}
            <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
              <ShieldCheck className="mt-0.5 shrink-0 text-teal-600" size={21} />

              <p className="text-xs leading-relaxed text-slate-500">
                Your information should be handled securely and used only
                for appointment coordination. Avoid entering sensitive
                medical or payment information in this form.
              </p>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-4 font-bold text-white shadow-lg shadow-teal-600/20 transition hover:-translate-y-0.5 hover:bg-teal-700"
            >
              Request Appointment
              <ChevronRight size={19} />
            </button>

            <p className="text-center text-xs text-slate-400">
              Submitting this form sends a request, not a confirmed booking.
            </p>

          </form>
        </div>

      </section>

    </div>
  );
}
