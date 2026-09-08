import type { NextConfig } from "next"

import createNextIntlPlugin from "next-intl/plugin"

import path from "node:path"

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts")

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(process.cwd()),

  images: {
    formats: ["image/avif", "image/webp"],

    deviceSizes: [390, 640, 768, 1024, 1280, 1600],

    imageSizes: [96, 160, 256, 384],

    minimumCacheTTL: 60 * 60 * 24 * 7,

    remotePatterns: [
      {
        protocol: "https",

        hostname: "images.unsplash.com",
      },
    ],
  },
}

export default withNextIntl(nextConfig)
