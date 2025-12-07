import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
export const metadata: Metadata = {
  title: 'Safra Fácil - Monitoramento de Culturas via Satélite',
  description: 'Transforme dados de satélite da NASA em mapas de saúde das culturas que você pode entender. Detecte problemas antes que sejam visíveis no campo e otimize sua aplicação de fertilizantes.',
}

import { MetaPixel } from "@/components/meta-pixel"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
        <MetaPixel />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=835487246001840&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  )
}
