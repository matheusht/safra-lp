"use client"

import React from 'react'
import { AlertTriangle, XCircle, FileWarning, CheckCircle, Smartphone, Sliders } from "lucide-react"

export function PilotProblemSolution() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Problem Side */}
          <div className="space-y-12">
            <div className="mb-8">
              <span className="text-red-600 font-bold tracking-wider text-sm uppercase">O Custo do "Achismo"</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Voar sem dados é um risco financeiro e jurídico
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600">
                    <XCircle className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-slate-900">Acidente (Crash) por Vento Repentino</h3>
                  <p className="mt-2 text-slate-600">
                    Rajadas de vento em altitude são invisíveis do solo. Perder um drone de R$150k por falta de dados é um prejuízo evitável.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-slate-900">Deriva e Multas Ambientais</h3>
                  <p className="mt-2 text-slate-600">
                    Aplicar com condições impróprias gera deriva visível. Sem registro técnico, você não tem defesa contra multas do IBAMA ou vizinhos.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600">
                    <FileWarning className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-slate-900">Burocracia Manual</h3>
                  <p className="mt-2 text-slate-600">
                    Preencher cadernos de campo manualmente é impreciso e toma tempo. Dados errados invalidam sua proteção.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="relative">
             {/* Decorative Background */}
            <div className="absolute inset-0 bg-slate-900 rounded-[2rem] transform rotate-3 scale-105 z-0" />
            
            <div className="relative z-10 bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-2xl h-full">
              <div className="mb-10">
                 <span className="text-emerald-600 font-bold tracking-wider text-sm uppercase">A Solução Profissional</span>
                 <h2 className="text-3xl font-bold text-slate-900 mt-2">
                    Controle Total da Operação
                 </h2>
              </div>

              <div className="space-y-10">
                 <div className="flex group">
                    <div className="flex-shrink-0 mr-6">
                        <div className="h-14 w-14 rounded-2xl bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                            <Sliders className="h-7 w-7 text-emerald-600 group-hover:text-white transition-colors" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Vento Multi-Altitude</h4>
                        <p className="text-slate-600">
                            Saiba extamente a velocidade do vento a 10m, 50m e 100m. Decida seu voo com dados reais da camada de aplicação.
                        </p>
                    </div>
                 </div>

                 <div className="flex group">
                    <div className="flex-shrink-0 mr-6">
                        <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                            <CheckCircle className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">PDF Automático de Prova</h4>
                        <p className="text-slate-600">
                            Gere um relatório técnico com data, hora, local e condições climáticas em 1 clique. Sua blindagem jurídica instantânea.
                        </p>
                    </div>
                 </div>

                 <div className="flex group">
                    <div className="flex-shrink-0 mr-6">
                        <div className="h-14 w-14 rounded-2xl bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                            <Smartphone className="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Modo Offline Total</h4>
                        <p className="text-slate-600">
                            Funciona no meio do talhão, sem internet. Os dados sincronizam quando você volta para a sede.
                        </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
