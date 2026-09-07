"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { work } from "@/data/site";
import { usePrefersReducedMotion } from "@/hooks/useScrollLayers";

const filters = ["Semua", ...Array.from(new Set(work.map((w) => w.category)))];

export default function Work() {
  const [filter, setFilter] = useState("Semua");
  const reduce = usePrefersReducedMotion();
  const visible = filter === "Semua" ? work : work.filter((w) => w.category === filter);
  const featured = visible.find((w) => w.featured) ?? visible[0];
  const rest = visible.filter((w) => w !== featured);

  if (!featured) return null;

  return (
    <section id="portfolio" style={{ background: "var(--bg-alt)", padding: "112px 0" }}>
      <div className="section-wrap">
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>
          Karya
        </p>
        <h2 className="mb-3" style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.15, color: "var(--fg)" }}>
          Produk yang sudah dipakai, bukan konsep di deck.
        </h2>
        <p className="mb-8" style={{ color: "var(--fg-muted)", maxWidth: 540, lineHeight: 1.7 }}>
          Setiap project punya masalah operasional yang jelas. Kami bangun solusinya, lalu ukur dari pemakaian harian.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((cat) => (
            <button key={cat} type="button" className={`filter-chip${filter === cat ? " is-active" : ""}`} onClick={() => setFilter(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <motion.article
          key={featured.title}
          className="work-featured rounded-3xl mb-6"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="relative min-h-[280px] overflow-hidden">
            <motion.div
              className="absolute inset-0"
              initial={reduce ? undefined : { scale: 1.08, y: 20 }}
              whileInView={reduce ? undefined : { scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <Image src={featured.img} alt={featured.title} fill sizes="(max-width: 900px) 100vw, 60vw" className="object-cover" />
            </motion.div>
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--bg-card), transparent 55%)" }} />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white" style={{ background: featured.color }}>
                {featured.category}
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}>
                {featured.year}
              </span>
            </div>
          </div>
          <div className="p-7 md:p-9 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--fg-muted)" }}>
              {featured.client} · {featured.industry}
            </p>
            <h3 className="text-2xl font-extrabold mb-4" style={{ color: "var(--fg)", letterSpacing: "-0.03em" }}>
              {featured.title}
            </h3>
            <dl className="text-sm space-y-3 mb-5" style={{ color: "var(--fg-muted)", lineHeight: 1.65 }}>
              <div>
                <dt className="font-semibold" style={{ color: "var(--fg)" }}>
                  Masalah
                </dt>
                <dd>{featured.challenge}</dd>
              </div>
              <div>
                <dt className="font-semibold" style={{ color: "var(--fg)" }}>
                  Yang dibangun
                </dt>
                <dd>{featured.solution}</dd>
              </div>
              <div>
                <dt className="font-semibold" style={{ color: "var(--primary)" }}>
                  Hasil
                </dt>
                <dd>{featured.result}</dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-1.5">
              {featured.tags.map((t) => (
                <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-lg" style={{ background: "var(--bg-alt)", border: "1px solid var(--border)", color: "var(--fg)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.article>

        <div className="grid md:grid-cols-3 gap-5">
          {rest.map((item, i) => (
            <motion.article
              key={item.title}
              className="portfolio-card rounded-2xl overflow-hidden"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="relative h-44 overflow-hidden">
                <Image src={item.img} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold mb-1" style={{ color: "var(--primary)" }}>
                  {item.category} · {item.year}
                </p>
                <h3 className="font-bold mb-2" style={{ color: "var(--fg)" }}>
                  {item.title}
                </h3>
                <p className="text-sm mb-3" style={{ color: "var(--fg-muted)", lineHeight: 1.6 }}>
                  {item.result}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md" style={{ background: "var(--bg-alt)", color: "var(--fg-muted)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
