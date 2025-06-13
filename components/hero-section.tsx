"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Thermometer, TreePine } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
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

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants}>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                🌱 Plataforma de Sustentabilidade Urbana
              </Badge>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforme sua cidade com <span className="text-green-600">dados inteligentes</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                A Pare Verde unifica mapas de calor, cobertura verde e auditorias de acessibilidade em um dashboard
                único. Tome decisões baseadas em dados e construa o legado de uma cidade mais sustentável e inclusiva.
              </p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8" asChild>
                <a href="https://pareverde.vercel.app" target="_blank" rel="noopener noreferrer">
                  Acessar Plataforma
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-green-600 text-green-600 hover:bg-green-50"
                asChild
              >
                <a href="https://pareverde.vercel.app" target="_blank" rel="noopener noreferrer">
                  Ver Demo ao Vivo
                </a>
              </Button>
            </motion.div>

            <motion.div className="flex items-center space-x-8 pt-4" variants={itemVariants}>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Hospedado no Brasil</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Conforme LGPD</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl p-6 border"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Dashboard da Cidade</h3>
                  <Badge className="bg-green-100 text-green-800">Tempo Real</Badge>
                </div>

                <motion.div
                  className="grid grid-cols-3 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div className="bg-red-50 p-4 rounded-lg text-center" variants={itemVariants}>
                    <Thermometer className="h-8 w-8 text-red-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-red-600">42°C</div>
                    <div className="text-xs text-gray-600">Ilha de Calor</div>
                  </motion.div>

                  <motion.div className="bg-green-50 p-4 rounded-lg text-center" variants={itemVariants}>
                    <TreePine className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">23%</div>
                    <div className="text-xs text-gray-600">Cobertura Verde</div>
                  </motion.div>

                  <motion.div className="bg-orange-50 p-4 rounded-lg text-center" variants={itemVariants}>
                    <MapPin className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-600">156</div>
                    <div className="text-xs text-gray-600">Barreiras</div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="h-32 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <span className="text-green-700 font-medium">Mapa Interativo da Cidade</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
              variants={floatingVariants}
              initial="hidden"
              animate="visible"
            >
              <TreePine className="h-6 w-6" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-emerald-500 text-white p-3 rounded-full shadow-lg"
              variants={floatingVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
            >
              <Thermometer className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
