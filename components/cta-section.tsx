import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Clock, Gift } from "lucide-react"

export function CtaSection() {
  const benefits = [
    "Auditoria completa da sua cidade",
    "Identificação de 3 oportunidades prioritárias",
    "Relatório executivo personalizado",
    "Sessão de planejamento estratégico",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-white/20 text-white hover:bg-white/20 mb-6">
            <Gift className="h-4 w-4 mr-2" />
            Oferta Limitada
          </Badge>

          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Transforme sua cidade em 30 dias</h2>

          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Solicite sua <strong>Auditoria Urbana Gratuita</strong> e descubra como a Pare Verde pode identificar as
            oportunidades mais impactantes para sua gestão.
          </p>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-6">O que você recebe gratuitamente:</h3>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                  <span className="text-left">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center space-x-2 text-green-200 mb-6">
              <Clock className="h-5 w-5" />
              <span>Processo completo em apenas 7 dias úteis</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4" asChild>
              <a href="https://pareverde.vercel.app" target="_blank" rel="noopener noreferrer">
                Acessar Plataforma Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
              asChild
            >
              <a href="https://pareverde.vercel.app" target="_blank" rel="noopener noreferrer">
                Ver Demo ao Vivo
              </a>
            </Button>
          </div>

          <div className="text-center text-green-200">
            <p className="mb-2">
              <strong>Sem compromisso.</strong> Sem custos ocultos. Sem necessidade de equipe técnica.
            </p>
            <p className="text-sm">✓ Hospedado no Brasil ✓ Conforme LGPD ✓ Suporte em português</p>
          </div>
        </div>
      </div>
    </section>
  )
}
