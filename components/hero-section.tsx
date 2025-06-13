import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Thermometer, TreePine } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
              🌱 Plataforma de Sustentabilidade Urbana
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforme sua cidade com <span className="text-green-600">dados inteligentes</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                A Pare Verde unifica mapas de calor, cobertura verde e auditorias de acessibilidade em um dashboard
                único. Tome decisões baseadas em dados e construa o legado de uma cidade mais sustentável e inclusiva.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Hospedado no Brasil</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Conforme LGPD</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Dashboard da Cidade</h3>
                  <Badge className="bg-green-100 text-green-800">Tempo Real</Badge>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <Thermometer className="h-8 w-8 text-red-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-red-600">42°C</div>
                    <div className="text-xs text-gray-600">Ilha de Calor</div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <TreePine className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">23%</div>
                    <div className="text-xs text-gray-600">Cobertura Verde</div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <MapPin className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-600">156</div>
                    <div className="text-xs text-gray-600">Barreiras</div>
                  </div>
                </div>

                <div className="h-32 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <span className="text-green-700 font-medium">Mapa Interativo da Cidade</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
              <TreePine className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-emerald-500 text-white p-3 rounded-full shadow-lg">
              <Thermometer className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
