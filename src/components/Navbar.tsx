import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Home, Menu, X, ArrowRight, Phone } from "lucide-react";
import { cn } from "../utils/cn";

const links = [
  { label: "Services", href: "#services" },
  { label: "A Day With Amey", href: "#showcase" },
  { label: "Why Amey", href: "#benefits" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Scroll progress hairline */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-pine-600 via-pine-400 to-honey-400"
      />

      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-all duration-500 sm:px-8",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 border-b transition-all duration-500",
            scrolled
              ? "glass border-cream-300/60 shadow-[0_12px_40px_-16px_rgba(16,30,24,0.18)]"
              : "border-transparent bg-transparent"
          )}
        />

        {/* Brand */}
        <a
          href="#top"
          className="group relative z-10 flex items-center gap-2.5"
          aria-label="HomeAid — back to top"
        >
          <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-pine-600 to-pine-800 text-white shadow-lg shadow-pine-600/25 transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-105">
            <Home className="h-5 w-5" strokeWidth={2.2} />
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-cream-50 bg-honey-400" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-tight text-ink-900">
              Home<span className="text-pine-600">Aid</span>
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-400">
              Household, handled
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <nav aria-label="Primary" className="relative z-10 hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors duration-300 hover:text-ink-900"
            >
              <span className="relative z-10">{l.label}</span>
              <span className="absolute inset-0 scale-75 rounded-full bg-cream-200/80 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-3">
          <span className="hidden items-center gap-1.5 rounded-full border border-pine-500/20 bg-pine-600/5 px-3 py-1 text-xs font-semibold text-pine-800 xl:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-pine-600 animate-pulse" />
            Bhopal, MP
          </span>
          <a
            href="tel:+917225046460"
            className="hidden items-center gap-2 rounded-full border border-cream-300 bg-white/70 px-4 py-2.5 text-sm font-semibold text-ink-800 transition-all duration-300 hover:border-pine-500/40 hover:text-pine-700 md:flex"
          >
            <Phone className="h-4 w-4 text-pine-600" />
            +91 72250 46460
          </a>
          <a
            href="#pricing"
            className="group hidden items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-lg shadow-ink-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine-700 hover:shadow-pine-700/30 sm:flex"
          >
            Book a Trial
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-cream-300 bg-white/80 text-ink-900 shadow-sm backdrop-blur transition-colors hover:bg-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="glass fixed inset-x-4 top-[76px] z-10 rounded-3xl border-cream-300/70 p-3 shadow-2xl shadow-ink-900/15 lg:hidden"
          >
            <ul className="flex flex-col">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.35 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-ink-800 transition-colors hover:bg-pine-600/10 hover:text-pine-700"
                  >
                    {l.label}
                    <ArrowRight className="h-4 w-4 text-ink-300" />
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-2 flex flex-col gap-2 border-t border-cream-300/70 p-2 pt-3">
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-ink-900 px-5 py-3.5 text-sm font-semibold text-cream-50"
              >
                Book a Trial — ₹149 <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+917225046460"
                className="flex items-center justify-center gap-2 rounded-2xl border border-cream-300 px-5 py-3.5 text-sm font-semibold text-ink-800"
              >
                <Phone className="h-4 w-4 text-pine-600" /> Call +91 72250 46460
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
