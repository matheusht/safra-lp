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
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">A Solução</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Um dashboard para tornar sua cidade mais verde,
            <span className="text-green-600"> acessível e inteligente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Pare Verde é a primeira plataforma brasileira que combina detecção de ilhas de calor, mapeamento de
            cobertura verde e auditorias de acessibilidade em uma única interface alimentada por IA.
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Dados Satelitais em Tempo Real</h3>
                  <p className="text-gray-600">
                    Monitore ilhas de calor e cobertura vegetal com precisão, usando imagens de satélite atualizadas
                    automaticamente.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                <div className="bg-green-100 p-3 rounded-lg">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Inteligência Artificial Integrada</h3>
                  <p className="text-gray-600">
                    Nossa IA analisa padrões urbanos e sugere intervenções prioritárias baseadas no maior impacto por
                    real investido.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                <div className="bg-green-100 p-3 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Relatórios Visuais Automáticos</h3>
                  <p className="text-gray-600">
                    Gere relatórios profissionais em PDF para justificar orçamentos e conquistar apoio político com
                    dados concretos.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                <div className="bg-green-100 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Seguro e Brasileiro</h3>
                  <p className="text-gray-600">
                    Hospedado no Brasil, em conformidade com a LGPD e todas as exigências legais para dados municipais.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <a href="https://pareverde.vercel.app" target="_blank" rel="noopener noreferrer">
                  Ver Como Funciona na Prática
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
              <h3 className="text-2xl font-bold mb-6">Motor Geoespacial com IA</h3>

              <div className="space-y-4">
                <motion.div
                  className="bg-white/10 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Detecção de Ilhas de Calor</span>
                    <Badge className="bg-white/20 text-white">Ativo</Badge>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-white h-2 rounded-full"
                      variants={progressVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      style={{ "--progress-width": "75%" } as any}
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
                    <span className="font-medium">Mapeamento de Cobertura Verde</span>
                    <Badge className="bg-white/20 text-white">Ativo</Badge>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-white h-2 rounded-full"
                      variants={progressVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      style={{ "--progress-width": "83%" } as any}
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
                    <span className="font-medium">Auditoria de Acessibilidade</span>
                    <Badge className="bg-white/20 text-white">Ativo</Badge>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-white h-2 rounded-full"
                      variants={progressVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      style={{ "--progress-width": "67%" } as any}
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
                <div className="text-sm opacity-90 mb-1">Próxima Recomendação:</div>
                <div className="font-medium">Plantar 50 árvores na Rua das Flores para reduzir 3°C</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
