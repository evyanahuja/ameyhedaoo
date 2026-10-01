import { motion } from "framer-motion";
import {
  Sparkles,
  ChefHat,
  Shirt,
  UtensilsCrossed,
  Flower2,
  ShoppingBasket,
  HeartHandshake,
  PawPrint,
  ArrowUpRight,
} from "lucide-react";
import { staggerChild, staggerParent } from "./Reveal";

const services = [
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    desc: "Floors, surfaces, fans, windows and those impossible corners — dusted, scrubbed and sanitised to a shine.",
    tint: "from-pine-500 to-pine-700",
  },
  {
    icon: ChefHat,
    title: "Cooking & Meal Prep",
    desc: "Wholesome home-style meals, weekly tiffin prep or that dinner party menu — cooked fresh, just the way you like.",
    tint: "from-honey-400 to-honey-600",
  },
  {
    icon: Shirt,
    title: "Laundry & Ironing",
    desc: "Washed, sun-dried or machine-dried, folded with precision and pressed to crisp, wardrobe-ready perfection.",
    tint: "from-ink-600 to-ink-800",
  },
  {
    icon: UtensilsCrossed,
    title: "Kitchen & Utensils",
    desc: "Grease-free chimneys, sparkling stovetops and sinks full of dishes handled before you notice them.",
    tint: "from-pine-400 to-pine-600",
  },
  {
    icon: Flower2,
    title: "Garden & Balcony",
    desc: "Watering, pruning, repotting and patio sweeping — your green corner stays lush and inviting.",
    tint: "from-honey-300 to-honey-500",
  },
  {
    icon: ShoppingBasket,
    title: "Groceries & Errands",
    desc: "Market runs, bill payments, parcel pickups and queue-standing — your to-do list, handled before sunset.",
    tint: "from-ink-700 to-pine-800",
  },
  {
    icon: HeartHandshake,
    title: "Elder Companionship",
    desc: "Warm, patient company for parents — morning walks, medicine reminders, appointments and laughter.",
    tint: "from-pine-600 to-ink-800",
  },
  {
    icon: PawPrint,
    title: "Pet Care",
    desc: "Feeding, walks, grooming and playtime. Your pets get a friend who shows up even on rainy days.",
    tint: "from-honey-500 to-pine-700",
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-96 w-[46rem] max-w-full -translate-x-1/2 rounded-full bg-pine-300/15 blur-[120px]"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
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
            What Amey Does
          </motion.span>
          <motion.h2
            variants={staggerChild}
            id="services-title"
            className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl"
          >
            Every chore, <span className="italic font-medium text-gradient">one call</span> away
          </motion.h2>
          <motion.p variants={staggerChild} className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
            One person, trained across every household skill that matters — so you juggle one
            relationship instead of five different helpers.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s) => (
            <motion.li key={s.title} variants={staggerChild} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-3xl border border-cream-300/70 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-pine-500/30 hover:shadow-xl hover:shadow-pine-900/10">
                {/* Hover glow */}
                <div
                  aria-hidden
                  className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${s.tint} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25`}
                />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span
                      className={`grid h-13 w-13 place-items-center rounded-2xl bg-gradient-to-br ${s.tint} p-3.5 text-white shadow-lg transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110`}
                    >
                      <s.icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-ink-300 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-pine-600" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{s.desc}</p>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
