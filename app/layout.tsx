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

const SITE_URL = 'https://kmercad0.github.io'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'KMercado',
  description:
    'Full-stack developer and CS graduate from UPLB. Building modern, user-focused applications.',
  keywords:
    'developer, portfolio, software engineer, web development, full-stack, React, Next.js, UPLB',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'KMercado — Software Developer',
    description:
      'Full-stack developer and fresh CS graduate from UPLB. Building modern, user-focused applications.',
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'KMercado',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'KMercado — Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KMercado',
    description: 'Full-stack developer and CS graduate from UPLB.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
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
      <head>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'KMercado',
              url: SITE_URL,
              jobTitle: 'Software Developer',
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'University of the Philippines Los Baños',
              },
              sameAs: [
                'https://github.com/KMercad0',
                'https://www.linkedin.com/in/kmercad0',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-background text-on-surface antialiased font-sans selection:bg-primary selection:text-on-primary-fixed overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-on-primary focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
