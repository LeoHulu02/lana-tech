'use client'

import { useState, useEffect, useRef, type ReactNode } from 'react'

/* ─── THEME ─────────────────────────────────────────── */
type Theme = 'light' | 'dark'

/* ─── PARALLAX HOOK ──────────────────────────────────── */
function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handle = () => {
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2 - window.innerHeight / 2
      el.style.transform = `translateY(${center * speed}px)`
    }
    window.addEventListener('scroll', handle, { passive: true })
    handle()
    return () => window.removeEventListener('scroll', handle)
  }, [speed])
  return ref
}

/* ─── INTERSECTION OBSERVER HOOK ────────────────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(32px)'
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ─── DATA ───────────────────────────────────────────── */
const SERVICES = [
  {
    emoji: '🌐',
    title: 'Web Development',
    tag: 'Core Service',
    desc: 'Kami membangun website modern yang cepat, aman, dan dirancang sesuai kebutuhan bisnis Anda. Dari landing page, company profile, e-commerce, hingga custom web application yang siap scale.',
    stack: ['React', 'Next.js', 'Laravel', 'PostgreSQL'],
  },
  {
    emoji: '📱',
    title: 'Mobile-Responsive Web',
    tag: 'Core Service',
    desc: 'Pengalaman pengguna yang konsisten di setiap perangkat. Website kami dirancang secara responsif menggunakan pendekatan mobile-first agar tampil optimal di desktop, tablet, maupun smartphone.',
    stack: ['Tailwind CSS', 'Responsive UI', 'PWA', 'Touch UX'],
  },
  {
    emoji: '⚙️',
    title: 'Custom Web Application',
    tag: 'Advanced',
    desc: 'Butuh sistem yang lebih dari sekadar website? Kami membangun dashboard, admin panel, management system, booking system, dan solusi digital yang disesuaikan dengan workflow bisnis Anda.',
    stack: ['Node.js', 'REST API', 'Docker', 'Redis'],
  },
  {
    emoji: '🎨',
    title: 'UI/UX Design',
    tag: 'Design',
    desc: 'Desain bukan hanya tentang tampilan. Kami menciptakan interface yang modern, intuitif, dan mudah digunakan — dari wireframe, prototype, hingga design system yang siap diimplementasikan.',
    stack: ['Figma', 'Design System', 'Prototyping', 'User Testing'],
  },
  {
    emoji: '🛒',
    title: 'E-Commerce Platform',
    tag: 'Commerce',
    desc: 'Solusi toko online lengkap dengan manajemen produk, keranjang belanja, payment gateway, dan dashboard analitik penjualan. Siap untuk bisnis skala kecil hingga enterprise.',
    stack: ['WooCommerce', 'Midtrans', 'Xendit', 'Inventory'],
  },
  {
    emoji: '🔒',
    title: 'Web Security & Performance',
    tag: 'Infra',
    desc: 'Keamanan dan performa adalah fondasi setiap produk yang kami bangun. SSL, firewall, optimasi loading, CDN, dan monitoring 24/7 untuk memastikan website Anda selalu aman dan cepat.',
    stack: ['SSL/TLS', 'CDN', 'Cloudflare', 'Lighthouse'],
  },
]

const PORTFOLIO = [
  {
    title: 'Nexora Dashboard',
    category: 'Web Application',
    desc: 'Platform manajemen bisnis all-in-one dengan real-time analytics, inventory tracking, dan laporan keuangan otomatis untuk perusahaan distribusi nasional.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    color: '#4F46E5',
    year: '2024',
    result: 'Efisiensi operasional meningkat 60%',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=380&fit=crop&auto=format',
  },
  {
    title: 'BrightWork HR Portal',
    category: 'Custom Web App',
    desc: 'Sistem manajemen SDM terintegrasi mencakup rekrutmen, absensi digital, payroll, dan evaluasi kinerja karyawan untuk perusahaan dengan 500+ staf.',
    tags: ['Next.js', 'Laravel', 'MySQL'],
    color: '#0EA5E9',
    year: '2024',
    result: '500+ karyawan terkelola otomatis',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=380&fit=crop&auto=format',
  },
  {
    title: 'Vela Studio E-Commerce',
    category: 'E-Commerce',
    desc: 'Platform toko online fashion premium dengan fitur virtual try-on, rekomendasi produk berbasis AI, loyalty program, dan integrasi marketplace Tokopedia & Shopee.',
    tags: ['WooCommerce', 'Midtrans', 'Vue.js'],
    color: '#EC4899',
    year: '2023',
    result: 'Revenue online naik 3x dalam 6 bulan',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=380&fit=crop&auto=format',
  },
  {
    title: 'Korindo Property Website',
    category: 'Corporate Website',
    desc: 'Website company profile modern untuk developer properti dengan virtual tour 360°, katalog unit interaktif, kalkulator KPR, dan sistem booking konsultasi online.',
    tags: ['Next.js', 'Three.js', 'Contentful'],
    color: '#10B981',
    year: '2023',
    result: '300+ leads per bulan dari website',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=380&fit=crop&auto=format',
  },
  {
    title: 'Paxia Booking System',
    category: 'Web Application',
    desc: 'Sistem reservasi restoran premium dengan manajemen meja real-time, order tracking, digital menu QR code, dan integrasi POS untuk 12 outlet di seluruh Jakarta.',
    tags: ['React', 'Socket.io', 'Express'],
    color: '#F59E0B',
    year: '2023',
    result: '12 outlet terhubung satu sistem',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=380&fit=crop&auto=format',
  },
  {
    title: 'FinTrack Mobile Web',
    category: 'Mobile Web App',
    desc: 'Aplikasi pencatatan keuangan personal berbasis web dengan tampilan mobile-first, kategorisasi pengeluaran otomatis, grafik analitik, dan pengingat tagihan bulanan.',
    tags: ['React', 'PWA', 'Chart.js'],
    color: '#8B5CF6',
    year: '2022',
    result: '10.000+ pengguna aktif bulanan',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=380&fit=crop&auto=format',
  },
]

const TESTIMONIALS = [
  {
    name: 'Andi Prasetyo',
    role: 'CEO, Nexora Solutions',
    avatar: 'AP',
    color: '#4F46E5',
    text: 'Lana Tech benar-benar memahami kebutuhan bisnis kami. Dashboard yang mereka bangun tidak hanya cantik secara visual, tapi juga sangat fungsional dan mudah digunakan oleh tim kami yang beragam.',
    rating: 5,
  },
  {
    name: 'Sarah Wulandari',
    role: 'Head of Marketing, Vela Studio',
    avatar: 'SW',
    color: '#EC4899',
    text: 'Revenue online kami naik 3x lipat dalam 6 bulan setelah website baru diluncurkan. Tim Lana Tech sangat profesional, komunikatif, dan selalu deliver tepat waktu.',
    rating: 5,
  },
  {
    name: 'Budi Santoso',
    role: 'Operations Director, Korindo Group',
    avatar: 'BS',
    color: '#10B981',
    text: 'Virtual tour dan katalog interaktif yang dibuat Lana Tech membuat calon pembeli bisa eksplorasi unit kami dari rumah. Sangat membantu tim sales dan meningkatkan kualitas leads secara signifikan.',
    rating: 5,
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Discovery & Brief',
    desc: 'Kami mendalami kebutuhan, tujuan bisnis, target pengguna, dan masalah yang ingin diselesaikan melalui sesi diskusi mendalam.',
    duration: '1–3 hari',
  },
  {
    step: '02',
    title: 'Planning & Strategy',
    desc: 'Menyusun roadmap project, arsitektur teknis, wireframe awal, dan estimasi timeline yang realistis dan transparan.',
    duration: '3–5 hari',
  },
  {
    step: '03',
    title: 'Design & Prototype',
    desc: 'Membuat desain UI/UX di Figma lengkap dengan prototype interaktif sebelum satu baris kode pun ditulis.',
    duration: '5–10 hari',
  },
  {
    step: '04',
    title: 'Development',
    desc: 'Implementasi penuh dengan update progres mingguan, code review, dan akses staging environment untuk review langsung.',
    duration: '2–8 minggu',
  },
  {
    step: '05',
    title: 'Testing & QA',
    desc: 'Pengujian menyeluruh meliputi fungsionalitas, performa, keamanan, kompatibilitas lintas browser, dan responsivitas perangkat.',
    duration: '3–7 hari',
  },
  {
    step: '06',
    title: 'Launch & Support',
    desc: 'Deploy ke production, setup domain dan SSL, serta dukungan teknis pasca-launch selama 30 hari untuk memastikan semua berjalan sempurna.',
    duration: 'Ongoing',
  },
]

const WHY_US = [
  { icon: '⚡', title: 'Modern Tech Stack', desc: 'Kami menggunakan teknologi terkini — React, Next.js, Node.js, Docker — untuk membangun produk yang cepat, stabil, dan mudah dimaintain jangka panjang.' },
  { icon: '📐', title: 'Responsive by Default', desc: 'Setiap pixel dirancang untuk semua ukuran layar. Mobile-first approach memastikan tampilan optimal dari smartphone hingga ultrawide monitor.' },
  { icon: '🎯', title: 'Solution-Oriented', desc: 'Kami tidak hanya membuat website. Kami memahami tantangan bisnis Anda dan merancang solusi digital yang benar-benar menjawab permasalahan nyata.' },
  { icon: '🔍', title: 'Transparent Process', desc: 'Progress update mingguan, akses staging environment, dan komunikasi terbuka di setiap tahap pengembangan. Tidak ada kejutan di akhir project.' },
  { icon: '🛡️', title: 'Security First', desc: 'Setiap produk kami dibangun dengan memperhatikan keamanan — SSL, data encryption, secure authentication, dan perlindungan terhadap kerentanan umum.' },
  { icon: '🤝', title: 'Long-Term Partner', desc: 'Kami berkomitmen sebagai mitra jangka panjang, bukan vendor satu kali pakai. Support, maintenance, dan pengembangan fitur lanjutan selalu tersedia.' },
]

const STATS = [
  { value: '60+', label: 'Projects Delivered' },
  { value: '3+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Ready' },
]

const LOGOS = ['Nexora', 'BrightWork', 'Vela Studio', 'Korindo', 'Paxia', 'FinTrack']

const STACK_LOGOS = ['React', 'Next.js', 'Laravel', 'Node.js', 'Tailwind', 'Figma', 'PostgreSQL', 'Docker']

/* ─── THEME COLORS ───────────────────────────────────── */
function getColors(theme: Theme) {
  if (theme === 'dark') return {
    bg: '#0F0F14',
    bgAlt: '#16161F',
    bgCard: '#1C1C28',
    fg: '#F0EFFF',
    fgMuted: '#8E8DB0',
    border: '#2A2A3E',
    primary: '#6366F1',
    primaryFg: '#fff',
    primaryBg: 'rgba(99,102,241,0.15)',
    heroBg: '#0F0F14',
    ctaBg: '#6366F1',
    shadow: '0 24px 80px rgba(99,102,241,0.18)',
    navBg: 'rgba(15,15,20,0.88)',
    pill: 'rgba(99,102,241,0.18)',
    pillFg: '#818CF8',
    pillBorder: 'rgba(99,102,241,0.3)',
  }
  return {
    bg: '#ffffff',
    bgAlt: '#F7F6FB',
    bgCard: '#ffffff',
    fg: '#1F2033',
    fgMuted: '#6B6E8E',
    border: '#E4E3F0',
    primary: '#4F46E5',
    primaryFg: '#fff',
    primaryBg: '#EEF2FF',
    heroBg: '#ffffff',
    ctaBg: '#4F46E5',
    shadow: '0 24px 80px rgba(79,70,229,0.12)',
    navBg: 'rgba(255,255,255,0.88)',
    pill: '#EEF2FF',
    pillFg: '#4F46E5',
    pillBorder: '#C7D2FE',
  }
}

/* ─── SUBCOMPONENTS ──────────────────────────────────── */
function SectionLabel({ text, c }: { text: string; c: ReturnType<typeof getColors> }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: c.primary }}>
      {text}
    </p>
  )
}

function SectionHeading({ children, c, center = true }: { children: ReactNode; c: ReturnType<typeof getColors>; center?: boolean }) {
  return (
    <h2
      style={{
        fontSize: 'clamp(1.85rem, 3.5vw, 3rem)',
        fontWeight: 800,
        letterSpacing: '-0.04em',
        lineHeight: 1.15,
        color: c.fg,
        textAlign: center ? 'center' : 'left',
      }}
    >
      {children}
    </h2>
  )
}

function StarRating({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="14" height="14" fill="#FBBF24" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ThemeToggle({ theme, toggle, c }: { theme: Theme; toggle: () => void; c: ReturnType<typeof getColors> }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
      style={{ background: c.bgAlt, border: `1px solid ${c.border}`, cursor: 'pointer' }}
      onMouseEnter={e => (e.currentTarget.style.background = c.primaryBg)}
      onMouseLeave={e => (e.currentTarget.style.background = c.bgAlt)}
    >
      {theme === 'light' ? (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke={c.fg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" stroke={c.fg} strokeWidth="2" />
          <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke={c.fg} strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </button>
  )
}

/* ─── HERO MOCKUP ─────────────────────────────────────── */
function HeroMockup({ c }: { c: ReturnType<typeof getColors> }) {
  return (
    <div
      style={{
        background: c.bgCard,
        borderRadius: 20,
        boxShadow: c.shadow,
        overflow: 'hidden',
        border: `1px solid ${c.border}`,
        width: '100%',
        maxWidth: 760,
        margin: '0 auto',
      }}
    >
      {/* Browser chrome */}
      <div style={{ background: c.bgAlt, borderBottom: `1px solid ${c.border}` }} className="flex items-center gap-2 px-5 py-3">
        <span className="w-3 h-3 rounded-full inline-block" style={{ background: '#FF5F57' }} />
        <span className="w-3 h-3 rounded-full inline-block" style={{ background: '#FEBC2E' }} />
        <span className="w-3 h-3 rounded-full inline-block" style={{ background: '#28C840' }} />
        <div className="ml-4 flex-1 max-w-xs h-6 rounded-lg flex items-center px-3 gap-2" style={{ background: c.bgCard, border: `1px solid ${c.border}` }}>
          <svg width="10" height="10" fill="none" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" stroke={c.fgMuted} strokeWidth="1.2" /></svg>
          <span className="text-xs" style={{ color: c.fgMuted }}>lanatech.id</span>
        </div>
      </div>
      {/* Content */}
      <div className="p-7">
        {/* Nav */}
        <div className="flex items-center justify-between mb-7">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-white text-xs" style={{ background: c.primary }}>L</div>
            <span className="font-bold text-sm" style={{ color: c.fg }}>Lana Tech</span>
          </div>
          <div className="hidden sm:flex gap-5">
            {['Services', 'Work', 'About'].map(l => <span key={l} className="text-xs" style={{ color: c.fgMuted }}>{l}</span>)}
          </div>
          <div className="text-xs px-3 py-1.5 font-semibold rounded-full" style={{ background: c.primary, color: '#fff' }}>Contact</div>
        </div>
        {/* Hero text */}
        <div className="text-center mb-7">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: c.pill, color: c.primary, border: `1px solid ${c.pillBorder}` }}>
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: c.primary }} />
            Digital Technology Partner
          </div>
          <div className="font-extrabold mb-2 leading-tight" style={{ fontSize: '1.35rem', color: c.fg, letterSpacing: '-0.04em' }}>
            Turning Ideas Into<br /><span style={{ color: c.primary }}>Digital Reality.</span>
          </div>
          <p className="text-xs mb-5 mx-auto" style={{ color: c.fgMuted, maxWidth: 360 }}>
            Website, web application & mobile platform untuk bisnis modern yang ingin tumbuh secara digital.
          </p>
          <div className="flex gap-2 justify-center">
            <div className="text-xs px-4 py-2 font-semibold rounded-full" style={{ background: c.primary, color: '#fff' }}>Mulai Project</div>
            <div className="text-xs px-4 py-2 font-semibold rounded-full" style={{ background: c.pill, color: c.primary, border: `1px solid ${c.pillBorder}` }}>Lihat Portofolio</div>
          </div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          {STATS.map(s => (
            <div key={s.label} className="text-center py-3 rounded-xl" style={{ background: c.bgAlt, border: `1px solid ${c.border}` }}>
              <div className="font-extrabold text-sm" style={{ color: c.primary }}>{s.value}</div>
              <div style={{ fontSize: '0.6rem', color: c.fgMuted }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── MAIN APP ────────────────────────────────────────── */
export default function HomePage() {
  const [theme, setTheme] = useState<Theme>('light')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activePortfolio, setActivePortfolio] = useState<number | null>(null)
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')
  const c = getColors(theme)

  const parallaxHero = useParallax(0.2)
  const parallaxAbout = useParallax(-0.15)
  const parallaxCta = useParallax(0.25)

  const fadeServices = useFadeIn()
  const fadePortfolio = useFadeIn()
  const fadeTestimonials = useFadeIn()
  const fadeProcess = useFadeIn()
  const fadeWhyUs = useFadeIn()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const NAV_LINKS = [
    { label: 'Layanan', id: 'services' },
    { label: 'Portofolio', id: 'portfolio' },
    { label: 'Tentang', id: 'about' },
    { label: 'Proses', id: 'process' },
    { label: 'Kontak', id: 'contact' },
  ]

  return (
    <div style={{ background: c.bg, color: c.fg, fontFamily: "'Inter', system-ui, sans-serif", transition: 'background 0.3s ease, color 0.3s ease' }}>

      {/* ── NAVBAR ── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: c.navBg, backdropFilter: 'blur(16px)', borderBottom: `1px solid ${c.border}`, transition: 'background 0.3s ease' }}>
        <div className="flex items-center justify-between" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 68 }}>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-white text-sm" style={{ background: `linear-gradient(135deg, ${c.primary} 0%, #7C3AED 100%)` }}>L</div>
            <div>
              <div className="font-extrabold text-base leading-none" style={{ color: c.fg, letterSpacing: '-0.03em' }}>Lana Tech</div>
              <div className="text-xs leading-none mt-0.5" style={{ color: c.fgMuted }}>Digital Solutions</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(link => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className="text-sm font-medium transition-colors" style={{ color: c.fgMuted, background: 'none', border: 'none', cursor: 'pointer' }}
                onMouseEnter={e => (e.currentTarget.style.color = c.fg)} onMouseLeave={e => (e.currentTarget.style.color = c.fgMuted)}>
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} toggle={toggleTheme} c={c} />
            <button onClick={() => scrollTo('contact')} className="hidden md:block text-sm font-semibold px-5 py-2.5 transition-all"
              style={{ background: c.primary, color: '#fff', borderRadius: 999, border: 'none', cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
              Konsultasi Gratis →
            </button>
            <button className="md:hidden p-2 rounded-lg" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setMenuOpen(!menuOpen)}>
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                <path d={menuOpen ? 'M5 5l12 12M17 5L5 17' : 'M3 6h16M3 11h16M3 16h16'} stroke={c.fg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div style={{ borderTop: `1px solid ${c.border}`, background: c.bg, padding: '16px 24px' }} className="md:hidden flex flex-col gap-3">
            {NAV_LINKS.map(link => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className="text-sm font-semibold text-left py-1" style={{ color: c.fg, background: 'none', border: 'none', cursor: 'pointer' }}>{link.label}</button>
            ))}
            <button onClick={() => scrollTo('contact')} className="text-sm font-semibold px-5 py-3 mt-1" style={{ background: c.primary, color: '#fff', borderRadius: 999, border: 'none', cursor: 'pointer' }}>Konsultasi Gratis →</button>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: c.heroBg, padding: '100px 24px 88px', overflow: 'hidden', position: 'relative' }}>
        {/* Background orbs */}
        <div style={{ position: 'absolute', top: -120, right: -80, width: 480, height: 480, borderRadius: '50%', background: theme === 'dark' ? 'rgba(99,102,241,0.08)' : 'rgba(79,70,229,0.07)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -100, width: 360, height: 360, borderRadius: '50%', background: theme === 'dark' ? 'rgba(124,58,237,0.07)' : 'rgba(139,92,246,0.06)', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div className="inline-flex items-center gap-2 mb-7 px-4 py-2 text-xs font-semibold" style={{ background: c.pill, color: c.primary, borderRadius: 999, border: `1px solid ${c.pillBorder}` }}>
            <span className="w-2 h-2 rounded-full inline-block animate-pulse" style={{ background: c.primary }} />
            Digital Technology Partner · Jakarta, Indonesia
          </div>

          <div ref={parallaxHero} style={{ willChange: 'transform' }}>
            <h1 className="mb-7" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1.05, color: c.fg }}>
              Engineering Digital<br />
              <span style={{ color: c.primary }}>Experiences</span> for<br />
              the Future.
            </h1>
          </div>

          <p className="mb-10 mx-auto" style={{ fontSize: '1.15rem', lineHeight: 1.75, color: c.fgMuted, maxWidth: 580 }}>
            Lana Tech adalah <strong style={{ color: c.fg, fontWeight: 600 }}>digital technology partner</strong> yang membantu bisnis dan individu membangun website, web application, dan mobile-friendly platform yang modern, responsif, dan siap digunakan di berbagai perangkat.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            <button onClick={() => scrollTo('contact')} className="text-sm font-semibold px-8 py-3.5 transition-all"
              style={{ background: c.primary, color: '#fff', borderRadius: 999, border: 'none', cursor: 'pointer', boxShadow: `0 4px 24px ${theme === 'dark' ? 'rgba(99,102,241,0.35)' : 'rgba(79,70,229,0.3)'}` }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
              Mulai Project Sekarang →
            </button>
            <button onClick={() => scrollTo('portfolio')} className="text-sm font-semibold px-8 py-3.5 transition-all"
              style={{ background: c.bgAlt, color: c.fg, borderRadius: 999, border: `1px solid ${c.border}`, cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = c.primary)} onMouseLeave={e => (e.currentTarget.style.borderColor = c.border)}>
              Lihat Portofolio
            </button>
          </div>

          <HeroMockup c={c} />
        </div>
      </section>

      {/* ── LOGO ROW ── */}
      <section style={{ background: c.bgAlt, padding: '36px 24px', borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-7" style={{ color: c.fgMuted }}>Dipercaya oleh berbagai bisnis terkemuka</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {LOGOS.map(name => (
              <span key={name} className="font-extrabold text-xl" style={{ color: c.fg, opacity: 0.2, letterSpacing: '-0.03em' }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: c.bg, padding: '100px 24px', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div ref={parallaxAbout} style={{ willChange: 'transform' }}>
              <SectionLabel text="Tentang Lana Tech" c={c} />
              <SectionHeading c={c} center={false}>
                We Build Digital Experiences<br />
                <span style={{ color: c.primary }}>That Matter.</span>
              </SectionHeading>
              <p className="mt-6 mb-6" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: c.fgMuted }}>
                Lana Tech adalah <strong style={{ color: c.fg, fontWeight: 600 }}>digital technology partner</strong> yang berfokus pada pengembangan website dan solusi berbasis web. Kami membantu mengubah ide menjadi produk digital yang modern, fungsional, dan scalable.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: c.fgMuted }}>
                Dari company profile sederhana hingga custom web application yang kompleks, setiap solusi kami dirancang dengan memperhatikan <strong style={{ color: c.fg, fontWeight: 600 }}>performa, keamanan, user experience,</strong> dan kompatibilitas di berbagai perangkat — karena kami percaya teknologi terbaik adalah yang benar-benar digunakan dan dirasakan manfaatnya.
              </p>
              <div className="flex gap-4 mt-8 flex-wrap">
                {['React & Next.js', 'Laravel & Node.js', 'UI/UX Design', 'Cloud Deploy'].map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: c.pill, color: c.primary, border: `1px solid ${c.pillBorder}` }}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(s => (
                <div key={s.label} className="p-7 rounded-2xl text-center" style={{ background: c.bgAlt, border: `1px solid ${c.border}` }}>
                  <div className="font-extrabold mb-1" style={{ fontSize: '2.5rem', color: c.primary, letterSpacing: '-0.05em' }}>{s.value}</div>
                  <div className="text-sm font-medium" style={{ color: c.fgMuted }}>{s.label}</div>
                </div>
              ))}
              {/* Tech stack strip */}
              <div className="col-span-2 p-5 rounded-2xl" style={{ background: c.bgAlt, border: `1px solid ${c.border}` }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: c.fgMuted }}>Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {STACK_LOGOS.map(t => (
                    <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ background: c.bgCard, border: `1px solid ${c.border}`, color: c.fg }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ background: c.bgAlt, padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="text-center mb-16">
            <SectionLabel text="Layanan Kami" c={c} />
            <SectionHeading c={c}>Solusi Digital yang Kami Tawarkan</SectionHeading>
            <p className="mt-4 mx-auto" style={{ color: c.fgMuted, maxWidth: 520, fontSize: '1.05rem', lineHeight: 1.7 }}>
              Dari desain hingga deployment, kami menangani seluruh kebutuhan digital Anda dengan standar kualitas tinggi.
            </p>
          </div>
          <div ref={fadeServices} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(s => (
              <div key={s.title} className="p-8 rounded-2xl transition-all group" style={{ background: c.bgCard, border: `1px solid ${c.border}`, cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = c.primary; e.currentTarget.style.boxShadow = `0 12px 40px ${theme === 'dark' ? 'rgba(99,102,241,0.15)' : 'rgba(79,70,229,0.12)'}` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.boxShadow = 'none' }}>
                <div className="flex items-start justify-between mb-5">
                  <span className="text-3xl">{s.emoji}</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: c.pill, color: c.primary }}>{s.tag}</span>
                </div>
                <h3 className="font-bold mb-3 text-lg" style={{ color: c.fg, letterSpacing: '-0.02em' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: c.fgMuted }}>{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.stack.map(t => (
                    <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-lg" style={{ background: c.bgAlt, color: c.fgMuted, border: `1px solid ${c.border}` }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" style={{ background: c.bg, padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="text-center mb-16">
            <SectionLabel text="Portofolio" c={c} />
            <SectionHeading c={c}>Apa yang Sudah Kami Kerjakan</SectionHeading>
            <p className="mt-4 mx-auto" style={{ color: c.fgMuted, maxWidth: 520, fontSize: '1.05rem', lineHeight: 1.7 }}>
              Setiap project adalah cerita keberhasilan yang berbeda. Berikut beberapa karya terbaik kami.
            </p>
          </div>
          <div ref={fadePortfolio} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl overflow-hidden transition-all"
                style={{ background: c.bgCard, border: `1px solid ${c.border}`, cursor: 'pointer', transform: activePortfolio === i ? 'translateY(-4px)' : 'none', boxShadow: activePortfolio === i ? `0 20px 60px ${theme === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.12)'}` : 'none' }}
                onMouseEnter={() => setActivePortfolio(i)}
                onMouseLeave={() => setActivePortfolio(null)}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: 200, background: c.bgAlt }}>
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500"
                    style={{ transform: activePortfolio === i ? 'scale(1.06)' : 'scale(1)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 50%, ${c.bgCard}EE)` }} />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white" style={{ background: p.color }}>{p.category}</span>
                  </div>
                  <span className="absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: 'rgba(0,0,0,0.5)', color: '#fff' }}>{p.year}</span>
                </div>
                {/* Body */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2" style={{ color: c.fg, letterSpacing: '-0.02em' }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: c.fgMuted }}>{p.desc}</p>
                  {/* Result badge */}
                  <div className="flex items-center gap-2 mb-4 p-3 rounded-xl" style={{ background: c.bgAlt, border: `1px solid ${c.border}` }}>
                    <span style={{ fontSize: '0.9rem' }}>🎯</span>
                    <span className="text-xs font-semibold" style={{ color: c.fg }}>{p.result}</span>
                  </div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(t => (
                      <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-lg" style={{ background: c.bgAlt, color: c.fgMuted, border: `1px solid ${c.border}` }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => scrollTo('contact')} className="text-sm font-semibold px-8 py-3.5 transition-all"
              style={{ background: c.bgAlt, color: c.fg, borderRadius: 999, border: `1px solid ${c.border}`, cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = c.primary)} onMouseLeave={e => (e.currentTarget.style.borderColor = c.border)}>
              Diskusikan Project Anda →
            </button>
          </div>
        </div>
      </section>

      {/* ── RESPONSIVE SECTION ── */}
      <section style={{ background: c.bgAlt, padding: '100px 24px', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Responsive by Design" c={c} />
              <SectionHeading c={c} center={false}>One Experience.<br />Every Device.</SectionHeading>
              <p className="mt-6 mb-8" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: c.fgMuted }}>
                Pengguna Anda mengakses website dari berbagai perangkat — smartphone saat commute, tablet saat santai, laptop saat kerja. Kami memastikan pengalaman yang optimal di setiap layar, setiap saat, tanpa kompromi.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[['🖥️', 'Desktop & Laptop', 'Resolusi 1024px ke atas'], ['📱', 'Smartphone', 'Dari 320px hingga 428px'], ['📟', 'Tablet', 'iPad, Android Tablet'], ['⌚', 'Semua Layar', 'Fluid & adaptive layout']].map(([icon, label, sub]) => (
                  <div key={label} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: c.bgCard, border: `1px solid ${c.border}` }}>
                    <span className="text-xl">{icon}</span>
                    <div>
                      <div className="text-sm font-semibold" style={{ color: c.fg }}>{label}</div>
                      <div className="text-xs" style={{ color: c.fgMuted }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Devices visual */}
            <div className="flex justify-center relative" style={{ height: 340 }}>
              {/* Laptop */}
              <div className="absolute" style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 300 }}>
                <div className="w-full rounded-xl p-3" style={{ background: c.bgCard, border: `2px solid ${c.border}`, boxShadow: `0 12px 40px ${theme === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.1)'}` }}>
                  <div className="h-2 flex gap-1 mb-2"><span className="w-2 h-2 rounded-full bg-red-400" /><span className="w-2 h-2 rounded-full bg-yellow-400" /><span className="w-2 h-2 rounded-full bg-green-400" /></div>
                  <div className="rounded-lg p-3" style={{ background: c.bgAlt, border: `1px solid ${c.border}` }}>
                    <div className="h-3 rounded-full mb-2" style={{ background: c.primary, opacity: 0.5, width: '55%' }} />
                    <div className="h-2 rounded-full mb-1.5" style={{ background: c.border, width: '90%' }} />
                    <div className="h-2 rounded-full mb-3" style={{ background: c.border, width: '72%' }} />
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map(i => <div key={i} className="h-10 rounded-lg" style={{ background: c.bgCard, border: `1px solid ${c.border}` }} />)}
                    </div>
                  </div>
                </div>
                <div className="h-4 rounded-b-lg" style={{ background: c.bgAlt, border: `1px solid ${c.border}`, borderTop: 'none' }} />
              </div>
              {/* Mobile */}
              <div className="absolute" style={{ right: '8%', top: 0, width: 80 }}>
                <div className="w-full rounded-2xl p-2.5" style={{ background: c.bgCard, border: `2px solid ${c.primary}`, boxShadow: `0 12px 32px ${c.primary}44` }}>
                  <div className="h-1 rounded-full mx-auto mb-2" style={{ background: c.border, width: '35%' }} />
                  <div className="h-2 rounded-full mb-1" style={{ background: c.bgAlt } } />
                  <div className="h-2 rounded-full mb-1" style={{ background: c.bgAlt, opacity: 0.7 }} />
                  <div className="h-2 rounded-full mb-3" style={{ background: c.bgAlt, opacity: 0.4 }} />
                  <div className="h-5 rounded-xl" style={{ background: c.primary }} />
                </div>
              </div>
              {/* Tablet */}
              <div className="absolute" style={{ left: '6%', top: 30, width: 110 }}>
                <div className="w-full rounded-xl p-2.5" style={{ background: c.bgCard, border: `2px solid ${c.border}`, boxShadow: `0 8px 24px ${theme === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.08)'}` }}>
                  <div className="h-2 rounded-full mb-2" style={{ background: c.primary, opacity: 0.4, width: '50%' }} />
                  <div className="grid grid-cols-2 gap-1.5 mb-1.5">
                    <div className="h-8 rounded-lg" style={{ background: c.bgAlt }} />
                    <div className="h-8 rounded-lg" style={{ background: c.bgAlt }} />
                  </div>
                  <div className="h-2 rounded-full" style={{ background: c.primary, width: '45%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: c.bg, padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="text-center mb-16">
            <SectionLabel text="Testimoni" c={c} />
            <SectionHeading c={c}>Kata Mereka yang Pernah<br />Bekerja Bersama Kami</SectionHeading>
          </div>
          <div ref={fadeTestimonials} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="p-8 rounded-2xl" style={{ background: c.bgAlt, border: `1px solid ${c.border}` }}>
                <StarRating n={t.rating} />
                <p className="text-sm leading-relaxed mb-6" style={{ color: c.fgMuted }}>"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0" style={{ background: t.color }}>{t.avatar}</div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: c.fg }}>{t.name}</div>
                    <div className="text-xs" style={{ color: c.fgMuted }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section id="why-us" style={{ background: c.bgAlt, padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="text-center mb-16">
            <SectionLabel text="Kenapa Lana Tech" c={c} />
            <SectionHeading c={c}>Why Choose Lana Tech?</SectionHeading>
            <p className="mt-4 mx-auto" style={{ color: c.fgMuted, maxWidth: 480, fontSize: '1.05rem', lineHeight: 1.7 }}>
              Bukan sekadar vendor — kami adalah mitra digital jangka panjang yang berkomitmen pada kesuksesan bisnis Anda.
            </p>
          </div>
          <div ref={fadeWhyUs} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map(w => (
              <div key={w.title} className="p-7 rounded-2xl transition-all" style={{ background: c.bgCard, border: `1px solid ${c.border}` }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = c.primary; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.transform = 'none' }}>
                <div className="text-3xl mb-4">{w.icon}</div>
                <h3 className="font-bold mb-2 text-base" style={{ color: c.fg }}>{w.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: c.fgMuted }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" style={{ background: c.bg, padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="text-center mb-16">
            <SectionLabel text="Cara Kami Bekerja" c={c} />
            <SectionHeading c={c}>From Idea to Digital Reality.</SectionHeading>
            <p className="mt-4 mx-auto" style={{ color: c.fgMuted, maxWidth: 480, fontSize: '1.05rem', lineHeight: 1.7 }}>
              Proses yang terstruktur, transparan, dan kolaboratif — dari discovery hingga launch dan seterusnya.
            </p>
          </div>
          <div ref={fadeProcess} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS.map((p, i) => (
              <div key={p.step} className="p-7 rounded-2xl relative overflow-hidden" style={{ background: c.bgAlt, border: `1px solid ${c.border}` }}>
                <div className="absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: c.primaryBg, color: c.primary }}>{p.duration}</div>
                <div className="font-extrabold mb-4 text-5xl" style={{ color: c.border, letterSpacing: '-0.05em', lineHeight: 1 }}>{p.step}</div>
                <h3 className="font-bold mb-2 text-base" style={{ color: c.fg }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: c.fgMuted }}>{p.desc}</p>
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke={c.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" style={{ background: c.bgAlt, padding: '100px 24px', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            className="relative rounded-3xl overflow-hidden text-center"
            style={{ background: `linear-gradient(135deg, ${c.primary} 0%, #7C3AED 100%)`, padding: '80px 32px' }}
          >
            {/* Orbs */}
            <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -80, left: -40, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

            <div ref={parallaxCta} style={{ position: 'relative', zIndex: 1, willChange: 'transform' }}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                ✉️ Siap mewujudkan ide Anda
              </div>
              <h2 className="mb-5" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1.1, color: '#fff' }}>
                Have an Idea?<br />Let's Build It Together.
              </h2>
              <p className="mb-10 mx-auto" style={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', maxWidth: 500 }}>
                Diskusikan kebutuhan Anda bersama Lana Tech. Konsultasi pertama <strong style={{ color: '#fff' }}>gratis</strong>, tanpa komitmen. Mari bangun solusi digital yang tepat untuk bisnis Anda.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-10">
                <a href="mailto:hello@lanatech.id" className="inline-block text-sm font-bold px-8 py-3.5 transition-all"
                  style={{ background: '#fff', color: c.primary, borderRadius: 999, textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                  Kirim Email →
                </a>
                <a href="https://wa.me/6281234567890" className="inline-block text-sm font-bold px-8 py-3.5 transition-all"
                  style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', borderRadius: 999, border: '1px solid rgba(255,255,255,0.3)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')} onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}>
                  💬 WhatsApp
                </a>
              </div>
              {/* Contact info row */}
              <div className="flex flex-wrap justify-center gap-8">
                {[['📧', 'hello@lanatech.id'], ['📱', '+62 812-3456-7890'], ['📍', 'Jakarta, Indonesia']].map(([icon, val]) => (
                  <div key={val} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    <span>{icon}</span><span>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: theme === 'dark' ? '#0A0A0F' : '#1F2033', padding: '56px 24px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-white text-sm" style={{ background: `linear-gradient(135deg, ${c.primary} 0%, #7C3AED 100%)` }}>L</div>
                <div>
                  <div className="font-extrabold text-base text-white leading-none" style={{ letterSpacing: '-0.03em' }}>Lana Tech</div>
                  <div className="text-xs leading-none mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Digital Solutions</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 300 }}>
                Turning Ideas Into Digital Reality. Mitra teknologi digital terpercaya untuk bisnis yang ingin tumbuh secara online.
              </p>
              <div className="flex gap-2">
                {['in', 'ig', 'tw'].map(s => (
                  <div key={s} className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>{s}</div>
                ))}
              </div>
            </div>
            {/* Links */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>Layanan</p>
              {['Web Development', 'Mobile-Responsive Web', 'Custom Web App', 'UI/UX Design', 'E-Commerce', 'Web Security'].map(l => (
                <div key={l} className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.45)', cursor: 'pointer' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                  {l}
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>Perusahaan</p>
              {['Tentang Kami', 'Portofolio', 'Proses Kerja', 'Testimoni', 'Kontak', 'Karir'].map(l => (
                <div key={l} className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.45)', cursor: 'pointer' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                  {l}
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24 }} className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>© 2024 Lana Tech. All rights reserved.</p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.2)' }}>Turning Ideas Into Digital Reality.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
