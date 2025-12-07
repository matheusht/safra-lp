"use client"

export function PilotSocialProof() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-500 mb-8 font-bold tracking-widest text-sm">CONFIADO POR PILOTOS PROFISSIONAIS EM TODO O BRASIL</p>
        
        <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Logo placeholders with text for now */}
             <div className="px-6 py-3 border border-slate-300 rounded-lg text-slate-400 font-black text-xl bg-white">AGRO DRONES</div>
             <div className="px-6 py-3 border border-slate-300 rounded-lg text-slate-400 font-black text-xl bg-white">FLY TEC</div>
             <div className="px-6 py-3 border border-slate-300 rounded-lg text-slate-400 font-black text-xl bg-white">TERRA VIEW</div>
             <div className="px-6 py-3 border border-slate-300 rounded-lg text-slate-400 font-black text-xl bg-white">PRECISÃO MT</div>
        </div>
      </div>
    </section>
  )
}
