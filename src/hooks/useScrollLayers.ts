"use client"

import {
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion"
import { useRef } from "react"

export function usePrefersReducedMotion() {
  return useReducedMotion() ?? false
}

export function useSectionScroll() {
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  return { ref, scrollYProgress }
}

export function useHeroScroll() {
  const ref = useRef<HTMLElement | null>(null)
  const reduce = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backdropY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, 72],
  )
  const dashboardY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, -54],
  )
  const phoneY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, -92],
  )
  const copyY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 18])
  const orbitRotate = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, 18],
  )
  const fade = useTransform(
    scrollYProgress,
    [0, 0.75],
    reduce ? [1, 1] : [1, 0.22],
  )

  return {
    ref,
    backdropY,
    dashboardY,
    phoneY,
    copyY,
    orbitRotate,
    fade,
  }
}

export function useParallaxRange(
  progress: MotionValue<number>,
  from: number,
  to: number,
) {
  const reduce = usePrefersReducedMotion()
  return useTransform(progress, [0, 1], reduce ? [0, 0] : [from, to])
}
