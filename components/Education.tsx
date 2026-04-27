'use client';

import { m } from 'motion/react';

/**
 * Education — "where it started"
 * Static background (no video). Sequential after Hero, before Projects.
 */

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full overflow-hidden bg-background py-24 md:py-32 text-on-surface"
    >
      {/* ── Static background layers ─────────────────────────────────────── */}

      {/* Star field — multi-layer radial dots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.6), transparent 50%),
            radial-gradient(1px 1px at 27% 73%, rgba(255,255,255,0.4), transparent 50%),
            radial-gradient(1.5px 1.5px at 41% 32%, rgba(255,255,255,0.7), transparent 50%),
            radial-gradient(1px 1px at 58% 81%, rgba(255,255,255,0.5), transparent 50%),
            radial-gradient(1px 1px at 67% 14%, rgba(255,255,255,0.6), transparent 50%),
            radial-gradient(1px 1px at 78% 56%, rgba(255,255,255,0.4), transparent 50%),
            radial-gradient(1.5px 1.5px at 88% 28%, rgba(255,255,255,0.7), transparent 50%),
            radial-gradient(1px 1px at 92% 88%, rgba(255,255,255,0.5), transparent 50%),
            radial-gradient(1px 1px at 5% 50%, rgba(255,255,255,0.5), transparent 50%),
            radial-gradient(1px 1px at 50% 8%, rgba(255,255,255,0.4), transparent 50%),
            radial-gradient(1px 1px at 63% 95%, rgba(255,255,255,0.45), transparent 50%),
            radial-gradient(2px 2px at 35% 55%, rgba(255,145,87,0.55), transparent 50%)
          `,
          backgroundSize: '100% 100%',
        }}
      />

      {/* Nebula glow — cool + warm blend */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 30% 40%, rgba(80,120,200,0.05), transparent 70%),
            radial-gradient(ellipse 40% 30% at 75% 65%, rgba(255,145,87,0.06), transparent 70%)
          `,
        }}
      />

      {/* Edge fade — bridges into adjacent video sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"
      />

      {/* Layer 1 — SVG fractal noise */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.04] mix-blend-screen"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="edu-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#edu-noise)" />
      </svg>

      {/* Layer 2 — diagonal pinstripe */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent 0 14px, rgba(255,255,255,0.015) 14px 15px)',
        }}
      />

      {/* Layer 3 — top-edge orange hairline */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        aria-hidden="true"
      />

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <m.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-mono uppercase tracking-widest text-primary text-[0.7rem]">
            // education
          </p>
          <h2 className="font-display font-semibold tracking-tight text-on-surface text-4xl sm:text-5xl md:text-6xl">
            where it started
          </h2>
        </m.header>

        {/* Card */}
        <m.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
          className="mx-auto max-w-3xl rounded-md border border-outline-variant/30 bg-surface-container/40 p-8 text-center md:p-10"
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span className="font-mono uppercase tracking-widest text-on-surface-variant text-[0.7rem]">
              // 2019 — 2025
            </span>
            <span className="font-mono uppercase tracking-widest text-primary text-[0.7rem]">
              BS COMPUTER SCIENCE
            </span>
          </div>

          <h3 className="mt-4 font-display font-semibold text-on-surface text-2xl sm:text-3xl">
            University of the Philippines Los Baños
          </h3>
          <p className="mt-1 font-sans text-on-surface-variant text-base">
            Institute of Computer Science, College of Arts and Sciences
          </p>


          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono uppercase tracking-widest text-on-surface-variant text-[0.65rem]">
            <span><span aria-hidden="true">→ </span>LOS BAÑOS, LAGUNA</span>
          </div>
        </m.article>
      </div>
    </section>
  );
}
