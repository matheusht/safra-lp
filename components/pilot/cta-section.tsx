"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
             <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-12 py-8 h-auto shadow-[0_0_30px_rgba(34,197,94,0.4)] rounded-xl border border-green-400/50">
                 <a href="https://wa.me/5544999522514?text=Quero%20testar%20o%20Safra%20Fácil" target="_blank" rel="noopener noreferrer" className='flex items-center'>
                    Quero Testar Grátis por 14 Dias
                    <ArrowRight className="ml-2 h-6 w-6" />
                 </a>
             </Button>
        </div>
        <p className="mt-4 text-slate-400 text-sm">Sem cartão de crédito. Cancele quando quiser.</p>
      </div>
    </section>
  )
}
