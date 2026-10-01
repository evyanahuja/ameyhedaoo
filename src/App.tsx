import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowUp, Phone, MessageCircle } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 z-40 flex items-center gap-2"
        >
          {/* Quick WhatsApp */}
          <a
            href="https://wa.me/917225046460?text=Hi%20Amey,%20I%20am%20looking%20for%20household%20help%20in%20Bhopal"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Amey on WhatsApp"
            className="group flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-600 px-4 py-3 text-xs font-bold text-white shadow-xl shadow-emerald-900/25 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700"
          >
            <MessageCircle className="h-4.5 w-4.5 fill-current" />
            <span className="hidden sm:inline">WhatsApp Amey</span>
          </a>

          {/* Quick Call */}
          <a
            href="tel:+917225046460"
            aria-label="Call Amey Hedaoo directly"
            className="group flex items-center gap-2 rounded-full border border-pine-600/40 bg-ink-900 px-4 py-3 text-xs font-bold text-cream-50 shadow-xl shadow-ink-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-pine-700"
          >
            <Phone className="h-4 w-4 text-honey-300" />
            <span className="hidden sm:inline">Call +91 72250 46460</span>
            <span className="sm:hidden">Call Amey</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-cream-300 bg-white/90 text-ink-800 shadow-xl shadow-ink-900/15 backdrop-blur transition-colors duration-300 hover:bg-pine-600 hover:text-white"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain relative min-h-screen overflow-x-clip bg-cream-50">
        <a
          href="#services"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cream-50"
        >
          Skip to content
        </a>

        <Navbar />

        <main>
          <Hero />
          <SocialProof />
          <Services />
          <Showcase />
          <Benefits />
          <Testimonials />
          <Pricing />
          <Faq />
          <Cta />
        </main>

        <Footer />
        <FloatingContact />
        <BackToTop />
      </div>
    </MotionConfig>
  );
}
