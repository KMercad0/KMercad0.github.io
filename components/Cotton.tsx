'use client'

import { m } from 'motion/react'

const photos = [
  { src: '/images/c1.png', alt: 'Cotton posing', rotate: '-2deg' },
  { src: '/images/c2.png', alt: 'Cotton being cute', rotate: '3deg' },
  { src: '/images/c3.png', alt: 'Cotton chilling', rotate: '-1deg' },
  { src: '/images/c4.png', alt: 'Cotton vibing', rotate: '2deg' },
]

const Cotton = () => {
  return (
    <section id="cotton" className="py-32 px-8 max-w-screen-2xl mx-auto">
      <m.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-12 space-y-4"
      >
        <span className="section-label block">// cotton</span>
        <h2 className="heading-serif text-4xl sm:text-5xl text-on-surface leading-tight">
          Chief Morale{' '}
          <span className="serif-italic text-primary">Officer.</span>
        </h2>
        <p className="text-on-surface-variant text-base sm:text-lg max-w-xl">
          Every dev needs a rubber duck. Mine just happens to bark, steal socks,
          and demand walks at the worst possible time.
        </p>
      </m.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.map((photo, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group"
          >
            <div
              className="bg-surface-container-lowest p-2 rounded-xl shadow-xl shadow-black/30 transition-transform duration-300 group-hover:rotate-0 cotton-glow"
              style={{ transform: `rotate(${photo.rotate})` }}
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  )
}

export default Cotton
