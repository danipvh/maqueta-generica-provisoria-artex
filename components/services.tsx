import { Shirt, HardHat, Sparkles, Trophy, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Shirt,
    title: "Confección deportiva",
    description:
      "Camisetas, buzos y uniformes para clubes, colegios y equipos de fútbol, básquetbol y pádel.",
    image: "/images/servicio-deportiva.png",
  },
  {
    icon: HardHat,
    title: "Ropa de trabajo",
    description:
      "Overoles, delantales y uniformes corporativos resistentes, con normativa de seguridad.",
    image: "/images/servicio-trabajo.png",
  },
  {
    icon: Sparkles,
    title: "Bordados",
    description:
      "Bordado computarizado de logos, escudos y nombres con acabado de alta durabilidad.",
    image: "/images/servicio-bordados.png",
  },
  {
    icon: Trophy,
    title: "Artículos deportivos",
    description:
      "Implementos de entrenamiento, balones, trofeos y medallas para torneos y campeonatos.",
    image: "/images/servicio-articulos.png",
  },
]

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Lo que hacemos
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground text-balance md:text-5xl">
            Una fábrica, todas tus necesidades
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Desde el diseño hasta la entrega, cubrimos cada etapa de la
            confección personalizada.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <a
              key={service.title}
              href="#catalogo"
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md">
                  <service.icon className="size-5" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Ver productos
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
