"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { 
  Plane, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  User, 
  MessageSquare,
  ShieldCheck,
  Calendar
} from "lucide-react"
import Link from "next/link"
import { submitLead } from "@/app/actions/leads"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  phone: z.string().min(10, { message: "Informe um WhatsApp válido." }),
  droneModel: z.string().min(2, { message: "Informe o modelo do seu drone principal." }),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function AgendarPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    try {
      const result = await submitLead(data)
      if (result.success) {
        toast.success("Diagnóstico solicitado com sucesso!")
        router.push("/obrigado")
      } else {
        toast.error("Ocorreu um erro ao enviar seus dados. Tente novamente.")
      }
    } catch (error) {
      toast.error("Erro na conexão. Verifique sua internet.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Mini Header */}
      <nav className="bg-white border-b py-4">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link href="/pilot" className="flex items-center gap-2">
            <div className="bg-green-700 text-white font-bold text-lg px-2 py-1 rounded">
              <Plane className="h-5 w-5" />
            </div>
            <span className="font-bold text-gray-900 tracking-tight">Safra Fácil</span>
          </Link>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
            Diagnóstico Operacional
          </div>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-24">
        <div className="w-full max-w-xl">
          {/* Headline Section */}
          <div className="text-center mb-10">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-4"
            >
              <Calendar className="h-3 w-3" /> AGENDAMENTO DISPONÍVEL
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
              Solicite seu Diagnóstico <span className="text-green-600 underline decoration-green-200 underline-offset-4">Gratuito</span>
            </h1>
            <p className="text-gray-500 text-lg">
              Em menos de 24 horas, um especialista entrará em contato para analisar sua operação e otimizar seus resultados.
            </p>
          </div>

          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-10 relative overflow-hidden"
          >
            {/* Subtle Gradient background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl -mr-10 -mt-10 opacity-50" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              {/* Name field */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <User className="h-4 w-4 text-green-600" /> Nome Completo
                </label>
                <input
                  {...register("name")}
                  placeholder="Seu nome aqui"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-300 ring-red-100' : 'border-gray-200 ring-green-100'} focus:ring-4 focus:border-green-500 outline-none transition-all duration-300 bg-gray-50/50`}
                />
                {errors.name && <p className="mt-1 text-xs font-medium text-red-500">{errors.name.message}</p>}
              </div>

              {/* WhatsApp field */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-green-600" /> WhatsApp
                </label>
                <input
                  {...register("phone")}
                  placeholder="(44) 99999-9999"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-300 ring-red-100' : 'border-gray-200 ring-green-100'} focus:ring-4 focus:border-green-500 outline-none transition-all duration-300 bg-gray-50/50`}
                />
                {errors.phone && <p className="mt-1 text-xs font-medium text-red-500">{errors.phone.message}</p>}
              </div>

              {/* Drone Model field */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <Plane className="h-4 w-4 text-green-600" /> Modelo do Drone Principal
                </label>
                <input
                  {...register("droneModel")}
                  placeholder="Ex: Agras T40, XAG V40..."
                  className={`w-full px-4 py-3 rounded-xl border ${errors.droneModel ? 'border-red-300 ring-red-100' : 'border-gray-200 ring-green-100'} focus:ring-4 focus:border-green-500 outline-none transition-all duration-300 bg-gray-50/50`}
                />
                {errors.droneModel && <p className="mt-1 text-xs font-medium text-red-500">{errors.droneModel.message}</p>}
              </div>

              {/* Message field */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-green-600" /> Observação (Opcional)
                </label>
                <textarea
                  {...register("message")}
                  rows={3}
                  placeholder="Conte um pouco sobre sua frota ou necessidade atual..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 ring-green-100 focus:ring-4 focus:border-green-500 outline-none transition-all duration-300 bg-gray-50/50 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-lg"
              >
                {isSubmitting ? (
                  <div className="h-6 w-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Solicitar Diagnóstico <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest pt-2">
                <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> Seus dados estão seguros</span>
                <span>•</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Sem Compromisso</span>
              </div>
            </form>
          </motion.div>

          {/* Trust badges below form */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-50 grayscale">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-600 tracking-tighter italic">Safra Fácil PRO</span>
            </div>
          </div>
        </div>
      </main>

      {/* Mini Footer */}
      <footer className="bg-white border-t py-8 text-center">
        <p className="text-xs text-gray-400">© 2026 Safra Fácil - Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
