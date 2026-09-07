"use client";

import { useEffect, useState } from "react";
import { IconClose, IconMenu, IconMoon, IconSun } from "@/components/icons";
import { company, navLinks } from "@/data/site";
import { useTheme } from "@/hooks/useTheme";

export default function Navbar({ activeSection }: { activeSection: string }) {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
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
      <div className="flex items-center justify-between" style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", height: 68 }}>
        <a href="#main" className="no-underline flex items-center gap-2.5" aria-label={`${company.name} beranda`}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-white text-sm" style={{ background: "linear-gradient(135deg, var(--primary) 0%, #7C3AED 100%)" }}>
            L
          </div>
          <div>
            <div className="font-extrabold text-base leading-none" style={{ color: "var(--fg)", letterSpacing: "-0.03em" }}>
              {company.name}
            </div>
            <div className="text-xs leading-none mt-0.5" style={{ color: "var(--fg-muted)" }}>
              Product studio
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={`nav-link text-sm font-medium${activeSection === link.id ? " is-active" : ""}`}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Aktifkan mode gelap" : "Aktifkan mode terang"}
            className="icon-btn w-10 h-10 rounded-xl flex items-center justify-center"
          >
            {theme === "light" ? <IconMoon /> : <IconSun />}
          </button>
          <a href="#contact" className="btn-primary hidden md:inline-flex text-sm font-semibold px-5 py-2.5">
            Konsultasi
          </a>
          <button
            className="md:hidden p-2 rounded-lg icon-btn"
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
        <div id="mobile-menu" className="md:hidden flex flex-col gap-3" style={{ borderTop: "1px solid var(--border)", background: "var(--bg)", padding: "16px 24px" }}>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="nav-link text-sm font-semibold py-1" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm font-semibold px-5 py-3 text-center" onClick={() => setMenuOpen(false)}>
            Konsultasi
          </a>
        </div>
      )}
    </nav>
  );
}
