import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { Sparkles, UtensilsCrossed, Shirt, Flower2, ShoppingBasket, PawPrint, Droplets, ChefHat } from "lucide-react";
import Reveal from "./Reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "Homes served across Bhopal, MP" },
  { value: 4, suffix: ".9", label: "Average rating from 320+ Bhopal reviews", isDecimal: true },
  { value: 5, suffix: "+", label: "Years of professional housekeeping experience" },
  { value: 100, suffix: "%", label: "Police-verified, background checked & insured" },
];

const marqueeItems = [
  { icon: Sparkles, label: "Deep Cleaning" },
  { icon: UtensilsCrossed, label: "Utensils & Kitchen" },
  { icon: ChefHat, label: "Home Cooking" },
  { icon: Shirt, label: "Laundry & Ironing" },
  { icon: Flower2, label: "Garden & Balcony" },
  { icon: ShoppingBasket, label: "Groceries & Errands" },
  { icon: PawPrint, label: "Pet Care" },
  { icon: Droplets, label: "Bathroom Sanitisation" },
];

export default function SocialProof() {
  return (
    <section aria-label="Trust and social proof" className="relative">
      {/* Stats band */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <dl className="grid grid-cols-2 gap-y-10 rounded-[2rem] border border-cream-300/70 bg-white/60 px-6 py-10 shadow-sm backdrop-blur sm:px-10 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center gap-1.5 text-center ${
                  i > 0 ? "lg:border-l lg:border-cream-200" : ""
                }`}
              >
                <dd className="font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
                  {s.isDecimal ? (
                    <>
                      4<span className="text-pine-600">.9</span>
                    </>
                  ) : (
                    <>
                      <Counter to={s.value} />
                      <span className="text-pine-600">{s.suffix}</span>
                    </>
                  )}
                </dd>
                <dt className="max-w-[13rem] text-xs font-medium leading-relaxed text-ink-500 sm:text-sm">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Services marquee */}
      <div className="mt-14 border-y border-cream-300/70 bg-gradient-to-r from-pine-700 via-pine-800 to-ink-900 py-4">
        <div
          className="mask-fade-x overflow-hidden"
          aria-hidden
        >
          <div className="flex w-max animate-marquee gap-4 pr-4">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-cream-100"
              >
                <item.icon className="h-4 w-4 text-honey-300" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
