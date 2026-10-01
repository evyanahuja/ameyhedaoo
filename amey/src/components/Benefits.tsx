import { motion } from "framer-motion";
import {
  ShieldCheck,
  Dumbbell,
  GraduationCap,
  CalendarClock,
  Zap,
  BadgePercent,
  HeartHandshake,
  Quote,
} from "lucide-react";
import Reveal, { staggerChild, staggerParent } from "./Reveal";
import ameyImg from "../assets/amey-hero.jpg";

const smallCards = [
  {
    icon: GraduationCap,
    title: "Formally trained",
    desc: "Certified in hygiene protocols, safe chemical handling and kitchen management — not learning on your floors.",
  },
  {
    icon: CalendarClock,
    title: "Flexible to the minute",
    desc: "Change timings, pause for travel, or reschedule from a simple WhatsApp message. No rigid contracts.",
  },
  {
    icon: Zap,
    title: "Same-day booking in Bhopal",
    desc: "Message before 10 AM and Amey can be at your door today in Bhopal. Emergency guests? Consider it handled.",
  },
  {
    icon: BadgePercent,
    title: "Honest, fixed pricing",
    desc: "One transparent monthly rate. No agency cuts, no surprise 'festive bonuses', no awkward negotiations.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" aria-labelledby="benefits-title" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute right-0 top-24 h-80 w-80 rounded-full bg-honey-300/20 blur-[110px]"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={staggerChild}
            className="inline-flex items-center gap-2 rounded-full border border-pine-500/25 bg-pine-600/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-pine-700"
          >
            Why Amey
          </motion.span>
          <motion.h2
            variants={staggerChild}
            id="benefits-title"
            className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl"
          >
            The help you'd recommend <span className="italic font-medium text-gradient">to your mother</span>
          </motion.h2>
          <motion.p variants={staggerChild} className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
            Hiring help for your home is a trust decision, not a transaction. Here's why families
            across Bhopal renew with Amey month after month.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Feature bio card */}
          <Reveal className="lg:row-span-2" y={34}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br from-pine-700 via-pine-800 to-ink-900 p-8 text-cream-50 shadow-xl shadow-pine-900/25 sm:p-10">
              <div
                aria-hidden
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-honey-400/20 blur-3xl transition-all duration-700 group-hover:bg-honey-400/30"
              />
              <div className="relative flex items-center gap-4">
                <img
                  src={ameyImg}
                  alt="Portrait of Amey Hedaoo, verified housekeeper in Bhopal"
                  className="h-16 w-16 rounded-2xl object-cover object-top ring-2 ring-white/25"
                />
                <div>
                  <p className="font-display text-2xl font-semibold">Amey Hedaoo</p>
                  <p className="text-sm text-cream-100/70">Lead Housekeeper · Bhopal, MP</p>
                </div>
              </div>

              <Quote className="relative mt-7 h-8 w-8 text-honey-300/60" aria-hidden />
              <p className="relative mt-3 font-display text-xl font-medium italic leading-relaxed text-cream-50/95 sm:text-[1.35rem]">
                "A home isn't clean because someone wiped it — it's clean because someone cared
                enough to notice the corners. Your home, my priority."
              </p>

              <ul className="relative mt-7 space-y-3 text-sm text-cream-100/85">
                {[
                  "Fluent in Hindi & English · Native Bhopal resident",
                  "Non-smoker, courteous, punctual to a fault",
                  "Trained in home hygiene, laundry care & kitchen prep",
                  "Direct contact: +91 72250 46460",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-honey-300" />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="relative mt-auto pt-8">
                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                  <ShieldCheck className="h-9 w-9 shrink-0 text-honey-300" />
                  <p className="text-xs leading-relaxed text-cream-100/80 sm:text-sm">
                    <span className="font-semibold text-white">Police-verified, bonded & insured</span>{" "}
                    — background checked, with ₹1L damage cover on every visit.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Strength card */}
          <Reveal delay={0.1} className="lg:col-span-2" y={34}>
            <article className="group relative h-full overflow-hidden rounded-[2rem] border border-cream-300/70 bg-white/70 p-8 shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink-900/10 sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <span className="relative grid h-20 w-20 shrink-0 place-items-center rounded-3xl bg-gradient-to-br from-pine-500 to-pine-800 text-white shadow-lg shadow-pine-700/25 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  <Dumbbell className="h-9 w-9" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink-900 sm:text-[1.7rem]">
                    Heavy work, handled with care
                  </h3>
                  <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-ink-600 sm:text-base">
                    Furniture shifting, mattress flipping, ladder-reaching fans and curtains, water
                    cans, deep-scrubbing bathrooms — tasks that need strength get done properly,
                    without you worrying about anyone's back.
                  </p>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {["Furniture moves", "Ladder work", "Water cans", "Deep scrubbing", "Grocery lifting"].map(
                  (chip, i) => (
                    <motion.span
                      key={chip}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.07, duration: 0.45 }}
                      className="rounded-full border border-pine-500/25 bg-pine-600/5 px-4 py-1.5 text-xs font-semibold text-pine-700"
                    >
                      {chip}
                    </motion.span>
                  )
                )}
              </div>
            </article>
          </Reveal>

          {/* Small cards */}
          {smallCards.map((c, i) => (
            <Reveal key={c.title} delay={0.12 + i * 0.08} y={30}>
              <article className="group relative h-full overflow-hidden rounded-[2rem] border border-cream-300/70 bg-white/70 p-7 shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-pine-500/30 hover:shadow-xl hover:shadow-pine-900/10">
                <div
                  aria-hidden
                  className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-pine-400/0 blur-2xl transition-all duration-500 group-hover:bg-pine-400/20"
                />
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink-900 text-honey-300 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <c.icon className="h-5.5 w-5.5" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Guarantee banner */}
        <Reveal delay={0.15} className="mt-5">
          <div className="flex flex-col items-center gap-5 rounded-[2rem] border border-honey-400/40 bg-gradient-to-r from-honey-200/60 via-cream-100 to-honey-200/60 px-8 py-8 text-center shadow-sm sm:flex-row sm:text-left">
            <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-honey-400 to-honey-600 text-white shadow-lg shadow-honey-500/30">
              <HeartHandshake className="h-7 w-7" />
            </span>
            <div className="flex-1">
              <p className="font-display text-xl font-semibold text-ink-900 sm:text-2xl">
                The 48-hour Happiness Guarantee
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-600 sm:text-base">
                Not thrilled with a visit? Tell us within 48 hours and we'll re-do it free — or
                refund that visit entirely. No forms, no interrogation.
              </p>
            </div>
            <a
              href="#pricing"
              className="shrink-0 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-cream-50 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine-700"
            >
              Try risk-free
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
