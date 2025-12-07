"use client"

import React from 'react'
import { Wind, Radio, FileText, WifiOff, MessageCircle, Scale } from "lucide-react"

const features = [
  {
    icon: Wind,
    title: "Vento Multi-Altitude",
    description: "Leitor preciso de vento a 10m, 50m e 100m, calculado especificamente para sua coordenada GPS."
  },
  {
    icon: Radio,
    title: "Alerta de Índice KP",
    description: "Monitore interferências magnéticas que afetam o GPS do drone e evite fly-aways."
  },
  {
    icon: FileText,
    title: "Prova Automática",
    description: "Cada voo gera um PDF assinado digitalmente com todas as variáveis climáticas da aplicação."
  },
  {
    icon: WifiOff,
    title: "Modo 100% Offline",
    description: "Opere em fazendas sem sinal. O app armazena os dados e sincroniza quando conectar.",
  },
  {
    icon: MessageCircle,
    title: "Relatórios via WhatsApp",
    description: "Envie comprovantes de execução diretamente para o produtor ou agrônomo com um toque."
  },
  {
    icon: Scale,
    title: "Compliance ANAC/MAPA",
    description: "Dados formatados conforme as exigências da legislação aeroagrícola brasileira."
  }
]

export function PilotFeatures() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Tudo o que você precisa para voar seguro
          </h2>
          <p className="text-slate-600 text-lg">
            Tecnologia de ponta simplificada para a realidade do campo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 text-emerald-600">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
