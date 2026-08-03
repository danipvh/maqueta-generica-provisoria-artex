import { MapPin, Phone, Mail } from "lucide-react"
import { Logo } from "@/components/logo"

const columns = [
  {
    title: "Servicios",
    links: [
      { label: "Confección deportiva", href: "#servicios" },
      { label: "Ropa de trabajo", href: "#servicios" },
      { label: "Bordados", href: "#servicios" },
      { label: "Artículos deportivos", href: "#servicios" },
    ],
  },
  {
    title: "Navegación",
    links: [
      { label: "Catálogo", href: "#catalogo" },
      { label: "Cómo trabajamos", href: "#proceso" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Cotizar", href: "#cotizar" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo className="text-secondary-foreground" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary-foreground/70">
              35 años confeccionando ropa deportiva y de trabajo, bordados y
              artículos deportivos en Copiapó, para todo Chile.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-secondary-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-secondary-foreground">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-secondary-foreground/70">
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 shrink-0 text-primary" />
                Copiapó, Chile
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" />
                +56 9 0000 0000
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-primary" />
                ventas@artex.cl
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-secondary-foreground/10 pt-6 text-sm text-secondary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} ARTEX. Todos los derechos reservados.</p>
          <p>Confección personalizada · Hecho en Copiapó</p>
        </div>
      </div>
    </footer>
  )
}
