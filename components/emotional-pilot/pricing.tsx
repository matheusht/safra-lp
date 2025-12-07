"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Check, Info } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

const pricingTiers = [
  {
    name: "Starter",
    price: "0",
    description: "Para pilotos iniciantes conhecerem o sistema",
    features: [
      "Vento em tempo real (Solo)",
      "3 Relatórios PDF / mês",
      "Previsão de 24 horas",
      "Suporte via Email"
    ],
    cta: "Começar Grátis",
    highlight: false
  },
  {
    name: "Pro Piloto",
    price: "49",
    annualPrice: "470", // ~39/mês
    description: "A essência para o piloto profissional",
    features: [
      "Vento Multi-Altitude (100m)",
      "Relatórios PDF Ilimitados",
      "Alertas KP e Tempestade",
      "Modo Offline Completo",
      "Suporte Prioritário WhatsApp",
      "Histórico de 1 ano"
    ],
    cta: "Testar Grátis 14 Dias",
    highlight: true
  },
  {
    name: "Empresa",
    price: "Sob Consulta",
    description: "Para frotas e empresas de aplicação",
    features: [
      "Tudo do Pro Piloto",
      "Dashboard de Gestão de Frota",
      "Múltiplos Usuários",
      "API de Integração",
      "Onboarding Dedicado",
      "Contrato SLA"
    ],
    cta: "Falar com Consultor",
    highlight: false
  }
]

export function PilotPricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-slate-50 -skew-y-3 transform origin-top-left -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Investimento que se paga no primeiro voo
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Quanto custa uma hélice do seu drone? Proteja seu patrimônio por menos de R$ 2,00 por dia.
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Mensal</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className={`text-sm font-medium ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
                Anual <span className="text-emerald-600 font-bold text-xs ml-1">(-20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {pricingTiers.map((tier, index) => (
            <div 
                key={index} 
                className={`
                    relative rounded-3xl p-8 border bg-white transition-all duration-300
                    ${tier.highlight 
                        ? 'border-emerald-500 shadow-2xl scale-105 z-10 ring-4 ring-emerald-500/10' 
                        : 'border-slate-200 shadow-lg hover:shadow-xl mt-4'}
                `}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 text-sm uppercase tracking-wide">
                        Mais Popular
                    </Badge>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                <p className="text-slate-500 text-sm mt-2">{tier.description}</p>
                <div className="mt-6 flex items-baseline">
                    {tier.price !== "Sob Consulta" ? (
                        <>
                            <span className="text-sm font-medium text-slate-500 mr-1">R$</span>
                            <span className="text-4xl font-bold text-slate-900">
                                {isAnnual && tier.annualPrice ? Math.round(parseInt(tier.annualPrice)) : tier.price}
                            </span>
                            <span className="text-slate-500 text-sm font-medium">/{isAnnual && tier.annualPrice ? "ano" : "mês"}</span>
                        </>
                    ) : (
                        <span className="text-3xl font-bold text-slate-900">{tier.price}</span>
                    )}
                </div>
                {isAnnual && tier.price !== "0" && tier.price !== "Sob Consulta" && (
                    <p className="text-xs text-emerald-600 font-medium mt-1">
                        Equivalente a R$ {Math.round(parseInt(tier.annualPrice || "")/12)}/mês
                    </p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                ))}
              </div>

              <Button 
                variant={tier.highlight ? "default" : "outline"}
                className={`w-full h-12 text-lg font-medium ${
                    tier.highlight 
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200' 
                    : 'border-slate-300 text-slate-700 hover:bg-slate-50 text-base'
                }`}
              >
                <a href={`https://wa.me/5544999522514?text=Tenho%20interesse%20no%20plano%20${encodeURIComponent(tier.name)}%20do%20Safra%20Fácil`} target="_blank" rel="noopener noreferrer" className='w-full'>
                  {tier.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
