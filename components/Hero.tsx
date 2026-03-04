'use client'

import { m } from 'motion/react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
}

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text column */}
          <div className="space-y-8">
            <m.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="section-label"
            >
              Software Developer
            </m.p>

            <m.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="heading-serif text-5xl sm:text-6xl lg:text-7xl text-zinc-100 leading-[1.1]"
            >
              buh
            </m.h1>

            <m.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="text-lg text-zinc-400 leading-relaxed max-w-md"
            >
              Fresh CS graduate from UPLB. I build things that are fast,
              clean, and actually work. Open to full-time roles and ready
              to contribute from day one.
            </m.p>

            <m.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="flex flex-wrap gap-3"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="/images/Mercado_Resume.pdf" download className="btn-ghost">
                Download Resume
              </a>
            </m.div>
          </div>

          {/* Cotton hover reveal column */}
          <m.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="flex justify-center lg:justify-end"
          >
            <m.div
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden cursor-pointer"
              whileHover="revealed"
              initial="idle"
            >
              {/* Default state: abstract placeholder */}
              <m.div
                variants={{
                  idle: { opacity: 1 },
                  revealed: { opacity: 0 },
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-3"
              >
                <div className="w-16 h-16 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                  <svg className="w-8 h-8 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="text-zinc-600 text-sm font-mono tracking-wider">hover me</p>
              </m.div>

              {/* Cotton reveal */}
              <m.div
                variants={{
                  idle: { opacity: 0, scale: 0.96 },
                  revealed: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="absolute inset-0 bg-zinc-800 flex items-center justify-center"
              >
                <img
                  src="/images/c1.png"
                  alt="Cotton"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                {/* Fallback label shown via CSS if image missing */}
                <span className="absolute bottom-4 left-4 text-zinc-400 text-sm font-mono bg-zinc-900/80 px-2 py-1 rounded">
                  Cotton
                </span>
              </m.div>

              {/* Hover ring */}
              <m.div
                variants={{
                  idle: { opacity: 0 },
                  revealed: { opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-2xl ring-1 ring-orange-400/40 pointer-events-none"
              />
            </m.div>
          </m.div>

        </div>

        {/* Scroll indicator */}
        <div className="mt-24 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-zinc-600">
            <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
            <div className="w-px h-8 bg-zinc-800 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-4 bg-orange-400/40 animate-scroll-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
