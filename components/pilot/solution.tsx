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
          <span className="text-green-600 font-medium tracking-wide uppercase text-sm">Sua Caixa Preta</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
            A Ferramenta do Profissional
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Deixe o amadorismo para a concorrência. Eleve o padrão do seu serviço.
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
              className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors shadow-sm"
            >
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-slate-200 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlight: The PDF Report */}
        <div className="mt-24 bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
            <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-16 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">
                        "O fazendeiro disse que eu queimei a lavoura vizinha..."
                    </h3>
                    <p className="text-slate-700 text-lg mb-8 italic">
                        "...Abri o Safra Fácil, gerei o PDF do dia e mostrei: Vento 5km/h, Direção N->S. O vizinho tinha aplicado de trator no dia anterior. O fazendeiro pediu desculpa e fechou mais 500 hectares comigo."
                    </p>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden flex items-center justify-center">
                          <img src="pilot1.png" alt="Pilot profile picture" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-slate-900 font-semibold">João Silva</p>
                            <p className="text-slate-500 text-sm">Piloto em Sorriso, MT</p>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-100 p-8 flex items-center justify-center relative min-h-[400px]">
                     <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                     <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="bg-white w-full max-w-sm rounded shadow-xl border border-slate-200 skew-y-1 p-6 text-slate-900 text-xs font-mono relative z-10"
                     >
                        <div className="flex justify-between border-b border-slate-200 pb-2 mb-4">
                             <span className="font-bold text-lg">Safra Fácil</span>
                             <span>RELATÓRIO DE VOO</span>
                        </div>
                        <div className="space-y-2 mb-4">
                             <div className="flex justify-between"><span>DATA:</span> <span>07/12/2025</span></div>
                             <div className="flex justify-between"><span>PILOTO:</span> <span>JOÃO SILVA</span></div>
                        </div>
                        <div className="bg-green-50 p-2 rounded mb-2 border border-green-200 text-green-800">
                             <strong>STATUS: SEGURO (CONFORME)</strong>
                        </div>
                         <div className="space-y-2 text-[10px] text-slate-600">
                             <div>VENTO (50m): 12km/h (SE)</div>
                             <div>RAJADA MÁX: 18km/h</div>
                             <div>ÍNDICE KP: 2 (ESTÁVEL)</div>
                             <div>TEMPERATURA: 28°C</div>
                             <div>UMIDADE: 65%</div>
                        </div>
                         <div className="mt-6 border-t border-slate-200 pt-2 text-center text-slate-400">
                             Hash: 8f9s8d9f8s9d8f9s8d
                        </div>
                     </motion.div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
