"use client";

import { useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

export function usePrefersReducedMotion() {
  return useReducedMotion() ?? false;
}

export function useSectionScroll() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return { ref, scrollYProgress };
}

export function useHeroScroll() {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 140]);
  const glowY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 90]);
  const uiY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -80]);
  const uiYSlow = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -40]);
  const copyY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 24]);
  const fade = useTransform(scrollYProgress, [0, 0.7], reduce ? [1, 1] : [1, 0.15]);

  return { ref, bgY, glowY, uiY, uiYSlow, copyY, fade };
}

export function useParallaxRange(progress: MotionValue<number>, from: number, to: number) {
  const reduce = usePrefersReducedMotion();
  return useTransform(progress, [0, 1], reduce ? [0, 0] : [from, to]);
}
