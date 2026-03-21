'use client'

import { m } from 'motion/react'

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8 max-w-screen-2xl mx-auto">
      <m.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-surface-container-lowest rounded-2xl p-12 md:p-24 relative overflow-hidden"
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[160px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Cotton */}
          <div className="w-32 h-32 bg-white rounded-full mb-8 overflow-hidden border-4 border-surface-container-high shadow-xl shadow-black">
            <img
              src="/images/c3.png"
              alt="Cotton"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Speech bubble */}
          <div className="bg-surface-container-highest text-white/90 font-label text-sm px-4 py-2 rounded-lg mb-8 relative">
            &quot;Waiting for the next big build.&quot;
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-surface-container-highest rotate-45" />
          </div>

          <h2 className="heading-serif text-5xl md:text-6xl mb-8 leading-tight">
            Ready to start something <span className="serif-italic">impactful</span>?
          </h2>

          <a
            href="mailto:komercado31@gmail.com?subject=Let%27s%20Talk&body=Hi%20Karl%2C%0A%0A"
            className="inline-flex items-center gap-6 group mb-8"
          >
            <span className="text-2xl md:text-3xl font-headline border-b-2 border-primary pb-2 group-hover:pr-8 transition-all duration-300">
              komercado31@gmail.com
            </span>
          </a>

          <div className="flex gap-8 mt-4">
            <a
              href="https://github.com/KMercad0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors duration-300 font-label text-xs uppercase tracking-widest"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kmercad0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors duration-300 font-label text-xs uppercase tracking-widest"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </m.div>
    </section>
  )
}

export default Contact
