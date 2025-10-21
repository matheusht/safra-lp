"use client"

import { AlertTriangle, FileSpreadsheet, Clock, TrendingDown } from "lucide-react"
import { motion } from "framer-motion"

export function ProblemsSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Detecção Tardia de Problemas",
      description: "Você só descobre estresse hídrico, pragas ou deficiências quando já é tarde demais.",
    },
    {
      icon: TrendingDown,
      title: "Aplicação Ineficiente de Fertilizantes",
      description: "Sem dados precisos, você aplica fertilizante demais em algumas áreas e de menos em outras.",
    },
    {
      icon: Clock,
      title: "Perda de Tempo no Campo",
      description: "Caminha por toda a propriedade para identificar problemas que poderiam ser vistos do espaço.",
    },
    {
      icon: FileSpreadsheet,
      title: "Falta de Dados Históricos",
      description: "Sem registros organizados, é difícil comparar safras e melhorar o planejamento.",
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

  const statsVariants = {
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Os desafios que todo produtor rural enfrenta
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gerenciar a saúde das culturas sem dados precisos está custando produtividade, aumentando custos 
            e reduzindo a rentabilidade da sua propriedade.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-white p-8 rounded-2xl shadow-sm border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{"O impacto real na sua produtividade"}</h3>
            <motion.div
              className="grid md:grid-cols-3 gap-8 mt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="text-center" variants={statsVariants}>
                <div className="text-3xl font-bold text-red-600 mb-2">15-25%</div>
                <p className="text-gray-600">de perda de produtividade por detecção tardia de problemas</p>
              </motion.div>
              <motion.div className="text-center" variants={statsVariants}>
                <div className="text-3xl font-bold text-red-600 mb-2">30-40%</div>
                <p className="text-gray-600">de desperdício em fertilizantes por aplicação inadequada</p>
              </motion.div>
              <motion.div className="text-center" variants={statsVariants}>
                <div className="text-3xl font-bold text-red-600 mb-2">R$ 120/ha</div>
                <p className="text-gray-600">de economia potencial com aplicação variável de fertilizantes</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
