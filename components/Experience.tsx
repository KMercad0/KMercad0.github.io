'use client'

import { m } from 'motion/react'

const entries = [
  {
    type: 'work',
    role: 'Software Engineer Intern',
    org: 'Argon Software',
    period: '2024',
    description:
      'Worked on real product features alongside a professional engineering team. Got hands-on experience with production codebases, code review culture, and shipping software under actual deadlines.',
  },
  {
    type: 'education',
    role: 'Bachelor of Science in Computer Science',
    org: 'University of the Philippines Los Baños',
    period: '2020 – 2024',
    description:
      'Built full-stack systems, worked with databases and APIs, and completed multiple team projects from design to deployment. Graduated with a solid foundation in algorithms, software engineering, and systems design.',
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-12 space-y-2"
        >
          <p className="section-label">Experience</p>
          <h2 className="heading-serif text-4xl sm:text-5xl text-zinc-100">
            Where I&apos;ve been
          </h2>
        </m.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-zinc-800 sm:left-4" />

          <div className="space-y-10">
            {entries.map((entry, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.4 }}
                className="relative pl-10 sm:pl-12"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-400 ring-4 ring-zinc-950" />
                </div>

                <div className="card p-6 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <h3 className="font-semibold text-zinc-100">{entry.role}</h3>
                      <p className="text-sm text-orange-400 font-medium">{entry.org}</p>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 shrink-0">{entry.period}</span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{entry.description}</p>
                  <span className="tag capitalize">{entry.type}</span>
                </div>
              </m.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
