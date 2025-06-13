import { AlertTriangle, FileSpreadsheet, Clock, TrendingDown } from "lucide-react"

export function ProblemsSection() {
  const problems = [
    {
      icon: FileSpreadsheet,
      title: "Dados Fragmentados",
      description: "Planilhas desatualizadas e sistemas isolados impedem uma visão integrada da cidade.",
    },
    {
      icon: Clock,
      title: "Decisões Lentas",
      description: "Sem dados em tempo real, as intervenções chegam tarde demais para fazer diferença.",
    },
    {
      icon: TrendingDown,
      title: "Orçamento Desperdiçado",
      description: "Investimentos sem dados precisos resultam em baixo impacto e recursos mal aplicados.",
    },
    {
      icon: AlertTriangle,
      title: "Pressão Política",
      description: "Cidadãos exigem resultados, mas faltam ferramentas para justificar e priorizar ações.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Os desafios que todo gestor municipal enfrenta
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalhar com dados desatualizados e ferramentas isoladas está custando tempo, orçamento e impedindo o
            impacto real que sua cidade precisa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{"Você não está sozinho nessa luta"}</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">90%</div>
                <p className="text-gray-600">das cidades brasileiras carecem de dados urbanos integrados</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">0</div>
                <p className="text-gray-600">capitais oferecem condições adequadas para pedestres</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">18%</div>
                <p className="text-gray-600">dos municípios concluíram o Plano de Mobilidade Urbana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
