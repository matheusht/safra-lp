"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Clock, Gift } from "lucide-react"
import { motion } from "framer-motion"

export function CtaSection() {
  const benefits = [
    "Mapas NDVI de todas as suas culturas",
    "Alertas automáticos de mudanças na saúde das plantas",
    "Análise de aplicação variável para economia de fertilizantes",
    "Suporte técnico em português via WhatsApp",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-white/20 text-white hover:bg-white/20 mb-6 text-base">
              <Gift className="h-4 w-4 mr-2" />
              Oferta Limitada
            </Badge>
          </motion.div>

          <motion.h2
            className="text-3xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comece a monitorar suas culturas hoje
          </motion.h2>

          <motion.p
            className="text-xl text-green-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Inicie seu <strong>teste gratuito de 14 dias</strong> e descubra como o Safra Fácil pode detectar problemas 
            nas suas culturas antes que sejam visíveis no campo.
          </motion.p>

          <motion.div
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">O que você recebe nos 14 dias grátis:</h3>

            <motion.div
              className="grid md:grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                  <span className="text-left">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex items-center justify-center space-x-2 text-green-200 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <Clock className="h-5 w-5" />
              <span>Configuração completa em apenas 5 minutos</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4" asChild>
                <a href="#demo" rel="noopener noreferrer">
                  Começar Teste Grátis Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
                asChild
              >
                <a href="#funcionalidades" rel="noopener noreferrer">
                  Ver Funcionalidades
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center text-green-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
            <p className="mb-2">
              <strong>Sem compromisso.</strong> Sem cartão de crédito. Sem necessidade de treinamento técnico.
            </p>
            <p className="text-sm">✓ Dados NASA confiáveis ✓ Interface em português ✓ Suporte via WhatsApp</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
