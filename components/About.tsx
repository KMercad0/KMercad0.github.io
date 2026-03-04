'use client'

import { m } from 'motion/react'

const values = [
  {
    title: 'Clean code, always',
    description:
      'I write code I\'m not embarrassed to show. Readable, maintainable, and documented where it matters.',
  },
  {
    title: 'Genuinely curious',
    description:
      'I look at problems from different angles before committing to a solution. The "why" matters as much as the "how".',
  },
  {
    title: 'Fast learner, real learner',
    description:
      'I don\'t just copy-paste from docs. I understand what I\'m building — and I\'m faster at it every week.',
  },
  {
    title: 'Collaborative by nature',
    description:
      'I ask questions, share what I know, and give honest feedback. Teams move faster when everyone communicates well.',
  },
]

const About = () => {
  return (
    <section id="about" className="py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Text */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-6"
          >
            <p className="section-label">About</p>
            <h2 className="heading-serif text-4xl sm:text-5xl text-zinc-100 leading-tight">
              A developer who actually{' '}
              <span className="text-orange-400 italic">gives a damn.</span>
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                I graduated from the University of the Philippines Los Baños with a
                degree in Computer Science. During my time there I built full-stack
                systems, worked on real-world problems, and got comfortable being
                the person who figures things out.
              </p>
              <p>
                I also spent time as a software engineer intern at Argon Software,
                where I got a real look at how professional teams operate — and
                confirmed that I genuinely enjoy the work, not just the idea of it.
              </p>
              <p>
                Outside of code, I live with Cotton — a very white, very opinionated
                dog who has strong feelings about my work schedule.
              </p>
            </div>
          </m.div>

          {/* Values grid + Cotton photo */}
          <div className="space-y-10">
            <m.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {values.map((v, i) => (
                <div
                  key={i}
                  className="card p-5 space-y-2"
                >
                  <h3 className="text-sm font-semibold text-zinc-100">{v.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </m.div>

            {/* Cotton photo */}
            <m.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
              className="relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 h-48"
            >
              <img
                src="/images/c2.png"
                alt="Cotton, my dog"
                width={800}
                height={400}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3 bg-zinc-950/80 backdrop-blur-sm text-zinc-400 text-xs font-mono px-2 py-1 rounded">
                Cotton, moral support
              </div>
            </m.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
