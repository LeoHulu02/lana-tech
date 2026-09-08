"use client"

import { useEffect, useState } from "react"

export type Theme = "light" | "dark"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const current = document.documentElement.dataset.theme

    if (current === "dark" || current === "light") setTheme(current)
  }, [])

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light"

    setTheme(next)

    document.documentElement.dataset.theme = next

    localStorage.setItem("lana-theme", next)
  }

  return { theme, toggleTheme }
}
