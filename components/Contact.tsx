'use client'

import { m } from 'motion/react'

const Contact = () => {
  return (
    <section id="contact" className="py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: text */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-6"
          >
            <p className="section-label">Contact</p>
            <h2 className="heading-serif text-4xl sm:text-5xl text-zinc-100 leading-tight">
              Let&apos;s talk about{' '}
              <span className="text-orange-400 italic">what you need.</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed max-w-md">
              I&apos;m actively looking for full-time roles. If you&apos;re building something
              interesting and think I could contribute, I&apos;d love to hear from you.
              No hard pitch — just an honest conversation.
            </p>

            <div className="space-y-3 text-sm text-zinc-500">
              <p>Open to remote and hybrid positions</p>
              <p>Available immediately</p>
              <p>Willing to relocate for the right role</p>
            </div>

            <a
              href="mailto:komercado31@gmail.com?subject=Let%27s%20Talk&body=Hi%20Karl%2C%0A%0A"
              className="btn-primary inline-flex"
            >
              Send me an email
            </a>

            <div className="flex gap-6 pt-2">
              <a
                href="https://github.com/KMercad0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-100 text-sm transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kmercad0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-100 text-sm transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="mailto:komercado31@gmail.com"
                className="text-zinc-500 hover:text-zinc-100 text-sm transition-colors duration-200"
              >
                komercado31@gmail.com
              </a>
            </div>
          </m.div>

          {/* Right: Cotton photo */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-3"
          >
            <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 aspect-[4/3]">
              <img
                src="/images/c3.png"
                alt="Cotton"
                width={600}
                height={450}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
            </div>
            <p className="text-xs font-mono text-zinc-600 text-center">
              Cotton also thinks you should reach out.
            </p>
          </m.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
