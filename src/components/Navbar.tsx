"use client"

import { useEffect, useState } from "react"
import { IconClose, IconMenu, IconMoon, IconSun } from "@/components/icons"
import { company, navLinks } from "@/data/site"
import { useTheme } from "@/hooks/useTheme"

export default function Navbar({
  activeSection,
  home = true,
}: {
  activeSection?: string
  home?: boolean
}) {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [menuOpen])

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
      <nav aria-label="Utama">
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
            href={home ? "#main" : "/"}
            className="no-underline flex items-center gap-2.5"
            aria-label={`${company.name} beranda`}
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
                Product studio
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={home ? `#${link.id}` : `/#${link.id}`}
                className={`nav-link text-sm font-medium${
                  activeSection === link.id ? " is-active" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "light"
                  ? "Aktifkan mode gelap"
                  : "Aktifkan mode terang"
              }
              className="icon-btn w-11 h-11 rounded-xl flex items-center justify-center"
            >
              {theme === "light" ? <IconMoon /> : <IconSun />}
            </button>
            <a
              href={home ? "#contact" : "/#contact"}
              className="btn-primary hidden md:inline-flex text-sm font-semibold px-5 py-2.5"
            >
              Konsultasi
            </a>
            <button
              type="button"
              className="md:hidden icon-btn w-11 h-11 rounded-xl flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
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
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={home ? `#${link.id}` : `/#${link.id}`}
                className="nav-link text-sm font-semibold py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={home ? "#contact" : "/#contact"}
              className="btn-primary text-sm font-semibold px-5 py-3 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Konsultasi
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
