"use client"

import { useMessages } from "next-intl"

import type { Messages } from "@/data/site"

export function useSiteMessages() {
  return useMessages() as unknown as Messages
}
