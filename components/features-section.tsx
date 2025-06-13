"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Thermometer, TreePine, Accessibility, Map, FileText, Settings } from "lucide-react"
import { motion } from "framer-motion"

export function FeaturesSection() {
  const features = [
    {
      icon: Thermometer,
      title: "Detector de Ilhas de Calor",
      description: "IA analisa imagens de satélite para identificar zonas críticas de temperatura",
      capabilities: ["Alertas automáticos", "Mapas de calor em tempo real", "Tendências históricas"],
    },
    {
      icon: TreePine,
      title: "Mapeador de Cobertura Verde",
      description: "Calcule percentual de vegetação e identifique oportunidades de plantio",
      capabilities: ["Análise de biomassa", "Planejamento de arborização", "Monitoramento de crescimento"],
    },
    {
      icon: Accessibility,
      title: "Auditor de Acessibilidade",
      description: "Mapeie barreiras urbanas e priorize melhorias de mobilidade",
      capabilities: ["Auditoria de calçadas", "Mapa de obstáculos", "Conformidade com normas"],
    },
    {
      icon: Map,
      title: "Dashboard Unificado",
      description: "Visualize todos os indicadores em uma interface intuitiva",
      capabilities: ["Mapas interativos", "Filtros personalizados", "Comparações temporais"],
    },
    {
      icon: FileText,
      title: "Relatórios Automáticos",
      description: "Gere documentos profissionais para apresentações e editais",
      capabilities: ["PDFs executivos", "Gráficos personalizados", "Dados para mídia"],
    },
    {
      icon: Settings,
      title: "Planejador de Intervenções",
      description: "Priorize ações baseadas no maior impacto por investimento",
      capabilities: ["Análise de ROI", "Cronogramas sugeridos", "Estimativas de custo"],
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

  return (
    <section id="funcionalidades" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">Funcionalidades</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Tudo que você precisa em uma plataforma</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seis módulos integrados que trabalham juntos para dar a você uma visão completa e acionável da
            sustentabilidade urbana da sua cidade.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border hover:shadow-lg transition-all duration-300 hover:bg-white"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="h-6 w-6 text-green-600" />
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>

              <motion.ul
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {feature.capabilities.map((capability, capIndex) => (
                  <motion.li
                    key={capIndex}
                    className="flex items-center text-sm text-gray-600"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    {capability}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 rounded-2xl text-white text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-bold mb-4">Veja a Pare Verde em ação na sua cidade</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Agende uma demonstração personalizada e descubra como nossa plataforma pode identificar oportunidades
            específicas na sua região.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
            <a href="https://pareverde.vercel.app" target="_blank" rel="noopener noreferrer">
              Acessar Demo da Plataforma
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
