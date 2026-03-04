'use client'

import { useState } from 'react'
import { m, AnimatePresence } from 'motion/react'

type Category = 'all' | 'academic' | 'personal'

const projects = [
  // ── Spotlight-worthy (featured: true) ──────────────────────────────
  {
    id: 1,
    featured: true,
    category: 'academic' as Category,
    title: 'UHOME-UPLB: Housing Online Management & Evaluation System',
    description:
      'Full-stack web application for managing on-campus housing at UPLB. Integrates GIS mapping so administrators and beneficiaries can visualize housing assignments geographically. Built with a real-world use case and an actual user base.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    image: '/images/uHOME_MAP.png',
    github: 'https://github.com/KMercad0/uHome-Public',
    live: null,
  },
  {
    id: 4,
    featured: true,
    category: 'academic' as Category,
    title: 'Department of Agriculture E-commerce Platform',
    description:
      'Team project built for the Department of Agriculture — a MERN stack marketplace connecting farmers directly to consumers. Handles product listings, cart, and order management for a public-facing platform.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: '/images/100.png',
    github: 'https://github.com/CMSC100-1S2324/project-KMercad0',
    live: null,
  },

  // ── Grid projects ───────────────────────────────────────────────────
  {
    id: 2,
    featured: false,
    category: 'academic' as Category,
    title: 'WebGL Bouncing Cube Simulation',
    description:
      'Interactive 3D simulation built for a computer graphics course. Features a transparent enclosing cube with a bouncing inner cube — dynamic collision detection, color changes, and user controls for camera, lighting, and zoom.',
    techStack: ['WebGL', 'JavaScript'],
    image: '/images/161.png',
    github: 'https://github.com/CMSC161/Project',
    live: null,
  },
  {
    id: 3,
    featured: false,
    category: 'academic' as Category,
    title: 'Elbi Donation System',
    description:
      'Flutter mobile app that facilitates donations between donors and organizations. Supports user registration as donor or org, donation tracking, and Firebase Auth for secure authentication.',
    techStack: ['Flutter', 'Dart', 'Firebase'],
    image: null,
    github: 'https://github.com/dominiclaserna/cmsc23Project',
    live: null,
  },
  {
    id: 5,
    featured: false,
    category: 'academic' as Category,
    title: 'ELBeds — Accommodation Search Platform',
    description:
      'Django-based web app that helps visitors find accommodations in Los Baños, Laguna. Intuitive search interface with filtering and comparison features for local lodging options.',
    techStack: ['Python', 'Django', 'MongoDB'],
    image: null,
    github: 'https://github.com/rnarlo/ELBeds',
    live: null,
  },

  // ── Placeholder slots for 2 new personal projects ──────────────────
  {
    id: 7,
    featured: false,
    category: 'personal' as Category,
    title: 'New Project — Coming Soon',
    description: 'Details coming soon.',
    techStack: [],
    image: null,
    github: '',
    live: null,
  },
  {
    id: 8,
    featured: false,
    category: 'personal' as Category,
    title: 'New Project — Coming Soon',
    description: 'Details coming soon.',
    techStack: [],
    image: null,
    github: '',
    live: null,
  },
]

const filters: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Academic', value: 'academic' },
  { label: 'Personal', value: 'personal' },
]

const Projects = () => {
  const [filter, setFilter] = useState<Category>('all')
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  const filtered = projects.filter(
    (p) => filter === 'all' || p.category === filter
  )
  const featured = filtered.filter((p) => p.featured)
  const grid = filtered.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-12 space-y-4"
        >
          <p className="section-label">Work</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="heading-serif text-4xl sm:text-5xl text-zinc-100">
              Things I&apos;ve built
            </h2>
            {/* Category filter */}
            <div className="flex gap-2">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`text-sm font-medium px-3 py-1.5 rounded-lg border transition-colors duration-200 ${
                    filter === f.value
                      ? 'bg-orange-400/10 border-orange-400/40 text-orange-400'
                      : 'border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </m.div>

        {/* Featured spotlight */}
        {featured.length > 0 && (
          <div className="space-y-6 mb-10">
            {featured.map((project, i) => (
              <m.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="card overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Info */}
                  <div className="flex-1 p-8 lg:p-10 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="section-label">Featured</span>
                      <span className="text-zinc-700">·</span>
                      <span className="text-xs font-mono text-zinc-500 capitalize">{project.category}</span>
                    </div>
                    <h3 className="heading-serif text-2xl sm:text-3xl text-zinc-100 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200 font-medium"
                        >
                          View Code →
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-orange-400 hover:text-orange-300 transition-colors duration-200 font-medium"
                        >
                          Live Demo →
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Image */}
                  {project.image && (
                    <div
                      className="lg:w-80 xl:w-96 lg:flex-shrink-0 bg-zinc-800 cursor-zoom-in"
                      onClick={() => project.image && setLightboxSrc(project.image)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        loading={i === 0 ? 'eager' : 'lazy'}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </m.div>
            ))}
          </div>
        )}

        {/* Grid */}
        {grid.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {grid.map((project, i) => (
              <m.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.07 }}
                viewport={{ once: true, amount: 0.3 }}
                className="card p-6 space-y-4 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500 capitalize">{project.category}</span>
                </div>
                <h3 className="font-serif font-semibold text-lg text-zinc-100 leading-snug flex-1">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                {project.image && (
                  <div
                    className="rounded-lg overflow-hidden bg-zinc-800 h-32 cursor-zoom-in"
                    onClick={() => project.image && setLightboxSrc(project.image)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={200}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-200 font-medium mt-auto pt-1"
                  >
                    View Code →
                  </a>
                )}
              </m.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxSrc(null)}
          >
            <m.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={lightboxSrc}
              alt="Project preview"
              className="max-w-4xl max-h-[85vh] w-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightboxSrc(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
