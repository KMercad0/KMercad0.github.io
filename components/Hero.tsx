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

const values = [
  {
    title: 'Clean Code Evangelist',
    description: 'I refactor for fun. I know. I\'m seeking help.',
  },
  {
    title: 'Genuinely Curious',
    description: 'If I don\'t know it, give me a weekend.',
  },
  {
    title: 'Ships Fast',
    description: 'Done is better than perfect. But I still want it close.',
  },
  {
    title: 'Team Player',
    description: 'I write PRs that humans can actually review.',
  },
]

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 glow-hero overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-8 w-full py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* Left column */}
          <div className="md:col-span-7 flex flex-col items-start">
            {/* Headline */}
            <m.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.15}
              className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[1.1] tracking-tighter font-bold"
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
              className="mt-6 space-y-1 text-lg text-on-surface-variant leading-relaxed max-w-lg"
            >
              <p className="text-2xl sm:text-3xl text-on-surface font-semibold">Hi, I&apos;m Karl.</p>
              <p>I build things, learn things, and break things.</p>
            </m.div>

            {/* Dual CTAs */}
            <m.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.35}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#cotton" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-medium text-sm tracking-wide hover:bg-white/90 transition-colors duration-200">
                View Cotton
              </a>
            </m.div>
          </div>

          {/* Right column — Cotton */}
          <m.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="md:col-span-5 flex justify-center md:justify-end relative"
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative">
              {/* Speech bubble */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-10 bg-surface-container-highest border border-outline-variant/20 rounded-2xl px-5 py-3 max-w-xs">
                <p className="text-on-surface-variant text-sm font-mono leading-relaxed">
                  He made me pose for this. Again.
                </p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-surface-container-highest border-b border-r border-outline-variant/20 rotate-45" />
              </div>

              {/* Cotton photo in rotated frame */}
              <div className="bg-surface-container-lowest p-2 rounded-xl transform rotate-3 shadow-2xl shadow-black/50">
                <div className="w-64 h-72 sm:w-72 sm:h-80 rounded-lg overflow-hidden">
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

        {/* About text block */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24 max-w-3xl space-y-4 text-on-surface-variant leading-relaxed text-base sm:text-lg"
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

        {/* Value cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 + i * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="card p-5 space-y-2"
            >
              <h3 className="text-sm font-semibold text-on-surface">{v.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed italic">{v.description}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
