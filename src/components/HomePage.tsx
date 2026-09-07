"use client";

import { useEffect, useState } from "react";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Proof from "@/components/Proof";
import WhyUs from "@/components/WhyUs";
import Work from "@/components/Work";
import { navLinks } from "@/data/site";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div id="main" style={{ background: "var(--bg)", color: "var(--fg)" }}>
      <Navbar activeSection={activeSection} />
      <Hero />
      <Proof />
      <Capabilities />
      <Work />
      <Process />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
