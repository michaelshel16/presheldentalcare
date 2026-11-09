import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CalendarDays, CheckCircle2, ArrowLeft } from "lucide-react";

const services = ["General Dental Checkup","Teeth Cleaning & Scaling","Root Canal Treatment","Dental Implants","Teeth Whitening","Braces & Orthodontics","Tooth Extraction","Cosmetic Dentistry","Other"];
export default function AppointmentPage() {
  const location = useLocation(); const navigate = useNavigate();
  const [done,setDone] = useState(false);
  const [form,setForm] = useState({name:"",email:"",phone:"",patientType:"New patient",service:location.state?.selectedService || "",date:"",time:"",notes:""});
  const update = e => setForm({...form,[e.target.name]:e.target.value});
  const today = new Date().toISOString().split("T")[0];
  return <main className="min-h-[80vh] bg-[#FAFAFA] px-5 py-16 text-[#29211D]">
    <div className="mx-auto max-w-4xl">
      <button onClick={()=>navigate(-1)} className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-[#76665B] hover:text-[#A93400]"><ArrowLeft size={16}/> Go back</button>
      <div className="rounded-[2rem] border border-[#E5D9CE] bg-white p-7 shadow-sm md:p-12">
        <div className="mb-9 text-center"><div className="mx-auto inline-flex rounded-2xl bg-[#EDE4DC] p-4 text-[#A93400]"><CalendarDays size={30}/></div><p className="mt-5 text-xs font-bold uppercase tracking-[.2em] text-[#A93400]">Preshel Dental Care</p><h1 className="mt-2 font-['Playfair_Display'] text-4xl font-bold">Book an appointment</h1><p className="mt-3 text-[#76665B]">Request a visit and share a few details with us.</p></div>
        {done ? <div className="rounded-2xl bg-[#EDE4DC] p-9 text-center"><CheckCircle2 size={48} className="mx-auto text-[#A93400]"/><h2 className="mt-4 text-2xl font-bold">Request captured in this demo</h2><p className="mx-auto mt-3 max-w-xl leading-7 text-[#76665B]">This form currently runs only in your browser. No appointment has been booked and no details have been sent to the clinic. Please call 9363934929 to confirm an appointment.</p><button onClick={()=>navigate("/")} className="mt-6 rounded-xl bg-[#A93400] px-6 py-3 font-bold text-white">Return home</button></div> :
        <form onSubmit={e=>{e.preventDefault();setDone(true);}} className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-semibold">Full name *<input required name="name" value={form.name} onChange={update} className="field"/></label>
          <label className="text-sm font-semibold">Phone number *<input required name="phone" type="tel" value={form.phone} onChange={update} className="field"/></label>
          <label className="text-sm font-semibold">Email address<input type="email" name="email" value={form.email} onChange={update} className="field"/></label>
          <label className="text-sm font-semibold">Patient type<select name="patientType" value={form.patientType} onChange={update} className="field"><option>New patient</option><option>Existing patient</option></select></label>
          <label className="text-sm font-semibold sm:col-span-2">Dental service *<select required name="service" value={form.service} onChange={update} className="field"><option value="">Select a service</option>{services.map(s=><option key={s}>{s}</option>)}</select></label>
          <label className="text-sm font-semibold">Preferred date *<input required type="date" min={today} name="date" value={form.date} onChange={update} className="field"/></label>
          <label className="text-sm font-semibold">Preferred time<select required name="time" value={form.time} onChange={update} className="field"><option value="">Select a time</option>{["09:00 AM","10:00 AM","11:00 AM","12:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM"].map(t=><option key={t}>{t}</option>)}</select></label>
          <label className="text-sm font-semibold sm:col-span-2">Additional notes<textarea rows="4" name="notes" value={form.notes} onChange={update} className="field"/></label>
          <div className="sm:col-span-2"><button className="w-full rounded-xl bg-[#A93400] px-7 py-4 font-bold text-white transition hover:bg-[#852A04]">Submit appointment request</button><p className="mt-3 text-center text-xs leading-5 text-[#76665B]">Frontend demonstration only. Availability is not checked and requests are not transmitted or stored.</p></div>
        </form>}
      </div>
    </div>
  </main>;
}
