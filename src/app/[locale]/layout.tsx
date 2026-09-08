import type { Metadata, Viewport } from "next"

import type { ReactNode } from "react"

import { Inter, Manrope } from "next/font/google"

import { hasLocale, NextIntlClientProvider } from "next-intl"

import { getMessages } from "next-intl/server"

import { notFound } from "next/navigation"

import Analytics from "@/components/Analytics"

import JsonLd from "@/components/JsonLd"

import { company, type Messages } from "@/data/site"

import { routing, type Locale } from "@/i18n/routing"

import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld"

import { getSiteUrl } from "@/lib/site"

import "../globals.css"

const inter = Inter({
  subsets: ["latin"],

  weight: ["400", "500", "600", "700", "800", "900"],

  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],

  weight: ["500", "600", "700", "800"],

  display: "swap",

  variable: "--font-display",
})

const themeScript = `(function(){try{var stored=localStorage.getItem("lana-theme");var theme=stored==="light"||stored==="dark"?stored:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=theme}catch(e){document.documentElement.dataset.theme="light"}})();`

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) return {}

  const messages = (await getMessages({ locale })) as unknown as Messages

  const siteUrl = getSiteUrl()

  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`

  const title = messages.metadata.title

  const gsc = process.env.NEXT_PUBLIC_GSC_VERIFICATION?.trim()

  return {
    metadataBase: new URL(siteUrl),

    title: { default: title, template: `%s — ${company.name}` },

    description: messages.metadata.description,

    keywords: messages.metadata.keywords.split(", "),

    authors: [{ name: company.name, url: siteUrl }],

    creator: company.name,

    alternates: {
      canonical: prefix || "/",

      languages: { id: "/", en: "/en", "x-default": "/" },
    },

    robots: { index: true, follow: true },

    openGraph: {
      title,

      description: messages.metadata.socialDescription,

      locale: locale === "id" ? "id_ID" : "en_US",

      alternateLocale: locale === "id" ? ["en_US"] : ["id_ID"],

      type: "website",

      url: `${siteUrl}${prefix}`,

      siteName: company.name,

      images: [
        {
          url: `${prefix}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description: messages.metadata.socialDescription,

      images: [`${prefix}/opengraph-image`],
    },

    ...(gsc ? { verification: { google: gsc } } : {}),
  }
}

export const viewport: Viewport = { themeColor: "#4F46E5" }

export default async function LocaleLayout({
  children,

  params,
}: Readonly<{
  children: ReactNode

  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) notFound()

  const messages = (await getMessages({ locale })) as unknown as Messages

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.className} ${manrope.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <JsonLd data={organizationJsonLd(messages)} />
          <JsonLd data={websiteJsonLd(messages, locale as Locale)} />
          <a href="#main" className="skip-link">
            {messages.common.skipToContent}
          </a>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
