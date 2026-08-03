const stats = [
  { value: "35+", label: "Años de experiencia" },
  { value: "100%", label: "Diseños personalizados" },
  { value: "Todo Chile", label: "Despacho nacional" },
  { value: "Copiapó", label: "Taller propio" },
]

export function StatsBar() {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center px-4 py-8 text-center"
          >
            <span className="font-display text-3xl font-bold uppercase tracking-tight text-primary md:text-4xl">
              {stat.value}
            </span>
            <span className="mt-1 text-sm font-medium text-secondary-foreground/70">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
