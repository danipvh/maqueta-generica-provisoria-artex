import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { Services } from "@/components/services"
import { Catalog } from "@/components/catalog"
import { Process } from "@/components/process"
import { About } from "@/components/about"
import { QuoteSection } from "@/components/quote-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Catalog />
        <Process />
        <About />
        <QuoteSection />
      </main>
      <SiteFooter />
    </>
  )
}
