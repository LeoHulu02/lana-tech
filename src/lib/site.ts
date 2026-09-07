import { siteUrl as defaultSiteUrl } from "@/data/site"

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "")
  return fromEnv || defaultSiteUrl
}
