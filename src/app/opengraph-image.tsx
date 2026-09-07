import { ImageResponse } from "next/og"
import { company } from "@/data/site"

export const alt = "Lana Tech — Studio produk digital, Jakarta"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #111827 0%, #1e1b4b 58%, #4f46e5 140%)",
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "#4F46E5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
            }}
          >
            L
          </div>
          <div style={{ display: "flex" }}>{company.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              maxWidth: 900,
            }}
          >
            Produk digital yang siap bekerja.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 760,
            }}
          >
            Website, aplikasi web, dan sistem operasional — dari brief sampai live.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "rgba(255,255,255,0.58)" }}>
          {`Studio product engineering · ${company.city}`}
        </div>
      </div>
    ),
    { ...size },
  )
}
