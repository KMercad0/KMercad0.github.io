'use client';

import { m, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import LazyVideo from './LazyVideo';

/**
 * Projects — "studio log" / editorial.
 * Sequential to Hero. Same color tokens & type families.
 *
 * Tokens (Tailwind):
 *   primary #ff9157 · background #0e0e0e
 *   surface-container-high #1f1f1f · surface-container-highest #262626
 *   on-surface #ffffff · on-surface-variant #ababab · outline-variant #484848
 */

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Types & data
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

type Link = { label: 'VIEW CODE' | 'LIVE SITE'; href: string };

type Project = {
  id: string;
  label: string;          // mono eyebrow, e.g. "AI DOCUMENT CHAT"
  title: string;
  description: string;
  tech: string[];
  image?: string;
  links: Link[];
  span?: 4 | 6 | 8;        // md:col-span-{n}
  cottonsPick?: boolean;
};

const personal: Project[] = [
  {
    id: 'mayhapottabi',
    label: 'AI DOCUMENT CHAT',
    title: 'MayHapotTabi',
    description:
      'Full RAG pipeline: PDF ingestion → chunking → Voyage embeddings → pgvector search → Anthropic streaming. Deployed on Railway + Vercel with Supabase RLS for per-user isolation.',
    tech: ['React', 'TypeScript', 'Node.js', 'Supabase', 'pgvector', 'Anthropic API', 'Docker'],
    image: '/images/mht4.webp',
    links: [{ label: 'VIEW CODE', href: 'https://github.com/KMercad0/MayHapotTabi' }],
    span: 8,
  },
  {
    id: 'peaks-pedals',
    label: 'FREELANCE',
    title: 'Peaks & Pedals',
    description:
      'Production vacation rental site. Lighthouse 100/95. Next.js 15, React 19, Tailwind 4. SEO via JSON-LD + AVIF/WebP.',
    tech: ['Next.js', 'React', 'Tailwind'],
    image: '/images/peaksnpedals.webp',
    links: [
      { label: 'VIEW CODE', href: 'https://github.com/KMercad0/Peaks-Pedals-Landing-Page' },
      { label: 'LIVE SITE', href: 'https://peaksnpedals.com' },
    ],
    span: 4,
    cottonsPick: true,
  },
  {
    id: 'iwas-leak',
    label: 'PDF WATERMARK TOOL',
    title: 'Iwas-Leak',
    description:
      'Desktop tool batch-watermarking PDFs from CSV. Built for Bicol University ATLAS. Adjustable opacity + density.',
    tech: ['Python', 'PyMuPDF', 'pandas', 'tkinter', 'Pillow'],
    image: '/images/iwasleak.webp',
    links: [{ label: 'VIEW CODE', href: 'https://github.com/KMercad0/Iwas-Leak' }],
    span: 6,
  },
  {
    id: 'tuklas-nin-dunong',
    label: 'RESEARCH ARCHIVE',
    title: 'Tuklas nin Dunong',
    description:
      'Volunteer-built research paper archive for a local high school. Search by title, keyword, grade, year. Privacy-first per RA 10173.',
    tech: ['React', 'TypeScript', 'Supabase', 'Cloudflare R2', 'Tailwind', 'Vercel'],
    image: '/images/tuklasnindunong.webp',
    links: [
      { label: 'VIEW CODE', href: 'https://github.com/KMercad0/tuklasnindunong' },
      { label: 'LIVE SITE', href: 'https://tuklasnindunong.vercel.app' },
    ],
    span: 6,
  },
];

const academic: Project[] = [
  {
    id: 'uhome',
    label: 'GIS WEB APP',
    title: 'uHOME-UPLB',
    description: 'GIS-enabled housing app for UPLB managing 50+ units with Leaflet map.',
    tech: ['React', 'Node.js', 'MongoDB', 'Leaflet.js', 'Firebase'],
    image: '/images/uHOME_MAP.webp',
    links: [{ label: 'VIEW CODE', href: 'https://github.com/KMercad0/uHome-Public' }],
    span: 4,
  },
  {
    id: 'da-ecommerce',
    label: 'COURSEWORK',
    title: 'DA E-commerce',
    description: 'MERN marketplace connecting farmers to consumers.',
    tech: ['React', 'Node', 'Express', 'MongoDB'],
    image: '/images/100.webp',
    links: [{ label: 'VIEW CODE', href: 'https://github.com/CMSC100-1S2324/project-KMercad0' }],
    span: 4,
  },
  {
    id: 'webgl-cube',
    label: 'COURSEWORK',
    title: 'WebGL Bouncing Cube',
    description: '3D simulation with collision, color, camera controls.',
    tech: ['WebGL', 'JavaScript'],
    image: '/images/161.webp',
    links: [{ label: 'VIEW CODE', href: 'https://github.com/CMSC161/Project' }],
    span: 4,
  },
  {
    id: 'elbi-donation',
    label: 'COURSEWORK',
    title: 'Elbi Donation System',
    description: 'Flutter mobile app for donations with Firebase Auth.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    links: [{ label: 'VIEW CODE', href: 'https://github.com/dominiclaserna/cmsc23Project' }],
    span: 4,
  },
  {
    id: 'elbeds',
    label: 'COURSEWORK',
    title: 'ELBeds',
    description: 'Django accommodation search platform for Los Baños.',
    tech: ['Python', 'Django', 'MongoDB'],
    links: [{ label: 'VIEW CODE', href: 'https://github.com/sadgezy/CMSC-128-STALS' }],
    span: 4,
  },
];

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Icons
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

// Phosphor "PawPrint" — inline so we don't add a dep.
function PawPrint({ className = 'h-3 w-3' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M212,120a28,28,0,1,1-28-28A28,28,0,0,1,212,120ZM72,92A28,28,0,1,0,100,120,28,28,0,0,0,72,92Zm33.78-16.43a28,28,0,1,0-23.35-32A28,28,0,0,0,105.78,75.57Zm68.44,0a28,28,0,1,0-23.35-32A28,28,0,0,0,174.22,75.57Zm5.27,82.41A37.94,37.94,0,0,1,165.59,140a37.85,37.85,0,0,0-75.18,0,37.94,37.94,0,0,1-13.9,18,40,40,0,0,0,23.93,72,39.48,39.48,0,0,0,18.38-4.51,15.86,15.86,0,0,1,14.36,0A39.48,39.48,0,0,0,151.56,230a40,40,0,0,0,27.93-72.02Z" />
    </svg>
  );
}

function MagnifierIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function ArrowRight({ className = 'h-3 w-3' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Card
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function ProjectCard({
  project,
  variant,
  index,
  onOpenImage,
}: {
  project: Project;
  variant: 'personal' | 'academic';
  index: number;
  onOpenImage: (src: string, alt: string) => void;
}) {
  const isLargePersonal = variant === 'personal' && project.span === 8;
  const span = project.span ?? 4;
  const colSpan =
    span === 8 ? 'md:col-span-8' : span === 6 ? 'md:col-span-6' : 'md:col-span-4';

  const padding = variant === 'personal' ? 'p-6 md:p-8' : 'p-5';
  const minH = variant === 'personal' ? 'min-h-[320px]' : 'min-h-[260px]';

  const titleSize = isLargePersonal
    ? 'text-2xl sm:text-3xl'
    : variant === 'personal'
    ? 'text-xl sm:text-2xl'
    : 'text-xl sm:text-2xl';

  return (
    <m.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative col-span-1 ${colSpan} flex flex-col overflow-hidden rounded-md
                  border border-outline-variant/30 bg-surface-container-high/40 ${padding} ${minH}
                  transition-colors duration-300 hover:border-primary/50`}
    >
      {/* Background image + overlay */}
      {project.image && (
        <>
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10
                       bg-gradient-to-br from-black/90 via-black/75 to-black/55"
            aria-hidden="true"
          />
        </>
      )}

      {/* Image preview button */}
      {project.image && (
        <button
          type="button"
          onClick={() => onOpenImage(project.image!, project.title)}
          aria-label={`Preview ${project.title} image`}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center
                     rounded-md border border-outline-variant/30 bg-black/40 text-on-surface
                     opacity-0 backdrop-blur-sm transition-opacity duration-200
                     hover:bg-black/60 group-hover:opacity-100 focus-visible:opacity-100"
        >
          <MagnifierIcon />
        </button>
      )}

      {/* Top: label + title + cotton's pick + description */}
      <div className="relative">
        <div className="font-mono uppercase tracking-[0.2em] text-primary text-[0.65rem] mb-2">
          // {project.label}
        </div>

        <h3
          className={`font-display font-semibold leading-tight tracking-tight text-on-surface ${titleSize}`}
        >
          {project.title}
        </h3>

        {project.cottonsPick && (
          <div
            className="mt-3 inline-flex items-center gap-1.5 rounded-full
                       border border-primary/30 bg-primary/10 px-3 py-1"
          >
            <PawPrint className="h-3 w-3 text-primary" />
            <span className="font-mono uppercase tracking-[0.18em] text-primary text-[0.65rem]">
              Cotton&apos;s Pick
            </span>
          </div>
        )}

        <p className="mt-4 max-w-xl font-sans leading-relaxed text-on-surface-variant text-sm sm:text-base mb-6">
          {project.description}
        </p>
      </div>

      {/* Bottom: tech + links */}
      <div className="relative mt-auto flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-sm bg-surface-container-highest/60 px-2 py-0.5
                         font-mono uppercase tracking-[0.14em] text-on-surface-variant text-[0.65rem]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-5">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group/link inline-flex items-center gap-1.5
                         font-mono font-semibold uppercase tracking-[0.16em] text-primary text-[0.7rem]"
            >
              <span>{link.label}</span>
              <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover/link:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </m.article>
  );
}

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Section
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function Projects() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden py-24 md:py-32 text-on-surface"
    >
      {/* Video bg */}
      <LazyVideo
        src="/videos/projects_mobile.mp4"
        mobileSrc="/videos/projects_mobile.mp4"
      />

      {/* Dark overlay for card readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/85 via-black/80 to-black/85"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <m.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="font-mono uppercase tracking-[0.2em] text-primary text-[0.7rem]">
            // projects
          </p>
          <h2 className="mt-3 font-display font-semibold tracking-tight text-on-surface
                         text-4xl sm:text-5xl md:text-6xl">
            selected work
          </h2>
        </m.header>

        {/* Personal */}
        <div className="mb-8 pl-4 font-mono uppercase tracking-[0.2em] text-primary text-xs">
          // personal
        </div>
        <div className="mb-20 grid grid-cols-1 gap-4 md:grid-cols-12">
          {personal.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              variant="personal"
              index={i}
              onOpenImage={(src, alt) => setLightbox({ src, alt })}
            />
          ))}
        </div>

        {/* Academic */}
        <div className="mb-8 pl-4 font-mono uppercase tracking-[0.2em] text-primary text-xs">
          // academic
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {academic.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              variant="academic"
              index={i}
              onOpenImage={(src, alt) => setLightbox({ src, alt })}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <m.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 flex items-center justify-center
                       bg-black/90 p-4 backdrop-blur-sm"
          >
            <m.img
              key={lightbox.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-4xl rounded-md object-contain"
            />
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
