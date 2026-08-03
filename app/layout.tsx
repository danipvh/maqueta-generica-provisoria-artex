import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ARTEX | Confección de ropa deportiva, de trabajo y bordados',
  description:
    'Con 35 años de experiencia, ARTEX confecciona ropa deportiva y de trabajo, realiza bordados personalizados y vende artículos deportivos. Ubicados en Copiapó, despachamos a todo Chile. Solicita tu cotización.',
  keywords: [
    'confección ropa deportiva',
    'ropa de trabajo',
    'bordados',
    'uniformes',
    'artículos deportivos',
    'Copiapó',
    'Chile',
    'ARTEX',
  ],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#c62828',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`light ${inter.variable} ${oswald.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
