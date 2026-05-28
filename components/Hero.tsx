'use client';

import { m } from 'motion/react';
import LazyVideo from './LazyVideo';

/**
 * Hero — "Studio log" / editorial.
 * Full-viewport hero with looping video bg, dark overlay, and editorial composition.
 *
 * Color tokens (Tailwind):
 *   primary #ff9157 · background #0e0e0e
 *   surface-container-high #1f1f1f · surface-container-highest #262626
 *   on-surface #ffffff · on-surface-variant #ababab · outline-variant #484848
 *
 * Type:
 *   Display: Clash Display
 *   Body: Geist (next/font/google)
 *   Mono: IBM Plex Mono (next/font/google)
 */

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-background text-on-surface"
    >
      {/* Looping video background */}
      <LazyVideo
        eager
        src="/videos/hero.mp4"
        mobileSrc="/videos/hero_mobile.mp4"
      />

      {/* Dark gradient overlay for legibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10
                   bg-[linear-gradient(180deg,rgba(0,0,0,0.60)_0%,rgba(0,0,0,0.40)_45%,rgba(0,0,0,0.70)_100%)]"
      />

      {/* Foreground grid */}
      <div className="relative z-20 flex min-h-screen flex-col p-6 sm:p-8">
        {/* Top-left wordmark */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-1"
        >
          <span className="font-display text-2xl italic leading-none text-on-surface">
            KMercado<span className="text-primary">.</span>
          </span>
        </m.div>

        {/* Spacer pushes the bottom row down */}
        <div className="flex-1" />

        {/* Bottom row: copy left, polaroid right */}
        <div className="flex w-full items-end justify-between gap-6">
          {/* Bottom-left content stack */}
          <div className="max-w-3xl">
            <m.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
              className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-primary"
            >
              // now — making things work
            </m.p>

            <m.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: easeOut }}
              className="mt-3 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-on-surface
                         sm:text-6xl md:text-7xl lg:text-8xl"
            >
              lock in, crash out, repeat
            </m.h1>

            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-5 max-w-md font-sans text-base text-on-surface-variant sm:text-lg"
            >
              <p>A human in this AI of a world.</p>
              <p className="line-through">I also use it though</p>
            </m.div>

            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2
                           rounded-md border border-outline-variant/40 bg-black/20 px-5 py-3
                           font-mono text-[0.75rem] uppercase tracking-[0.18em] text-on-surface
                           backdrop-blur-md transition-all duration-200
                           hover:border-primary/60 hover:bg-black/35 hover:ring-1 hover:ring-primary/40"
              >
                <span>projects</span>
                <span className="text-primary transition-transform duration-200 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </a>
              <a
                href="#about"
                className="group inline-flex items-center justify-center gap-2
                           rounded-md border border-outline-variant/40 bg-black/20 px-5 py-3
                           font-mono text-[0.75rem] uppercase tracking-[0.18em] text-on-surface
                           backdrop-blur-md transition-all duration-200
                           hover:border-primary/60 hover:bg-black/35 hover:ring-1 hover:ring-primary/40"
              >
                <span>contact</span>
                <span className="text-primary transition-transform duration-200 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </a>
            </m.div>
          </div>

          {/* Bottom-right polaroid */}
          <m.figure
            initial={{ opacity: 0, scale: 0.94, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
            className="hidden w-44 shrink-0 rounded-md bg-surface-container-high p-2 shadow-md sm:block sm:w-52"
            style={{ transformOrigin: 'bottom right' }}
          >
            <div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-surface-container-highest">
              <img
                src="/images/c1.webp"
                alt="Cotton — Chief Dog Officer"
                width={540}
                height={720}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <figcaption className="mt-2 flex items-center justify-between font-mono text-[0.65rem] text-on-surface-variant">
              <span>[ cotton.jpg ]</span>
              <span className="text-primary">CDO</span>
            </figcaption>
          </m.figure>
        </div>
      </div>
    </section>
  );
}
