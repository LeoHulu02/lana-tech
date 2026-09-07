"use client"

import { motion } from "framer-motion"
import { IconShield } from "@/components/icons"
import { company } from "@/data/site"
import { useHeroScroll } from "@/hooks/useScrollLayers"

const activity = [
  { name: "Pesanan #LN-2841", meta: "Jakarta Selatan", value: "+ Rp8,4 jt" },
  { name: "Stok diperbarui", meta: "Gudang Utama", value: "128 SKU" },
  { name: "Invoice dibayar", meta: "Nexora Bandung", value: "+ Rp3,2 jt" },
]

function DashboardVisual() {
  return (
    <div
      className="hero-dashboard"
      role="img"
      aria-label="Contoh dashboard operasional yang dibuat Lana Tech"
    >
      <div className="hero-dashboard-bar">
        <div className="hero-dashboard-brand">
          <span className="hero-dashboard-logo">L</span>
          <span>Lana Ops</span>
        </div>
        <div className="hero-dashboard-actions">
          <span className="hero-dashboard-search">Cari data...</span>
          <span className="hero-dashboard-avatar">NA</span>
        </div>
      </div>

      <div className="hero-dashboard-body">
        <aside className="hero-dashboard-sidebar" aria-hidden="true">
          {["Overview", "Pesanan", "Inventory", "Pelanggan", "Laporan"].map(
            (item, index) => (
              <span
                key={item}
                className={`hero-dashboard-nav${
                  index === 0 ? " is-current" : ""
                }`}
              >
                <i />
                {item}
              </span>
            ),
          )}
          <div className="hero-sidebar-help">
            <span>Butuh bantuan?</span>
            <strong>Hubungi support</strong>
          </div>
        </aside>

        <div className="hero-dashboard-main">
          <div className="hero-dashboard-heading">
            <div>
              <span className="hero-dashboard-kicker">Senin, 8 September</span>
              <strong>Selamat pagi, Nara.</strong>
            </div>
            <span className="hero-dashboard-download">Unduh laporan</span>
          </div>

          <div className="hero-metrics">
            {[
              ["Pendapatan", "Rp84,2 jt", "+18.4%"],
              ["Pesanan aktif", "284", "+12 hari ini"],
              ["Stok tersedia", "1.284", "98% sehat"],
            ].map(([label, value, trend]) => (
              <div className="hero-metric" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
                <small>{trend}</small>
              </div>
            ))}
          </div>

          <div className="hero-dashboard-grid">
            <div className="hero-chart-card">
              <div className="hero-card-heading">
                <div>
                  <span>Performa penjualan</span>
                  <strong>Rp428,6 jt</strong>
                </div>
                <small>30 hari</small>
              </div>
              <div className="hero-chart" aria-hidden="true">
                <span className="hero-chart-grid grid-one" />
                <span className="hero-chart-grid grid-two" />
                <span className="hero-chart-grid grid-three" />
                <svg viewBox="0 0 430 150" preserveAspectRatio="none">
                  <defs>
                    <linearGradient
                      id="heroChartFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="currentColor"
                        stopOpacity="0.22"
                      />
                      <stop
                        offset="100%"
                        stopColor="currentColor"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    className="hero-chart-area"
                    d="M0,130 C40,120 62,94 102,101 C145,109 160,62 205,74 C250,86 268,31 310,48 C350,64 382,17 430,22 L430,150 L0,150 Z"
                  />
                  <path
                    className="hero-chart-line"
                    d="M0,130 C40,120 62,94 102,101 C145,109 160,62 205,74 C250,86 268,31 310,48 C350,64 382,17 430,22"
                  />
                  <circle cx="310" cy="48" r="4" className="hero-chart-point" />
                </svg>
              </div>
              <div className="hero-chart-labels">
                <span>10 Agu</span>
                <span>20 Agu</span>
                <span>30 Agu</span>
                <span>8 Sep</span>
              </div>
            </div>

            <div className="hero-activity-card">
              <div className="hero-card-heading">
                <span>Aktivitas terbaru</span>
                <small>Live</small>
              </div>
              <div className="hero-activity-list">
                {activity.map((item, index) => (
                  <div className="hero-activity-row" key={item.name}>
                    <span className={`hero-activity-icon icon-${index + 1}`} />
                    <div>
                      <strong>{item.name}</strong>
                      <small>{item.meta}</small>
                    </div>
                    <em>{item.value}</em>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileCompanion() {
  return (
    <div className="hero-mobile-card" aria-hidden="true">
      <div className="hero-mobile-handle" />
      <div className="hero-mobile-label">
        <span>Saldo tersedia</span>
        <i>•••</i>
      </div>
      <strong>Rp24.840.000</strong>
      <div className="hero-mobile-progress">
        <span />
      </div>
      <div className="hero-mobile-meta">
        <span>Target bulanan</span>
        <strong>78%</strong>
      </div>
    </div>
  )
}

export default function Hero() {
  const { ref, backdropY, dashboardY, phoneY, copyY, orbitRotate, fade } =
    useHeroScroll()

  return (
    <section ref={ref} className="hero-premium">
      <motion.div className="hero-ambient" style={{ y: backdropY }} />
      <motion.div
        className="hero-orbit hero-orbit-one"
        aria-hidden="true"
        style={{ rotate: orbitRotate }}
      />
      <motion.div
        className="hero-orbit hero-orbit-two"
        aria-hidden="true"
        style={{ rotate: orbitRotate }}
      />

      <div className="section-wrap hero-premium-layout">
        <motion.div
          className="hero-premium-copy"
          style={{ y: copyY, opacity: fade }}
        >
          <p className="hero-eyebrow">
            <span />
            Product engineering studio · {company.city}
          </p>
          <h1 className="hero-premium-title">
            Produk digital yang
            <span> siap bekerja.</span>
          </h1>
          <p className="hero-premium-lead">
            Kami merancang dan membangun website, aplikasi web, dan sistem
            operasional yang dipakai tim sungguhan—dari brief sampai live.
          </p>
          <div className="hero-premium-actions">
            <a href="#portfolio" className="btn-primary hero-cta">
              Lihat karya
              <span aria-hidden="true">↗</span>
            </a>
            <a href="#contact" className="btn-ghost hero-cta">
              Diskusikan project
            </a>
          </div>
          <div className="hero-trust">
            <span>
              <IconShield size={16} />
              Source code milik klien
            </span>
            <span>
              <i />
              30 hari pendampingan
            </span>
          </div>
        </motion.div>

        <div className="hero-visual-stage">
          <motion.div
            className="hero-dashboard-layer"
            style={{ y: dashboardY }}
          >
            <DashboardVisual />
          </motion.div>
          <motion.div className="hero-mobile-layer" style={{ y: phoneY }}>
            <MobileCompanion />
          </motion.div>
          <motion.div className="hero-live-badge" style={{ y: phoneY }}>
            <span />
            System operational
            <strong>99.9%</strong>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
