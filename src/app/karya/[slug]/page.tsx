import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import WorkDetail from "@/components/WorkDetail"
import { company, getWorkBySlug, getWorkSlugs, work } from "@/data/site"
import { getSiteUrl } from "@/lib/site"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const item = getWorkBySlug(slug)
  if (!item) return { title: company.name }

  const siteUrl = getSiteUrl()
  const path = `/karya/${item.slug}`

  return {
    title: item.title,
    description: item.summary,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${item.title} — ${company.name}`,
      description: item.summary,
      type: "article",
      url: `${siteUrl}${path}`,
      images: [
        {
          url: item.img,
          alt: item.imgAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title} — ${company.name}`,
      description: item.summary,
      images: [item.img],
    },
  }
}

export default async function KaryaDetailPage({ params }: PageProps) {
  const { slug } = await params
  const item = getWorkBySlug(slug)
  if (!item) notFound()

  return (
    <div
      style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100%" }}
    >
      <Navbar home={false} activeSection="portfolio" />
      <WorkDetail
        item={item}
        others={work.filter((w) => w.slug !== item.slug)}
      />
      <Footer home={false} />
    </div>
  )
}
