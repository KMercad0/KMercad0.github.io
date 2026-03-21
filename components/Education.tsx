'use client'

import { m } from 'motion/react'

const Education = () => {
  return (
    <section id="education" className="py-20 border-t border-b border-outline-variant/10 bg-surface-container-high/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="section-label mb-8">// education</p>
          <a
            href="https://uplb.edu.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 card px-8 py-6 hover:border-primary/40 transition-colors duration-200 group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
            </div>
            <div>
              <p className="text-base sm:text-lg font-semibold text-on-surface group-hover:text-primary transition-colors duration-200">
                University of the Philippines Los Ba&ntilde;os
              </p>
              <p className="text-sm text-on-surface-variant mt-1">
                BS Computer Science &middot; 2019&ndash;2026
              </p>
            </div>
            <svg className="w-5 h-5 text-on-surface-variant/40 group-hover:text-primary/60 transition-colors duration-200 ml-auto shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </m.div>
      </div>
    </section>
  )
}

export default Education
