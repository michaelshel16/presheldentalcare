import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Sparkles, Users, ArrowRight, Smile, Stethoscope } from "lucide-react";

const values = [
  { icon: HeartHandshake, title: "Compassion", text: "Listening carefully and treating every patient with patience and respect." },
  { icon: ShieldCheck, title: "Trust", text: "Clear conversations about treatment choices and oral health." },
  { icon: Sparkles, title: "Quality", text: "A thoughtful approach to comfort, cleanliness and clinical care." },
  { icon: Users, title: "Personal attention", text: "Care that considers each patient's needs and circumstances." },
];

export default function AboutPage() {
  const navigate = useNavigate();
  return <main className="bg-[#FAFAFA] text-[#29211D]">
    <section className="relative overflow-hidden bg-[#29211D] px-6 py-20 text-white md:py-28">
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#A93400]/25 blur-3xl"/>
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[1.1fr_.9fr]">
        <div><span className="rounded-full border border-[#E8B99C]/30 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-[#E8B99C]">About Preshel Dental Care</span>
          <h1 className="mt-8 max-w-2xl font-['Playfair_Display'] text-5xl font-bold leading-[1.12] text-white md:text-7xl">More than dental care.<br/><span className="text-[#E8B99C]">A commitment to your smile.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F0E7E0]">We believe a healthy smile contributes to a healthier, more confident life. Our approach centres on compassionate care, personalised treatment and lasting oral health.</p>
          <div className="mt-9 flex flex-wrap gap-4"><button onClick={() => navigate("/appointment")} className="inline-flex items-center gap-3 rounded-xl bg-[#A93400] px-7 py-4 font-bold text-white hover:bg-[#852A04]">Book an Appointment <ArrowRight size={18}/></button><button onClick={() => navigate("/services")} className="rounded-xl border border-[#E8B99C]/40 px-7 py-4 font-semibold text-white hover:bg-white/10">Explore Services</button></div>
        </div>
        <motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.7}} className="rounded-[2rem] border border-[#E8B99C]/25 bg-white/5 p-5 shadow-2xl backdrop-blur">
          <div className="flex min-h-[330px] flex-col items-center justify-center rounded-[1.5rem] bg-[#EDE4DC] px-8 py-12 text-center">
            <div className="rounded-full bg-white p-7 text-[#A93400] shadow-lg"><Smile size={56}/></div>
            <h2 className="mt-7 font-['Playfair_Display'] text-3xl font-bold text-[#29211D]">Every Smile Matters</h2>
            <p className="mt-3 max-w-sm leading-7 text-[#51463F]">Your oral health journey deserves attention, understanding and care.</p>
          </div>
        </motion.div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2 md:items-center"><div><p className="text-sm font-bold uppercase tracking-[.2em] text-[#A93400]">Who we are</p><h2 className="mt-4 font-['Playfair_Display'] text-4xl font-bold text-[#29211D] md:text-5xl">Your comfort comes first.</h2><p className="mt-6 leading-8 text-[#76665B]">Preshel Dental Care is focused on making dental visits more approachable through clear communication, careful evaluation and patient-centred treatment planning.</p><p className="mt-4 leading-8 text-[#76665B]">We aim to help patients understand their oral health and make informed decisions about their care.</p></div>
        <div className="rounded-3xl bg-[#EDE4DC] p-8 md:p-10"><Stethoscope size={36} className="text-[#A93400]"/><h3 className="mt-5 text-2xl font-bold text-[#29211D]">Our commitment</h3><p className="mt-3 leading-8 text-[#51463F]">Respectful conversations, individual attention and a welcoming clinical experience at every step.</p></div></div>
    </section>
    <section className="bg-white px-6 py-20"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="text-sm font-bold uppercase tracking-[.2em] text-[#A93400]">Our values</p><h2 className="mt-3 font-['Playfair_Display'] text-4xl font-bold">The principles behind our care</h2></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{values.map(v=><article key={v.title} className="rounded-2xl border border-[#E5D9CE] p-7"><div className="inline-flex rounded-xl bg-[#EDE4DC] p-3 text-[#A93400]"><v.icon size={24}/></div><h3 className="mt-5 text-lg font-bold">{v.title}</h3><p className="mt-2 text-sm leading-7 text-[#76665B]">{v.text}</p></article>)}</div></div></section>
    <section className="bg-[#29211D] px-6 py-16 text-center text-white"><h2 className="font-['Playfair_Display'] text-3xl font-bold md:text-4xl">Let's take care of your smile.</h2><button onClick={()=>navigate("/appointment")} className="mt-7 rounded-xl bg-[#A93400] px-7 py-4 font-bold text-white hover:bg-[#852A04]">Book an Appointment</button></section>
  </main>;
}
