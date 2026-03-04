'use client'

import { m } from 'motion/react'

const categories = [
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML / CSS', 'WebGL'],
  },
  {
    label: 'Backend & Data',
    skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    label: 'Tools & Others',
    skills: ['Git / GitHub', 'Docker', 'AWS (basics)', 'Figma', 'Flutter / Dart', 'Python / Django'],
  },
]

const learning = ['Shopify Dev', 'UI/UX Design', 'DevOps', 'AI/ML basics', 'Testing (Vitest, Playwright)']

const Skills = () => {
  return (
    <section id="skills" className="py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">

        {/* Skills */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-10"
        >
          <div className="space-y-2">
            <p className="section-label">Skills</p>
            <h2 className="heading-serif text-4xl sm:text-5xl text-zinc-100">
              What I work with
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <m.div
                key={cat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
                viewport={{ once: true, amount: 0.4 }}
                className="card p-6 space-y-4"
              >
                <h3 className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Learning */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <p className="section-label">Learning</p>
            <h2 className="heading-serif text-3xl sm:text-4xl text-zinc-100">
              Currently picking up
            </h2>
            <p className="text-zinc-500 max-w-xl text-sm leading-relaxed">
              The job is to keep getting better. Here&apos;s what I&apos;m actively working on
              outside of projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {learning.map((skill) => (
              <span
                key={skill}
                className="inline-block font-mono text-xs border border-orange-400/30 text-orange-400/80 bg-orange-400/5 px-3 py-1.5 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </m.div>

      </div>
    </section>
  )
}

export default Skills
