"use client";

import { motion } from "framer-motion";
import { capabilities, company } from "@/data/site";
import { useParallaxRange, usePrefersReducedMotion, useSectionScroll } from "@/hooks/useScrollLayers";

export default function Capabilities() {
  const { ref, scrollYProgress } = useSectionScroll();
  const reduce = usePrefersReducedMotion();
  const shift = useParallaxRange(scrollYProgress, 40, -30);

  return (
    <section id="about" ref={ref} style={{ background: "var(--bg)", padding: "112px 0" }}>
      <div className="section-wrap grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <motion.div style={{ y: shift }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>
            Studio
          </p>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.15, color: "var(--fg)" }}>
            Kami membangun produk yang tim kamu pakai besok pagi.
          </h2>
          <p className="mt-5" style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--fg-muted)" }}>
            {company.name} adalah studio di {company.city}, berdiri {company.founded}. Fokus kami sempit: website, aplikasi web, dan sistem operasional — dikerjakan sampai benar-benar live.
          </p>
          <p className="mt-4" style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--fg-muted)" }}>
            Kalau yang kamu butuh hanya brochure site, kami kerjakan. Kalau yang kamu butuh dashboard, booking, atau toko dengan pembayaran, itu pekerjaan harian kami.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {capabilities.map((cap, i) => (
            <motion.article
              key={cap.id}
              className="surface-card rounded-2xl p-7"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="text-xs font-semibold mb-2" style={{ color: "var(--primary)" }}>
                0{i + 1}
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--fg)", letterSpacing: "-0.02em" }}>
                {cap.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--fg-muted)" }}>
                {cap.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {cap.points.map((p) => (
                  <span key={p} className="text-xs font-medium px-2.5 py-1 rounded-lg" style={{ background: "var(--bg-alt)", color: "var(--fg)", border: "1px solid var(--border)" }}>
                    {p}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
