import type { MetadataRoute } from "next"

import { getWorkSlugs } from "@/data/site"

import { getPathname } from "@/i18n/navigation"

import { getSiteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()

  const now = new Date()

  const homeLanguages = {
    id: siteUrl,
    en: `${siteUrl}/en`,
    "x-default": siteUrl,
  }

  const homes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,

      lastModified: now,

      changeFrequency: "weekly",

      priority: 1,

      alternates: { languages: homeLanguages },
    },

    {
      url: `${siteUrl}/en`,

      lastModified: now,

      changeFrequency: "weekly",

      priority: 1,

      alternates: { languages: homeLanguages },
    },
  ]

  const work = getWorkSlugs().flatMap((slug) => {
    const href = { pathname: "/karya/[slug]" as const, params: { slug } }

    const id = `${siteUrl}${getPathname({ locale: "id", href })}`

    const en = `${siteUrl}${getPathname({ locale: "en", href })}`

    const languages = { id, en, "x-default": id }

    return [id, en].map((url) => ({
      url,

      lastModified: now,

      changeFrequency: "monthly" as const,

      priority: 0.7,

      alternates: { languages },
    }))
  })

  return [...homes, ...work]
}
