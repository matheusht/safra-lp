"use client"

import { Card } from "@/components/ui/card"
import { AlertCircle, XCircle } from "lucide-react"
import { motion } from "framer-motion"

export function PilotProblems() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            O Risco Invisível que <br />
            <span className="text-red-500">Mata Seus Lucros</span>
          </h2>
          <p className="text-xl text-slate-600">
            Você confia no aplicativo de tempo padrão? Ele mostra o vento no <strong>solo</strong>. 
            Seu drone voa a 50 metros. Você está voando cego.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* The "Normal Service" - Negative */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 relative group shadow-sm"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <XCircle className="w-12 h-12 text-slate-900" />
            </div>
            
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-slate-300 rounded-full"/>
              Aplicativo Comum
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-slate-600">Mostra vento a <strong>2 metros</strong> (nível do solo)</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-slate-600">Ignora microclimas e rajadas de altitude</span>
              </li>
               <li className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-slate-600">Sem registro oficial: sua palavra contra a do fazendeiro</span>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-red-50 border border-red-100 rounded-lg">
              <p className="text-red-600 font-medium text-sm">
                Consequência: Derivas inesperados, prejuízo na lavoura vizinha e risco de processo.
              </p>
            </div>
          </motion.div>

          {/* The Safra Fácil Way - Positive */}
           <motion.div
            whileHover={{ y: -5 }}
            className="bg-white border border-green-200 rounded-2xl p-8 relative overflow-hidden group hover:border-green-500 transition-colors shadow-lg shadow-green-900/5"
          >
             <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500" />
            
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-green-500 rounded-full"/>
              Safra Fácil Pilot
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-1 bg-green-100 rounded-full">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                </div>
                <span className="text-slate-700">Vento em multicamadas: <strong>50m, 100m, 150m</strong></span>
              </li>
               <li className="flex items-start gap-3">
                <div className="p-1 bg-green-100 rounded-full">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                </div>
                <span className="text-slate-700">Alertas de Rajada (Gusts) e KP Index (GPS)</span>
              </li>
               <li className="flex items-start gap-3">
                <div className="p-1 bg-green-100 rounded-full">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                </div>
                <span className="text-slate-700">Comprovante de segurança gerado em 1 clique</span>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
              <p className="text-emerald-700 font-medium text-sm">
                Resultado: Voo seguro, equipamento protegido e cliente mais confiante.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
