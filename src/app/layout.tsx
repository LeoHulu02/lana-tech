import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lana Tech — Studio produk digital, Jakarta",
  description:
    "Lana Tech merancang dan mengembangkan website, aplikasi web, dan sistem operasional yang siap dipakai tim setiap hari.",
  openGraph: {
    title: "Lana Tech — Studio produk digital, Jakarta",
    description:
      "Website, aplikasi web, dan sistem custom — dari brief sampai produk live.",
    locale: "id_ID",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#4F46E5",
};

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
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={inter.className}>
        <a href="#main" className="skip-link">
          Lewati ke konten
        </a>
        {children}
      </body>
    </html>
  );
}
