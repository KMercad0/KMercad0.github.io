import type { Metadata } from 'next'
import { Newsreader, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
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
  title: 'ENIGMA | Karl Mercado — Software Developer',
  description:
    'Full-stack developer and fresh CS graduate from UPLB. Building modern, user-focused applications.',
  keywords:
    'developer, portfolio, software engineer, web development, full-stack, React, Next.js, UPLB',
  openGraph: {
    title: 'ENIGMA | Karl Mercado — Software Developer',
    description:
      'Full-stack developer and fresh CS graduate from UPLB. Building modern, user-focused applications.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENIGMA | Karl Mercado — Software Developer',
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
      className={`dark ${newsreader.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background text-on-surface antialiased font-body selection:bg-primary selection:text-on-primary-fixed overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
