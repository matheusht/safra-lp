import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Satellite, BarChart3, Shield } from "lucide-react"

export function SolutionSection() {
  return (
    <section id="solucao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">A Solução</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Um dashboard para tornar sua cidade mais verde,
            <span className="text-green-600"> acessível e inteligente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Pare Verde é a primeira plataforma brasileira que combina detecção de ilhas de calor, mapeamento de
            cobertura verde e auditorias de acessibilidade em uma única interface alimentada por IA.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
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
              </div>

              <div className="flex items-start space-x-4">
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
              </div>

              <div className="flex items-start space-x-4">
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
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Seguro e Brasileiro</h3>
                  <p className="text-gray-600">
                    Hospedado no Brasil, em conformidade com a LGPD e todas as exigências legais para dados municipais.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <a href="https://pareverde.vercel.app" target="_blank" rel="noopener noreferrer">
                Ver Como Funciona na Prática
              </a>
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Motor Geoespacial com IA</h3>

              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Detecção de Ilhas de Calor</span>
                    <Badge className="bg-white/20 text-white">Ativo</Badge>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-3/4"></div>
                  </div>
                </div>

                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Mapeamento de Cobertura Verde</span>
                    <Badge className="bg-white/20 text-white">Ativo</Badge>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-5/6"></div>
                  </div>
                </div>

                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Auditoria de Acessibilidade</span>
                    <Badge className="bg-white/20 text-white">Ativo</Badge>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <div className="text-sm opacity-90 mb-1">Próxima Recomendação:</div>
                <div className="font-medium">Plantar 50 árvores na Rua das Flores para reduzir 3°C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
