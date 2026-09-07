import { IconInstagram, IconLinkedIn, IconX } from "@/components/icons";
import { company, footerCompany, footerServices } from "@/data/site";

export default function Footer() {
  return (
    <footer style={{ background: "var(--footer-bg)", padding: "56px 24px 32px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-white text-sm" style={{ background: "linear-gradient(135deg, var(--primary) 0%, #7C3AED 100%)" }}>
                L
              </div>
              <div>
                <div className="font-extrabold text-base text-white leading-none">{company.name}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Product studio · {company.city}
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.45)", maxWidth: 320 }}>
              {company.tagline} Website, aplikasi web, dan sistem operasional sejak {company.founded}.
            </p>
            <div className="flex gap-2">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/", icon: IconLinkedIn },
                { label: "Instagram", href: "https://www.instagram.com/", icon: IconInstagram },
                { label: "X", href: "https://x.com/", icon: IconX },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="social-link w-9 h-9 rounded-xl flex items-center justify-center">
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
              Yang kami bangun
            </p>
            {footerServices.map((l) => (
              <a key={l.label} href={`#${l.id}`} className="footer-link block text-sm mb-2">
                {l.label}
              </a>
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
              Studio
            </p>
            {footerCompany.map((l) => (
              <a key={l.label} href={l.href ?? `#${l.id}`} className="footer-link block text-sm mb-2">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24 }}>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2026 {company.name}. Jakarta.
          </p>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.2)" }}>
            {company.email}
          </p>
        </div>
      </div>
    </footer>
  );
}
