"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Satellite, TrendingUp, Bell, Map, BarChart3, Settings } from "lucide-react"
import { motion } from "framer-motion"

export function FeaturesSection() {
  const features = [
    {
      icon: Satellite,
      title: "Mapas NDVI Coloridos",
      description: "Visualize a saúde das culturas em mapas fáceis de entender com dados NASA",
      capabilities: ["Sentinel-2 (10m resolução)", "Landsat (30m resolução)", "Atualização semanal"],
    },
    {
      icon: TrendingUp,
      title: "Análise de Tendências",
      description: "Compare a saúde atual com histórico de 30 dias para detectar mudanças",
      capabilities: ["Baseline de 30 dias", "Detecção de declínio", "Gráficos temporais"],
    },
    {
      icon: Bell,
      title: "Alertas Automáticos",
      description: "Receba notificações quando áreas grandes apresentarem problemas",
      capabilities: ["Alertas por WhatsApp", "Limite de 15% de declínio", "Área mínima de 5 hectares"],
    },
    {
      icon: Map,
      title: "Interface Mobile",
      description: "Acesse seus mapas no campo, direto do celular, mesmo com 3G",
      capabilities: ["Otimizado para celular", "Funciona com 3G", "Interface em português"],
    },
    {
      icon: BarChart3,
      title: "Aplicação Variável (VRA)",
      description: "Economize fertilizantes com mapas de aplicação baseados na variabilidade",
      capabilities: ["Análise de uniformidade", "Zonas de manejo", "Economia até R$ 120/ha"],
    },
    {
      icon: Settings,
      title: "Gestão de Propriedades",
      description: "Monitore múltiplos talhões e compare performance entre áreas",
      capabilities: ["Múltiplas propriedades", "Comparação de talhões", "Histórico de safras"],
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
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4 text-base">Funcionalidades</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Tudo que você precisa para monitorar suas culturas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seis funcionalidades integradas que trabalham juntos para dar a você uma visão completa e acionável 
            da saúde das suas culturas usando dados de satélite.
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
          <h3 className="text-2xl font-bold mb-4">Veja o Safra Fácil em ação na sua propriedade</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Comece seu teste gratuito de 14 dias e descubra como nossa plataforma pode identificar problemas 
            e oportunidades específicas nas suas culturas.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
            <a href="https://windwhisper.avenza.cloud/agriculture/map" target="_blank" rel="noopener noreferrer">
              Começar Teste Grátis
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
