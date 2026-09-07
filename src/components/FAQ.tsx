"use client"

import { motion, useReducedMotion } from "framer-motion"
import { IconChevronDown, IconShield } from "@/components/icons"
import { faqs } from "@/data/site"

export default function FAQ() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="faq" className="faq-section">
      <div className="section-wrap faq-layout">
        <motion.div
          className="faq-intro"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <p className="faq-eyebrow">Sebelum kita mulai</p>
          <h2 className="faq-heading">Hal yang seharusnya jelas sejak awal.</h2>
          <p className="faq-lead">
            Tidak ada akses yang ditahan, biaya yang disembunyikan, atau kode
            yang sengaja dibuat bergantung pada kami.
          </p>

          <div className="faq-ownership">
            <span className="faq-ownership-icon" aria-hidden="true">
              <IconShield size={21} />
            </span>
            <div>
              <p className="faq-ownership-title">
                Kode, akun, dan akses tetap milikmu.
              </p>
              <p className="faq-ownership-copy">
                Kami membangun produk untuk diserahkan, bukan untuk mengunci
                klien di dalam layanan kami.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="faq-list"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.08 }}
        >
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className={`faq-item${faq.featured ? " faq-item-featured" : ""}`}
              open={index === 0}
            >
              <summary className="faq-summary">
                <span className="faq-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="faq-question">{faq.question}</span>
                <span className="faq-chevron" aria-hidden="true">
                  <IconChevronDown />
                </span>
              </summary>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
