import { Check } from "lucide-react"

const highlights = [
  "Taller propio con maquinaria profesional",
  "Diseño personalizado sin costo inicial",
  "Materiales técnicos de primera calidad",
  "Atención a clubes, colegios y empresas",
]

export function About() {
  return (
    <section id="nosotros" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src="/images/taller.png"
              alt="Taller de confección de ARTEX en Copiapó"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 rounded-xl bg-primary px-6 py-4 text-primary-foreground shadow-xl md:right-6">
            <span className="block font-display text-4xl font-bold leading-none">
              35
            </span>
            <span className="text-sm font-medium">años de trayectoria</span>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Sobre ARTEX
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground text-balance md:text-5xl">
            Tradición y calidad hecha en Copiapó
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            Desde hace más de tres décadas confeccionamos ropa deportiva y de
            trabajo para todo Chile. Combinamos la experiencia de nuestros
            maestros con maquinaria moderna para entregar prendas duraderas,
            cómodas y con el diseño exacto que tu equipo o empresa necesita.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm font-medium text-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
