"use client";

import { motion } from "framer-motion";
import { process } from "@/data/site";
import { useParallaxRange, usePrefersReducedMotion, useSectionScroll } from "@/hooks/useScrollLayers";

export default function Process() {
  const { ref, scrollYProgress } = useSectionScroll();
  const reduce = usePrefersReducedMotion();
  const titleY = useParallaxRange(scrollYProgress, 20, -20);

  return (
    <section id="process" ref={ref} style={{ background: "var(--bg)", padding: "112px 0" }}>
      <div className="section-wrap grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
        <motion.div className="process-sticky" style={{ y: titleY }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>
            Cara kerja
          </p>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.15, color: "var(--fg)" }}>
            Dari brief sampai produk live, tanpa tebak-tebakan.
          </h2>
          <p className="mt-5" style={{ color: "var(--fg-muted)", lineHeight: 1.75, maxWidth: 400 }}>
            Kamu melihat progres setiap minggu. Staging selalu terbuka. Yang kami janjikan di awal adalah yang dikirim di akhir.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
          {process.map((step, i) => (
            <motion.article
              key={step.step}
              className="rounded-2xl p-7"
              style={{ background: "var(--bg-alt)", border: "1px solid var(--border)" }}
              initial={reduce ? false : { opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: reduce ? 0 : i * 0.04 }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="font-extrabold text-4xl" style={{ color: "var(--border)", letterSpacing: "-0.05em" }}>
                  {step.step}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "var(--primary-bg)", color: "var(--primary)" }}>
                  {step.duration}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--fg)" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                {step.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
