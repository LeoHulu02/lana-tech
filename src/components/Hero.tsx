"use client";

import { motion } from "framer-motion";
import { company } from "@/data/site";
import { useHeroScroll } from "@/hooks/useScrollLayers";

function DashFrame() {
  return (
    <div className="product-frame rounded-2xl w-full max-w-[420px]">
      <div className="product-bar">
        <span className="product-dot" style={{ background: "#FF5F57" }} />
        <span className="product-dot" style={{ background: "#FEBC2E" }} />
        <span className="product-dot" style={{ background: "#28C840" }} />
        <span className="text-xs ml-2" style={{ color: "var(--fg-muted)" }}>
          Kontrol operasional
        </span>
      </div>
      <div className="p-4 grid grid-cols-3 gap-2">
        {["Stok live", "Order hari ini", "Margin"].map((label, i) => (
          <div key={label} className="rounded-xl p-3" style={{ background: "var(--bg-alt)", border: "1px solid var(--border)" }}>
            <div className="text-[10px] mb-1" style={{ color: "var(--fg-muted)" }}>
              {label}
            </div>
            <div className="text-sm font-bold" style={{ color: i === 0 ? "var(--primary)" : "var(--fg)" }}>
              {["1.284", "76", "18%"][i]}
            </div>
          </div>
        ))}
        <div className="col-span-3 rounded-xl p-3 h-24" style={{ background: "var(--bg-alt)", border: "1px solid var(--border)" }}>
          <div className="flex items-end gap-1 h-full">
            {[40, 62, 48, 80, 55, 90, 70].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 5 ? "var(--primary)" : "var(--border)" }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileFrame() {
  return (
    <div className="product-frame rounded-[22px] w-[148px]">
      <div className="px-4 pt-3 pb-2 text-center">
        <div className="w-10 h-1 rounded-full mx-auto mb-3" style={{ background: "var(--border)" }} />
        <div className="text-[10px] font-semibold" style={{ color: "var(--fg-muted)" }}>
          Reservasi
        </div>
        <div className="text-sm font-bold mt-1" style={{ color: "var(--fg)" }}>
          Meja 12 · 19.30
        </div>
      </div>
      <div className="px-3 pb-4 flex flex-col gap-2">
        {["Aruna · 4 orang", "Vela · 2 orang", "Walk-in"].map((row) => (
          <div key={row} className="rounded-lg px-2 py-2 text-[10px] font-medium" style={{ background: "var(--bg-alt)", color: "var(--fg)" }}>
            {row}
          </div>
        ))}
        <div className="rounded-lg px-2 py-2 text-[10px] font-bold text-center" style={{ background: "var(--primary)", color: "#fff" }}>
          Konfirmasi
        </div>
      </div>
    </div>
  );
}

function PanelFrame() {
  return (
    <div className="product-frame rounded-2xl w-[220px] p-4">
      <div className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--fg-muted)" }}>
        Pipeline
      </div>
      <div className="text-lg font-extrabold mb-3" style={{ color: "var(--fg)" }}>
        12 project aktif
      </div>
      {["Desain", "Development", "QA"].map((s, i) => (
        <div key={s} className="flex items-center justify-between text-xs mb-2">
          <span style={{ color: "var(--fg-muted)" }}>{s}</span>
          <span className="font-semibold" style={{ color: "var(--fg)" }}>
            {["3", "7", "2"][i]}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const { ref, bgY, glowY, uiY, uiYSlow, copyY, fade } = useHeroScroll();

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: "var(--hero-bg)", padding: "72px 0 48px" }}>
      <motion.div className="hero-grid" style={{ y: bgY }} />
      <motion.div
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{
          y: glowY,
          top: -80,
          right: -40,
          width: 420,
          height: 420,
          background: "color-mix(in srgb, var(--primary) 16%, transparent)",
          filter: "blur(70px)",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{
          y: bgY,
          bottom: 40,
          left: -80,
          width: 280,
          height: 280,
          background: "color-mix(in srgb, #7C3AED 12%, transparent)",
          filter: "blur(70px)",
        }}
      />

      <div className="section-wrap relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <motion.div style={{ y: copyY, opacity: fade }}>
          <p className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6" style={{ background: "var(--pill)", color: "var(--primary)", border: "1px solid var(--pill-border)" }}>
            Studio product engineering · {company.city}
          </p>
          <h1 className="mb-6" style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.4rem)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.05, color: "var(--fg)" }}>
            {company.tagline}
          </h1>
          <p className="mb-8" style={{ fontSize: "1.12rem", lineHeight: 1.75, color: "var(--fg-muted)", maxWidth: 520 }}>
            Lana Tech merancang dan mengembangkan website, aplikasi web, dan sistem yang dipakai tim setiap hari. Satu studio, dari brief sampai produk live.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#portfolio" className="btn-primary text-sm font-semibold px-7 py-3.5">
              Lihat karya
            </a>
            <a href="#contact" className="btn-ghost text-sm font-semibold px-7 py-3.5">
              Mulai project
            </a>
          </div>
          <div className="mt-10 sm:hidden">
            <DashFrame />
          </div>
        </motion.div>

        <div className="relative h-[420px] md:h-[480px] hidden sm:block">
          <motion.div className="absolute left-0 top-8 z-20" style={{ y: uiY }}>
            <DashFrame />
          </motion.div>
          <motion.div className="absolute right-0 top-0 z-30" style={{ y: uiYSlow }}>
            <MobileFrame />
          </motion.div>
          <motion.div className="absolute right-8 bottom-4 z-10" style={{ y: uiY }}>
            <PanelFrame />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
