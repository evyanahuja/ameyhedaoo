import { motion } from "framer-motion";
import { ArrowRight, Phone, CalendarCheck, ShieldCheck, Star } from "lucide-react";
import Reveal from "./Reveal";

export default function Cta() {
  return (
    <section id="cta" aria-labelledby="cta-title" className="relative px-5 pb-24 pt-4 sm:px-8 sm:pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pine-700 via-pine-800 to-ink-950 px-6 py-16 text-center shadow-2xl shadow-pine-900/30 sm:px-12 sm:py-24">
            {/* Ambient orbs */}
            <div aria-hidden className="absolute inset-0">
              <motion.div
                animate={reduceMotionSafe()}
                className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-honey-400/20 blur-[100px]"
              />
              <motion.div
                animate={reduceMotionSafe(true)}
                className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-pine-400/25 blur-[110px]"
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                  maskImage: "radial-gradient(ellipse 65% 70% at 50% 50%, black 20%, transparent 75%)",
                  WebkitMaskImage: "radial-gradient(ellipse 65% 70% at 50% 50%, black 20%, transparent 75%)",
                }}
              />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-honey-300 backdrop-blur">
                <Star className="h-3.5 w-3.5 fill-current" />
                Available Across Bhopal, Madhya Pradesh
              </span>

              <h2
                id="cta-title"
                className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Your home deserves
                <br />
                <span className="italic font-medium text-honey-300">this kind of care.</span>
              </h2>

              <p
                className="mt-2 text-2xl font-bold text-honey-300 sm:text-3xl"
                style={{ fontFamily: 'var(--font-script, "Caveat", cursive)' }}
              >
                "Your Home, My Priority" — Amey Hedaoo
              </p>

              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream-100/75 sm:text-lg">
                Book Amey's ₹149 trial visit today in Bhopal and experience spotless floors, tidy
                wardrobes, and stress-free living. Only <span className="font-semibold text-white">7 slots</span> remain
                this week.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#pricing"
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-white px-9 py-4 text-base font-bold text-pine-800 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-honey-200/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <CalendarCheck className="h-5 w-5" />
                  Book the ₹149 Trial
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
                <a
                  href="tel:+917225046460"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-9 py-4 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <Phone className="h-5 w-5 text-honey-300" />
                  Call +91 72250 46460
                </a>
              </div>

              <p className="mt-8 flex items-center justify-center gap-2 text-xs font-medium text-cream-100/60 sm:text-sm">
                <ShieldCheck className="h-4 w-4 text-honey-300" />
                Fully refundable if you're not delighted — no questions asked.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Gentle drifting motion for background orbs; respects reduced motion via CSS alternative */
function reduceMotionSafe(slow = false) {
  return {
    y: [0, slow ? -26 : -18, 0],
    x: [0, slow ? 18 : 12, 0],
    transition: {
      duration: slow ? 16 : 12,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };
}
