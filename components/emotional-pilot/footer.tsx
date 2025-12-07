"use client"

import React from 'react'
import { Instagram, Linkedin, Facebook } from "lucide-react"

export function PilotFooter() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">SafeSpray</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Ajudando pilotos agrícolas a voarem com mais segurança, eficiência e conformidade jurídica em todo o Brasil.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Produto</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Para Empresas</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Casos de Sucesso</a></li>
            </ul>
          </div>

           <div>
            <h4 className="text-white font-semibold mb-6">Recursos</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Guia de Legislação</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Manual de Boas Práticas</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Suporte Técnico</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-6">Conformidade</h4>
             <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3 opacity-70 hover:opacity-100 transition-opacity cursor-help">
                    {/* Placeholder for ANAC Logo */}
                    <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500">ANAC</div>
                    <span className="text-slate-400 text-xs">Atende RBAC 137</span>
                </div>
                <div className="flex items-center space-x-3 opacity-70 hover:opacity-100 transition-opacity cursor-help">
                     {/* Placeholder for MAPA Logo */}
                    <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500">MAPA</div>
                    <span className="text-slate-400 text-xs">Atende IN 02/2008</span>
                </div>
             </div>
          </div>

        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
            <p>&copy; 2024 SafeSpray Tecnologia Agrícola Ltda. Todos os direitos reservados. CNPJ: 12.345.678/0001-90</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            </div>
        </div>
      </div>
    </footer>
  )
}
