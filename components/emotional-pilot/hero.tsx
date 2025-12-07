"use client"

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Wind, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function EmotionalPilotHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900 text-white">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/50 z-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] z-10" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[128px]" />
      </div>

      <div className="container relative z-20 mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-slate-300">Compatível com todos os drones agrícolas</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
              Pare de Adivinhar. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400">
                Comece a Provar.
              </span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
              Vento a 100m. Índice KP. Relatório de voo seguro em 1 clique.
              A segurança que sua operação precisa para decolar sem riscos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold text-lg px-8 h-12 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                <a href="https://wa.me/5544999522514?text=Quero%20testar%20o%20Safra%20Fácil" target="_blank" rel="noopener noreferrer" className='flex items-center'>
                  Teste Grátis 14 Dias
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-12 border-slate-700 text-white hover:bg-slate-800 hover:text-white bg-transparent">
                <a href="https://wa.me/5544999522514?text=Quero%20ver%20uma%20demonstração%20do%20Safra%20Fácil" target="_blank" rel="noopener noreferrer" className='flex items-center'>
                  <Play className="mr-2 h-5 w-5" />
                  Ver Demonstração
                </a>
              </Button>
            </div>

            <div className="pt-8 border-t border-slate-800/50 grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-slate-800/50 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-emerald-400" />
                </div>
                <span className="text-slate-400 text-sm">Proteção Jurídica Total</span>
              </div>
              <div className="flex items-center space-x-3">
                 <div className="bg-slate-800/50 p-2 rounded-lg">
                    <Wind className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-slate-400 text-sm">Dados ANAC e MAPA</span>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative hidden lg:block"
          >
            {/* Visual Representation of the Mobile App Interface */}
            <div className="relative z-10 bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-2xl p-3 max-w-sm mx-auto transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <div className="bg-slate-950 rounded-[2rem] overflow-hidden aspect-[9/19] relative border border-slate-800">
                    {/* Mock Interface Header */}
                    <div className="h-14 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-6 pt-2">
                        <span className="text-slate-500 text-xs text-white">09:41</span>
                        <div className="flex space-x-1.5">
                            <div className="h-2 w-2 rounded-full bg-slate-600"></div>
                            <div className="h-2 w-2 rounded-full bg-slate-600"></div>
                            <div className="h-2 w-4 rounded-full bg-slate-600"></div>
                        </div>
                    </div>
                    
                    {/* Mock Content */}
                    <div className="p-5 space-y-4">
                        {/* Weather Card */}
                        <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl p-4 border border-indigo-500/20 shadow-inner">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-slate-400 text-xs font-medium">VENTO EM ALTITUDE (80m)</span>
                                <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Ideal</Badge>
                            </div>
                            <div className="flex items-baseline space-x-1">
                                <span className="text-4xl font-bold text-white">12</span>
                                <span className="text-sm text-slate-400">km/h</span>
                            </div>
                            <div className="mt-3 flex items-center text-xs text-slate-500">
                                <Wind className="w-3 h-3 mr-1" />
                                <span>Direção NE estável</span>
                            </div>
                        </div>

                        {/* KP Index */}
                        <div className="bg-slate-900/50 rounded-2xl p-4 border border-slate-800">
                             <div className="flex justify-between items-center mb-2">
                                <span className="text-slate-400 text-xs font-medium">ÍNDICE KP</span>
                                <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Atenção</Badge>
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <span className="text-2xl font-bold text-white">4.2</span>
                                    <span className="text-xs text-slate-500 ml-2">Moderado</span>
                                </div>
                                <div className="flex space-x-1 mb-1">
                                    {[1, 2, 3, 4].map(i => <div key={i} className="w-1.5 h-6 bg-yellow-500 rounded-full" />)}
                                    {[5, 6, 7, 8, 9].map(i => <div key={i} className="w-1.5 h-6 bg-slate-800 rounded-full" />)}
                                </div>
                            </div>
                        </div>

                        {/* Status Message */}
                        <div className="mt-4 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                            <h4 className="text-emerald-400 font-medium text-sm mb-1">Condições Favoráveis</h4>
                            <p className="text-slate-400 text-xs">Janela de aplicação segura pelos próximos 45 minutos.</p>
                        </div>
                    </div>

                    {/* Generate Report Button - Bottom */}
                     <div className="absolute bottom-6 left-5 right-5">
                        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium h-12 rounded-xl shadow-lg shadow-emerald-500/20">
                           Gerar Relatório AGORA
                        </Button>
                    </div>
                </div>
            </div>
            
            {/* Ambient Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[80px] -z-10 rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
