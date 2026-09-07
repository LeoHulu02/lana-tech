import { company, faqs, siteDescription } from "@/data/site"
import { getSiteUrl } from "@/lib/site"

export function organizationJsonLd() {
  const url = getSiteUrl()
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url,
    email: company.email,
    telephone: company.phone,
    foundingDate: String(company.founded),
    description: siteDescription,
    logo: `${url}/icon.svg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressCountry: "ID",
    },
  }
}

export function websiteJsonLd() {
  const url = getSiteUrl()
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url,
    description: siteDescription,
    inLanguage: "id-ID",
    publisher: {
      "@type": "Organization",
      name: company.name,
      url,
    },
  }
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
