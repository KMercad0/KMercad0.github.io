'use client'

import { m } from 'motion/react'

const entries = [
  {
    role: 'Web Developer (Freelance)',
    org: 'Peaks & Pedals Transient',
    period: 'Jan 2026 – Feb 2026',
    bullets: [
      'Designed and deployed a production vacation rental website achieving Lighthouse scores of 100 desktop / 95 mobile',
      'Gathered client requirements, iterated on design based on feedback, managed domain setup and Vercel deployment independently',
      'Built with Next.js 15, React 19, Tailwind CSS 4 — full project ownership from UI to deployment; SEO via JSON-LD, OpenGraph, and AVIF/WebP image optimization',
    ],
  },
  {
    role: 'Software Engineer Intern',
    org: 'Argon Software',
    period: 'Jun 2024 – Aug 2024',
    bullets: [
      'Engineered a voucher management module in PHP Laravel — handling voucher creation, user assignment, and validation logic with secure role-based access',
      'Improved mobile responsiveness of the platform\'s landing page across screen sizes using CSS and Laravel Blade templates',
    ],
  },
  {
    role: 'Web Developer (Contract)',
    org: 'Municipal Government Office',
    period: 'May 2024 – Jun 2024',
    bullets: [
      'Built and deployed a responsive WordPress government website, organizing 50+ pages of public service content with accessible navigation and official branding',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-8 max-w-screen-2xl mx-auto">
      <m.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
        className="mb-16"
      >
        <span className="section-label mb-2 block">// experience</span>
 
      </m.div>

      <div className="space-y-8">
        {entries.map((entry, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="card p-8 group"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
              <div>
                <h3 className="text-xl font-headline font-bold text-on-surface">{entry.role}</h3>
                <p className="text-primary font-label text-sm uppercase tracking-wider mt-1">{entry.org}</p>
              </div>
              <span className="text-xs font-label text-on-surface-variant uppercase tracking-wider shrink-0">{entry.period}</span>
            </div>
            <ul className="space-y-2">
              {entry.bullets.map((bullet, j) => (
                <li key={j} className="text-on-surface-variant text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary/40 before:rounded-full">
                  {bullet}
                </li>
              ))}
            </ul>
          </m.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
