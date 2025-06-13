import { Badge } from "@/components/ui/badge"
import { Quote, Star, TrendingUp, Users } from "lucide-react"

export function ProofSection() {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Secretária de Meio Ambiente",
      city: "Maringá, PR",
      quote:
        "Com a Pare Verde, identificamos 3 novas áreas críticas de calor que não sabíamos que existiam. Em 6 meses, plantamos 200 árvores nos locais prioritários.",
      impact: "Redução de 3°C nas áreas tratadas",
    },
    {
      name: "Carlos Oliveira",
      role: "Coordenador de Mobilidade",
      city: "Campinas, SP",
      quote:
        "A auditoria de acessibilidade nos mostrou exatamente onde investir. Conseguimos aprovar R$ 2 milhões para melhorias baseadas nos dados da plataforma.",
      impact: "150 rampas instaladas em 4 meses",
    },
    {
      name: "Ana Rodrigues",
      role: "Diretora de Planejamento",
      city: "Recife, PE",
      quote:
        "Os relatórios visuais da Pare Verde foram fundamentais para conquistar o apoio do prefeito. Agora somos referência em sustentabilidade urbana.",
      impact: "25% mais áreas verdes aprovadas",
    },
  ]

  const stats = [
    { number: "50+", label: "Cidades Atendidas", icon: Users },
    { number: "200%", label: "Aumento em Aprovações", icon: TrendingUp },
    { number: "4.9/5", label: "Satisfação dos Usuários", icon: Star },
    { number: "30 dias", label: "Tempo Médio de ROI", icon: TrendingUp },
  ]

  return (
    <section id="cases" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">Casos de Sucesso</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Gestores que já transformaram suas cidades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como secretários e coordenadores municipais estão usando a Pare Verde para conquistar resultados
            concretos e reconhecimento.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
              <Quote className="h-8 w-8 text-green-600 mb-4" />
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-green-600">{testimonial.city}</div>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg mt-3">
                  <div className="text-sm font-medium text-green-800">Resultado:</div>
                  <div className="text-sm text-green-700">{testimonial.impact}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Reconhecimento Nacional</h3>
            <p className="text-gray-600 mb-6">
              A Pare Verde foi destacada em publicações especializadas e eventos do setor
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-semibold text-gray-500">WRI Brasil Cidades</div>
              <div className="text-lg font-semibold text-gray-500">Frente Nacional de Prefeitos</div>
              <div className="text-lg font-semibold text-gray-500">CNM</div>
              <div className="text-lg font-semibold text-gray-500">BNDES InovaBrasil</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
