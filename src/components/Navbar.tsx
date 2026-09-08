"use client"

import { useEffect, useState } from "react"

import { useLocale, useTranslations } from "next-intl"

import { IconClose, IconMenu, IconMoon, IconSun } from "@/components/icons"

import LocaleSwitcher from "@/components/LocaleSwitcher"

import { company, navIds } from "@/data/site"

import { useTheme } from "@/hooks/useTheme"

function localizedHome(locale: string) {
  return locale === "en" ? "/en/" : "/"
}

export default function Navbar({
  activeSection,
  home = true,
}: Readonly<{
  activeSection?: string
  home?: boolean
}>) {
  const locale = useLocale()

  const t = useTranslations()

  const { theme, toggleTheme } = useTheme()

  const [menuOpen, setMenuOpen] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  const root = localizedHome(locale)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)

    onScroll()

    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const onKey = (event: KeyboardEvent) =>
      event.key === "Escape" && setMenuOpen(false)

    window.addEventListener("keydown", onKey)

    return () => window.removeEventListener("keydown", onKey)
  }, [menuOpen])

  const sectionHref = (id: string) => (home ? `#${id}` : `${root}#${id}`)

  return (
    <header
      className={scrolled ? "nav-scrolled" : undefined}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--nav-bg)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <nav aria-label={t("nav.aria")}>
        <div
          className="flex items-center justify-between"
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 24px",
            height: 68,
          }}
        >
          <a
            href={home ? "#main" : root}
            className="no-underline flex items-center gap-2.5"
            aria-label={t("common.homeLabel")}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-white text-sm"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary) 0%, #7C3AED 100%)",
              }}
            >
              L
            </div>
            <div>
              <div
                className="font-extrabold text-base leading-none"
                style={{ color: "var(--fg)", letterSpacing: "-0.03em" }}
              >
                {company.name}
              </div>
              <div
                className="text-xs leading-none mt-0.5"
                style={{ color: "var(--fg-muted)" }}
              >
                {t("common.productStudio")}
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navIds.map((id) => (
              <a
                key={id}
                href={sectionHref(id)}
                className={`nav-link text-sm font-medium${
                  activeSection === id ? " is-active" : ""
                }`}
              >
                {t(`nav.${id}`)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <LocaleSwitcher />
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "light" ? t("nav.darkMode") : t("nav.lightMode")
              }
              className="icon-btn w-11 h-11 rounded-xl flex items-center justify-center"
            >
              {theme === "light" ? <IconMoon /> : <IconSun />}
            </button>
            <a
              href={sectionHref("contact")}
              className="btn-primary hidden md:inline-flex text-sm font-semibold px-5 py-2.5"
            >
              {t("nav.consultation")}
            </a>
            <button
              type="button"
              className="md:hidden icon-btn w-11 h-11 rounded-xl flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden flex flex-col gap-3"
            style={{
              borderTop: "1px solid var(--border)",
              background: "var(--bg)",
              padding: "16px 24px",
            }}
          >
            {navIds.map((id) => (
              <a
                key={id}
                href={sectionHref(id)}
                className="nav-link text-sm font-semibold py-2"
                onClick={() => setMenuOpen(false)}
              >
                {t(`nav.${id}`)}
              </a>
            ))}
            <LocaleSwitcher />
            <a
              href={sectionHref("contact")}
              className="btn-primary text-sm font-semibold px-5 py-3 text-center"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.consultation")}
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
