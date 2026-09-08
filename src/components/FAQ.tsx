"use client"

import { motion, useReducedMotion } from "framer-motion"

import { IconChevronDown, IconShield } from "@/components/icons"

import { useSiteMessages } from "@/hooks/useSiteMessages"

export default function FAQ() {
  const copy = useSiteMessages().faq

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
          <p className="faq-eyebrow">{copy.eyebrow}</p>
          <h2 className="faq-heading">{copy.title}</h2>
          <p className="faq-lead">{copy.lead}</p>

          <div className="faq-ownership">
            <span className="faq-ownership-icon" aria-hidden="true">
              <IconShield size={21} />
            </span>
            <div>
              <p className="faq-ownership-title">{copy.ownershipTitle}</p>
              <p className="faq-ownership-copy">{copy.ownershipCopy}</p>
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
          {copy.items.map(([question, answer], index) => (
            <details
              key={question}
              className={`faq-item${index === 3 ? " faq-item-featured" : ""}`}
              open={index === 0}
            >
              <summary className="faq-summary">
                <span className="faq-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="faq-question">{question}</span>
                <span className="faq-chevron" aria-hidden="true">
                  <IconChevronDown />
                </span>
              </summary>
              <div className="faq-answer">
                <p>{answer}</p>
              </div>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
