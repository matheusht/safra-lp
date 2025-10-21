"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import { motion } from "framer-motion"

export function PricingSection() {
  const plans = [
    {
      name: "Teste Grátis",
      price: "R$ 0",
      period: "14 dias",
      description: "Experimente todas as funcionalidades",
      features: [
        "Até 1 propriedade",
        "Mapas NDVI semanais",
        "Alertas básicos",
        "Suporte por email",
      ],
      limitations: [
        "Histórico limitado a 30 dias",
        "Sem análise VRA",
      ],
      cta: "Começar Teste Grátis",
      popular: false,
    },
    {
      name: "Produtor",
      price: "R$ 199",
      period: "por mês",
      description: "Para produtores individuais",
      features: [
        "Até 3 propriedades",
        "Mapas NDVI semanais",
        "Alertas automáticos",
        "Análise de aplicação variável",
        "Histórico completo",
        "Suporte via WhatsApp",
        "Relatórios em PDF",
      ],
      limitations: [],
      cta: "Assinar Agora",
      popular: true,
    },
    {
      name: "Cooperativa",
      price: "R$ 199",
      period: "por mês",
      description: "Para cooperativas e consultores",
      features: [
        "Propriedades ilimitadas",
        "Gestão de múltiplos produtores",
        "Dashboard administrativo",
        "API para integração",
        "Relatórios personalizados",
        "Suporte prioritário",
        "Treinamento incluído",
      ],
      limitations: [],
      cta: "Falar com Vendas",
      popular: false,
    },
  ]

  return (
    <section id="precos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >       
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4 text-base">Preços</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comece grátis e escolha o plano ideal para o tamanho da sua operação. 
            Todos os planos incluem dados NASA em tempo real.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white p-8 rounded-2xl shadow-sm border-2 ${
                plan.popular ? 'border-green-500' : 'border-gray-200'
              } hover:shadow-lg transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-500 text-white px-4 py-1">Mais Popular</Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, limitIndex) => (
                  <div key={limitIndex} className="flex items-center space-x-3">
                    <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-500">{limitation}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
                size="lg"
                asChild
              >
                <a href="https://windwhisper.avenza.cloud/agriculture/map" target="_blank" rel="noopener noreferrer">
                  {plan.cta}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 mb-4">
            Todos os planos incluem dados NASA atualizados, suporte em português e sem taxa de setup.
          </p>
          <p className="text-sm text-gray-500">
            Preços em reais brasileiros. Cancele a qualquer momento. Sem multa de cancelamento.
          </p>
        </motion.div>
      </div>
    </section>
  )
}