'use client'

import { useState } from 'react'
import { m, AnimatePresence } from 'motion/react'

interface Project {
  id: number
  span: number
  title: string
  label: string
  description: string
  techStack: string[]
  image: string | null
  github: string | null
  live: string | null
  cottonPick?: boolean
}

const personalProjects: Project[] = [
  {
    id: 1,
    span: 8,
    title: 'MayHapotTabi',
    label: '// AI DOCUMENT CHAT',
    description:
      'Engineered a full RAG pipeline from scratch: PDF ingestion \u2192 400-token chunking \u2192 Voyage AI embeddings \u2192 pgvector cosine similarity search \u2192 Anthropic API streaming response, live on Railway + Vercel. Enforced per-user data isolation via Supabase Row Level Security \u2014 zero cross-user data leakage by design. Automated deployment with Docker multi-stage builds and GitHub Actions CI/CD.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'pgvector', 'Anthropic API', 'Docker', 'GitHub Actions'],
    image: '/images/mht4.png',
    github: 'https://github.com/KMercad0/MayHapotTabi',
    live: null,
  },
  {
    id: 2,
    span: 4,
    title: 'Peaks & Pedals',
    label: '// FREELANCE',
    description:
      'Production vacation rental website achieving Lighthouse scores of 100 desktop / 95 mobile. Full project ownership from UI to deployment with Next.js 15, React 19, Tailwind CSS 4, SEO via JSON-LD, OpenGraph, and AVIF/WebP image optimization.',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    image: '/images/peaksnpedals.png',
    github: 'https://github.com/KMercad0/Peaks-Pedals-Landing-Page',
    live: 'https://peaks-pedals-landing-page.vercel.app',
    cottonPick: true,
  },
]

const academicProjects: Project[] = [
  {
    id: 3,
    span: 4,
    title: 'uHOME-UPLB',
    label: '// GIS WEB APP',
    description:
      'GIS-enabled web app for UPLB Housing Office managing 50+ housing units with interactive map and real-time maintenance tracking.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Leaflet.js', 'Firebase'],
    image: '/images/uHOME_MAP.png',
    github: 'https://github.com/KMercad0/uHome-Public',
    live: null,
  },
  {
    id: 4,
    span: 4,
    title: 'DA E-commerce',
    label: '// MARKETPLACE',
    description:
      'MERN stack marketplace for the Department of Agriculture connecting farmers directly to consumers.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: '/images/100.png',
    github: 'https://github.com/CMSC100-1S2324/project-KMercad0',
    live: null,
  },
  {
    id: 5,
    span: 4,
    title: 'WebGL Bouncing Cube',
    label: '// GRAPHICS',
    description:
      'Interactive 3D simulation with collision detection, dynamic color changes, and camera controls.',
    techStack: ['WebGL', 'JavaScript'],
    image: '/images/161.png',
    github: 'https://github.com/CMSC161/Project',
    live: null,
  },
  {
    id: 6,
    span: 4,
    title: 'Elbi Donation System',
    label: '// MOBILE',
    description:
      'Flutter mobile app facilitating donations between donors and organizations with Firebase Auth.',
    techStack: ['Flutter', 'Dart', 'Firebase'],
    image: null,
    github: 'https://github.com/dominiclaserna/cmsc23Project',
    live: null,
  },
  {
    id: 7,
    span: 4,
    title: 'ELBeds',
    label: '// WEB APP',
    description:
      'Django-based accommodation search platform for Los Ba\u00f1os with filtering and comparison.',
    techStack: ['Python', 'Django', 'MongoDB'],
    image: null,
    github: 'https://github.com/rnarlo/ELBeds',
    live: null,
  },
]

/* ── Personal project card (asymmetric grid, full bg image) ── */
const ProjectCard = ({
  project,
  index,
  onImageClick,
}: {
  project: Project
  index: number
  onImageClick: (src: string) => void
}) => (
  <m.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
    viewport={{ once: true, amount: 0.3 }}
    className={`${project.span === 8 ? 'md:col-span-8' : 'md:col-span-4'} group relative overflow-hidden card p-8 flex flex-col min-h-[320px]`}
  >
    {/* Full background image */}
    {project.image && (
      <>
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-black/50 group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/40 transition-all duration-500" />
      </>
    )}

    {/* Ambient glow (no-image cards only) */}
    {!project.image && index === 0 && (
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] group-hover:bg-primary/10 transition-all duration-700" />
    )}

    <div className="relative z-10 flex flex-col h-full">
      <div className="mb-8">
        <span className="section-label mb-2 block">{project.label}</span>
        <h3 className={`heading-serif ${index === 0 ? 'text-4xl' : 'text-3xl'} mb-2`}>
          {project.title}
        </h3>
        {/* Cotton's Pick badge — inline below title */}
        {project.cottonPick && (
          <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mt-1">
            <span className="text-xs">🐾</span>
            <span className="text-xs font-label font-bold text-primary uppercase tracking-wider">Cotton&apos;s Pick</span>
          </div>
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
        <div className="flex items-center gap-6">
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
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-label text-sm font-bold text-on-surface-variant hover:text-primary transition-colors group/link"
            >
              LIVE SITE
              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>

    {/* Clickable overlay for lightbox on image cards */}
    {project.image && (
      <button
        className="absolute top-4 right-4 z-20 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
        onClick={() => project.image && onImageClick(project.image)}
        aria-label="Preview image"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
        </svg>
      </button>
    )}
  </m.div>
)

/* ── Academic project card (compact, uniform grid) ── */
const AcademicCard = ({
  project,
  index,
}: {
  project: Project
  index: number
}) => (
  <m.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
    viewport={{ once: true, amount: 0.3 }}
    className="group relative overflow-hidden card p-6 flex flex-col min-h-[260px]"
  >
    {/* Full background image */}
    {project.image && (
      <>
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/55 group-hover:from-black/85 group-hover:via-black/65 group-hover:to-black/45 transition-all duration-500" />
      </>
    )}

    <div className="relative z-10 flex flex-col h-full">
      <div className="mb-4">
        <span className="font-label text-[10px] text-primary tracking-[0.2em] uppercase mb-1.5 block">{project.label}</span>
        <h3 className="heading-serif text-2xl">{project.title}</h3>
      </div>

      <p className="font-body text-on-surface-variant text-sm mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((t) => (
            <span key={t} className="tag text-[0.65rem]">{t}</span>
          ))}
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-label text-xs font-bold text-primary group/link"
          >
            VIEW CODE
            <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        )}
      </div>
    </div>
  </m.div>
)

const Projects = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  return (
    <section id="projects" className="py-32">
      <div className="px-8 max-w-screen-2xl mx-auto">
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

        {/* Personal Projects */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h3 className="text-xs font-label text-primary uppercase tracking-[0.2em] mb-8 pl-4">Personal</h3>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          {personalProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onImageClick={setLightboxSrc} />
          ))}
        </div>

        {/* Academic Projects */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h3 className="text-xs font-label text-primary uppercase tracking-[0.2em] mb-8 pl-4">Academic</h3>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicProjects.map((project, i) => (
            <AcademicCard key={project.id} project={project} index={i} />
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
      </div>
    </section>
  )
}

export default Projects
