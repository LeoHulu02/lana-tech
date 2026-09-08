"use client"

import { useEffect, useState } from "react"

import Capabilities from "@/components/Capabilities"

import Contact from "@/components/Contact"

import FAQ from "@/components/FAQ"

import Footer from "@/components/Footer"

import Hero from "@/components/Hero"

import Navbar from "@/components/Navbar"

import Process from "@/components/Process"

import Proof from "@/components/Proof"

import WhyUs from "@/components/WhyUs"

import Work from "@/components/Work"

import { navIds } from "@/data/site"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries

          .filter((entry) => entry.isIntersecting)

          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) setActiveSection(visible.target.id)
      },

      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    )

    navIds.forEach((id) => {
      const el = document.getElementById(id)

      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ background: "var(--bg)", color: "var(--fg)" }}>
      <Navbar activeSection={activeSection} />
      <main id="main">
        <Hero />
        <Proof />
        <Capabilities />
        <Work />
        <Process />
        <WhyUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
