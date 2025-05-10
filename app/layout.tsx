import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Os 22 Arcanos Maior do Tarot',
  description: 'Desperte o poder dos Arcanos Maiores com Márcio Conexão Holístico!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
