import { EmotionalPilotHero } from "@/components/emotional-pilot/hero"
import { PilotSocialProof } from "@/components/emotional-pilot/social-proof"
import { PilotProblemSolution } from "@/components/emotional-pilot/problem-solution"
import { PilotFeatures } from "@/components/emotional-pilot/features"
import { PilotPricing } from "@/components/emotional-pilot/pricing"
import { PilotFinalCTA } from "@/components/emotional-pilot/final-cta"
import { PilotFooter } from "@/components/emotional-pilot/footer"

export default function EmotionalPilotPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <EmotionalPilotHero />
      <PilotSocialProof />
      <PilotProblemSolution />
      <PilotFeatures />
      <PilotPricing />
      <PilotFinalCTA />
      <PilotFooter />
    </main>
  )
}
