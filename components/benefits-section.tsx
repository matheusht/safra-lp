import { TrendingUp, Clock, DollarSign, Award, Users, Zap } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Decisões 20x Mais Rápidas",
      description: "Identifique problemas e oportunidades em minutos, não meses.",
      metric: "20x",
      color: "text-green-600",
    },
    {
      icon: DollarSign,
      title: "ROI Comprovado",
      description: "Otimize investimentos focando onde o impacto é maior.",
      metric: "+15%",
      color: "text-emerald-600",
    },
    {
      icon: TrendingUp,
      title: "Aprovação de Projetos",
      description: "Aumente aprovações com dados visuais convincentes.",
      metric: "+25%",
      color: "text-green-600",
    },
    {
      icon: Users,
      title: "Satisfação dos Cidadãos",
      description: "Melhore a qualidade de vida com intervenções precisas.",
      metric: "+30%",
      color: "text-emerald-600",
    },
    {
      icon: Award,
      title: "Conformidade Legal",
      description: "Atenda exigências do Plano de Mobilidade e ODS-11.",
      metric: "100%",
      color: "text-green-600",
    },
    {
      icon: Zap,
      title: "Implementação Rápida",
      description: "Comece a usar em dias, não meses de treinamento.",
      metric: "7 dias",
      color: "text-emerald-600",
    },
  ]

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Resultados que transformam cidades</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gestores municipais que usam a Pare Verde conseguem resultados mensuráveis e conquistam o apoio necessário
            para expandir seus projetos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <benefit.icon className="h-6 w-6 text-green-600" />
                </div>
                <div className={`text-2xl font-bold ${benefit.color}`}>{benefit.metric}</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {"De problema a solução: sua jornada de transformação"}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">😰</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Antes</h4>
              <p className="text-gray-600 text-sm">Dados fragmentados, decisões lentas, pressão política constante</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Durante</h4>
              <p className="text-gray-600 text-sm">Implementação rápida, primeiros insights, equipe empoderada</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Depois</h4>
              <p className="text-gray-600 text-sm">Cidade modelo, reconhecimento, legado de sustentabilidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
