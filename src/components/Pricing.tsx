import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, ShieldCheck, RefreshCcw, Wallet } from "lucide-react";
import { staggerChild, staggerParent } from "./Reveal";
import { cn } from "../utils/cn";

const plans = [
  {
    name: "Trial Visit",
    price: "₹149",
    unit: "one-time · 2 hours",
    tagline: "The perfect first date",
    desc: "Experience the HomeAid difference in a single visit. No commitment, no sales calls.",
    features: [
      "Deep clean of 2 rooms + kitchen",
      "Laundry wash + fold",
      "Same-day availability",
      "Full 48-hour guarantee",
      "Free reschedule anytime",
    ],
    cta: "Book the trial",
    featured: false,
  },
  {
    name: "Daily Essentials",
    price: "₹4,999",
    unit: "per month · 2 hrs/day, 6 days",
    tagline: "Most loved by families",
    desc: "Daily upkeep that keeps your home guest-ready, every single day of the week.",
    features: [
      "Everything in the trial visit",
      "Daily sweeping, mopping & dusting",
      "Utensils & kitchen shine-up",
      "1 laundry cycle daily",
      "Weekly fridge & balcony care",
      "WhatsApp scheduling support",
    ],
    cta: "Start daily plan",
    featured: true,
  },
  {
    name: "Full-Day Hero",
    price: "₹13,999",
    unit: "per month · 8 hrs/day, 6 days",
    tagline: "The complete household",
    desc: "A full-time right hand — cooking, cleaning, errands and everything in between.",
    features: [
      "Everything in Daily Essentials",
      "Fresh breakfast, lunch & dinner",
      "Grocery sourcing & meal planning",
      "Errands, parcels & bill payments",
      "Elder & pet companionship",
      "Priority same-day support",
    ],
    cta: "Go full-time",
    featured: false,
  },
];

const assurances = [
  { icon: ShieldCheck, text: "No hidden fees — ever" },
  { icon: RefreshCcw, text: "Pause or cancel anytime" },
  { icon: Wallet, text: "Pay after each month, not before" },
];

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="relative py-24 sm:py-32">
      {/* Soft band background */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-100/70 to-cream-50" />
      <div
        aria-hidden
        className="absolute left-1/2 top-16 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-pine-300/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
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
            Simple Pricing
          </motion.span>
          <motion.h2
            variants={staggerChild}
            id="pricing-title"
            className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl"
          >
            Less than your <span className="italic font-medium text-gradient">daily cappuccino</span>
          </motion.h2>
          <motion.p variants={staggerChild} className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
            Agency-quality help at direct-hire prices in Bhopal — because there's no agency in the middle
            taking a cut of Amey's hard work. Call or WhatsApp +91 72250 46460 to lock your slot.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerParent}
          custom={0.14}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid items-stretch gap-6 lg:grid-cols-3"
        >
          {plans.map((p) => (
            <motion.div key={p.name} variants={staggerChild} className="h-full">
              <article
                className={cn(
                  "group relative flex h-full flex-col rounded-[2rem] p-8 transition-all duration-500",
                  p.featured
                    ? "border-2 border-pine-600 bg-white shadow-2xl shadow-pine-900/20 lg:-translate-y-4 lg:scale-[1.02] hover:lg:-translate-y-6"
                    : "border border-cream-300/80 bg-white/70 shadow-sm backdrop-blur hover:-translate-y-2 hover:border-pine-500/30 hover:shadow-xl hover:shadow-ink-900/10"
                )}
              >
                {p.featured && (
                  <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-pine-600 to-pine-800 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-pine-700/30">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most Popular
                  </span>
                )}

                <header>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-ink-900">{p.name}</h3>
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-[11px] font-semibold",
                        p.featured ? "bg-pine-600/10 text-pine-700" : "bg-cream-200 text-ink-500"
                      )}
                    >
                      {p.tagline}
                    </span>
                  </div>
                  <div className="mt-5 flex items-end gap-2">
                    <span
                      className={cn(
                        "font-display text-5xl font-semibold tracking-tight",
                        p.featured ? "text-pine-700" : "text-ink-900"
                      )}
                    >
                      {p.price}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-ink-400">{p.unit}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-600">{p.desc}</p>
                </header>

                <div className={cn("my-7 h-px", p.featured ? "bg-pine-600/15" : "bg-cream-300")} aria-hidden />

                <ul className="flex-1 space-y-3.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ink-700">
                      <span
                        className={cn(
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                          p.featured ? "bg-pine-600 text-white" : "bg-pine-600/10 text-pine-700"
                        )}
                      >
                        <Check className="h-3 w-3" strokeWidth={3.2} />
                      </span>
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta"
                  className={cn(
                    "group/btn mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine-600",
                    p.featured
                      ? "bg-gradient-to-br from-pine-600 to-pine-800 text-white shadow-lg shadow-pine-700/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pine-700/40"
                      : "border border-ink-900/15 bg-white text-ink-900 hover:-translate-y-0.5 hover:border-pine-600 hover:text-pine-700"
                  )}
                >
                  {p.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              </article>
            </motion.div>
          ))}
        </motion.div>

        {/* Assurances */}
        <motion.div
          variants={staggerParent}
          custom={0.1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10"
        >
          {assurances.map((a) => (
            <motion.span
              key={a.text}
              variants={staggerChild}
              className="flex items-center gap-2.5 text-sm font-medium text-ink-600"
            >
              <a.icon className="h-5 w-5 text-pine-600" />
              {a.text}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
