'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
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
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="font-serif font-bold text-xl text-zinc-100 tracking-tight hover:text-orange-400 transition-colors duration-200"
        >
          Lark<span className="text-orange-400">.</span>
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
            className="btn-ghost text-sm px-4 py-2"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors p-1"
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
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left py-2.5 text-zinc-300 hover:text-zinc-100 font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/images/Mercado_Resume.pdf"
              download
              className="mt-2 btn-ghost text-sm text-center"
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
