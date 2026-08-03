"use client"

import { useEffect, useRef, useState, type FormEvent } from "react"
import { CheckCircle2, Mail, MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/products"

const contactInfo = [
  { icon: MapPin, label: "Ubicación", value: "Copiapó, Región de Atacama, Chile" },
  { icon: Phone, label: "Teléfono", value: "+56 9 0000 0000" },
  { icon: Mail, label: "Correo", value: "ventas@artex.cl" },
  { icon: Clock, label: "Horario", value: "Lun a Vie · 9:00 – 18:30" },
]

const fieldClass =
  "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"

export function QuoteSection() {
  const [sent, setSent] = useState(false)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const serviceRef = useRef<HTMLSelectElement>(null)

  useEffect(() => {
    const handler = (e: Event) => {
      const name = (e as CustomEvent<string>).detail
      if (messageRef.current) {
        messageRef.current.value = `Hola, me interesa cotizar: ${name}. `
        messageRef.current.focus()
      }
    }
    window.addEventListener("artex:quote", handler)
    return () => window.removeEventListener("artex:quote", handler)
  }, [])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="cotizar" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Cotización
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground text-balance md:text-5xl">
              Pide tu presupuesto
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Cuéntanos qué necesitas y te enviaremos una propuesta a tu medida,
              sin compromiso. Respondemos dentro de 24 horas hábiles.
            </p>

            <ul className="mt-8 space-y-4">
              {contactInfo.map((info) => (
                <li key={info.label} className="flex items-start gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                    <info.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {info.value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="size-14 text-primary" />
                  <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight text-card-foreground">
                    ¡Solicitud enviada!
                  </h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    Gracias por contactarte con ARTEX. Revisaremos tu solicitud y
                    te enviaremos una cotización a la brevedad.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSent(false)}
                  >
                    Enviar otra solicitud
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Nombre y apellido
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        placeholder="Juan Pérez"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="empresa"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Empresa o club
                      </label>
                      <input
                        id="empresa"
                        name="empresa"
                        type="text"
                        placeholder="Club Deportivo"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Correo electrónico
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="tucorreo@ejemplo.cl"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telefono"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Teléfono
                      </label>
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        placeholder="+56 9 ..."
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="servicio"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Tipo de servicio
                      </label>
                      <select
                        id="servicio"
                        name="servicio"
                        ref={serviceRef}
                        defaultValue=""
                        className={fieldClass}
                      >
                        <option value="" disabled>
                          Selecciona una opción
                        </option>
                        {categories.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.label}
                          </option>
                        ))}
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="cantidad"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Cantidad aprox.
                      </label>
                      <input
                        id="cantidad"
                        name="cantidad"
                        type="number"
                        min={1}
                        placeholder="Ej. 20 unidades"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Detalle de tu solicitud
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      ref={messageRef}
                      rows={4}
                      required
                      placeholder="Cuéntanos colores, diseños, tallas y todo lo que necesites."
                      className={fieldClass}
                    />
                  </div>

                  <Button type="submit" size="lg" className="h-12 w-full text-base">
                    Enviar solicitud de cotización
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Al enviar aceptas ser contactado por el equipo de ARTEX.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
