"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Satellite } from "lucide-react"
import { motion } from "framer-motion"

export function DemoSection() {
  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4 text-base">
            <Satellite className="h-4 w-4 mr-2" />
            Teste Grátis
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comece a monitorar suas culturas hoje mesmo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preencha o formulário abaixo e receba acesso imediato ao Safra Fácil. 
            Em 5 minutos você estará vendo os mapas NDVI das suas culturas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">O que acontece depois:</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <p className="font-medium">Acesso imediato</p>
                    <p className="text-gray-600 text-sm">Receba login e senha por email em até 2 minutos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <p className="font-medium">Configure suas propriedades</p>
                    <p className="text-gray-600 text-sm">Desenhe os limites das suas áreas no mapa</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <p className="font-medium">Veja seus mapas NDVI</p>
                    <p className="text-gray-600 text-sm">Mapas coloridos da saúde das suas culturas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Precisa de ajuda?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span>(44) 99952-2514</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <span>dev.matheustheodoro@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-8 rounded-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nome">Nome completo *</Label>
                  <Input id="nome" placeholder="João Silva" required />
                </div>
                <div>
                  <Label htmlFor="telefone">WhatsApp *</Label>
                  <Input id="telefone" placeholder="(44) 99999-9999" required />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="joao@fazenda.com.br" required />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cidade">Cidade *</Label>
                  <Input id="cidade" placeholder="Campo Mourão" required />
                </div>
                <div>
                  <Label htmlFor="estado">Estado *</Label>
                  <Input id="estado" placeholder="PR" required />
                </div>
              </div>

              <div>
                <Label htmlFor="hectares">Área total (hectares) *</Label>
                <Input id="hectares" type="number" placeholder="500" required />
              </div>

              <div>
                <Label htmlFor="culturas">Principais culturas *</Label>
                <Input id="culturas" placeholder="Soja, milho, trigo" required />
              </div>

              <div>
                <Label htmlFor="observacoes">Como soube do Safra Fácil?</Label>
                <Textarea id="observacoes" placeholder="Google, indicação, redes sociais..." />
              </div>

              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700" asChild>
                <a href="https://windwhisper.avenza.cloud/agriculture/map" target="_blank" rel="noopener noreferrer">
                  Começar Teste Grátis de 14 Dias
                </a>
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Ao clicar em "Começar Teste Grátis", você concorda com nossos Termos de Uso e Política de Privacidade. 
                Não cobramos cartão de crédito durante o período de teste.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}