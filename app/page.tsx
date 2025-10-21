import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemsSection } from "@/components/problems-section"
import { SolutionSection } from "@/components/solution-section"
import { BenefitsSection } from "@/components/benefits-section"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { DemoSection } from "@/components/demo-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <SolutionSection />
        <BenefitsSection />
        <FeaturesSection />
        <PricingSection />
        <DemoSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
