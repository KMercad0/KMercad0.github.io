'use client';

import { m } from 'motion/react';
import { Fragment } from 'react';
import StarfieldBackground from './StarfieldBackground';

/**
 * Skills — "tools of the trade"
 * Two-column list (category label left, separator-joined skills right).
 */

type Category = { label: string; skills: string[] };

const categories: Category[] = [
  { label: '// languages', skills: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Java', 'C#'] },
  { label: '// frontend',  skills: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'HTML5 / CSS3'] },
  { label: '// backend',   skills: ['Node.js', 'Express.js', 'PHP Laravel', '.NET 8', 'REST APIs', 'Server Actions'] },
  { label: '// databases', skills: ['PostgreSQL', 'Row-Level Security', 'PL/pgSQL', 'pgvector', 'MongoDB', 'Firebase'] },
  { label: '// ai / ml',   skills: ['Anthropic API', 'Voyage AI', 'RAG Pipelines', 'Vector Search', 'Structured JSON Output'] },
  { label: '// devops',    skills: ['Docker', 'GitHub Actions', 'CI/CD', 'Railway', 'Vercel', 'Ubuntu Linux', 'Self-hosted n8n'] },
  { label: '// tools',     skills: ['Git / GitHub', 'WordPress', 'Figma', 'Postman'] },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-background py-24 md:py-32 text-on-surface"
    >
      {/* Static starfield bg (shared with Education) */}
      <StarfieldBackground noiseId="skills-noise" />

      <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <m.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-12 md:mb-16"
        >
          <p className="font-mono uppercase tracking-[0.2em] text-primary text-[0.7rem]">
            // skills
          </p>
          <h2 className="mt-3 font-display font-semibold tracking-tight text-on-surface
                         text-4xl sm:text-5xl md:text-6xl">
            tools of the trade
          </h2>
        </m.header>

        {/* Categories */}
        <div className="divide-y divide-outline-variant/20">
          {categories.map((cat, i) => (
            <m.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: easeOut }}
              className="grid grid-cols-1 gap-4 py-6 md:grid-cols-12 md:py-8"
            >
              <div className="md:col-span-3">
                <span className="font-mono uppercase tracking-[0.2em] text-primary text-[0.75rem]">
                  {cat.label}
                </span>
              </div>

              <div className="md:col-span-9">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  {cat.skills.map((skill, j) => (
                    <Fragment key={skill}>
                      <span
                        className="font-mono uppercase tracking-[0.16em] text-on-surface-variant
                                   transition-colors duration-200 hover:text-on-surface text-[0.8rem]"
                      >
                        {skill}
                      </span>
                      {j < cat.skills.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="h-1 w-1 rounded-full bg-primary/40"
                        />
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
