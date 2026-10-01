import { Home, Phone, Mail, MapPin, Clock, Heart } from "lucide-react";

const socialIcons = [
  {
    label: "Instagram",
    path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5ZM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Zm5.1-2.35a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
  },
  {
    label: "Facebook",
    path: "M13.5 21.888c4.783-.74 8.5-4.892 8.5-9.888 0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.996 3.657 9.148 8.438 9.888v-6.994H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.894H13.5v6.994Z",
  },
  {
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z",
  },
];

const serviceLinks = ["Deep Cleaning", "Cooking & Meal Prep", "Laundry & Ironing", "Garden & Balcony", "Errands & Groceries", "Pet & Elder Care"];
const companyLinks = [
  { label: "Services", href: "#services" },
  { label: "A Day With Amey", href: "#showcase" },
  { label: "Why Amey", href: "#benefits" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-cream-300/70 bg-cream-100/60">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5" aria-label="HomeAid home">
              <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-pine-600 to-pine-800 text-white shadow-lg shadow-pine-600/25">
                <Home className="h-5 w-5" strokeWidth={2.2} />
                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-cream-100 bg-honey-400" />
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
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-500">
              One verified, trained and insured housekeeper for every chore your home needs —
              at a price that finally makes sense.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={`HomeAid on ${s.label}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream-300 bg-white/70 text-ink-600 transition-all duration-300 hover:-translate-y-1 hover:border-pine-500/40 hover:text-pine-700"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400">Services</h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-ink-600 transition-colors duration-300 hover:text-pine-700"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400">Explore</h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-600 transition-colors duration-300 hover:text-pine-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400">Get in touch with Amey</h3>
            <ul className="mt-5 space-y-4 text-sm text-ink-600">
              <li>
                <a
                  href="tel:+917225046460"
                  className="flex items-center gap-3 font-semibold text-ink-900 transition-colors hover:text-pine-700"
                >
                  <Phone className="h-4.5 w-4.5 shrink-0 text-pine-600" />
                  +91 72250 46460
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917225046460?text=Hi%20Amey,%20I%20am%20inquiring%20about%20household%20service%20in%20Bhopal"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 font-medium text-emerald-700 transition-colors hover:text-emerald-800"
                >
                  <span className="grid h-4.5 w-4.5 place-items-center rounded-full bg-emerald-600 text-[10px] text-white">WA</span>
                  WhatsApp Chat: +91 72250 46460
                </a>
              </li>
              <li>
                <a
                  href="mailto:amey.hedaoo@homeaid.in"
                  className="flex items-center gap-3 transition-colors hover:text-pine-700"
                >
                  <Mail className="h-4.5 w-4.5 shrink-0 text-pine-600" />
                  amey.hedaoo@homeaid.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-pine-600" />
                Bhopal, Madhya Pradesh · Arera Colony, MP Nagar, Kolar, Shahpura, Gulmohar & Chunabhatti
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4.5 w-4.5 shrink-0 text-pine-600" />
                Mon – Sun · 7:00 AM – 8:30 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream-300/80 pt-8 sm:flex-row">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} HomeAid. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-ink-400">
            Made with
            <Heart className="h-3.5 w-3.5 fill-pine-600 text-pine-600" aria-hidden />
            for homes that deserve rest
          </p>
          <div className="flex items-center gap-6 text-xs">
            <a href="#top" className="text-ink-400 transition-colors hover:text-pine-700">
              Privacy
            </a>
            <a href="#top" className="text-ink-400 transition-colors hover:text-pine-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
