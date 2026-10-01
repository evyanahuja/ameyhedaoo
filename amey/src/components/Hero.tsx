import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  MapPin,
  Sparkle,
  MessageCircle,
} from "lucide-react";
import ameyImg from "../assets/amey-hero.jpg";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, delay: 0.12 * i, ease: easeOut },
  }),
};

const avatars = [
  { initials: "SP", from: "from-pine-500", to: "to-pine-700" },
  { initials: "MK", from: "from-honey-400", to: "to-honey-600" },
  { initials: "RD", from: "from-ink-700", to: "to-ink-900" },
  { initials: "AV", from: "from-pine-400", to: "to-ink-600" },
];

const posterPillars = [
  { label: "Cleaning", icon: "✨" },
  { label: "Laundry", icon: "🧺" },
  { label: "Cooking Support", icon: "🍲" },
  { label: "General Household Work", icon: "🧹" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:pb-24 lg:pt-40">
      {/* Ambient background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-32 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-pine-300/30 blur-[110px]" />
        <div className="absolute bottom-[-20%] left-[-12%] h-[30rem] w-[30rem] rounded-full bg-honey-300/35 blur-[110px]" />
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cream-200/60 blur-[90px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(rgba(28,46,38,0.10) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(ellipse 90% 60% at 50% 0%, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 60% at 50% 0%, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Copy Column */}
        <div className="max-w-2xl">
          {/* Location + availability badge */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-pine-600/30 bg-pine-700/10 px-3.5 py-1.5 text-xs font-semibold text-pine-900 shadow-sm backdrop-blur">
                <MapPin className="h-3.5 w-3.5 text-pine-700" />
                Available in Bhopal, Madhya Pradesh
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-honey-400/50 bg-honey-200/50 px-3 py-1 text-xs font-semibold text-ink-800">
                <span className="h-2 w-2 rounded-full bg-honey-500 animate-ping-soft" />
                7 slots open this week
              </span>
            </div>
          </motion.div>

          {/* Subheader motto from poster */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.5}
            className="mt-4 flex items-center gap-3"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-pine-700 sm:text-sm">
              Reliable Household Help · Cleaner, Happier Home
            </p>
          </motion.div>

          {/* Main Title with handwritten script accent */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="relative mt-3"
          >
            <h1 className="font-display text-[2.65rem] font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-[4.2rem]">
              A spotless home,
              <br />
              <span className="italic font-medium text-gradient">without lifting</span> a finger.
            </h1>

            {/* Handwritten stamp from poster */}
            <motion.div
              initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
              animate={{ opacity: 1, rotate: -5, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: easeOut }}
              className="mt-3 inline-flex items-center gap-2 rounded-2xl border border-honey-400/40 bg-honey-200/40 px-4 py-1.5 text-xl font-bold text-pine-800 shadow-sm sm:text-2xl"
              style={{ fontFamily: 'var(--font-script, "Caveat", cursive)' }}
            >
              <Sparkle className="h-4 w-4 text-honey-500" />
              "Your Home, My Priority"
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg"
          >
            Meet <span className="font-semibold text-ink-900">Amey Hedaoo</span> — a verified,
            thorough, and courteous male housekeeper serving Bhopal homes. From daily deep
            cleaning and crisp laundry to warm cooking support and general chores, get trusted help
            at direct, transparent rates starting at just{" "}
            <span className="font-semibold text-pine-700">₹149</span>.
          </motion.p>

          {/* 4 Core Pillars from the poster */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2.5}
            className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4"
          >
            {posterPillars.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-2 rounded-2xl border border-cream-300/80 bg-white/80 px-3 py-2 text-xs font-semibold text-ink-800 shadow-xs backdrop-blur"
              >
                <span className="text-sm" aria-hidden>{p.icon}</span>
                <span>{p.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <a
              href="#pricing"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-br from-pine-600 to-pine-800 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-pine-700/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pine-700/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine-600"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Sparkles className="h-5 w-5" />
              Book ₹149 Trial in Bhopal
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            <a
              href="tel:+917225046460"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-cream-300 bg-white/80 px-7 py-4 text-base font-semibold text-ink-800 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-pine-500/40 hover:text-pine-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine-600"
            >
              <Phone className="h-4.5 w-4.5 text-pine-600" />
              Call +91 72250 46460
            </a>
            <a
              href="https://wa.me/917225046460?text=Hi%20Amey,%20I%20would%20like%20to%20book%20household%20help%20in%20Bhopal"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-5 py-4 text-sm font-semibold text-emerald-800 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-100"
            >
              <MessageCircle className="h-4.5 w-4.5 text-emerald-600" />
              WhatsApp
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <div className="flex items-center gap-3.5">
              <div className="flex -space-x-2.5">
                {avatars.map((a) => (
                  <span
                    key={a.initials}
                    className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${a.from} ${a.to} text-[11px] font-bold text-white ring-2 ring-cream-50`}
                    aria-hidden
                  >
                    {a.initials}
                  </span>
                ))}
              </div>
              <div className="text-sm leading-tight">
                <div className="flex items-center gap-1 text-honey-500" aria-label="4.9 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-0.5 font-semibold text-ink-800">
                  4.9/5 <span className="font-normal text-ink-500">· Bhopal's top choice</span>
                </p>
              </div>
            </div>
            <div className="hidden h-9 w-px bg-cream-300 sm:block" aria-hidden />
            <div className="flex items-center gap-2 text-sm font-medium text-ink-600">
              <ShieldCheck className="h-5 w-5 text-pine-600" />
              Police-verified & insured
            </div>
          </motion.div>
        </div>

        {/* Portrait Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.15, delay: 0.25, ease: easeOut }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Rotating dashed halo */}
          <div
            aria-hidden
            className="absolute -inset-5 animate-spin-slow rounded-t-[999px] rounded-b-[3rem] border-2 border-dashed border-pine-500/30 sm:-inset-7"
          />
          {/* Gradient frame */}
          <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[3rem] bg-gradient-to-br from-pine-600 via-pine-700 to-ink-900 p-[6px] shadow-2xl shadow-ink-900/25">
            <div className="overflow-hidden rounded-t-[999px] rounded-b-[2.6rem] bg-ink-950">
              <motion.img
                src={ameyImg}
                alt="Amey Hedaoo, verified male housekeeper in Bhopal cleaning and maintaining a modern apartment"
                className="photo-tone h-[28rem] w-full object-cover object-top sm:h-[32rem] lg:h-[36rem]"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, ease: easeOut }}
                loading="eager"
              />
            </div>
            {/* Bottom fade for legibility */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-[6px] bottom-[6px] h-36 rounded-b-[2.6rem] bg-gradient-to-t from-ink-950/80 via-ink-950/40 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-7 flex flex-col items-center justify-center gap-1 text-center text-white">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <BadgeCheck className="h-5 w-5 text-honey-300" />
                Amey Hedaoo · Household Specialist
              </div>
              <p className="text-xs text-cream-100/80">Available in Bhopal, MP · +91 72250 46460</p>
            </div>
          </div>

          {/* Floating card — rating */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: easeOut }}
            className={reduce ? "" : "animate-float"}
          >
            <div className="glass absolute -left-3 top-16 z-10 flex items-center gap-3 rounded-2xl p-3.5 pr-5 shadow-xl shadow-ink-900/10 sm:-left-10">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-honey-300 to-honey-500 text-ink-900 shadow-md">
                <Star className="h-5 w-5 fill-current" />
              </span>
              <div className="text-sm leading-tight">
                <p className="font-display text-lg font-semibold text-ink-900">4.9 / 5</p>
                <p className="text-ink-500">Bhopal Reviews</p>
              </div>
            </div>
          </motion.div>

          {/* Floating card — Bhopal localities availability */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.05, duration: 0.8, ease: easeOut }}
            className={reduce ? "" : "animate-float-slow"}
          >
            <div className="glass absolute -right-2 bottom-24 z-10 flex items-center gap-3 rounded-2xl p-3.5 pr-5 shadow-xl shadow-ink-900/10 sm:-right-8">
              <span className="relative flex h-3 w-3">
                <span className="absolute h-full w-full animate-ping-soft rounded-full bg-pine-500" />
                <span className="relative h-3 w-3 rounded-full bg-pine-600" />
              </span>
              <div className="text-sm leading-tight">
                <p className="font-semibold text-ink-900">Next Slot: Today, 2 PM</p>
                <p className="text-ink-500">Arera Colony & MP Nagar</p>
              </div>
            </div>
          </motion.div>

          {/* Floating toast — task done */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: easeOut }}
            className={reduce ? "" : "animate-float-slower"}
          >
            <div className="glass absolute -bottom-6 left-6 z-10 flex items-center gap-3 rounded-2xl p-3.5 pr-6 shadow-xl shadow-ink-900/10 sm:left-2">
              <CheckCircle2 className="h-8 w-8 text-pine-600" />
              <div className="text-sm leading-tight">
                <p className="font-semibold text-ink-900">3BHK Sparkle Clean Done</p>
                <p className="text-ink-500">On-time, spotless & sanitised</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
