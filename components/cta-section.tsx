"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Clock, Gift } from "lucide-react"
import { motion } from "framer-motion"

export function CtaSection() {
  const benefits = [
    "Auditoria completa da sua cidade",
    "Identificação de 3 oportunidades prioritárias",
    "Relatório executivo personalizado",
    "Sessão de planejamento estratégico",
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
            Transforme sua cidade em 30 dias
          </motion.h2>

          <motion.p
            className="text-xl text-green-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Solicite sua <strong>Auditoria Urbana Gratuita</strong> e descubra como a Pare Verde pode identificar as
            oportunidades mais impactantes para sua gestão.
          </motion.p>

          <motion.div
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">O que você recebe gratuitamente:</h3>

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
              <span>Processo completo em apenas 7 dias úteis</span>
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
                <a href="https://pareverde.vercel.app" target="_blank" rel="noopener noreferrer">
                  Acessar Plataforma Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-green-600 hover:bg-white/10 text-lg px-8 py-4"
                asChild
              >
                <a href="https://pareverde.vercel.app" target="_blank" rel="noopener noreferrer">
                  Agendar Demo
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
              <strong>Sem compromisso.</strong> Sem custos ocultos. Sem necessidade de equipe técnica.
            </p>
            <p className="text-sm">✓ Hospedado no Brasil ✓ Conforme LGPD ✓ Suporte em português</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
