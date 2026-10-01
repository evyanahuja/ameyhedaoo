import { motion } from "framer-motion";
import { Star, BadgeCheck, Quote } from "lucide-react";
import { staggerChild, staggerParent } from "./Reveal";
import { cn } from "../utils/cn";

const testimonials = [
  {
    quote:
      "I was hesitant about hiring a male housekeeper at first. One week in, my mother — his biggest sceptic — now saves her chai for him. He rearranged our kitchen in Arera Colony so she doesn't have to bend for anything.",
    name: "Meera Krishnan",
    meta: "Homemaker · Arera Colony, Bhopal",
    tag: "Elder care",
    initials: "MK",
    tint: "from-pine-500 to-pine-700",
    featured: true,
  },
  {
    quote:
      "Both of us work long tech shifts near MP Nagar. Coming home to a clean house and hot, fresh food has genuinely saved our evenings. Amey is exceptionally polite and thorough.",
    name: "Rohan & Sneha Deshpande",
    meta: "IT professionals · MP Nagar, Bhopal",
    tag: "Cooking + cleaning",
    initials: "RD",
    tint: "from-honey-400 to-honey-600",
  },
  {
    quote:
      "He moved our heavy washing machine, cleaned thoroughly behind it, and helped fix our balcony planters in Shahpura. Strong, respectful and honest.",
    name: "Sanjay Patil",
    meta: "Retired professor · Shahpura, Bhopal",
    tag: "Deep cleaning",
    initials: "SP",
    tint: "from-ink-600 to-ink-800",
  },
  {
    quote:
      "Our golden retriever has separation anxiety. Amey's evening walks around Kolar Road and play sessions did what three trainers couldn't. He's family now.",
    name: "Dr. Ananya Verma",
    meta: "Doctor · Kolar Road, Bhopal",
    tag: "Pet care",
    initials: "AV",
    tint: "from-pine-400 to-ink-600",
  },
  {
    quote:
      "Fixed monthly price, shows up at 8:00 sharp every morning in Gulmohar. He sends photo updates of the neatly organised wardrobes. Completely dependable.",
    name: "Farhan Qureshi",
    meta: "Business owner · Gulmohar, Bhopal",
    tag: "Monthly plan",
    initials: "FQ",
    tint: "from-honey-500 to-pine-700",
  },
];

function Stars({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5 text-honey-500", className)} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-pine-300/15 blur-[120px]"
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
            Wall of Love
          </motion.span>
          <motion.h2
            variants={staggerChild}
            id="reviews-title"
            className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl"
          >
            Homes that <span className="italic font-medium text-gradient">exhale</span> when he arrives
          </motion.h2>
          <motion.p variants={staggerChild} className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
            Real words from households across Bhopal — working professionals, doctors, retirees, and
            families in Arera Colony, MP Nagar, Kolar, and beyond.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={staggerChild}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              className={cn(
                "group relative flex flex-col rounded-[1.75rem] border p-7 transition-all duration-500 hover:-translate-y-1.5",
                t.featured
                  ? "border-pine-600/30 bg-gradient-to-br from-pine-700 via-pine-800 to-ink-900 text-cream-50 shadow-xl shadow-pine-900/20 lg:col-span-3 lg:row-span-1 md:col-span-2"
                  : "border-cream-300/70 bg-white/70 shadow-sm backdrop-blur hover:border-pine-500/25 hover:shadow-xl hover:shadow-ink-900/10 lg:col-span-3 md:col-span-1"
              )}
            >
              {t.featured && <Quote className="h-7 w-7 text-honey-300/60" aria-hidden />}
              <Stars className={t.featured ? "mt-3" : "mt-0"} />
              <blockquote
                className={cn(
                  "mt-4 flex-1 text-sm leading-relaxed sm:text-[0.95rem]",
                  t.featured ? "font-display text-lg font-medium italic text-cream-50/95 sm:text-xl sm:leading-relaxed" : "text-ink-700"
                )}
              >
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3.5">
                <span
                  className={cn(
                    "grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br text-xs font-bold text-white shadow-md ring-2",
                    t.tint,
                    t.featured ? "ring-white/20" : "ring-cream-100"
                  )}
                  aria-hidden
                >
                  {t.initials}
                </span>
                <div className="flex-1">
                  <p className={cn("text-sm font-semibold", t.featured ? "text-white" : "text-ink-900")}>
                    {t.name}
                  </p>
                  <p className={cn("text-xs", t.featured ? "text-cream-100/60" : "text-ink-400")}>{t.meta}</p>
                </div>
                <span
                  className={cn(
                    "flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold",
                    t.featured
                      ? "border-white/20 bg-white/10 text-honey-300"
                      : "border-pine-500/20 bg-pine-600/5 text-pine-700"
                  )}
                >
                  <BadgeCheck className="h-3.5 w-3.5" />
                  {t.tag}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
