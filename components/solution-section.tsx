"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Satellite, BarChart3, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function SolutionSection() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "var(--progress-width)",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="solucao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4 text-base">A Solução</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Mapas de saúde das culturas que você pode
            <span className="text-green-600"> entender e usar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O Safra Fácil é a primeira plataforma brasileira que transforma dados de satélite da NASA em mapas 
            coloridos de saúde das culturas (NDVI), alertas automáticos e recomendações de aplicação variável.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                <div className="bg-green-100 p-3 rounded-lg">
                  <Satellite className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mapas NDVI em Tempo Real</h3>
                  <p className="text-gray-600">
                    Veja a saúde das suas culturas em mapas coloridos atualizados semanalmente com dados dos 
                    satélites Sentinel-2 e Landsat da NASA.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                <div className="bg-green-100 p-3 rounded-lg">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Alertas Automáticos de Mudanças</h3>
                  <p className="text-gray-600">
                    Receba notificações quando mais de 15% da sua área apresentar queda significativa na saúde 
                    das plantas comparado aos últimos 30 dias.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                <div className="bg-green-100 p-3 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Recomendações de Aplicação Variável</h3>
                  <p className="text-gray-600">
                    Economize até R$ 120/hectare com mapas de aplicação variável de fertilizantes baseados na 
                    variabilidade real do seu campo.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                <div className="bg-green-100 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Simples e Móvel</h3>
                  <p className="text-gray-600">
                    Interface pensada para o campo: funciona no celular, com 3G, e em português. Sem complicação, 
                    sem treinamento técnico.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <a href="#demo" rel="noopener noreferrer">
                  Testar Grátis por 14 Dias
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-2xl text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6">Processamento de Dados NASA</h3>

              <div className="space-y-4">
                <motion.div
                  className="bg-white/10 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Análise NDVI Sentinel-2</span>
                    <Badge className="bg-white/20 text-white">Ativo</Badge>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-white h-2 rounded-full"
                      variants={progressVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      style={{ "--progress-width": "92%" } as any}
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white/10 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Detecção de Mudanças</span>
                    <Badge className="bg-white/20 text-white">Ativo</Badge>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-white h-2 rounded-full"
                      variants={progressVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      style={{ "--progress-width": "87%" } as any}
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white/10 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Análise de Variabilidade</span>
                    <Badge className="bg-white/20 text-white">Ativo</Badge>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-white h-2 rounded-full"
                      variants={progressVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      style={{ "--progress-width": "78%" } as any}
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-6 p-4 bg-white/10 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-sm opacity-90 mb-1">Última Análise:</div>
                <div className="font-medium">Área de 12 ha com NDVI baixo detectada no talhão norte</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
