"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Loader2, ArrowRight, TreePine, Thermometer } from "lucide-react"
import { motion } from "framer-motion"

interface VideoPlayerProps {
  src: string
  poster?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  className?: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  autoplay = false,
  muted = true,
  loop = true,
  className = ""
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(muted)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoading(false)
      setDuration(video.duration)
      if (autoplay) {
        video.play().then(() => setIsPlaying(true)).catch(() => setHasError(true))
      }
    }

    const handleTimeUpdate = () => {
      const progress = (video.currentTime / video.duration) * 100
      setProgress(progress)
      setCurrentTime(video.currentTime)
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleError = () => {
      setHasError(true)
      setIsLoading(false)
    }

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('error', handleError)
    document.addEventListener('fullscreenchange', handleFullscreenChange)

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('error', handleError)
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [autoplay])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play().catch(() => setHasError(true))
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current
    const progressBar = progressRef.current
    if (!video || !progressBar) return

    const rect = progressBar.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const newTime = (clickX / rect.width) * duration
    video.currentTime = newTime
  }

  const toggleFullscreen = () => {
    const video = videoRef.current
    if (!video) return

    if (!document.fullscreenElement) {
      video.requestFullscreen().catch(console.error)
    } else {
      document.exitFullscreen().catch(console.error)
    }
  }

  const restart = () => {
    const video = videoRef.current
    if (!video) return

    video.currentTime = 0
    if (!isPlaying) {
      video.play().catch(() => setHasError(true))
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case ' ':
      case 'k':
        e.preventDefault()
        togglePlay()
        break
      case 'm':
        e.preventDefault()
        toggleMute()
        break
      case 'f':
        e.preventDefault()
        toggleFullscreen()
        break
      case 'r':
        e.preventDefault()
        restart()
        break
    }
  }

  if (hasError) {
    return (
      <div className={`relative bg-muted rounded-lg overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center bg-background/80">
          <div className="text-center space-y-4">
            <div className="text-muted-foreground">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Video unavailable</h3>
            <p className="text-sm text-muted-foreground">Unable to load video content</p>
            <Button onClick={() => window.location.reload()} variant="outline" size="sm">
              <RotateCcw className="w-4 h-4 mr-2" />
              Retry
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div 
      className={`relative group bg-black rounded-lg overflow-hidden ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="application"
      aria-label="Video player"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={isMuted}
        loop={loop}
        className="w-full h-full object-cover"
        playsInline
        preload="metadata"
      />

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80">
          <div className="text-center space-y-4">
            <Loader2 className="w-8 h-8 animate-spin mx-auto" />
            <p className="text-sm text-muted-foreground">Loading video...</p>
          </div>
        </div>
      )}

      <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            onClick={togglePlay}
            size="lg"
            className="bg-background/80 hover:bg-background/90 text-foreground backdrop-blur-sm"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
          </Button>
        </div>

        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-transform duration-300 ${showControls ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="space-y-2">
            <div 
              ref={progressRef}
              className="w-full h-1 bg-white/30 rounded-full cursor-pointer"
              onClick={handleProgressClick}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Video progress"
            >
              <div 
                className="h-full bg-white rounded-full transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-white text-sm">
              <div className="flex items-center space-x-2">
                <Button
                  onClick={togglePlay}
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20 p-1 h-auto"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>

                <Button
                  onClick={toggleMute}
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20 p-1 h-auto"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </Button>

                <span className="text-xs">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  onClick={restart}
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20 p-1 h-auto"
                  aria-label="Restart video"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>

                <Button
                  onClick={toggleFullscreen}
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20 p-1 h-auto"
                  aria-label="Toggle fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1,
        ease: "easeOut" as const,
      },
    },
  }

  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants}>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-base">
                🌱 Plataforma de Sustentabilidade Urbana
              </Badge>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforme sua cidade com <span className="text-green-600">dados inteligentes</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                A Pare Verde unifica mapas de calor, cobertura verde e auditorias de acessibilidade em um dashboard
                único. Tome decisões baseadas em dados e construa o legado de uma cidade mais sustentável e inclusiva.
              </p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8" asChild>
                <a href="https://pareverde.vercel.app" target="_blank" rel="noopener noreferrer">
                  Acessar Plataforma
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-green-600 text-green-600 hover:bg-green-50"
                asChild
              >
                <a href="https://pareverde.vercel.app" target="_blank" rel="noopener noreferrer">
                  Agendar Demo
                </a>
              </Button>
            </motion.div>

            <motion.div className="flex items-center space-x-8 pt-4" variants={itemVariants}>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Hospedado no Brasil</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Conforme LGPD</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {!isVideoLoaded ? (
                <div className="aspect-video">
                  <Skeleton className="w-full h-full" />
                </div>
              ) : (
                <VideoPlayer
                  src="/pareverde-admin.mp4"
                  poster="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=675&fit=crop"
                  autoplay={true}
                  className="aspect-video"
                />
              )}
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
              variants={floatingVariants}
              initial="hidden"
              animate="visible"
            >
              <TreePine className="h-6 w-6" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-emerald-500 text-white p-3 rounded-full shadow-lg"
              variants={floatingVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
            >
              <Thermometer className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
