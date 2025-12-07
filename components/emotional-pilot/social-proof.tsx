"use client"

import React from 'react'
import { Star, MapPin } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Carlos Ferreira",
    region: "Sorriso, MT",
    bg: "AgroPilot",
    quote: "Antes eu cancelava aplicações por dúvida no vento. Hoje tenho certeza absoluta e o PDF pra provar.",
    avatar: "/avatars/pilot1.jpg"
  },
  {
    name: "Ricardo M.",
    region: "Rio Verde, GO",
    bg: "Aviação Agrícola",
    quote: "A leitura de vento em altitude mudou meu jogo. Evitei uma deriva certa semana passada graças ao alerta.",
    avatar: "/avatars/pilot2.jpg"
  },
  {
    name: "André Silva",
    region: "Londrina, PR",
    bg: "Consultor Agrônomo",
    quote: "Meus clientes exigem o relatório do sistema agora. Virou padrão de qualidade na nossa região.",
    avatar: "/avatars/pilot3.jpg"
  }
]

export function PilotSocialProof() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Usado por pilotos profissionais em MT, MS, GO e PR
          </h2>
          <p className="text-slate-600 text-lg">
            Junte-se a centenas de operadores que já eliminaram o "achismo" da pulverização.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6">"{t.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 border border-slate-200">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback className="bg-slate-100 text-slate-600">
                      {t.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <div className="flex items-center text-xs text-slate-500">
                      <MapPin className="w-3 h-3 mr-1" />
                      {t.region}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Logos / Trust strip simulation */}
        <div className="mt-16 pt-8 border-t border-slate-200">
            <p className="text-center text-sm font-medium text-slate-400 mb-6 uppercase tracking-wider">Compatível com</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
                {/* Text placeholders for logos as per standard practice when assets missing */}
                <span className="text-xl font-bold text-slate-600">DJI AGRAS</span>
                <span className="text-xl font-bold text-slate-600">XAG</span>
                <span className="text-xl font-bold text-slate-600">EAVISION</span>
                <span className="text-xl font-bold text-slate-600">JOYANCE</span>
            </div>
        </div>
      </div>
    </section>
  )
}
