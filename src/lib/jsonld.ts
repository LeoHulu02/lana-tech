import { company, type Messages } from "@/data/site"

import type { Locale } from "@/i18n/routing"

import { getSiteUrl } from "@/lib/site"

export function organizationJsonLd(messages: Messages) {
  const url = getSiteUrl()

  return {
    "@context": "https://schema.org",

    "@type": "Organization",

    name: company.name,

    url,

    email: company.email,

    telephone: company.phone,

    foundingDate: String(company.founded),

    description: messages.metadata.description,

    logo: `${url}/icon.svg`,

    address: {
      "@type": "PostalAddress",

      addressLocality: company.city,

      addressCountry: "ID",
    },
  }
}

export function websiteJsonLd(messages: Messages, locale: Locale) {
  const url = `${getSiteUrl()}${locale === "en" ? "/en" : ""}`

  return {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: company.name,

    url,

    description: messages.metadata.description,

    inLanguage: locale === "id" ? "id-ID" : "en-US",

    publisher: {
      "@type": "Organization",
      name: company.name,
      url: getSiteUrl(),
    },
  }
}

export function faqJsonLd(messages: Messages, locale: Locale) {
  return {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    inLanguage: locale === "id" ? "id-ID" : "en-US",

    mainEntity: messages.faq.items.map(([question, answer]) => ({
      "@type": "Question",

      name: question,

      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }
}
