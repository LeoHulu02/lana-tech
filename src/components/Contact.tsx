"use client"

import { useState, type FormEvent } from "react"

import { useTranslations } from "next-intl"

import { IconMail, IconPhone, IconPin, IconWhatsApp } from "@/components/icons"

import { company } from "@/data/site"

export default function Contact() {
  const t = useTranslations("contact")

  const common = useTranslations("common")

  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const [sent, setSent] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(t("mailSubject", { name: form.name }))

    const body = encodeURIComponent(
      `${t("mailName")}: ${form.name}\n${t("email")}: ${form.email}\n\n${form.message}`,
    )

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`

    setSent(true)
  }

  return (
    <section
      id="contact"
      style={{ background: "var(--bg)", padding: "112px 0 88px" }}
    >
      <div className="section-wrap">
        <div
          className="rounded-3xl overflow-hidden p-8 md:p-12 grid lg:grid-cols-2 gap-12 items-start"
          style={{
            background: "var(--bg-alt)",

            border: "1px solid var(--border)",
          }}
        >
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--primary)" }}
            >
              {t("eyebrow")}
            </p>
            <h2
              className="mb-4"
              style={{
                fontSize: "clamp(1.9rem, 3.4vw, 2.8rem)",

                fontWeight: 800,

                letterSpacing: "-0.04em",

                lineHeight: 1.15,

                color: "var(--fg)",
              }}
            >
              {t("title")}
            </h2>
            <p
              className="mb-8"
              style={{ color: "var(--fg-muted)", lineHeight: 1.75 }}
            >
              {t("lead")}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-sm no-underline"
                style={{ color: "var(--fg)" }}
              >
                <IconMail size={16} /> {company.email}
              </a>
              <a
                href={company.whatsapp}
                className="flex items-center gap-2 text-sm no-underline"
                style={{ color: "var(--fg)" }}
              >
                <IconPhone size={16} /> {company.phone}
              </a>
              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: "var(--fg-muted)" }}
              >
                <IconPin size={16} /> {common("location")}
              </div>
            </div>
          </div>

          <form onSubmit={submit}>
            {sent ? (
              <div
                className="rounded-2xl p-8 text-center"
                style={{
                  background: "var(--bg-card)",

                  border: "1px solid var(--border)",
                }}
              >
                <p className="font-bold mb-2" style={{ color: "var(--fg)" }}>
                  {t("thanks", { name: form.name })}
                </p>
                <p
                  className="text-sm mb-5"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {t("emailReady")}
                </p>
                <a
                  href={company.whatsapp}
                  className="btn-primary inline-flex items-center gap-2 text-sm font-semibold px-5 py-3"
                >
                  <IconWhatsApp size={16} /> WhatsApp
                </a>
              </div>
            ) : (
              <>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold mb-2"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {t("name")}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  autoComplete="name"
                  className="contact-field mb-4"
                  placeholder={t("namePlaceholder")}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold mb-2"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {t("email")}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  className="contact-field mb-4"
                  placeholder={t("emailPlaceholder")}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold mb-2"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {t("message")}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  className="contact-field mb-5 resize-none"
                  placeholder={t("messagePlaceholder")}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="btn-primary text-sm font-semibold px-6 py-3"
                  >
                    {t("send")}
                  </button>
                  <a
                    href={company.whatsapp}
                    className="btn-ghost inline-flex items-center gap-2 text-sm font-semibold px-6 py-3"
                  >
                    <IconWhatsApp size={16} /> WhatsApp
                  </a>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
