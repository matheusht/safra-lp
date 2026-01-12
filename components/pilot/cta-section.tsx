"use client"

import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export function PilotCTA() {
  return (
    <section id="provar" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 relative overflow-hidden text-white">
        
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Quantos contratos você <span className="text-red-500 font-black bg-red-500/10 px-2 rounded">PERDEU</span> <br/> por medo do vento?
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          Não deixe a dúvida paralisar sua operação. Tenha a segurança de um cockpit de avião no seu celular.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/agendar" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-12 py-5 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.4)] border border-green-400/50 flex items-center transition-all hover:scale-105 active:scale-95"
              >
                Quero Testar Grátis por 14 Dias
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
        </div>
        <p className="mt-4 text-slate-400 text-sm">Sem cartão de crédito. Cancele quando quiser.</p>
      </div>
    </section>
  )
}
