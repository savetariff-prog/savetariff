import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SaveTariff - Tariff Optimization & Trade Compliance Assistant',
  description: 'AI-powered tariff optimization and trade compliance platform for exporters, importers, and supply chain teams.',
  keywords: 'tariff, customs, trade compliance, duty optimization, import, export',
  authors: [{ name: 'SaveTariff' }],
  creator: 'SaveTariff',
  publisher: 'SaveTariff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
