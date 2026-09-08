import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["id", "en"],

  defaultLocale: "id",

  localePrefix: "as-needed",

  pathnames: {
    "/": "/",

    "/karya/[slug]": {
      id: "/karya/[slug]",

      en: "/work/[slug]",
    },
  },
})

export type Locale = typeof routing.locales[number]
