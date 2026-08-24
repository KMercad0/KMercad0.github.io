'use client';

import { m } from 'motion/react';
import LazyVideo from './LazyVideo';

/**
 * Experience — "where i've been"
 * Vertical timeline with left rail. Same studio-log aesthetic.
 */

type Entry = {
  period: string;
  role: string;
  org: string;
  bullets: string[];
};

const entries: Entry[] = [
  {
    period: 'Jan 2026 — Feb 2026',
    role: 'Web Developer (Freelance)',
    org: 'Peaks & Pedals Transient',
    bullets: [
      'Designed and deployed a production vacation rental website achieving Lighthouse scores of 100 desktop / 95 mobile.',
      'Gathered client requirements, iterated on design from feedback, managed domain setup and Vercel deployment independently.',
      'Built with Next.js 15, React 19, Tailwind CSS 4 — full project ownership from UI to deployment; SEO via JSON-LD, OpenGraph, AVIF/WebP optimization.',
    ],
  },
  {
    period: 'Jun 2024 — Aug 2024',
    role: 'Software Engineer Intern',
    org: 'Argon Software',
    bullets: [
      'Engineered a voucher management module in PHP Laravel — voucher creation, user assignment, validation logic with secure role-based access.',
      'Refactored existing CSS and Laravel Blade templates to unify landing page responsiveness across mobile and desktop breakpoints.',
    ],
  },
  {
    period: 'May 2024 — Jun 2024',
    role: 'Web Developer (Contract)',
    org: 'Municipal Government Office',
    bullets: [
      'Built and deployed a responsive WordPress government website organizing 50+ pages of public service content with accessible navigation and official branding.',
    ],
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden py-24 md:py-32 text-on-surface"
    >
      {/* Video bg */}
      <LazyVideo
        src="/videos/experience.mp4"
        mobileSrc="/videos/experience_mobile.mp4"
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/85 via-black/80 to-black/85"
      />

      <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <m.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-12 md:mb-16"
        >
          <p className="font-mono uppercase tracking-[0.2em] text-primary text-[0.7rem]">
            // experience
          </p>
          <h2 className="mt-3 font-display font-semibold tracking-tight text-on-surface
                         text-4xl sm:text-5xl md:text-6xl">
            where i&apos;ve been
          </h2>
        </m.header>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Vertical rail */}
          <div
            aria-hidden="true"
            className="absolute left-2 top-2 bottom-2 w-px bg-outline-variant/40 md:left-4"
          />

          {entries.map((entry, i) => (
            <m.article
              key={`${entry.org}-${entry.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: easeOut }}
              className="relative pb-12 pl-6 last:pb-0"
            >
              {/* Dot marker */}
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary
                           ring-4 ring-primary/15 md:-left-[5px]"
              />

              <p className="font-mono uppercase tracking-[0.2em] text-on-surface-variant text-[0.7rem]">
                {entry.period}
              </p>

              <h3 className="mt-1 mb-1 font-display font-semibold text-on-surface text-xl sm:text-2xl">
                {entry.role}
              </h3>

              <p className="mb-4 font-mono uppercase tracking-[0.16em] text-primary text-[0.75rem]">
                {entry.org}
              </p>

              <ul className="space-y-2 font-sans leading-relaxed text-on-surface-variant text-sm sm:text-base">
                {entry.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="relative pl-4
                               before:absolute before:left-0 before:top-2
                               before:h-1 before:w-1 before:bg-primary/50 before:content-['']"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}
