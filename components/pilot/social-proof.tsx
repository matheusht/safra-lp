"use client"

export function PilotSocialProof() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-500 mb-8 font-medium">CONFIADO POR PILOTOS PROFISSIONAIS EM TODO O BRASIL</p>
        
        <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Logo placeholders with text for now */}
             <div className="px-6 py-3 border border-slate-200 rounded text-slate-700 font-bold text-xl">AGRO DRONES</div>
             <div className="px-6 py-3 border border-slate-200 rounded text-slate-700 font-bold text-xl">FLY TEC</div>
             <div className="px-6 py-3 border border-slate-200 rounded text-slate-700 font-bold text-xl">TERRA VIEW</div>
             <div className="px-6 py-3 border border-slate-200 rounded text-slate-700 font-bold text-xl">PRECISÃO MT</div>
        </div>
      </div>
    </section>
  )
}
