"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-xl animate-pulse delay-2000" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-xl animate-pulse delay-3000" />

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M0,100 Q150,50 300,100 T600,100"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M100,200 Q250,150 400,200 T700,200"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse delay-1000"
        />
      </svg>
    </div>
  )
}
