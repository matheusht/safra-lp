"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar } from "lucide-react"

export function StickyWhatsApp() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Link
      href="/agendar"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Agendar Diagnóstico"
    >
      <div className="flex items-center gap-2 sm:gap-3 py-3 px-4 sm:py-4 sm:px-6">
        <Calendar className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
        <span
          className={`font-semibold whitespace-nowrap overflow-hidden transition-all duration-300 text-sm sm:text-base ${isHovered ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
            }`}
        >
          Agendar Diagnóstico
        </span>
      </div>
    </Link>
  )
}
