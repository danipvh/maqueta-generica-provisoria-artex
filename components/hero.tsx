"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight, Pause, Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/images/hero-futbol.png",
    alt: "Equipo de fútbol con uniformes deportivos personalizados ARTEX",
    eyebrow: "Ropa deportiva",
    title: "Confección que",
    accent: " lleva tus colores",
    description:
      "Camisetas, shorts, buzos y equipaciones completas diseñadas para representar a tu equipo dentro y fuera de la cancha.",
  },
  {
    image: "/images/hero-mineria.png",
    alt: "Trabajadores de minería con ropa corporativa y elementos reflectantes",
    eyebrow: "Ropa corporativa y minera",
    title: "Uniformes para",
    accent: " grandes desafíos",
    description:
      "Vestuario corporativo resistente y funcional para faenas, empresas y equipos de trabajo que necesitan seguridad e identidad.",
  },
  {
    image: "/images/hero-salud.png",
    alt: "Profesionales de la salud con uniformes clínicos coordinados",
    eyebrow: "Uniformes clínicos",
    title: "Comodidad que",
    accent: " inspira confianza",
    description:
      "Uniformes para profesionales de la salud pensados para entregar comodidad, presencia y libertad de movimiento en cada jornada.",
  },
  {
    image: "/images/hero-implementos.png",
    alt: "Balones, conos, aros de entrenamiento y trofeos deportivos",
    eyebrow: "Implementos deportivos",
    title: "Todo para",
    accent: " entrenar y competir",
    description:
      "Balones, conos, aros, trofeos y equipamiento para clubes, colegios, academias y organizaciones deportivas.",
  },
  {
    image: "/images/hero-bordados.png",
    alt: "Máquina realizando un bordado profesional sobre tela azul",
    eyebrow: "Bordados personalizados",
    title: "Tu identidad en",
    accent: " cada detalle",
    description:
      "Bordados de alta precisión para uniformes, prendas corporativas y deportivas con terminaciones durables y profesionales.",
  },
]

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [isPlaying])

  const goToSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length)
  }

  const slide = slides[activeSlide]

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-secondary"
      aria-roledescription="carrusel"
      aria-label="Productos y servicios ARTEX"
    >
      <div className="absolute inset-0 -z-10" aria-live="off">
        {slides.map((item, index) => (
          <img
            key={item.image}
            src={item.image}
            alt={index === activeSlide ? item.alt : ""}
            aria-hidden={index !== activeSlide}
            className={cn(
              "absolute inset-0 size-full object-cover transition-opacity duration-700 motion-reduce:transition-none",
              index === activeSlide ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        <div className="absolute inset-0 bg-secondary/75 md:bg-secondary/60" />
        <div className="absolute inset-y-0 left-0 w-full bg-secondary/45 md:w-3/5" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 pt-28 pb-32 md:px-6 md:pb-28">
        <div key={activeSlide} className="max-w-2xl animate-in fade-in slide-in-from-bottom-3 duration-500 motion-reduce:animate-none">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary-foreground/20 bg-secondary/45 px-4 py-1.5 text-sm font-medium text-secondary-foreground backdrop-blur-sm">
            <Star className="size-4 fill-primary text-primary" />
            {slide.eyebrow}
          </div>

          <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-secondary-foreground text-balance sm:text-6xl md:text-7xl">
            {slide.title}
            <span className="text-primary">{slide.accent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondary-foreground/85 text-pretty">
            {slide.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="h-12 px-7 text-base" nativeButton={false} render={<a href="#cotizar" />}>
              Solicitar cotización
              <ArrowRight className="size-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-secondary-foreground/30 bg-secondary/20 px-7 text-base text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
              nativeButton={false}
              render={<a href="#catalogo" />}
            >
              Ver catálogo
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-20 flex justify-center">
        <div className="flex items-center gap-2 rounded-full bg-secondary/55 px-3 py-2 backdrop-blur-sm">
          {slides.map((item, index) => (
            <button
              key={item.eyebrow}
              type="button"
              aria-label={`Ver ${item.eyebrow}`}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activeSlide === index ? "w-8 bg-primary" : "w-2 bg-secondary-foreground/35 hover:bg-secondary-foreground/65",
              )}
            />
          ))}
        </div>
      </div>

    </section>
  )
}
