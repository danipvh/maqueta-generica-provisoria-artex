import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo-artex-blanco.png"
      alt="ARTEX"
      width={768}
      height={277}
      className={cn("h-10 w-auto object-contain md:h-12", className)}
    />
  )
}
