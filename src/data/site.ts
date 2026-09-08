import idMessages from "../../messages/id.json"

export type Messages = typeof idMessages

export type CategoryKey = "webApp" | "internal" | "ecommerce" | "operations"

export const company = {
  name: "Lana Tech",

  founded: 2022,

  city: "Jakarta Selatan",

  email: "hello@lanatech.id",

  phone: "+62 812-3456-7890",

  whatsapp: "https://wa.me/6281234567890",
}

export const siteUrl = "https://lanatech.id"

export const navIds = [
  "about",
  "portfolio",
  "process",
  "faq",
  "contact",
] as const

export const clients = [
  "Nexora",
  "BrightWork",
  "Vela",
  "Korindo",
  "Paxia",
  "Aruna Pay",
]

export const stack = [
  "Next.js",
  "React",
  "Laravel",
  "Node.js",
  "PostgreSQL",
  "Tailwind",
  "Docker",
  "Midtrans",
]

const workAssets = [
  {
    featured: true,

    slug: "nexora-control",

    title: "Nexora Control",

    client: "Nexora Distribusi",

    categoryKey: "webApp",

    year: "2025",

    tags: ["Next.js", "Node.js", "PostgreSQL"],

    color: "#4F46E5",

    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format",

    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format",

      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format",
    ],
  },

  {
    featured: false,

    slug: "brightwork-people",

    title: "BrightWork People",

    client: "BrightWork",

    categoryKey: "internal",

    year: "2025",

    tags: ["Next.js", "Laravel", "MySQL"],

    color: "#0EA5E9",

    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format",

    gallery: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format",
    ],
  },

  {
    featured: false,

    slug: "vela-atelier",

    title: "Vela Atelier",

    client: "Vela Studio",

    categoryKey: "ecommerce",

    year: "2024",

    tags: ["Next.js", "Midtrans", "Inventory"],

    color: "#EC4899",

    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format",

    gallery: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format",
    ],
  },

  {
    featured: false,

    slug: "paxia-table",

    title: "Paxia Table",

    client: "Paxia Group",

    categoryKey: "operations",

    year: "2024",

    tags: ["React", "Socket", "Express"],

    color: "#F59E0B",

    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format",

    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format",
    ],
  },
] as const

export type WorkItem = {
  featured: boolean

  slug: string

  title: string

  client: string

  categoryKey: CategoryKey

  category: string

  industry: string

  year: string

  summary: string

  challenge: string

  solution: string

  result: string

  body: string

  scope: string[]

  tags: readonly string[]

  color: string

  img: string

  imgAlt: string

  gallery: {
    src: string
    alt: string
  }[]
}

export function getWork(messages: Messages): WorkItem[] {
  return workAssets.map((asset) => {
    const copy =
      messages.work.items[(asset.slug as keyof typeof messages.work.items)]

    return {
      ...asset,

      categoryKey: asset.categoryKey as CategoryKey,

      category: messages.work.categories[asset.categoryKey],

      ...copy,

      scope: [...copy.scope],

      gallery: asset.gallery.map((src, index) => ({
        src,

        alt: copy.galleryAlt[index],
      })),
    }
  })
}

export function getWorkBySlug(messages: Messages, slug: string) {
  return getWork(messages).find((item) => item.slug === slug)
}

export function getWorkSlugs() {
  return workAssets.map((item) => item.slug)
}
