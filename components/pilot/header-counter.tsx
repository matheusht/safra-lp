"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircle } from 'lucide-react'

export function HeaderCounter() {
  const [count, setCount] = useState(37)
  const [isDecreased, setIsDecreased] = useState(false)

  useEffect(() => {
    // Random decrease interval between 15 and 45 seconds
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev <= 3) return prev // Don't let it go below 3
        
        // Sometimes decrease by 1 or 2
        const decrease = Math.random() > 0.8 ? 2 : 1
        setIsDecreased(true)
        setTimeout(() => setIsDecreased(false), 2000)
        return prev - decrease
      })
    }, Math.floor(Math.random() * (45000 - 15000 + 1) + 15000))

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[100]">
      <div className="bg-[#880b0b] border-b border-white/5 relative overflow-hidden">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
        
        <div className="container mx-auto px-4 h-11 flex items-center justify-center">
          <div className="flex items-center space-x-3 text-sm">
            <div className="flex items-center space-x-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-5" style={{ backgroundColor: '#c10000' }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#c10000' }}></span>
              </span>
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">vivo</span>
            </div>
            
            <p className="text-white font-medium flex items-center tracking-tight">
              Restam 
              <AnimatePresence mode="wait">
                <motion.span
                  key={count}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  className="mx-2 font-black text-lg tabular-nums"
                  style={{ color: isDecreased ? '#10b981' : '#10b981' }} // emerald-500 for normal, custom red for decrease
                >
                  {count}
                </motion.span>
              </AnimatePresence>
              vagas de teste grátis
            </p>

            <div className="hidden md:flex items-center text-white text-xs gap-1 border-l border-white/10 ml-3 pl-3">
              <AlertCircle className="h-3 w-3" />
              <span>Alta demanda nas últimas 24h</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient blur under the bar */}
      <div className="h-4 bg-gradient-to-b from-slate-900/40 to-transparent pointer-events-none" />
    </div>
  )
}
