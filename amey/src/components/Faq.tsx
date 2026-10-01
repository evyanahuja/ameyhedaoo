import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, MessageCircleQuestion } from "lucide-react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const faqs = [
  {
    q: "Is it safe to invite a male housekeeper into my home?",
    a: "Absolutely — safety and trust come first. Amey Hedaoo is police-verified with government ID proof, background-checked, insured with damage cover, and shares live visit updates. Families across Bhopal receive photo updates of completed work, and every visit is backed by a 48-hour happiness guarantee.",
  },
  {
    q: "Which areas in Bhopal, Madhya Pradesh does Amey cover?",
    a: "Amey serves all prime neighborhoods in Bhopal, including Arera Colony, MP Nagar, Kolar Road, Shahpura, Gulmohar, Chunabhatti, TT Nagar, Hoshangabad Road, Bawadiya Kalan, and surrounding localities. Call or WhatsApp +91 72250 46460 to check slot availability in your area.",
  },
  {
    q: "What exactly is included in a typical visit?",
    a: "Every visit is tailored to your home: deep sweeping, mopping, dusting, bathroom scrubbing, laundry washing and folding, kitchen counter and utensils shine-up, plus cooking support and general chores. You set the priority checklist and can modify it anytime.",
  },
  {
    q: "Does Amey bring his own cleaning supplies?",
    a: "Yes, Amey carries eco-friendly, family- and pet-safe cleaning agents and microfiber cloths at zero extra cost. If you prefer specific products — your chosen floor disinfectant or wood polish — he will gladly use yours.",
  },
  {
    q: "What if I'm not satisfied with a visit?",
    a: "Tell us within 48 hours and Amey will re-do the visit completely free, or issue an immediate full refund. No forms, no awkward debates.",
  },
  {
    q: "Can I change my schedule or pause my plan?",
    a: "Of course. Travel or festivals in Bhopal? Simply WhatsApp +91 72250 46460 to pause for up to 2 weeks or shift your time slot at zero charge.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Sticky intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-pine-500/25 bg-pine-600/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-pine-700">
                Questions, Answered
              </span>
              <h2
                id="faq-title"
                className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl"
              >
                Everything you're <span className="italic font-medium text-gradient">wondering</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-600 sm:text-lg">
                Hiring household help is deeply personal. Here's the honest answer to every question
                families ask before their first booking.
              </p>
              <div className="mt-8 flex items-center gap-4 rounded-3xl border border-cream-300/70 bg-white/70 p-5 shadow-sm backdrop-blur">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-pine-600 to-pine-800 text-white shadow-lg shadow-pine-700/25">
                  <MessageCircleQuestion className="h-6 w-6" />
                </span>
                <div className="text-sm">
                  <p className="font-semibold text-ink-900">Have a specific question for your home?</p>
                  <a
                    href="https://wa.me/917225046460?text=Hi%20Amey,%20I%20have%20a%20question%20about%20booking%20household%20help%20in%20Bhopal"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-0.5 inline-block font-semibold text-pine-700 underline decoration-pine-300 underline-offset-4 transition-colors hover:text-pine-600"
                  >
                    Chat with Amey on WhatsApp (+91 72250 46460)
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 0.06} y={20}>
                  <div
                    className={cn(
                      "overflow-hidden rounded-3xl border transition-all duration-500",
                      isOpen
                        ? "border-pine-600/30 bg-white shadow-xl shadow-pine-900/10"
                        : "border-cream-300/70 bg-white/60 shadow-sm hover:border-pine-500/25 hover:bg-white"
                    )}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine-600 sm:px-7"
                    >
                      <span
                        className={cn(
                          "font-display text-base font-semibold sm:text-lg",
                          isOpen ? "text-pine-800" : "text-ink-900"
                        )}
                      >
                        {f.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className={cn(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors duration-300",
                          isOpen
                            ? "border-pine-600 bg-pine-600 text-white"
                            : "border-cream-300 bg-cream-100 text-ink-600"
                        )}
                      >
                        <Plus className="h-4.5 w-4.5" strokeWidth={2.5} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${i}`}
                          role="region"
                          aria-labelledby={`faq-button-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p className="px-6 pb-6 text-sm leading-relaxed text-ink-600 sm:px-7 sm:text-base">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
