"use client"

import { useEffect, useState } from "react"

import { useLocale, useTranslations } from "next-intl"

import { usePathname } from "next/navigation"

import { IconGlobe } from "@/components/icons"

function getLocaleTarget(
  pathname: string,

  hash: string,

  targetLocale: "id" | "en",
) {
  const enWork = /^\/en\/work\/([^/]+)\/?$/.exec(pathname)

  const idWork = /^\/karya\/([^/]+)\/?$/.exec(pathname)

  let nextPath = targetLocale === "en" ? "/en" : "/id"

  if (enWork || idWork) {
    const slug = (enWork ?? idWork)?.[1]

    nextPath = targetLocale === "en" ? `/en/work/${slug}` : `/id/karya/${slug}`
  }

  return `${nextPath}${hash}`
}

export default function LocaleSwitcher() {
  const locale = useLocale()

  const t = useTranslations("nav")

  const pathname = usePathname()

  const [hash, setHash] = useState("")

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash)

    syncHash()

    window.addEventListener("hashchange", syncHash)

    return () => window.removeEventListener("hashchange", syncHash)
  }, [])

  return (
    <div
      className="flex items-center gap-1 text-xs font-bold"
      aria-label={t("language")}
    >
      <IconGlobe size={16} />
      <a
        href={getLocaleTarget(pathname, hash, "id")}
        hrefLang="id"
        lang="id"
        aria-current={locale === "id" ? "page" : undefined}
        style={{
          color: locale === "id" ? "var(--primary)" : "var(--fg-muted)",
        }}
      >
        ID
      </a>
      <span aria-hidden="true" style={{ color: "var(--border)" }}>
        |
      </span>
      <a
        href={getLocaleTarget(pathname, hash, "en")}
        hrefLang="en"
        lang="en"
        aria-current={locale === "en" ? "page" : undefined}
        style={{
          color: locale === "en" ? "var(--primary)" : "var(--fg-muted)",
        }}
      >
        EN
      </a>
    </div>
  )
}
