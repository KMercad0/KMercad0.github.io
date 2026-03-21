'use client'

import { m } from 'motion/react'

const categories = [
  {
    label: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Java', 'C', 'Dart'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5 / CSS3', 'Framer Motion'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'PHP Laravel', 'REST APIs'],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase (pgvector)', 'MariaDB', 'Firebase'],
  },
  {
    label: 'AI / ML',
    skills: ['Anthropic API', 'Voyage AI', 'RAG Pipelines', 'LLM Integration', 'Vector Search'],
  },
  {
    label: 'DevOps',
    skills: ['Docker', 'GitHub Actions', 'CI/CD', 'Railway', 'Vercel', 'Ubuntu Linux'],
  },
  {
    label: 'Tools',
    skills: ['Git / GitHub', 'WordPress', 'Figma', 'Postman'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-32">
      <div className="px-8 max-w-screen-2xl mx-auto">
      <m.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
        className="mb-16"
      >
        <span className="section-label mb-2 block">// Skills</span>
      </m.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <m.div
            key={cat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
            viewport={{ once: true, amount: 0.4 }}
            className="card p-6 space-y-4"
          >
            <h3 className="text-xs font-label text-primary uppercase tracking-[0.2em]">
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
      </div>
    </section>
  )
}

export default Skills
