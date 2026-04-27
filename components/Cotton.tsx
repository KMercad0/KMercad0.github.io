'use client';

import { m } from 'motion/react';

/**
 * Cotton — "meet cotton."
 * Static bg + soft radial glow. 4-polaroid grid.
 */

const easeOut = [0.16, 1, 0.3, 1] as const;

type Photo = { src: string; caption: string; rotate: number };

const photos: Photo[] = [
  { src: '/images/c1.png', caption: 'cotton.jpg · 001', rotate: -2 },
  { src: '/images/c2.png', caption: 'cotton.jpg · 002', rotate:  1 },
  { src: '/images/c3.png', caption: 'cotton.jpg · 003', rotate: -1 },
  { src: '/images/c4.png', caption: 'cotton.jpg · 004', rotate:  2 },
];

export default function Cotton() {
  return (
    <section
      id="cotton"
      className="relative w-full overflow-hidden bg-background py-24 md:py-32 text-on-surface"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(255,145,87,0.06),transparent_70%)]"
      />

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
            // chief dog officer
          </p>
          <h2 className="font-display font-semibold tracking-tight text-on-surface text-4xl sm:text-5xl md:text-6xl">
            meet cotton.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-on-surface-variant text-base sm:text-lg">
            He runs operations. I just type.
          </p>
        </m.header>

        {/* Polaroid grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {photos.map((photo, i) => (
            <m.figure
              key={photo.src}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: photo.rotate }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: easeOut }}
              whileHover={{ rotate: 0 }}
              style={{ rotate: `${photo.rotate}deg` }}
              className="group rounded-sm border border-outline-variant/30 bg-surface-container-highest p-3 pb-10 transition-colors duration-300 hover:border-primary/40"
            >
              <img
                src={photo.src}
                alt={`Cotton — ${photo.caption}`}
                className="aspect-square w-full bg-surface-container object-cover"
                loading="lazy"
              />
              <figcaption className="mt-2 text-center font-mono uppercase tracking-widest text-on-surface-variant text-[0.65rem]">
                {photo.caption}
              </figcaption>
            </m.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
