import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Stethoscope, Sparkles, Smile, Activity, HeartPulse, ShieldCheck, Baby, Scan, CheckCircle2 } from "lucide-react";

const groups = [
  { name: "General Dentistry", icon: Stethoscope, intro: "Everyday preventive and restorative care to protect your oral health.", items: ["General Dental Checkup", "Teeth Cleaning & Scaling", "Tooth-Coloured Fillings", "Tooth Extraction"] },
  { name: "Cosmetic Dentistry", icon: Sparkles, intro: "Thoughtful aesthetic treatments that help you feel confident about your smile.", items: ["Teeth Whitening", "Dental Veneers", "Smile Makeover"] },
  { name: "Restorative Dentistry", icon: ShieldCheck, intro: "Restore tooth function, comfort and appearance with tailored treatment.", items: ["Root Canal Treatment", "Dental Crowns & Bridges", "Dental Implants", "Dentures"] },
  { name: "Orthodontics", icon: Activity, intro: "Treatment options that support better alignment and bite function.", items: ["Traditional Braces", "Clear Aligners", "Bite Correction"] },
  { name: "Specialised Dental Care", icon: Baby, intro: "Care options for different ages and specific dental concerns.", items: ["Paediatric Dentistry", "Gum Disease Treatment", "Wisdom Tooth Evaluation"] },
];

export default function ServicesPage() {
  const navigate = useNavigate();
  const book = (service) => navigate("/appointment", { state: { selectedService: service } });
  return <main className="bg-[#FAFAFA] text-[#29211D]">
    <section className="relative overflow-hidden bg-[#29211D] px-6 py-20 text-white md:py-28">
      <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#A93400]/30 blur-3xl"/>
      <div className="relative mx-auto max-w-7xl">
        <span className="rounded-full border border-[#E8B99C]/30 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-[#E8B99C]">Our dental services</span>
        <h1 className="mt-8 max-w-4xl font-['Playfair_Display'] text-5xl font-bold leading-[1.12] text-white md:text-7xl">Complete dental care.<br/><span className="text-[#E8B99C]">Beautiful, healthy smiles.</span></h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F0E7E0]">From routine checkups to advanced restorative and cosmetic procedures, explore dental care options designed to support your oral health at every stage of life.</p>
        <button onClick={() => navigate("/appointment")} className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#A93400] px-7 py-4 font-bold text-white hover:bg-[#852A04]">Book Appointment <ArrowRight size={18}/></button>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center"><p className="text-sm font-bold uppercase tracking-[.2em] text-[#A93400]">What we offer</p><h2 className="mt-3 font-['Playfair_Display'] text-4xl font-bold text-[#29211D] md:text-5xl">Care for every smile</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-[#76665B]">Explore our treatment categories and contact the clinic to confirm suitability and availability.</p></div>
      <div className="space-y-7">{groups.map((g, i) => <motion.section initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}} key={g.name} className="rounded-3xl border border-[#E5D9CE] bg-white p-7 shadow-sm md:p-9">
        <div className="flex items-start gap-4"><div className="rounded-2xl bg-[#EDE4DC] p-4 text-[#A93400]"><g.icon size={27}/></div><div><h3 className="text-2xl font-bold text-[#29211D]">{g.name}</h3><p className="mt-2 text-[#76665B]">{g.intro}</p></div></div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{g.items.map(item => <button key={item} onClick={() => book(item)} className="group flex min-h-16 items-center justify-between gap-3 rounded-xl border border-[#E5D9CE] bg-[#FAFAFA] px-4 py-3 text-left text-sm font-semibold text-[#51463F] transition hover:border-[#C77B50] hover:bg-[#EDE4DC] hover:text-[#852A04]"><span>{item}</span><ArrowRight size={16} className="shrink-0 transition group-hover:translate-x-1"/></button>)}</div>
      </motion.section>)}</div>
    </section>
    <section className="bg-[#EDE4DC] px-6 py-16 text-center"><h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#29211D] md:text-4xl">Not sure which treatment you need?</h2><p className="mt-3 text-[#76665B]">Speak with the clinic to discuss your concern and next steps.</p><button onClick={() => navigate("/contact")} className="mt-7 rounded-xl bg-[#A93400] px-7 py-4 font-bold text-white hover:bg-[#852A04]">Contact the clinic</button></section>
  </main>;
}
