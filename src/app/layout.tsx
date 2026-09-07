import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { Inter, Manrope } from "next/font/google"
import Analytics from "@/components/Analytics"
import JsonLd from "@/components/JsonLd"
import { company, siteDescription, siteKeywords } from "@/data/site"
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld"
import { getSiteUrl } from "@/lib/site"
import "./globals.css"

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

const siteUrl = getSiteUrl()
const title = `${company.name} — Studio produk digital, Jakarta`
const gsc = process.env.NEXT_PUBLIC_GSC_VERIFICATION?.trim()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${company.name}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: company.name, url: siteUrl }],
  creator: company.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description:
      "Website, aplikasi web, dan sistem custom — dari brief sampai produk live.",
    locale: "id_ID",
    type: "website",
    url: siteUrl,
    siteName: company.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Website, aplikasi web, dan sistem custom — dari brief sampai produk live.",
    images: ["/opengraph-image"],
  },
  ...(gsc ? { verification: { google: gsc } } : {}),
}

export const viewport: Viewport = {
  themeColor: "#4F46E5",
}

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("lana-theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = "light";
  }
})();
`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.className} ${manrope.variable}`}>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <a href="#main" className="skip-link">
          Lewati ke konten
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
