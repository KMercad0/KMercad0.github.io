'use client';

import { m } from 'motion/react';
import LazyVideo from './LazyVideo';

/**
 * About — "the human behind"
 * Merged About + Contact section. Anchor target for both nav links.
 */

const easeOut = [0.16, 1, 0.3, 1] as const;

const bio = [
  'Been on the Computer ever since childhood.',
  'Played games, tweaked settings, messed around with programs.',
  'Self-taught, Self-paced, Curiosity-driven, and if I hyperfocus on a niche thing at 1 am then so be it.',
  'ADHD brain. I go deep on one problem at a time, and I build the guardrails that make that dependable — written docs, and tests on the paths that cost money if they break.',
  'I work well alone. I work better with the right people.',
  'Made an Oath, Made mistakes. Pushing on through.',
];

const socials = [
  { label: 'GITHUB', handle: 'KMercad0', href: 'https://github.com/KMercad0' },
  { label: 'LINKEDIN', handle: 'kmercad0', href: 'https://www.linkedin.com/in/kmercad0' },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden py-24 md:py-32 text-on-surface"
    >
      {/* Video bg */}
      <LazyVideo
        src="/videos/about.mp4"
        mobileSrc="/videos/about_mobile.mp4"
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
          className="mb-16"
        >
          <p className="mb-2 font-mono uppercase tracking-[0.2em] text-primary text-[0.7rem]">
            // about
          </p>
          <h2 className="font-display font-semibold tracking-tight text-on-surface
                         text-4xl sm:text-5xl md:text-6xl">
            the human behind
          </h2>
        </m.header>

        {/* Body grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Left — bio */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15, ease: easeOut }}
            className="md:col-span-7"
          >
            <p className="mb-6 font-mono uppercase tracking-[0.2em] text-on-surface-variant text-[0.65rem]">
              // the story
            </p>

            <div className="max-w-2xl space-y-4 font-sans leading-relaxed text-on-surface-variant text-base sm:text-lg">
              {bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <p className="mt-8 max-w-2xl font-display italic text-on-surface text-xl sm:text-2xl">
              This isn&apos;t just a portfolio. It&apos;s me.
            </p>
          </m.div>

          {/* Right — contact */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3, ease: easeOut }}
            className="md:col-span-5"
          >
            <p className="mb-6 font-mono uppercase tracking-[0.2em] text-on-surface-variant text-[0.65rem]">
              // reach out
            </p>

            <h3 className="mb-8 font-display font-semibold tracking-tight text-on-surface text-3xl sm:text-4xl">
              say hi.
            </h3>

            {/* Email */}
            <div className="mb-10">
              <p className="mb-2 font-mono uppercase tracking-[0.2em] text-primary text-[0.65rem]">
                // email
              </p>
              <a
                href="mailto:komercado31@gmail.com?subject=Let%27s%20Talk&body=Hi%20Karl%2C%0A%0A"
                className="inline-block border-b border-primary/40 pb-1 font-sans text-on-surface
                           transition-colors duration-200 hover:border-primary text-lg sm:text-xl"
              >
                komercado31@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div>
              <p className="mb-3 font-mono uppercase tracking-[0.2em] text-primary text-[0.65rem]">
                // elsewhere
              </p>
              <div className="flex flex-col gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono uppercase tracking-[0.16em] text-on-surface-variant
                               transition-colors duration-200 hover:text-primary text-[0.85rem]"
                  >
                    <span aria-hidden="true">→ </span>
                    {s.label} · {s.handle}
                  </a>
                ))}
              </div>
            </div>

            {/* Resume CTA */}
            <div className="mt-10">
              <a
                href="/images/Mercado_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md border border-outline-variant/40
                           bg-black/20 px-5 py-3 font-mono uppercase tracking-[0.2em] text-on-surface
                           backdrop-blur-md transition-colors duration-200 hover:border-primary/60
                           text-xs"
              >
                [ download resume <span aria-hidden="true">↓</span> ]
              </a>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
