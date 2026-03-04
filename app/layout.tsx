import type { Metadata } from 'next'
import { Fraunces, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  style: ['normal', 'italic'],
  fallback: ['Georgia', 'serif'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
  fallback: ['Menlo', 'Consolas', 'monospace'],
})

export const metadata: Metadata = {
  title: 'Karl Mercado — Software Developer',
  description:
    'Full-stack developer and fresh CS graduate from UPLB. Building modern, user-focused applications.',
  keywords:
    'developer, portfolio, software engineer, web development, full-stack, React, Next.js, UPLB',
  openGraph: {
    title: 'Karl Mercado — Software Developer',
    description:
      'Full-stack developer and fresh CS graduate from UPLB. Building modern, user-focused applications.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karl Mercado — Software Developer',
    description: 'Full-stack developer and fresh CS graduate from UPLB.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-zinc-950 text-zinc-100 antialiased font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
