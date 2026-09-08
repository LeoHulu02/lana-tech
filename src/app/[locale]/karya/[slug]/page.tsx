import type { Metadata } from "next"

import { getMessages } from "next-intl/server"

import { notFound } from "next/navigation"

import Footer from "@/components/Footer"

import JsonLd from "@/components/JsonLd"

import Navbar from "@/components/Navbar"

import WorkDetail from "@/components/WorkDetail"

import {
  company,
  getWork,
  getWorkBySlug,
  getWorkSlugs,
  type Messages,
} from "@/data/site"

import { getPathname } from "@/i18n/navigation"

import { routing, type Locale } from "@/i18n/routing"

import { getSiteUrl } from "@/lib/site"

type PageProps = {
  params: Promise<{
    locale: Locale
    slug: string
  }>
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getWorkSlugs().map((slug) => ({ locale, slug })),
  )
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params

  const messages = (await getMessages({ locale })) as unknown as Messages

  const item = getWorkBySlug(messages, slug)

  if (!item) return { title: company.name }

  const href = { pathname: "/karya/[slug]" as const, params: { slug } }

  const canonical = getPathname({ locale, href })

  const idPath = getPathname({ locale: "id", href })

  const enPath = getPathname({ locale: "en", href })

  return {
    title: item.title,

    description: item.summary,

    alternates: {
      canonical,

      languages: { id: idPath, en: enPath, "x-default": idPath },
    },

    openGraph: {
      title: `${item.title} — ${company.name}`,

      description: item.summary,

      locale: locale === "id" ? "id_ID" : "en_US",

      type: "article",

      url: `${getSiteUrl()}${canonical}`,

      images: [{ url: item.img, alt: item.imgAlt }],
    },

    twitter: {
      card: "summary_large_image",

      title: `${item.title} — ${company.name}`,

      description: item.summary,

      images: [item.img],
    },
  }
}

export default async function WorkPage({ params }: PageProps) {
  const { locale, slug } = await params

  const messages = (await getMessages({ locale })) as unknown as Messages

  const item = getWorkBySlug(messages, slug)

  if (!item) notFound()

  const url = `${getSiteUrl()}${getPathname({
    locale,

    href: { pathname: "/karya/[slug]", params: { slug } },
  })}`

  return (
    <div
      style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100%" }}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",

          "@type": "CreativeWork",

          name: item.title,

          description: item.summary,

          image: item.img,

          url,

          inLanguage: locale === "id" ? "id-ID" : "en-US",

          creator: { "@type": "Organization", name: company.name },
        }}
      />
      <Navbar home={false} activeSection="portfolio" />
      <WorkDetail
        item={item}
        others={getWork(messages).filter((work) => work.slug !== item.slug)}
      />
      <Footer home={false} />
    </div>
  )
}
