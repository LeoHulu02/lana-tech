"use client"

import { motion } from "framer-motion"

import { useSiteMessages } from "@/hooks/useSiteMessages"

import { usePrefersReducedMotion } from "@/hooks/useScrollLayers"

const colors = ["#4F46E5", "#EC4899", "#F59E0B"]

export default function WhyUs() {
  const copy = useSiteMessages().why

  const reduce = usePrefersReducedMotion()

  return (
    <section style={{ background: "var(--bg-alt)", padding: "112px 0" }}>
      <div className="section-wrap">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: "var(--primary)" }}
        >
          {copy.eyebrow}
        </p>
        <h2
          className="mb-10 max-w-xl"
          style={{
            fontSize: "clamp(1.9rem, 3.4vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.15,
            color: "var(--fg)",
          }}
        >
          {copy.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {copy.reasons.map(([title, desc], i) => (
            <motion.article
              key={title}
              className="rounded-2xl p-7"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <h3 className="font-bold mb-3" style={{ color: "var(--fg)" }}>
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                {desc}
              </p>
            </motion.article>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {copy.testimonials.map(([name, role, avatar, text], index) => (
            <blockquote
              key={name}
              className="quote-card rounded-2xl p-7 pt-12"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--fg-muted)" }}
              >
                {text}
              </p>
              <footer className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm"
                  style={{ background: colors[index] }}
                >
                  {avatar}
                </div>
                <div>
                  <cite
                    className="not-italic text-sm font-semibold block"
                    style={{ color: "var(--fg)" }}
                  >
                    {name}
                  </cite>
                  <span
                    className="text-xs"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {role}
                  </span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
