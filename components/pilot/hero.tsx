"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, CheckCircle2, Wind } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function PilotHero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  // Simulation of video load
  useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
         {/* Image Background */}
         <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('/pilot1.png')" }}
        />
        
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-900/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-green-900/20 z-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] z-10" />
        
        {/* Animated Orbs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container relative z-20 mx-auto px-4 pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 backdrop-blur-sm mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-green-400">Nova Tecnologia para Pilotos Agrícolas</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Pare de Adivinhar. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-black">
                Comece a Provar.
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              O único sistema que mostra o vento na altitude de voo e gera provas auditáveis de segurança em 1 clique. Proteja seu equipamento e sua reputação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/agendar" 
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4 rounded-md shadow-lg shadow-green-900/20 text-white w-full sm:w-auto font-medium flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                Começar Teste Grátis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/agendar" 
                className="text-lg px-8 py-4 border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white w-full sm:w-auto bg-transparent rounded-md flex items-center justify-center transition-all"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver na prática
              </Link>
            </div>

            <div className="pt-8 border-t border-slate-800 grid grid-cols-2 gap-6 text-left">
              <div className="flex items-center space-x-3">
                <div className="bg-slate-800 p-2 rounded-lg border border-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-slate-400 text-sm">Comprovante de Voo Auditável</span>
              </div>
              <div className="flex items-center space-x-3">
                 <div className="bg-slate-800 p-2 rounded-lg border border-slate-700">
                    <Wind className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-slate-400 text-sm">Vento em Altitude (50m+)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative mt-8 lg:mt-0"
          >
            {/* Visual Representation of the "Black Box" / App Interface */}
            <div className="relative z-10 bg-slate-800 border-4 border-slate-700 rounded-3xl shadow-2xl mx-auto max-w-[280px] sm:max-w-xs lg:max-w-md transform rotate-0 lg:rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-slate-700 rounded-b-xl z-20"></div>
                
                <div className="bg-slate-900 rounded-[20px] overflow-hidden aspect-[9/18] relative">
                    {/* Mock Interface Header */}
                    <div className="h-14 bg-slate-900 flex items-center justify-between px-6 pt-2">
                        <span className="text-slate-400 text-xs font-medium">09:41</span>
                        <div className="flex space-x-1.5">
                            <div className="h-2 w-2 rounded-full bg-slate-700"></div>
                            <div className="h-2 w-2 rounded-full bg-slate-700"></div>
                            <div className="h-2 w-4 rounded-full bg-slate-700"></div>
                        </div>
                    </div>
                    {/* Mock Content */}
                    <div className="p-5 space-y-4">
                        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Vento a 50m</span>
                                <Badge variant="destructive" className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20">Perigo</Badge>
                            </div>
                            <div className="text-3xl font-bold text-white mb-2">42 km/h</div>
                            <div className="flex items-center space-x-2 text-xs text-red-400 mb-3">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"/>
                                <span>Rajadas Fortes Detectadas</span>
                            </div>
                            <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-red-600 to-red-500 w-3/4 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                            </div>
                        </div>

                        <div className="bg-emerald-900/10 rounded-xl p-4 border border-emerald-500/20">
                             <div className="flex justify-between items-center mb-3">
                                <span className="text-emerald-500 text-xs font-medium uppercase tracking-wider">Vento no Solo (2m)</span>
                                <Badge className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border-emerald-500/20">Seguro</Badge>
                            </div>
                            <div className="text-3xl font-bold text-emerald-50">12 km/h</div>
                            <div className="flex items-center space-x-2 text-xs text-emerald-400 mb-3">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"/>
                                <span>Condições Estáveis</span>
                            </div>
                             <div className="h-1.5 bg-emerald-900/30 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-1/4 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                            </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-red-500/5 rounded-xl border border-red-500/20 text-center backdrop-blur-sm">
                            <p className="text-red-400 font-semibold text-sm mb-1">⚠ Risco de Deriva Alto</p>
                            <p className="text-slate-400 text-xs">Não recomendado iniciar aplicação.</p>
                        </div>
                    </div>

                    {/* Generate Report Button */}
                     <div className="absolute bottom-8 left-5 right-5">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium shadow-lg shadow-green-900/20 h-11">
                           Gerar Comprovante
                        </Button>
                    </div>
                </div>
            </div>
            
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-green-500/10 blur-[80px] -z-10 rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
