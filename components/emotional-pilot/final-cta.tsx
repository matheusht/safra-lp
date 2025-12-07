"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Play } from "lucide-react"

export function PilotFinalCTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-900 border-t border-slate-800">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-blue-900/20 z-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-20 mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Proteja seu investimento de R$100k+ <br className="hidden md:block" />
          por apenas <span className="text-emerald-400">R$49/mês</span>
        </h2>
        
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Não espere a primeira multa ou o primeiro acidente para agir. 
          Comece agora a operar com segurança profissional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
           <Button size="lg" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 h-14 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-105 transition-transform duration-300">
              <a href="https://wa.me/5544999522514?text=Quero%20testar%20o%20Safra%20Fácil" target="_blank" rel="noopener noreferrer" className='flex items-center'>
                Quero Testar 14 Dias Grátis
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent">
               <a href="https://wa.me/5544999522514?text=Quero%20ver%20uma%20demonstração%20do%20Safra%20Fácil" target="_blank" rel="noopener noreferrer" className='flex items-center'>
                 <Play className="mr-2 h-5 w-5" />
                 Ver Demonstração
               </a>
            </Button>
        </div>

        <div className="inline-flex items-center space-x-2 bg-emerald-950/30 border border-emerald-900/50 rounded-full px-5 py-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="text-emerald-400 font-medium text-sm">Garantia Blindada: Risco Zero por 14 dias</span>
        </div>
      </div>
    </section>
  )
}
