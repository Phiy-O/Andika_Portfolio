import type { Variants } from "framer-motion";

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const fadeUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});
