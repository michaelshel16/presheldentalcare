
import { useNavigate } from "react-router-dom";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowRight,
  CalendarDays,
  ShieldCheck,
  Clock3,
  HeartPulse,
  Sparkles,
  Smile,
  Stethoscope,
  Activity,
  CheckCircle2,
  Star,
  Phone,
  MoveUpRight,
} from "lucide-react";

// =====================================================
// DATA
// =====================================================

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description:
      "Complete oral examinations, preventive care, fillings and routine dental treatments.",
    color: "bg-[#EDE4DC] text-[#A93400]",
    glow: "group-hover:shadow-[#A93400]/10",
    link: "/services",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments to restore brightness and enhance your smile.",
    color: "bg-[#EDE4DC] text-[#A93400]",
    glow: "group-hover:shadow-[#A93400]/10",
    link: "/services",
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with veneers, smile designing and aesthetic restorations.",
    color: "bg-[#EDE4DC] text-[#A93400]",
    glow: "group-hover:shadow-[#A93400]/10",
    link: "/services",
  },
  {
    icon: Activity,
    title: "Orthodontics",
    description:
      "Modern braces and alignment solutions for a healthier, straighter smile.",
    color: "bg-[#EDE4DC] text-[#A93400]",
    glow: "group-hover:shadow-[#A93400]/10",
    link: "/services",
  },
  {
    icon: HeartPulse,
    title: "Dental Implants",
    description:
      "Reliable tooth replacement solutions designed for comfort and functionality.",
    color: "bg-[#EDE4DC] text-[#A93400]",
    glow: "group-hover:shadow-[#A93400]/10",
    link: "/services",
  },
  {
    icon: ShieldCheck,
    title: "Root Canal Treatment",
    description:
      "Advanced procedures to treat infected teeth while preserving natural structure.",
    color: "bg-[#EDE4DC] text-[#A93400]",
    glow: "group-hover:shadow-[#A93400]/10",
    link: "/services",
  },
];

const features = [
  "Experienced dental professionals",
  "Modern dental equipment",
  "Personalized treatment plans",
  "Comfortable clinical environment",
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "Safe Treatments",
    text: "Patient-first care",
  },
  {
    icon: Stethoscope,
    title: "Professional Care",
    text: "Professional approach",
  },
  {
    icon: Clock3,
    title: "Easy Scheduling",
    text: "Convenient appointments",
  },
  {
    icon: HeartPulse,
    title: "Patient Comfort",
    text: "A caring environment",
  },
];

// =====================================================
// ANIMATION PRESETS
// =====================================================

const reveal = {
  hidden: {
    opacity: 0,
    y: 55,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

// =====================================================
// REVEAL COMPONENT
// =====================================================

function Reveal({ children, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reveal}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

// =====================================================
// MAIN HOMEPAGE
// =====================================================

function HomePage() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden bg-[#FAFAFA] text-[#51463F]">

      {/* =================================================
          HERO SECTION
      ================================================= */}

      <section className="relative isolate min-h-[700px] overflow-hidden bg-[#29211D]">

        {/* Animated background lighting */}

        <div className="absolute inset-0 -z-10">

          <motion.div
            animate={
              reduceMotion
                ? {}
                : {
                    x: [0, 70, -30, 0],
                    y: [0, 40, -30, 0],
                    scale: [1, 1.2, 0.9, 1],
                  }
            }
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#A93400]/25 blur-[130px]"
          />

          <motion.div
            animate={
              reduceMotion
                ? {}
                : {
                    x: [0, -60, 30, 0],
                    y: [0, -40, 50, 0],
                    scale: [1, 0.9, 1.2, 1],
                  }
            }
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-40 right-0 h-[600px] w-[600px] rounded-full bg-[#C77B50]/15 blur-[140px]"
          />

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

        </div>

        {/* Floating particles */}

        {!reduceMotion &&
          Array.from({ length: 18 }).map((_, i) => (
            <motion.div
              key={i}
              className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-[#E8B99C]"
              style={{
                left: `${(i * 37 + 11) % 100}%`,
                top: `${(i * 23 + 9) % 100}%`,
                opacity: 0.25 + (i % 4) * 0.15,
              }}
              animate={{
                y: [0, -35 - (i % 3) * 15, 0],
                x: [0, (i % 2 ? 15 : -15), 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4 + (i % 5),
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:py-32">

          {/* LEFT CONTENT */}

          <div className="relative z-10">

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 rounded-full border border-[#D8B9A8]/25 bg-white/5 px-5 py-3 text-sm font-medium text-[#E8B99C] backdrop-blur-xl"
            >
              <motion.span
                animate={reduceMotion ? {} : { scale: [1, 1.5, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-[#D98A60]"
              />

              WELCOME TO PRESHEL DENTAL CARE

              <Sparkles size={15} />
            </motion.div>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 text-5xl font-bold leading-[1.12] tracking-tight text-white md:text-7xl"
            >
              Your smile
              <br />
              deserves
              <br />

              <span className="bg-gradient-to-r from-[#D98A60] via-[#E8B99C] to-[#F5E8DF] bg-clip-text text-transparent">
                the best care.
              </span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-7 max-w-lg text-base leading-8 text-[#E1D5CC] md:text-lg"
            >
              Experience modern dentistry at Preshel Dental Care
              with compassionate care, advanced technology and
              treatments designed around you.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >

              <motion.button
                whileHover={reduceMotion ? {} : { scale: 1.05, y: -4 }}
                whileTap={reduceMotion ? {} : { scale: 0.96 }}
                onClick={() => navigate("/appointment")}
                className="group flex items-center gap-3 rounded-xl bg-[#A93400] px-7 py-4 font-bold text-white shadow-xl shadow-[#A93400]/20 transition hover:bg-[#852A04]"
              >
                <CalendarDays size={20} />
                Book an Appointment

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-2"
                />
              </motion.button>

              <motion.button
                whileHover={reduceMotion ? {} : { scale: 1.05, y: -4 }}
                whileTap={reduceMotion ? {} : { scale: 0.96 }}
                onClick={() => navigate("/services")}
                className="rounded-xl border border-[#EDE4DC]/25 bg-white/5 px-7 py-4 font-semibold text-[#FAFAFA] backdrop-blur-xl transition hover:border-[#D8B9A8]/60 hover:bg-white/10"
              >
                Explore Services
              </motion.button>

            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 flex flex-wrap items-center gap-7"
            >

              <div>
                <div className="flex items-center gap-1 text-[#D8B9A8]">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-2 text-sm text-[#E1D5CC]">
                  Your comfort is our priority
                </p>
              </div>

              <div className="h-10 w-px bg-white/20" />

              <div>
                <p className="font-bold text-white">
                  Professional Care
                </p>

                <p className="text-sm text-[#E1D5CC]">
                  Focused on your smile
                </p>
              </div>

            </motion.div>
          </div>


          {/* RIGHT HERO VISUAL */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scale: 0.85, x: 60 }
            }
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[550px]"
          >

            {/* Orbit rings */}

            <motion.div
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-8 rounded-full border border-dashed border-[#D8B9A8]/25"
            />

            <motion.div
              animate={reduceMotion ? {} : { rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-14 rounded-full border border-[#D8B9A8]/15"
            />

            <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-[#A93400]/30 to-[#D8B9A8]/10 blur-3xl" />

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: [0, -12, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl"
            >

              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000"
                  alt="Preshel Dental Care clinic"
                  className="h-[380px] w-full object-cover md:h-[500px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#29211D]/85 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8B99C]">
                    Preshel Dental Care
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Every smile matters.
                  </h2>
                </div>
              </div>

            </motion.div>

            {/* Floating badge */}

            <motion.div
              animate={reduceMotion ? {} : { y: [0, -14, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-7 top-16 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-2xl backdrop-blur-xl md:-left-12"
            >
              <div className="rounded-xl bg-[#EDE4DC] p-3 text-[#A93400]">
                <Smile size={27} />
              </div>

              <div>
                <p className="font-bold text-[#29211D]">
                  Smile with confidence
                </p>
                <p className="text-xs text-[#76665B]">
                  Your smile matters
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={reduceMotion ? {} : { y: [0, 12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 right-0 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-2xl md:-right-8"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#A93400] p-3 text-white">
                  <ShieldCheck size={23} />
                </div>

                <div>
                  <p className="font-bold text-[#29211D]">
                    Patient-first care
                  </p>
                  <p className="text-xs text-[#76665B]">
                    Comfort comes first
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* Bottom accent */}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="h-1 origin-left bg-gradient-to-r from-[#A93400] via-[#D98A60] to-transparent"
        />

      </section>


      {/* =================================================
          HIGHLIGHTS
      ================================================= */}

      <section className="relative border-b border-[#E5D9CE] bg-[#FFFFFF] px-6 py-12">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4"
        >

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                variants={reveal}
                key={item.title}
                whileHover={reduceMotion ? {} : { y: -7 }}
                className="group flex items-center gap-4"
              >

                <div className="rounded-2xl bg-[#EDE4DC] p-4 text-[#A93400] transition-all duration-300 group-hover:bg-[#A93400] group-hover:text-white group-hover:shadow-xl group-hover:shadow-[#A93400]/10">
                  <Icon size={25} />
                </div>

                <div>
                  <h3 className="font-bold text-[#29211D]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-[#76665B]">
                    {item.text}
                  </p>
                </div>

              </motion.div>
            );
          })}

        </motion.div>
      </section>


      {/* =================================================
          SERVICES
      ================================================= */}

      <section className="relative mx-auto max-w-7xl px-6 py-28">

        <Reveal>
          <div className="mb-16 text-center">

            <span className="inline-flex items-center gap-2 rounded-full bg-[#EDE4DC] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#A93400]">
              <Sparkles size={15} />
              What We Offer
            </span>

            <h2 className="mt-6 text-3xl font-bold text-[#29211D] md:text-5xl">
              Comprehensive
              <span className="text-[#A93400]"> Dental Services</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#76665B]">
              From preventive care to advanced dental procedures,
              discover treatments that help keep your smile healthy.
            </p>

          </div>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.button
                variants={reveal}
                whileHover={reduceMotion ? {} : { y: -12, scale: 1.015 }}
                whileTap={reduceMotion ? {} : { scale: 0.98 }}
                onClick={() => navigate(service.link)}
                key={service.title}
                className={`group relative overflow-hidden rounded-3xl border border-[#E5D9CE] bg-[#FFFFFF] p-8 text-left shadow-sm transition-shadow duration-500 hover:border-[#D8B9A8] hover:shadow-2xl ${service.glow}`}
              >

                {/* Hover background */}

                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#EDE4DC] opacity-0 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />

                <div className="relative z-10">

                  <div className={`mb-7 inline-flex rounded-2xl p-4 ${service.color} transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                    <Icon size={30} />
                  </div>

                  <h3 className="text-xl font-bold text-[#29211D] transition-colors group-hover:text-[#A93400]">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-20 text-sm leading-7 text-[#76665B]">
                    {service.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-[#E5D9CE] pt-5">

                    <span className="text-sm font-bold text-[#A93400]">
                      Learn More
                    </span>

                    <motion.div
                      whileHover={reduceMotion ? {} : { rotate: 45 }}
                      className="rounded-full bg-[#EDE4DC] p-2 text-[#A93400] transition group-hover:bg-[#A93400] group-hover:text-white"
                    >
                      <MoveUpRight size={19} />
                    </motion.div>

                  </div>

                </div>

                <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#A93400] to-[#D98A60] transition-all duration-500 group-hover:w-full" />

              </motion.button>
            );
          })}

        </motion.div>

        <Reveal>
          <div className="mt-14 text-center">
            <motion.button
              whileHover={reduceMotion ? {} : { scale: 1.05 }}
              whileTap={reduceMotion ? {} : { scale: 0.95 }}
              onClick={() => navigate("/services")}
              className="inline-flex items-center gap-3 rounded-xl border border-[#A93400] px-8 py-4 font-bold text-[#A93400] transition hover:bg-[#A93400] hover:text-white"
            >
              Explore All Services
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </Reveal>

      </section>


      {/* =================================================
          ABOUT / WHY CHOOSE US
      ================================================= */}

      <section className="relative overflow-hidden bg-[#EDE4DC] py-28">

        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#D8B9A8]/40 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">

          <Reveal>

            <div className="relative">

              <motion.div
                whileHover={reduceMotion ? {} : { scale: 1.025 }}
                className="overflow-hidden rounded-[2rem] shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1000"
                  alt="Preshel Dental Care treatment room"
                  className="h-[430px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[500px]"
                />
              </motion.div>

              <motion.div
                animate={reduceMotion ? {} : { y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 -right-3 rounded-2xl bg-[#A93400] p-7 text-white shadow-2xl md:-right-8"
              >
                <Smile size={35} />

                <p className="mt-3 text-xl font-bold">
                  Healthy Smiles
                </p>

                <p className="mt-1 text-sm text-[#F5E8DF]">
                  Start with good care.
                </p>
              </motion.div>

              <div className="absolute -left-5 -top-5 -z-10 h-36 w-36 rounded-3xl border-2 border-[#A93400]/30" />

            </div>

          </Reveal>


          <Reveal>

            <div className="pt-8 md:pt-0">

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#A93400]">
                Why Choose Us
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#29211D] md:text-5xl">
                More than dentistry.
                <span className="block text-[#A93400]">
                  It's about you.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-[#76665B]">
                At Preshel Dental Care, we believe every patient
                deserves thoughtful attention, clear communication
                and quality dental care. Our approach focuses on
                making every visit comfortable.
              </p>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-9 space-y-5"
              >

                {features.map((feature) => (
                  <motion.div
                    variants={reveal}
                    key={feature}
                    className="group flex items-center gap-4"
                  >
                    <div className="rounded-xl bg-white p-2 text-[#A93400] shadow-sm transition group-hover:bg-[#A93400] group-hover:text-white">
                      <CheckCircle2 size={21} />
                    </div>

                    <span className="font-medium text-[#51463F]">
                      {feature}
                    </span>
                  </motion.div>
                ))}

              </motion.div>

              <motion.button
                whileHover={reduceMotion ? {} : { x: 5 }}
                onClick={() => navigate("/aboutpage")}
                className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#A93400] px-7 py-4 font-bold text-white shadow-lg shadow-[#A93400]/15 transition hover:bg-[#852A04]"
              >
                Discover Our Clinic
                <ArrowRight size={18} />
              </motion.button>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =================================================
          APPOINTMENT CTA
      ================================================= */}

      <section className="px-6 py-28">

        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#29211D] px-8 py-16 text-center text-white shadow-2xl md:px-16 md:py-20">

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      x: [0, 50, -30, 0],
                      y: [0, -30, 30, 0],
                    }
              }
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-24 -top-32 h-96 w-96 rounded-full bg-[#A93400]/20 blur-[100px]"
            />

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      x: [0, -40, 30, 0],
                      y: [0, 30, -20, 0],
                    }
              }
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#C77B50]/15 blur-[100px]"
            />

            <div className="relative z-10">

              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : { rotate: [0, 10, -10, 0] }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D8B9A8]/30 bg-[#A93400]/15 text-[#E8B99C]"
              >
                <Smile size={34} />
              </motion.div>

              <h2 className="mt-8 text-3xl font-bold md:text-5xl">
                Ready for a brighter smile?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#E1D5CC]">
                Take the first step towards better oral health.
                Schedule your dental consultation at Preshel
                Dental Care today.
              </p>

              <motion.button
                whileHover={reduceMotion ? {} : { scale: 1.06, y: -4 }}
                whileTap={reduceMotion ? {} : { scale: 0.96 }}
                onClick={() => navigate("/appointment")}
                className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#A93400] px-8 py-4 font-bold text-white shadow-xl shadow-[#A93400]/20 transition hover:bg-[#852A04]"
              >
                <CalendarDays size={20} />
                Book Appointment
                <ArrowRight size={18} />
              </motion.button>

            </div>

          </div>
        </Reveal>

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="relative overflow-hidden bg-[#211A17] px-6 py-16 text-[#E1D5CC]">

        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#A93400]/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

          <div>

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-[#A93400] p-3 text-white">
                <Smile size={27} />
              </div>

              <span className="text-2xl font-bold text-white">
                Preshel
                <span className="text-[#D98A60]"> Dental Care</span>
              </span>

            </div>

            <p className="mt-6 max-w-sm text-sm leading-8 text-[#C8B9AE]">
              Dedicated to making dental care more comfortable,
              accessible and patient-focused.
            </p>

          </div>


          <div>

            <h3 className="font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col items-start gap-4 text-sm">

              {[
                ["Home", "/"],
                ["Services", "/services"],
                ["About Us", "/aboutpage"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <motion.button
                  key={path}
                  whileHover={reduceMotion ? {} : { x: 6 }}
                  onClick={() => navigate(path)}
                  className="transition-colors hover:text-[#D98A60]"
                >
                  {label}
                </motion.button>
              ))}

            </div>

          </div>


          <div>

            <h3 className="font-bold text-white">
              Get in Touch
            </h3>

            <div className="mt-6 space-y-5 text-sm text-[#C8B9AE]">

              <a
                href="tel:9363934929"
                className="flex items-center gap-3 transition hover:text-[#D98A60]"
              >
                <Phone size={18} className="text-[#D98A60]" />
                9363934929
              </a>

              <a
                href="mailto:presheldental@gmail.com"
                className="flex items-center gap-3 transition hover:text-[#D98A60]"
              >
                <CalendarDays size={18} className="text-[#D98A60]" />
                Appointment Enquiries
              </a>

            </div>

          </div>

        </div>


        <div className="relative mx-auto mt-14 max-w-7xl border-t border-[#EDE4DC]/15 pt-7 text-center text-xs text-[#76665B]">
          © {new Date().getFullYear()} Preshel Dental Care.
          All rights reserved.
        </div>

      </footer>

    </main>
  );
}

export default HomePage;
