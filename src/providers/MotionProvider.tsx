"use client";

import { MotionConfig } from "framer-motion";

type MotionProviderProps = {
  children: React.ReactNode;
};

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.35, ease: "easeOut" }}>
      {children}
    </MotionConfig>
  );
}
