import { getTranslations } from "next-intl/server"

import { Link } from "@/i18n/navigation"

export default async function NotFound() {
  const t = await getTranslations("notFound")

  return (
    <main
      id="main"
      className="section-wrap flex min-h-[70vh] flex-col items-center justify-center text-center"
    >
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ color: "var(--primary)" }}
      >
        404
      </p>
      <h1
        className="text-4xl font-extrabold mb-4"
        style={{ color: "var(--fg)" }}
      >
        {t("title")}
      </h1>
      <p className="mb-7" style={{ color: "var(--fg-muted)" }}>
        {t("description")}
      </p>
      <Link href="/" className="btn-primary px-6 py-3 text-sm font-semibold">
        {t("back")}
      </Link>
    </main>
  )
}
