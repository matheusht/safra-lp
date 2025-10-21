"use client"

import { TrendingUp, Clock, DollarSign, Award, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Detecção Precoce de Problemas",
      description: "Identifique estresse das plantas semanas antes de ser visível no campo.",
      metric: "3-4 sem",
      color: "text-green-600",
    },
    {
      icon: DollarSign,
      title: "Economia em Fertilizantes",
      description: "Reduza custos com aplicação variável baseada em dados reais.",
      metric: "R$ 120/ha",
      color: "text-emerald-600",
    },
    {
      icon: TrendingUp,
      title: "Aumento de Produtividade",
      description: "Melhore rendimento com manejo preciso das áreas problemáticas.",
      metric: "+15-25%",
      color: "text-green-600",
    },
    {
      icon: Users,
      title: "Facilidade de Uso",
      description: "Interface simples que funciona no celular, sem treinamento técnico.",
      metric: "100%",
      color: "text-emerald-600",
    },
    {
      icon: Award,
      title: "Dados Confiáveis",
      description: "Informações validadas dos satélites NASA Sentinel-2 e Landsat.",
      metric: "NASA",
      color: "text-green-600",
    },
    {
      icon: Zap,
      title: "Implementação Imediata",
      description: "Comece a monitorar suas culturas hoje mesmo.",
      metric: "Hoje",
      color: "text-emerald-600",
    },
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

  const journeyVariants = {
    hidden: { opacity: 0, scale: 0.8 },
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
    <section id="beneficios" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Resultados que aumentam sua rentabilidade</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Produtores que usam o Safra Fácil conseguem detectar problemas mais cedo, economizar em insumos 
            e aumentar a produtividade das suas culturas.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <benefit.icon className="h-6 w-6 text-green-600" />
                </div>
                <motion.div
                  className={`text-2xl font-bold ${benefit.color}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                >
                  {benefit.metric}
                </motion.div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
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
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {"Da incerteza à precisão: sua jornada de transformação"}
            </h3>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="text-center" variants={journeyVariants}>
              <motion.div
                className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl">😰</span>
              </motion.div>
              <h4 className="font-semibold text-gray-900 mb-2">Antes</h4>
              <p className="text-gray-600 text-sm">Problemas descobertos tarde, aplicação uniforme, custos altos</p>
            </motion.div>

            <motion.div className="text-center" variants={journeyVariants}>
              <motion.div
                className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl">🛰️</span>
              </motion.div>
              <h4 className="font-semibold text-gray-900 mb-2">Durante</h4>
              <p className="text-gray-600 text-sm">Mapas NDVI semanais, alertas automáticos, decisões baseadas em dados</p>
            </motion.div>

            <motion.div className="text-center" variants={journeyVariants}>
              <motion.div
                className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl">🏆</span>
              </motion.div>
              <h4 className="font-semibold text-gray-900 mb-2">Depois</h4>
              <p className="text-gray-600 text-sm">Maior produtividade, custos otimizados, manejo de precisão</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
