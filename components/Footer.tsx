'use client';

import { m } from 'motion/react';

/**
 * Footer — wordmark + mono link list + bottom strip.
 */

const easeOut = [0.16, 1, 0.3, 1] as const;

type Link = { label: string; href: string; external?: boolean };

const links: Link[] = [
  { label: 'GITHUB',   href: 'https://github.com/KMercad0',           external: true },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/kmercad0',  external: true },
  { label: 'EMAIL',    href: 'mailto:komercado31@gmail.com' },
];

export default function Footer() {
  return (
    <m.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: easeOut }}
      className="w-full border-t border-outline-variant/20 bg-background py-12 md:py-16 text-on-surface"
    >
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-8">
        {/* Top split */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Left */}
          <div>
            <p className="font-display font-semibold leading-none text-on-surface text-2xl">
              KMercado<span className="text-primary">.</span>
            </p>
            <p className="mt-2 font-mono uppercase tracking-widest text-on-surface-variant text-[0.65rem]">
              // studio log · est. 2024
            </p>
            <p className="mt-4 font-sans text-on-surface-variant text-sm">
              Built by Karl Mercado. Cotton supervised.
            </p>
          </div>

          {/* Right — link list */}
          <ul className="flex flex-col gap-2 md:text-right">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="font-mono uppercase tracking-widest text-on-surface-variant transition-colors duration-200 hover:text-primary text-[0.7rem]"
                >
                  <span aria-hidden="true">→ </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 flex justify-between border-t border-outline-variant/10 pt-6 font-mono uppercase tracking-widest text-on-surface-variant/60 text-[0.6rem]">
          <span>// © 2026 — k. mercado</span>
          <span>// no cookies. no tracking. just code.</span>
        </div>
      </div>
    </m.footer>
  );
}
