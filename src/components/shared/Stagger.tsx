"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion/presets";
import { cn } from "@/utils/cn";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
};

export function Stagger({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
}: StaggerProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={staggerContainer(stagger, delayChildren)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}
