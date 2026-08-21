'use client';

import { m } from 'motion/react';
import StarfieldBackground from './StarfieldBackground';

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
      <StarfieldBackground noiseId="edu-noise" />

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
