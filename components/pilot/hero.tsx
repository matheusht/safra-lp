"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, CheckCircle2, Wind } from "lucide-react"
import { motion } from "framer-motion"

export function PilotHero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  // Simulation of video load
  useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/80 via-white/90 to-emerald-50/50 z-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-10" />
        
        {/* Placeholder for Video/Image */}
        <div className="w-full h-full bg-slate-100 relative">
             <div className="absolute inset-0 bg-green-100/20" />
        </div>
      </div>

      <div className="container relative z-20 mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-200 rounded-full px-4 py-1.5 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-600 animate-pulse" />
              <span className="text-sm font-medium text-green-800">Nova Tecnologia para Pilotos Agrícolas</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Pare de Adivinhar. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Comece a Provar.
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              O único sistema que mostra o vento na altitude de voo e gera provas auditáveis de segurança em 1 clique. Proteja seu equipamento e sua reputação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 h-12 shadow-lg shadow-green-200">
                <a href="https://wa.me/5544999522514?text=Quero%20testar%20o%20Safra%20Fácil" target="_blank" rel="noopener noreferrer" className='flex items-center'>
                  Começar Teste Grátis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-12 border-slate-300 text-slate-700 hover:bg-slate-50">
                <a href="https://wa.me/5544999522514?text=Quero%20ver%20uma%20demonstração%20do%20Safra%20Fácil" target="_blank" rel="noopener noreferrer" className='flex items-center'>
                  <Play className="mr-2 h-5 w-5" />
                  {/* Ver Vídeo de 60s */}
                  Ver na prática
                </a>
              </Button>
            </div>

            <div className="pt-8 border-t border-slate-200 grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-slate-600 text-sm">Comprovante de Voo Auditável</span>
              </div>
              <div className="flex items-center space-x-3">
                 <div className="bg-green-100 p-2 rounded-lg">
                    <Wind className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-slate-600 text-sm">Vento em Altitude (50m+)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative hidden lg:block"
          >
            {/* Visual Representation of the "Black Box" / App Interface */}
            <div className="relative z-10 bg-white border border-slate-200 rounded-2xl shadow-2xl p-2 max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="bg-slate-50 rounded-xl overflow-hidden aspect-[9/19.5] relative border border-slate-200">
                    {/* Mock Interface Header */}
                    <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4">
                        <span className="text-slate-500 text-xs">09:41</span>
                        <div className="flex space-x-1">
                            <div className="h-2 w-2 rounded-full bg-slate-300"></div>
                            <div className="h-2 w-2 rounded-full bg-slate-300"></div>
                            <div className="h-2 w-4 rounded-full bg-slate-300"></div>
                        </div>
                    </div>
                    {/* Mock Content */}
                    <div className="p-4 space-y-4">
                        <div className="bg-white rounded-lg p-3 border border-slate-200 shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-slate-500 text-xs">Vento a 50m</span>
                                <Badge variant="destructive" className="bg-red-100 text-red-600 hover:bg-red-200 border-none">Perigo</Badge>
                            </div>
                            <div className="text-2xl font-bold text-slate-900">42 km/h <span className="text-sm font-normal text-slate-500">Rajadas</span></div>
                            <div className="h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                                <div className="h-full bg-red-500 w-3/4"></div>
                            </div>
                        </div>

                        <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100 shadow-sm">
                             <div className="flex justify-between items-center mb-2">
                                <span className="text-emerald-700 text-xs">Vento no Solo (2m)</span>
                                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-none">Seguro</Badge>
                            </div>
                            <div className="text-2xl font-bold text-emerald-900">12 km/h <span className="text-sm font-normal text-emerald-600">Estável</span></div>
                             <div className="h-1 bg-emerald-200 rounded-full mt-2 overflow-hidden">
                                <div className="h-full bg-emerald-500 w-1/4"></div>
                            </div>
                        </div>
                        
                        <div className="mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200 text-center">
                            <p className="text-red-600 font-medium text-sm mb-2">⚠ Risco de Deriva Alto</p>
                            <p className="text-slate-500 text-xs">Não recomendado iniciar aplicação.</p>
                        </div>
                    </div>

                    {/* Generate Report Button */}
                     <div className="absolute bottom-6 left-4 right-4">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white shadow-md">
                           Gerar Comprovante de Risco
                        </Button>
                    </div>
                </div>
            </div>
            
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-300/20 blur-[100px] -z-10 rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
