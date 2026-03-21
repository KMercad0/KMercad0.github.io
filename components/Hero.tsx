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
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Subtle orange radial glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[300px] sm:h-[400px] md:h-[600px] bg-primary/[0.04] rounded-full blur-[120px] sm:blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-primary/[0.03] rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 w-full py-10 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">

          {/* Left column */}
          <div className="md:col-span-7 flex flex-col items-start">
            {/* Headline */}
            <m.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.15}
              className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-on-surface leading-[1.1] tracking-tighter font-bold"
            >
              &ldquo;The inner{' '}
              <span className="italic text-primary">machinations</span>{' '}
              of my mind are an{' '}
              <a
                href="https://www.youtube.com/watch?v=KNZSXnrbs_k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary italic hover:text-primary-container transition-colors duration-200 underline decoration-primary/30 underline-offset-4 hover:decoration-primary/60"
              >
                enigma.
              </a>
              &rdquo;
            </m.h1>

            {/* Subtitle */}
            <m.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.25}
              className="mt-4 sm:mt-6 space-y-1 text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-lg"
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-on-surface font-semibold">Hi, I&apos;m Karl.</p>
              <p>I build things, learn things, and break things.</p>
            </m.div>

            {/* Dual CTAs */}
            <m.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.35}
              className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4"
            >
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#cotton" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#000000] font-medium text-sm tracking-wide hover:bg-white/90 transition-colors duration-200">
                View Cotton
              </a>
            </m.div>

            {/* About text block */}
            <m.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 sm:mt-6 max-w-3xl space-y-3 sm:space-y-4 text-on-surface-variant leading-relaxed text-sm sm:text-base md:text-lg"
            >
              <p>
                Been on the Computer ever since childhood.
              </p>
              <p>
                Played games, tweaked settings, messed around with programs.
              </p>
              <p>
                Self-taught, Self-paced, Curiosity-driven, and if I hyperfocus on a niche thing at 1 am then so be it.
              </p>
              <p>
                ADHD brain and habits. Either locked in or crashing out.
              </p>
              <p>
                I work well alone. I work better with the right people.
              </p>

              <p>
                Made an{' '}
                <a
                  href="https://www.youtube.com/watch?v=SVSnEFWp8NQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-container transition-colors duration-200 underline decoration-primary/30 underline-offset-4 hover:decoration-primary/60"
                >
                  Oath
                </a>
                , Made mistakes.{' '}
                <a
                  href="https://www.youtube.com/watch?v=fBE_2sHDt4E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-container transition-colors duration-200 underline decoration-primary/30 underline-offset-4 hover:decoration-primary/60"
                >
                  Pushing on through.
                </a>
              </p>
              <p>
                This isn't just a portfolio. It's me
              </p>
            </m.div>
          </div>

          {/* Right column — Cotton */}
          <m.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="md:col-span-5 flex justify-center md:justify-center relative mt-10 md:mt-[30px] pt-6 md:pt-0"
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative">
              {/* Speech bubble */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-10 bg-surface-container-highest border border-outline-variant/20 rounded-2xl px-5 py-3 max-w-xs">
                <p className="text-on-surface-variant text-sm font-mono leading-relaxed">
                  He made me pose for this. Again.
                </p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-surface-container-highest border-b border-r border-outline-variant/20 rotate-45" />
              </div>

              {/* Cotton photo in rotated frame */}
              <div className="bg-surface-container-lowest p-2 rounded-xl transform rotate-3 shadow-2xl shadow-black/50">
                <div className="w-56 h-64 sm:w-72 sm:h-80 md:w-80 md:h-[22rem] lg:w-[22rem] lg:h-[26rem] rounded-lg overflow-hidden">
                  <img
                    src="/images/c1.png"
                    alt="Cotton"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
