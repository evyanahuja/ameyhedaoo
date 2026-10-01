import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  blur?: boolean;
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "span" | "li" | "article";
};

/** Buttery scroll-reveal wrapper — fades, rises, and optionally de-blurs content. */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  blur = true,
  once = true,
  className,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduce
          ? { opacity: 0 }
          : { opacity: 0, y, x, filter: blur ? "blur(6px)" : "blur(0px)" }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once, margin: "-72px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container + item helpers for orchestrated entrances */
export const staggerParent = {
  hidden: {},
  show: (stagger: number = 0.09) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.08 },
  }),
};

export const staggerChild = {
  hidden: { opacity: 0, y: 26, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};
