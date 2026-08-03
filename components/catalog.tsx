"use client"

import { useMemo, useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { categories, products, type CategoryId } from "@/lib/products"

type Filter = CategoryId | "todos"

export function Catalog() {
  const [filter, setFilter] = useState<Filter>("todos")

  const filtered = useMemo(
    () =>
      filter === "todos"
        ? products
        : products.filter((p) => p.category === filter),
    [filter],
  )

  const requestQuote = (name: string) => {
    window.dispatchEvent(new CustomEvent("artex:quote", { detail: name }))
    document
      .getElementById("cotizar")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const filters: { id: Filter; label: string }[] = [
    { id: "todos", label: "Todos" },
    ...categories.map((c) => ({ id: c.id as Filter, label: c.label })),
  ]

  return (
    <section id="catalogo" className="scroll-mt-20 bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Catálogo
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground text-balance md:text-5xl">
              Productos y servicios
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Explora algunas de nuestras líneas. Todo es personalizable: elige
              lo que necesitas y pídenos una cotización sin compromiso.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filter === f.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-primary/50",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {categories.find((c) => c.id === product.category)?.label}
                </span>
                <h3 className="mt-1.5 font-display text-lg font-semibold uppercase tracking-tight text-card-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <Button
                  variant="outline"
                  className="mt-4 w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => requestQuote(product.name)}
                >
                  <Plus className="size-4" />
                  Cotizar este producto
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
