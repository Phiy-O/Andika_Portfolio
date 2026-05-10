"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { fadeUp } from "@/lib/motion/presets";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

export function Reveal({ children, className, delay = 0, once = true }: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
