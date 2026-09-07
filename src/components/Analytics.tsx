import Script from "next/script"

function getGaId() {
  const id = process.env.NEXT_PUBLIC_GA_ID?.trim()
  return id && /^G-[A-Z0-9]+$/i.test(id) ? id : ""
}

export default function Analytics() {
  const gaId = getGaId()
  if (!gaId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )
}
