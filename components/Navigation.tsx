'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="text-2xl font-headline italic text-white tracking-tighter hover:text-primary transition-colors duration-200"
        >
          KMercado
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="nav-link"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/images/Mercado_Resume.pdf"
            download
            className="bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed px-6 py-2 rounded-md font-label text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white/70 hover:text-white transition-colors p-1"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7h18M3 12h18M3 17h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0e0e0e]/95 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-screen-2xl mx-auto px-8 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left py-2.5 text-white/70 hover:text-primary font-label text-sm uppercase tracking-widest transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/images/Mercado_Resume.pdf"
              download
              className="mt-2 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed px-6 py-2 rounded-md font-label text-xs uppercase tracking-widest font-bold text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
