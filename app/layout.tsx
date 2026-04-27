import type { Metadata } from 'next'
import { Geist, IBM_Plex_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import { Providers } from './providers'
import './globals.css'

const clashDisplay = localFont({
  src: '../public/fonts/ClashDisplay-Variable.woff2',
  variable: '--font-clash',
  display: 'swap',
  weight: '200 700',
  fallback: ['Georgia', 'serif'],
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

const plex = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex',
  display: 'swap',
  weight: ['400', '500'],
  fallback: ['Menlo', 'Consolas', 'monospace'],
})

export const metadata: Metadata = {
  title: 'KMercado',
  description:
    'Full-stack developer and CS graduate from UPLB. Building modern, user-focused applications.',
  keywords:
    'developer, portfolio, software engineer, web development, full-stack, React, Next.js, UPLB',
  openGraph: {
    title: 'KMercado — Software Developer',
    description:
      'Full-stack developer and fresh CS graduate from UPLB. Building modern, user-focused applications.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KMercado',
    description: 'Full-stack developer and CS graduate from UPLB.',
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
      className={`dark ${clashDisplay.variable} ${geist.variable} ${plex.variable}`}
    >
      <body className="bg-background text-on-surface antialiased font-sans selection:bg-primary selection:text-on-primary-fixed overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
