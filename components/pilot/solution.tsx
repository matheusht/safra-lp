"use client"

import { Button } from "@/components/ui/button"
import { FileText, Smartphone, WifiOff, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export function PilotSolution() {
  const features = [
    {
      icon: <FileText className="w-6 h-6 text-green-600" />,
      title: "Comprovante de Voo Seguro",
      description: "Gere um PDF auditável com data, hora, local e condições climáticas. Sua defesa contra acusações de deriva."
    },
    {
      icon: <WifiOff className="w-6 h-6 text-green-600" />,
      title: "Modo Offline",
      description: "Sem sinal no campo? Sem problemas. O app armazena os dados e sincroniza quando você reconectar."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
      title: "Blindagem Jurídica",
      description: "Histórico completo de todos os seus voos. Se o produtor questionar, você tem a prova na mão."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-green-600" />,
      title: "Fácil de Usar",
      description: "Interface pensada para quem tem a mão suja de graxa e insumo. Botões grandes, letras claras, zero frescura."
    }
  ]

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-wide uppercase text-sm bg-green-50 px-3 py-1 rounded-full">Sua Caixa Preta</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
            A Ferramenta do <span className="text-green-600 bg-green-50 px-2 rounded-lg transform -skew-x-3 inline-block">Profissional</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Deixe o <span className="line-through text-slate-400 decoration-red-400 decoration-2">amadorismo</span> para a concorrência. Eleve o padrão do seu serviço.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-slate-200 shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlight: The PDF Report */}
        <div className="mt-24 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Background pattern similar to CTA for cohesion, but dark mode here as contrast breaker */}
             <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 z-0" />
            
            <div className="grid lg:grid-cols-2 relative z-10">
                <div className="p-8 lg:p-16 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-white mb-6">
                        "O fazendeiro disse que eu queimei a lavoura vizinha..."
                    </h3>
                    <p className="text-slate-300 text-lg mb-8 italic border-l-4 border-green-500 pl-4">
                        "...Abri o Safra Fácil, gerei o PDF do dia e mostrei: Vento 5km/h, Direção N-{">"}S. O vizinho tinha aplicado de trator no dia anterior. O fazendeiro pediu desculpa e fechou mais 500 hectares comigo."
                    </p>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-700 rounded-full overflow-hidden flex items-center justify-center text-white font-bold border-2 border-slate-600">
                          JS
                        </div>
                        <div>
                            <p className="text-white font-semibold">João Silva</p>
                            <p className="text-slate-400 text-sm">Piloto em Sorriso, MT</p>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-800/50 p-8 flex items-center justify-center relative min-h-[400px]">
                     <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                     <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="bg-white w-full max-w-sm rounded shadow-2xl border border-slate-200 skew-y-1 p-6 text-slate-900 text-xs font-mono relative z-10 transform hover:skew-y-0 transition-transform duration-500"
                     >
                        <div className="flex justify-between border-b border-slate-200 pb-2 mb-4">
                             <span className="font-bold text-lg">Safra Fácil</span>
                             <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-500">RELATÓRIO DE VOO</span>
                        </div>
                        <div className="space-y-2 mb-4">
                             <div className="flex justify-between"><span>DATA:</span> <span className="font-bold">07/12/2025</span></div>
                             <div className="flex justify-between"><span>PILOTO:</span> <span className="font-bold">JOÃO SILVA</span></div>
                        </div>
                        <div className="bg-green-50 p-2 rounded mb-2 border border-green-200 text-green-800 text-center">
                             <strong>STATUS: SEGURO (CONFORME)</strong>
                        </div>
                         <div className="space-y-2 text-[10px] text-slate-600">
                             <div className="flex justify-between border-b border-slate-100 pb-1"><span>VENTO (50m):</span> <strong>12km/h (SE)</strong></div>
                             <div className="flex justify-between border-b border-slate-100 pb-1"><span>RAJADA MÁX:</span> <strong>18km/h</strong></div>
                             <div className="flex justify-between border-b border-slate-100 pb-1"><span>ÍNDICE KP:</span> <strong>2 (ESTÁVEL)</strong></div>
                             <div className="flex justify-between border-b border-slate-100 pb-1"><span>TEMPERATURA:</span> <span>28°C</span></div>
                             <div className="flex justify-between"><span>UMIDADE:</span> <span>65%</span></div>
                        </div>
                          <div className="mt-6 border-t border-slate-200 pt-2 text-center text-slate-400 text-[8px]">
                             Autenticação Digital: 8f9s8d9f8s9d8f9s8d7g6h5j4k3l2
                        </div>
                     </motion.div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
