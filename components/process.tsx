import { MessageSquare, PencilRuler, Factory, Truck } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Cuéntanos tu idea",
    description:
      "Envíanos tu solicitud con colores, cantidades y referencias. Te asesoramos sin costo.",
  },
  {
    icon: PencilRuler,
    title: "Diseño y muestra",
    description:
      "Creamos el diseño personalizado y te mostramos una propuesta antes de producir.",
  },
  {
    icon: Factory,
    title: "Confección",
    description:
      "Fabricamos tu pedido en nuestro taller con control de calidad en cada prenda.",
  },
  {
    icon: Truck,
    title: "Entrega",
    description:
      "Despachamos a todo Chile en los plazos acordados, listos para vestir a tu equipo.",
  },
]

export function Process() {
  return (
    <section
      id="proceso"
      className="scroll-mt-20 bg-secondary py-20 text-secondary-foreground md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Cómo trabajamos
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl">
            De la idea a la cancha en 4 pasos
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-4">
                <div className="inline-flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <step.icon className="size-6" />
                </div>
                <span className="font-display text-4xl font-bold text-secondary-foreground/20">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
