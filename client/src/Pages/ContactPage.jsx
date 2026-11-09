import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";

const clinic = {
  phone: "9363934929",
  email: "presheldental@gmail.com",
  address: "No. 2/3, M.K Hakkim Complex, Anna Stadium, Race Course Road, Trichy-620020",
  maps: "https://share.google/24epRoz9iUG9sIfjO",
};

export default function ContactPage() {
  const navigate = useNavigate();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const update = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => { e.preventDefault(); setSent(true); };
  return <main className="bg-[#FAFAFA] text-[#29211D]">
    <section className="relative overflow-hidden bg-[#29211D] px-6 py-20 text-white md:py-28">
      <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full bg-[#A93400]/25 blur-3xl"/>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div><span className="rounded-full border border-[#E8B99C]/30 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-[#E8B99C]">Your smile, our priority</span>
          <h1 className="mt-8 max-w-xl font-['Playfair_Display'] text-5xl font-bold leading-[1.12] text-white md:text-7xl">Let's talk about your <span className="text-[#E8B99C]">smile.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#F0E7E0]">Every great smile begins with a conversation. Get in touch with Preshel Dental Care for consultations, treatment enquiries and appointments.</p>
          <div className="mt-9 flex flex-wrap gap-4"><button onClick={()=>navigate("/appointment")} className="inline-flex items-center gap-3 rounded-xl bg-[#A93400] px-7 py-4 font-bold text-white hover:bg-[#852A04]">Book Appointment <ArrowRight size={18}/></button><a href={`tel:${clinic.phone}`} className="rounded-xl border border-[#E8B99C]/40 px-7 py-4 font-semibold text-white hover:bg-white/10">Call Us</a></div>
        </div>
        <div className="rounded-[2rem] border border-[#E8B99C]/25 bg-white/5 p-5 backdrop-blur"><div className="rounded-[1.5rem] bg-[#EDE4DC] p-8 text-[#29211D]">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#A93400]">Preshel Dental Care</p><h2 className="mt-3 font-['Playfair_Display'] text-3xl font-bold">A healthier smile starts with us.</h2>
          <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white p-4"><div className="rounded-xl bg-[#EDE4DC] p-3 text-[#A93400]"><Phone/></div><div><p className="text-xs text-[#76665B]">Call us directly</p><a href={`tel:${clinic.phone}`} className="font-bold">{clinic.phone}</a></div></div>
        </div></div>
      </div>
    </section>
    <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[.85fr_1.15fr]">
      <div><p className="text-sm font-bold uppercase tracking-[.2em] text-[#A93400]">Get in touch</p><h2 className="mt-3 font-['Playfair_Display'] text-4xl font-bold">We'd be glad to hear from you.</h2>
        <div className="mt-8 space-y-4">
          <a href={`tel:${clinic.phone}`} className="flex gap-4 rounded-2xl border border-[#E5D9CE] bg-white p-5 hover:border-[#C77B50]"><Phone className="text-[#A93400]"/><div><p className="font-bold">Phone</p><p className="mt-1 text-sm text-[#76665B]">{clinic.phone}</p></div></a>
          <a href={`mailto:${clinic.email}`} className="flex gap-4 rounded-2xl border border-[#E5D9CE] bg-white p-5 hover:border-[#C77B50]"><Mail className="text-[#A93400]"/><div><p className="font-bold">Email</p><p className="mt-1 text-sm text-[#76665B]">{clinic.email}</p></div></a>
          <a href={clinic.maps} target="_blank" rel="noreferrer" className="flex gap-4 rounded-2xl border border-[#E5D9CE] bg-white p-5 hover:border-[#C77B50]"><MapPin className="shrink-0 text-[#A93400]"/><div><p className="font-bold">Clinic address</p><p className="mt-1 text-sm leading-6 text-[#76665B]">{clinic.address}</p><span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-[#A93400]">Get directions <ExternalLink size={14}/></span></div></a>
          <div className="flex gap-4 rounded-2xl border border-[#E5D9CE] bg-white p-5"><Clock className="text-[#A93400]"/><div><p className="font-bold">Clinic timings</p><p className="mt-1 text-sm text-[#76665B]">Contact us for timings</p></div></div>
        </div>
      </div>
      <div className="rounded-3xl border border-[#E5D9CE] bg-white p-7 shadow-sm md:p-10"><h3 className="text-2xl font-bold">Send us a message</h3><p className="mt-2 text-sm text-[#76665B]">Share your enquiry and the clinic can get back to you.</p>
        {sent ? <div className="mt-8 rounded-2xl bg-[#EDE4DC] p-8 text-center"><CheckCircle2 size={42} className="mx-auto text-[#A93400]"/><h4 className="mt-4 text-xl font-bold">Message prepared</h4><p className="mt-2 text-sm leading-6 text-[#76665B]">This is a frontend demonstration. The message has not been sent or stored. Please call or email the clinic directly.</p><button onClick={()=>{setSent(false);setForm({name:"",phone:"",email:"",message:""});}} className="mt-5 font-bold text-[#A93400]">Write another message</button></div> :
        <form onSubmit={submit} className="mt-7 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2"><label className="block text-sm font-semibold">Full name<input required name="name" value={form.name} onChange={update} className="mt-2 w-full rounded-xl border border-[#E5D9CE] bg-[#FAFAFA] px-4 py-3 outline-none focus:border-[#A93400]"/></label><label className="block text-sm font-semibold">Phone number<input required name="phone" value={form.phone} onChange={update} className="mt-2 w-full rounded-xl border border-[#E5D9CE] bg-[#FAFAFA] px-4 py-3 outline-none focus:border-[#A93400]"/></label></div>
          <label className="block text-sm font-semibold">Email address<input type="email" name="email" value={form.email} onChange={update} className="mt-2 w-full rounded-xl border border-[#E5D9CE] bg-[#FAFAFA] px-4 py-3 outline-none focus:border-[#A93400]"/></label>
          <label className="block text-sm font-semibold">How can we help?<textarea required rows="5" name="message" value={form.message} onChange={update} className="mt-2 w-full resize-y rounded-xl border border-[#E5D9CE] bg-[#FAFAFA] px-4 py-3 outline-none focus:border-[#A93400]"/></label>
          <button className="inline-flex items-center gap-3 rounded-xl bg-[#A93400] px-7 py-4 font-bold text-white hover:bg-[#852A04]">Submit enquiry <Send size={17}/></button>
          <p className="text-xs leading-5 text-[#76665B]">Demo form only — connect a backend before using this form to collect patient enquiries.</p>
        </form>}
      </div>
    </section>
    <section className="px-6 pb-20"><div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#E5D9CE] bg-[#EDE4DC] p-3"><iframe title="Preshel Dental Care location map" src="https://www.google.com/maps?q=No.+2%2F3+M.K.+Hakkim+Complex+Anna+Stadium+Race+Course+Road+Trichy+620020&output=embed" className="h-[340px] w-full rounded-2xl border-0" loading="lazy"/></div></section>
  </main>;
}
