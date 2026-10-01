import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Sun, CookingPot, MoonStar, ArrowRight } from "lucide-react";
import cleanImg from "../assets/service-clean.jpg";
import cookImg from "../assets/service-cooking.jpg";
import organizeImg from "../assets/service-organize.jpg";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const TABS = [
  {
    id: "morning",
    label: "Morning",
    time: "8:00 AM – 11:00 AM",
    icon: Sun,
    title: "Your home wakes up before you do",
    desc: "Amey opens the curtains to let the morning sun in on a freshly dusted home — not the other way around. By the time you're sipping your first cup of chai, your floors gleam and the air smells fresh and clean.",
    img: cleanImg,
    imgAlt: "A bright, freshly deep-cleaned modern living room with sunlight streaming in",
    points: ["Beds made, curtains opened, rooms aired", "Sweeping, mopping & surface dusting", "Bathroom scrubbed and sanitised", "Breakfast dishes washed and racked"],
  },
  {
    id: "afternoon",
    label: "Afternoon",
    time: "12:00 PM – 4:00 PM",
    icon: CookingPot,
    title: "Lunch that tastes like a holiday at grandma's",
    desc: "Fresh vegetables from the morning market, spices ground just the way your family likes, and a kitchen left spotless after every meal. Amey plans the menu around your taste — and your family's dietary preferences.",
    img: cookImg,
    imgAlt: "Fresh home-cooked Indian meal being garnished in a warm modern kitchen",
    points: ["Menu planning + grocery sourcing", "Fresh, hygienic home-style cooking", "Kitchen deep-wiped after every meal", "Tiffins packed for work and school"],
  },
  {
    id: "evening",
    label: "Evening",
    time: "5:00 PM – 8:00 PM",
    icon: MoonStar,
    title: "An ordered home is a calm mind",
    desc: "Laundry folded with retail precision, wardrobes organised by season, and tomorrow's essentials laid out. When you walk in, your home feels like a deep exhale — not another item on your list.",
    img: organizeImg,
    imgAlt: "A beautifully organised wardrobe with neatly folded clothes in neutral tones",
    points: ["Laundry, ironing & wardrobe organising", "Watering plants & balcony care", "Pet feeding, walks & playtime", "Evening errands and parcel runs"],
  },
];

const AUTOPLAY_MS = 7000;

export default function Showcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback((i: number) => {
    setActive(i);
    setProgressKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = setTimeout(() => go((active + 1) % TABS.length), AUTOPLAY_MS);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [active, paused, go]);

  const tab = TABS[active];

  return (
    <section
      id="showcase"
      aria-labelledby="showcase-title"
      className="relative overflow-hidden bg-ink-950 py-24 text-cream-50 sm:py-32"
    >
      {/* Ambient */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-pine-600/25 blur-[130px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-honey-500/15 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-pine-300">
            A Day With Amey
          </span>
          <h2
            id="showcase-title"
            className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            From sunrise sparkle to <span className="italic font-medium text-honey-300">evening calm</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream-100/70 sm:text-lg">
            Not sure what hiring a housekeeper actually looks like? Walk through a typical day —
            hour by hour, room by room.
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.15} className="mt-12">
          <div
            role="tablist"
            aria-label="Amey Hedaoo's daily schedule"
            className="mx-auto flex max-w-2xl flex-col gap-2.5 sm:flex-row"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
            }}
          >
            {TABS.map((t, i) => {
              const selected = i === active;
              return (
                <button
                  key={t.id}
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${t.id}`}
                  onClick={() => go(i)}
                  className={cn(
                    "group relative flex-1 overflow-hidden rounded-2xl border px-5 py-4 text-left transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey-300",
                    selected
                      ? "border-white/25 bg-white/10 shadow-lg"
                      : "border-white/10 bg-transparent hover:border-white/20 hover:bg-white/5"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <t.icon className={cn("h-5 w-5 shrink-0 transition-colors", selected ? "text-honey-300" : "text-cream-100/60")} />
                    <span className="flex flex-col">
                      <span className={cn("text-sm font-semibold sm:text-base", selected ? "text-white" : "text-cream-100/80")}>
                        {t.label}
                      </span>
                      <span className="text-xs text-cream-100/50">{t.time}</span>
                    </span>
                  </span>
                  {/* Progress */}
                  {selected && !paused && (
                    <motion.span
                      key={progressKey}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                      className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-gradient-to-r from-pine-400 to-honey-300"
                      aria-hidden
                    />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Panel */}
        <Reveal delay={0.25} className="mt-10">
          <div
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm lg:grid-cols-2"
          >
            {/* Image */}
            <div className="relative min-h-[19rem] overflow-hidden sm:min-h-[24rem]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={tab.id}
                  src={tab.img}
                  alt={tab.imgAlt}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="photo-tone absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink-950/40"
              />
              <div className="glass-dark absolute left-5 top-5 flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-semibold">
                <tab.icon className="h-4 w-4 text-honey-300" />
                {tab.time}
              </div>
            </div>

            {/* Copy */}
            <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
                    {tab.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream-100/70 sm:text-base">
                    {tab.desc}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-x-4">
                    {tab.points.map((p, i) => (
                      <motion.li
                        key={p}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 + i * 0.09, duration: 0.5 }}
                        className="flex items-start gap-2.5 text-sm text-cream-100/85"
                      >
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-pine-500/25 text-pine-300">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {p}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
              <a
                href="#pricing"
                className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-honey-300 transition-colors hover:text-honey-200"
              >
                Book this routine
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
