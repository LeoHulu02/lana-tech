"use client"

import { motion } from "framer-motion"

import { IconShield } from "@/components/icons"

import { useSiteMessages } from "@/hooks/useSiteMessages"

import { useHeroScroll } from "@/hooks/useScrollLayers"

function DashboardVisual() {
  const copy = useSiteMessages().hero

  return (
    <div className="hero-dashboard" role="img" aria-label={copy.dashboardAria}>
      <div className="hero-dashboard-bar">
        <div className="hero-dashboard-brand">
          <span className="hero-dashboard-logo">L</span>
          <span>Lana Ops</span>
        </div>
        <div className="hero-dashboard-actions">
          <span className="hero-dashboard-search">{copy.search}</span>
          <span className="hero-dashboard-avatar">NA</span>
        </div>
      </div>

      <div className="hero-dashboard-body">
        <aside className="hero-dashboard-sidebar" aria-hidden="true">
          {copy.sidebar.map((item, index) => (
            <span
              key={item}
              className={`hero-dashboard-nav${
                index === 0 ? " is-current" : ""
              }`}
            >
              <i />
              {item}
            </span>
          ))}
          <div className="hero-sidebar-help">
            <span>{copy.needHelp}</span>
            <strong>{copy.contactSupport}</strong>
          </div>
        </aside>

        <div className="hero-dashboard-main">
          <div className="hero-dashboard-heading">
            <div>
              <span className="hero-dashboard-kicker">{copy.date}</span>
              <strong>{copy.greeting}</strong>
            </div>
            <span className="hero-dashboard-download">{copy.download}</span>
          </div>

          <div className="hero-metrics">
            {copy.metrics.map(([label, value, trend]) => (
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
                  <span>{copy.salesPerformance}</span>
                  <strong>{copy.salesTotal}</strong>
                </div>
                <small>{copy.days}</small>
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
                {copy.chartLabels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </div>

            <div className="hero-activity-card">
              <div className="hero-card-heading">
                <span>{copy.latestActivity}</span>
                <small>{copy.live}</small>
              </div>
              <div className="hero-activity-list">
                {copy.activity.map(([name, meta, value], index) => (
                  <div className="hero-activity-row" key={name}>
                    <span className={`hero-activity-icon icon-${index + 1}`} />
                    <div>
                      <strong>{name}</strong>
                      <small>{meta}</small>
                    </div>
                    <em>{value}</em>
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
  const copy = useSiteMessages().hero

  return (
    <div className="hero-mobile-card" aria-hidden="true">
      <div className="hero-mobile-handle" />
      <div className="hero-mobile-label">
        <span>{copy.availableBalance}</span>
        <i>•••</i>
      </div>
      <strong>{copy.balance}</strong>
      <div className="hero-mobile-progress">
        <span />
      </div>
      <div className="hero-mobile-meta">
        <span>{copy.monthlyTarget}</span>
        <strong>78%</strong>
      </div>
    </div>
  )
}

export default function Hero() {
  const copy = useSiteMessages().hero

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
            {copy.eyebrow}
          </p>
          <h1 className="hero-premium-title">
            {copy.title}
            <span>{copy.titleAccent}</span>
          </h1>
          <p className="hero-premium-lead">{copy.lead}</p>
          <div className="hero-premium-actions">
            <a href="#portfolio" className="btn-primary hero-cta">
              {copy.viewWork}
              <span aria-hidden="true">↗</span>
            </a>
            <a href="#contact" className="btn-ghost hero-cta">
              {copy.discuss}
            </a>
          </div>
          <div className="hero-trust">
            <span>
              <IconShield size={16} />
              {copy.ownership}
            </span>
            <span>
              <i />
              {copy.support}
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
            {copy.operationalSystem}
            <strong>99.9%</strong>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
