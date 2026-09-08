"use client"

import { clients, stack } from "@/data/site"

import { useSiteMessages } from "@/hooks/useSiteMessages"

export default function Proof() {
  const copy = useSiteMessages().proof

  return (
    <section
      style={{
        background: "var(--bg-alt)",

        borderTop: "1px solid var(--border)",

        borderBottom: "1px solid var(--border)",

        padding: "40px 0",
      }}
    >
      <div className="section-wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {copy.stats.map(([value, label]) => (
            <div key={label}>
              <div
                className="font-extrabold"
                style={{
                  fontSize: "1.8rem",

                  color: "var(--fg)",

                  letterSpacing: "-0.04em",
                }}
              >
                {value}
              </div>
              <div className="text-sm" style={{ color: "var(--fg-muted)" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: "var(--fg-muted)" }}
        >
          {copy.usedBy}
        </p>
        <div className="logo-marquee mb-8">
          <div className="logo-track">
            {clients.map((name) => (
              <span
                key={name}
                className="font-extrabold text-xl whitespace-nowrap"
                style={{
                  color: "var(--fg)",

                  opacity: 0.42,

                  letterSpacing: "-0.03em",
                }}
              >
                {name}
              </span>
            ))}
            {clients.map((name) => (
              <span
                key={`${name}-dup`}
                aria-hidden="true"
                className="font-extrabold text-xl whitespace-nowrap"
                style={{
                  color: "var(--fg)",

                  opacity: 0.42,

                  letterSpacing: "-0.03em",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {stack.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg"
              style={{
                background: "var(--bg-card)",

                border: "1px solid var(--border)",

                color: "var(--fg)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
