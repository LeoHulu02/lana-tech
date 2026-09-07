import Image from "next/image"
import Link from "next/link"
import { company, type WorkItem } from "@/data/site"
import { imageBlur } from "@/lib/image"

export default function WorkDetail({
  item,
  others,
}: {
  item: WorkItem
  others: WorkItem[]
}) {
  return (
    <main id="main">
      <section style={{ background: "var(--bg)" }}>
        <div className="relative h-[42vh] min-h-[280px] max-h-[480px] overflow-hidden">
          <Image
            src={item.img}
            alt={item.imgAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL={imageBlur}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, var(--bg) 8%, transparent 55%)",
            }}
          />
        </div>
        <div className="section-wrap" style={{ paddingBottom: 80 }}>
          <p className="text-xs font-semibold mb-4">
            <Link
              href="/#portfolio"
              className="no-underline"
              style={{ color: "var(--primary)" }}
            >
              ← Semua karya
            </Link>
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
              style={{ background: item.color }}
            >
              {item.category}
            </span>
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{
                background: "var(--bg-alt)",
                color: "var(--fg-muted)",
                border: "1px solid var(--border)",
              }}
            >
              {item.year}
            </span>
          </div>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--fg-muted)" }}
          >
            {item.client} · {item.industry}
          </p>
          <h1
            className="mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--fg)",
            }}
          >
            {item.title}
          </h1>
          <p
            className="mb-10"
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.7,
              color: "var(--fg-muted)",
              maxWidth: 640,
            }}
          >
            {item.summary}
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              ["Masalah", item.challenge],
              ["Yang dibangun", item.solution],
              ["Hasil", item.result],
            ].map(([label, text]) => (
              <div
                key={label}
                className="rounded-2xl p-5"
                style={{
                  background: "var(--bg-alt)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "var(--primary)" }}
                >
                  {label}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--fg)" }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 mb-12">
            <div>
              <h2
                className="font-bold text-xl mb-4"
                style={{ color: "var(--fg)" }}
              >
                Cerita project
              </h2>
              <p
                className="leading-relaxed"
                style={{ color: "var(--fg-muted)", fontSize: "1.05rem" }}
              >
                {item.body}
              </p>
            </div>
            <div>
              <h2
                className="font-bold text-xl mb-4"
                style={{ color: "var(--fg)" }}
              >
                Yang kami kerjakan
              </h2>
              <ul className="flex flex-col gap-2 mb-6">
                {item.scope.map((s) => (
                  <li
                    key={s}
                    className="text-sm"
                    style={{ color: "var(--fg)" }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((t) => (
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
              </div>
            </div>
          </div>

          {item.gallery.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4 mb-14">
              {item.gallery.map((shot) => (
                <div
                  key={shot.src}
                  className="relative h-56 rounded-2xl overflow-hidden"
                  style={{ background: "var(--bg-alt)" }}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={imageBlur}
                  />
                </div>
              ))}
            </div>
          )}

          <div
            className="rounded-2xl p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-14"
            style={{
              background: "var(--bg-alt)",
              border: "1px solid var(--border)",
            }}
          >
            <div>
              <p className="font-bold mb-1" style={{ color: "var(--fg)" }}>
                Punya masalah operasional yang mirip?
              </p>
              <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                Ceritakan ke {company.name}. Kami balas dengan rencana, bukan
                slide kosong.
              </p>
            </div>
            <Link
              href="/#contact"
              className="btn-primary text-sm font-semibold px-6 py-3 text-center"
            >
              Mulai project
            </Link>
          </div>

          {others.length > 0 && (
            <div>
              <h2
                className="font-bold text-lg mb-5"
                style={{ color: "var(--fg)" }}
              >
                Karya lain
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {others.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/karya/${other.slug}`}
                    className="portfolio-card rounded-2xl overflow-hidden no-underline block"
                  >
                    <div className="relative h-36">
                      <Image
                        src={other.img}
                        alt={other.imgAlt}
                        fill
                        sizes="33vw"
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={imageBlur}
                      />
                    </div>
                    <div className="p-4">
                      <p
                        className="text-xs font-semibold mb-1"
                        style={{ color: "var(--primary)" }}
                      >
                        {other.category}
                      </p>
                      <h3
                        className="font-bold text-sm"
                        style={{ color: "var(--fg)" }}
                      >
                        {other.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
