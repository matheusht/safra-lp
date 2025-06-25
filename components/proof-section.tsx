"use client"

import { Badge } from "@/components/ui/badge"
import { Quote, Star, TrendingUp, Users } from "lucide-react"
import { motion } from "framer-motion"

export function ProofSection() {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Secretária de Meio Ambiente",
      city: "Maringá, PR",
      quote:
        "Com a Pare Verde, identificamos 3 novas áreas críticas de calor que não sabíamos que existiam. Em 6 meses, plantamos 200 árvores nos locais prioritários.",
      impact: "Redução de 3°C nas áreas tratadas",
    },
    {
      name: "Carlos Oliveira",
      role: "Coordenador de Mobilidade",
      city: "Campinas, SP",
      quote:
        "A auditoria de acessibilidade nos mostrou exatamente onde investir. Conseguimos aprovar R$ 2 milhões para melhorias baseadas nos dados da plataforma.",
      impact: "150 rampas instaladas em 4 meses",
    },
    {
      name: "Ana Rodrigues",
      role: "Diretora de Planejamento",
      city: "Recife, PE",
      quote:
        "Os relatórios visuais da Pare Verde foram fundamentais para conquistar o apoio do prefeito. Agora somos referência em sustentabilidade urbana.",
      impact: "25% mais áreas verdes aprovadas",
    },
  ]

  const stats = [
    { number: "50+", label: "Cidades Atendidas", icon: Users },
    { number: "200%", label: "Aumento em Aprovações", icon: TrendingUp },
    { number: "4.9/5", label: "Satisfação dos Usuários", icon: Star },
    { number: "30 dias", label: "Tempo Médio de ROI", icon: TrendingUp },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="cases" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4 text-base">Casos de Sucesso</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Gestores que já transformaram suas cidades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como secretários e coordenadores municipais estão usando a Pare Verde para conquistar resultados
            concretos e reconhecimento.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Quote className="h-8 w-8 text-green-600 mb-4" />
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-green-600">{testimonial.city}</div>
                  </div>
                </div>
                <motion.div
                  className="bg-green-50 p-3 rounded-lg mt-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <div className="text-sm font-medium text-green-800">Resultado:</div>
                  <div className="text-sm text-green-700">{testimonial.impact}</div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="text-center" variants={statsVariants}>
              <motion.div
                className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className="h-8 w-8 text-green-600" />
              </motion.div>
              <motion.div
                className="text-3xl font-bold text-gray-900 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-white p-8 rounded-2xl shadow-sm border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Reconhecimento Nacional</h3>
            <p className="text-gray-600 mb-6">
              A Pare Verde foi destacada em publicações especializadas e eventos do setor
            </p>

            <motion.div
              className="flex flex-wrap justify-center items-center gap-8 opacity-60"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="text-lg font-semibold text-gray-500" variants={itemVariants}>
                WRI Brasil Cidades
              </motion.div>
              <motion.div className="text-lg font-semibold text-gray-500" variants={itemVariants}>
                Frente Nacional de Prefeitos
              </motion.div>
              <motion.div className="text-lg font-semibold text-gray-500" variants={itemVariants}>
                CNM
              </motion.div>
              <motion.div className="text-lg font-semibold text-gray-500" variants={itemVariants}>
                BNDES InovaBrasil
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
