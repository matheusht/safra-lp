"use client"

import { motion } from "framer-motion"
import { 
  CheckCircle2, 
  ArrowLeft, 
  PhoneCall, 
  Clock, 
  ShieldCheck,
  Plane
} from "lucide-react"
import Link from "next/link"

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-xl text-center">
        {/* Success Icon Animation */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 10, stiffness: 100 }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </motion.div>

        {/* Headline */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Solicitação Enviada!
          </h1>
          <p className="text-gray-500 text-lg md:text-xl mb-12">
            Obrigado pelo seu interesse. Nós recebemos seus dados e já estamos analisando sua solicitação.
          </p>
        </motion.div>

        {/* Steps Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-10 text-left relative overflow-hidden mb-10"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5">
             <Plane className="h-24 w-24 text-green-900" />
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            O que acontece agora?
          </h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Análise técnica</h4>
                <p className="text-sm text-gray-500">Nossa equipe técnica vai avaliar as informações da sua cultura e frota para preparar um diagnóstico personalizado.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                <PhoneCall className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Contato via WhatsApp/Ligação</h4>
                <p className="text-sm text-gray-500">Em até 24 horas úteis, você receberá um contato para conversarmos sobre sua operação.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-center gap-6 opacity-60">
             <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
               <ShieldCheck className="h-3 w-3" /> Compromisso com sua privacidade
             </div>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link 
            href="/pilot" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-green-600 font-bold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para o início
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
