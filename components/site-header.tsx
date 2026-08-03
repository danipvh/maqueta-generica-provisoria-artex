"use client"

import { useEffect, useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#nosotros", label: "Nosotros" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-secondary-foreground/10 bg-secondary/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
        <a href="#inicio" className="flex items-center" aria-label="ARTEX inicio">
          <Logo className="transition-opacity hover:opacity-85" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-primary",
                "text-secondary-foreground/90",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+56000000000"
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
              "text-secondary-foreground/90",
            )}
          >
            <Phone className="size-4" />
            +56 9 0000 0000
          </a>
          <Button nativeButton={false} render={<a href="#cotizar" />}>
            Cotizar ahora
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-md lg:hidden",
            "text-secondary-foreground",
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-base font-medium text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              className="mt-4"
              nativeButton={false}
              render={<a href="#cotizar" onClick={() => setOpen(false)} />}
            >
              Cotizar ahora
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
