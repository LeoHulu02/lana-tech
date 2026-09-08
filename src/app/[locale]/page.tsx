import { getMessages } from "next-intl/server"

import HomePage from "@/components/HomePage"

import JsonLd from "@/components/JsonLd"

import type { Messages } from "@/data/site"

import type { Locale } from "@/i18n/routing"

import { faqJsonLd } from "@/lib/jsonld"

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ locale: Locale }>
}>) {
  const { locale } = await params

  const messages = (await getMessages({ locale })) as unknown as Messages

  return (
    <>
      <JsonLd data={faqJsonLd(messages, locale)} />
      <HomePage />
    </>
  )
}
