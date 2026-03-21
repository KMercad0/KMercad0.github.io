'use client'

import { useState } from 'react'
import { m, AnimatePresence } from 'motion/react'

const projects = [
  {
    id: 1,
    featured: true,
    span: 8,
    title: 'UHOME-UPLB',
    label: '// FEATURED PROJECT',
    description:
      'Full-stack web application for managing on-campus housing at UPLB. Integrates GIS mapping so administrators and beneficiaries can visualize housing assignments geographically. Built with a real-world use case and an actual user base.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    image: '/images/uHOME_MAP.png',
    github: 'https://github.com/KMercad0/uHome-Public',
  },
  {
    id: 4,
    featured: true,
    span: 4,
    title: 'DA E-commerce',
    label: '// ACADEMIC',
    description:
      'MERN stack marketplace for the Department of Agriculture connecting farmers directly to consumers. Handles product listings, cart, and order management.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: '/images/100.png',
    github: 'https://github.com/CMSC100-1S2324/project-KMercad0',
  },
  {
    id: 2,
    featured: false,
    span: 4,
    title: 'WebGL Bouncing Cube',
    label: '// GRAPHICS',
    description:
      'Interactive 3D simulation with transparent enclosing cube and bouncing inner cube — dynamic collision detection, color changes, and camera controls.',
    techStack: ['WebGL', 'JavaScript'],
    image: '/images/161.png',
    github: 'https://github.com/CMSC161/Project',
  },
  {
    id: 3,
    featured: false,
    span: 8,
    title: 'Elbi Donation System',
    label: '// MOBILE',
    description:
      'Flutter mobile app facilitating donations between donors and organizations. Supports user registration, donation tracking, and Firebase Auth for secure authentication.',
    techStack: ['Flutter', 'Dart', 'Firebase'],
    image: null,
    github: 'https://github.com/dominiclaserna/cmsc23Project',
  },
  {
    id: 5,
    featured: false,
    span: 4,
    title: 'ELBeds',
    label: '// WEB APP',
    description:
      'Django-based accommodation search platform for visitors to Los Ba\u00f1os, Laguna with filtering and comparison features.',
    techStack: ['Python', 'Django', 'MongoDB'],
    image: null,
    github: 'https://github.com/rnarlo/ELBeds',
  },
]

const Projects = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  return (
    <section id="projects" className="py-32 px-8 max-w-screen-2xl mx-auto">
      {/* Header */}
      <m.header
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className="mb-20"
      >
         <span className="section-label mb-2 block">// Projects</span>

      </m.header>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {projects.map((project, i) => (
          <m.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
            className={`${project.span === 8 ? 'md:col-span-8' : 'md:col-span-4'} group relative overflow-hidden card p-8 flex flex-col`}
          >
            {/* Ambient glow on featured */}
            {project.featured && (
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] group-hover:bg-primary/10 transition-all duration-700" />
            )}

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <span className="section-label mb-2 block">{project.label}</span>
                  <h3 className={`heading-serif ${project.featured ? 'text-4xl' : 'text-3xl'} mb-4`}>
                    {project.title}
                  </h3>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-primary transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                )}
              </div>

              <p className="font-body text-on-surface-variant text-base mb-8 max-w-xl">
                {project.description}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-label text-sm font-bold text-primary group/link"
                  >
                    VIEW CODE
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Background image on featured */}
            {project.image && project.featured && (
              <div
                className="absolute bottom-0 right-0 w-1/3 h-full opacity-10 group-hover:opacity-20 transition-opacity cursor-zoom-in"
                onClick={() => project.image && setLightboxSrc(project.image)}
              >
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                />
              </div>
            )}
          </m.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-surface/90 backdrop-blur-sm flex items-center justify-center p-4"
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
          </m.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
