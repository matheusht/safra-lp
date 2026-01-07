import { PilotHero } from "@/components/pilot/hero"
import { PilotProblems } from "@/components/pilot/problems"
import { PilotSolution } from "@/components/pilot/solution"
import { PilotSocialProof } from "@/components/pilot/social-proof"
import { PilotCTA } from "@/components/pilot/cta-section"
import { StickyWhatsApp } from "@/components/pilot/sticky-whatsapp"
import { Metadata } from "next"
import { HeaderCounter } from "@/components/pilot/header-counter"

export const metadata: Metadata = {
  title: 'Safra Fácil Pilot - Segurança e Rastreabilidade de Voo',
  description: 'O único sistema que monitora vento em altitude e gera provas de voo para pilotos de drone agrícola.',
}

export default function PilotPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-green-100">
      <HeaderCounter />
      <PilotHero />
      <PilotProblems />
      <PilotSolution />
      <PilotSocialProof />
      <PilotCTA />
      
      <StickyWhatsApp />
      
      {/* Simple Footer for Pilot Page */}
      <footer className="py-8 bg-slate-50 border-t border-slate-200 text-center text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} Safra Fácil. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}
