import HomePage from "@/components/HomePage"
import JsonLd from "@/components/JsonLd"
import { faqJsonLd } from "@/lib/jsonld"

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <HomePage />
    </>
  )
}
