"use client"

import { useState } from "react"

import Image from "next/image"

import { motion } from "framer-motion"

import { getWork, type CategoryKey } from "@/data/site"

import { Link } from "@/i18n/navigation"

import { imageBlur } from "@/lib/image"

import { useSiteMessages } from "@/hooks/useSiteMessages"

import { usePrefersReducedMotion } from "@/hooks/useScrollLayers"

export default function Work() {
  const messages = useSiteMessages()

  const work = getWork(messages)

  const copy = messages.work

  const filters: Array<"all" | CategoryKey> = [
    "all",
    "webApp",
    "internal",
    "ecommerce",
    "operations",
  ]

  const [filter, setFilter] = useState<"all" | CategoryKey>("all")

  const reduce = usePrefersReducedMotion()

  const visible =
    filter === "all" ? work : work.filter((item) => item.categoryKey === filter)

  const featured = visible.find((w) => w.featured) ?? visible[0]

  const rest = visible.filter((w) => w !== featured)

  if (!featured) return null

  return (
    <section
      id="portfolio"
      style={{ background: "var(--bg-alt)", padding: "112px 0" }}
    >
      <div className="section-wrap">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: "var(--primary)" }}
        >
          {copy.eyebrow}
        </p>
        <h2
          className="mb-3"
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
        <p
          className="mb-8"
          style={{ color: "var(--fg-muted)", maxWidth: 540, lineHeight: 1.7 }}
        >
          {copy.lead}
        </p>

        <div
          className="flex flex-wrap gap-2 mb-10"
          role="group"
          aria-label={copy.filterAria}
        >
          {filters.map((key) => (
            <button
              key={key}
              type="button"
              className={`filter-chip${filter === key ? " is-active" : ""}`}
              aria-pressed={filter === key}
              onClick={() => setFilter(key)}
            >
              {key === "all" ? copy.all : copy.categories[key]}
            </button>
          ))}
        </div>

        <motion.article
          key={featured.slug}
          className="work-featured rounded-3xl mb-6"
          style={{
            background: "var(--bg-card)",

            border: "1px solid var(--border)",
          }}
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
              <Image
                src={featured.img}
                alt={featured.imgAlt}
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL={imageBlur}
              />
            </motion.div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, var(--bg-card), transparent 55%)",
              }}
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                style={{ background: featured.color }}
              >
                {featured.category}
              </span>
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-full"
                style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}
              >
                {featured.year}
              </span>
            </div>
          </div>
          <div className="p-7 md:p-9 flex flex-col justify-center">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--fg-muted)" }}
            >
              {featured.client} · {featured.industry}
            </p>
            <h3
              className="text-2xl font-extrabold mb-2"
              style={{ color: "var(--fg)", letterSpacing: "-0.03em" }}
            >
              <Link
                href={{
                  pathname: "/karya/[slug]",
                  params: { slug: featured.slug },
                }}
                className="no-underline"
                style={{ color: "inherit" }}
              >
                {featured.title}
              </Link>
            </h3>
            <p className="text-sm mb-4" style={{ color: "var(--fg-muted)" }}>
              {featured.summary}
            </p>
            <dl
              className="text-sm space-y-3 mb-5"
              style={{ color: "var(--fg-muted)", lineHeight: 1.65 }}
            >
              <div>
                <dt className="font-semibold" style={{ color: "var(--fg)" }}>
                  {copy.problem}
                </dt>
                <dd>{featured.challenge}</dd>
              </div>
              <div>
                <dt className="font-semibold" style={{ color: "var(--fg)" }}>
                  {copy.built}
                </dt>
                <dd>{featured.solution}</dd>
              </div>
              <div>
                <dt
                  className="font-semibold"
                  style={{ color: "var(--primary)" }}
                >
                  {copy.result}
                </dt>
                <dd>{featured.result}</dd>
              </div>
            </dl>
            <div className="flex flex-wrap items-center gap-3">
              {featured.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-2.5 py-1 rounded-lg"
                  style={{
                    background: "var(--bg-alt)",

                    border: "1px solid var(--border)",

                    color: "var(--fg)",
                  }}
                >
                  {t}
                </span>
              ))}
              <Link
                href={{
                  pathname: "/karya/[slug]",
                  params: { slug: featured.slug },
                }}
                className="text-sm font-semibold no-underline"
                style={{ color: "var(--primary)" }}
              >
                {copy.readStory}
              </Link>
            </div>
          </div>
        </motion.article>

        <div className="grid md:grid-cols-3 gap-5">
          {rest.map((item, i) => (
            <motion.article
              key={item.slug}
              className="portfolio-card rounded-2xl overflow-hidden"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                href={{
                  pathname: "/karya/[slug]",
                  params: { slug: item.slug },
                }}
                className="no-underline block"
                style={{ color: "inherit" }}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.imgAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL={imageBlur}
                  />
                </div>
                <div className="p-5">
                  <p
                    className="text-xs font-semibold mb-1"
                    style={{ color: "var(--primary)" }}
                  >
                    {item.category} · {item.year}
                  </p>
                  <h3 className="font-bold mb-2" style={{ color: "var(--fg)" }}>
                    {item.title}
                  </h3>
                  <p
                    className="text-sm mb-3"
                    style={{ color: "var(--fg-muted)", lineHeight: 1.6 }}
                  >
                    {item.summary}
                  </p>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "var(--primary)" }}
                  >
                    {copy.readStory}
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
