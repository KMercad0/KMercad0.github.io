'use client';

import { m, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

/**
 * Navigation — vertical side rail (md+) / floating button (mobile).
 * Collapsed by default (w-12), expands to w-48 on hover.
 * Tracks active section via IntersectionObserver.
 */

type Item = {
  index: string;
  label: string;
  href: string;
  id?: string;       // section id to track (omit for outbound)
  outbound?: boolean;
  download?: boolean;
};

const items: Item[] = [
  { index: '01', label: '// projects',    href: '#projects',    id: 'projects'    },
  { index: '02', label: '// automations', href: '#automations', id: 'automations' },
  { index: '03', label: '// experience', href: '#experience', id: 'experience' },
  { index: '04', label: '// skills',     href: '#skills',     id: 'skills'     },
  { index: '05', label: '// about',      href: '#about',      id: 'about'      },
  { index: '06', label: '// cotton',     href: '#cotton',     id: 'cotton'     },
  { index: '07', label: '// resume',     href: '/images/Mercado_Resume.pdf', outbound: true, download: true },
];

// Phosphor inline icons (regular)
function GithubIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
      <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68Z" />
    </svg>
  );
}

function LinkedinIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z" />
    </svg>
  );
}

export default function Navigation() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // IntersectionObserver to track active section
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const ids = items.filter((i) => i.id).map((i) => i.id!) as string[];
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visible.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
          });
          // pick the most-visible id
          let bestId: string | null = null;
          let bestRatio = 0;
          visible.forEach((ratio, key) => {
            if (ratio > 0 && ratio > bestRatio) {
              bestRatio = ratio;
              bestId = key;
            }
          });
          setActive(bestId);
        },
        { threshold: [0.15, 0.3, 0.5, 0.75] }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* ─── Desktop side rail ─────────────────────────────────────── */}
      <m.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ transform: 'translateY(-50%)' }}
        className="group fixed right-4 top-[35%] z-50 hidden w-12 flex-col items-stretch gap-1
                   bg-transparent p-2
                   transition-[width] duration-300 ease-out hover:w-48 md:right-6 md:flex"
      >
        {/* Wordmark */}
        <a
          href="#top"
          className="mb-1 flex h-11 items-center justify-center px-2 font-display font-semibold leading-none text-on-surface text-lg"
        >
          <span className="group-hover:hidden">
            K<span className="text-primary">.</span>
          </span>
          <span className="hidden whitespace-nowrap group-hover:inline">
            KMercado<span className="text-primary">.</span>
          </span>
        </a>

        {/* Nav items */}
        <ul className="flex flex-col gap-0.5">
          {items.map((item) => {
            const isActive = !!item.id && active === item.id;
            const isOutbound = !!item.outbound;

            return (
              <li key={item.href} className="relative">
                <a
                  href={item.href}
                  {...(item.download ? { download: true } : {})}
                  {...(isOutbound && !item.download ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group/item flex h-11 items-center gap-3 rounded-md px-2 transition-colors
                             hover:bg-surface-container-high/40"
                >
                  {/* Index / active dot */}
                  <span className="relative flex w-6 items-center justify-center">
                    {isActive ? (
                      <m.span
                        layoutId="active-dot"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        className="block h-1.5 w-1.5 rounded-full bg-primary"
                      />
                    ) : (
                      <span
                        className={`font-mono tracking-widest transition-colors text-[0.6rem] ${
                          isOutbound
                            ? 'text-primary'
                            : 'text-on-surface-variant group-hover/item:text-primary'
                        }`}
                      >
                        {item.index}
                      </span>
                    )}
                  </span>

                  {/* Label */}
                  <span
                    className={`whitespace-nowrap font-mono uppercase tracking-widest opacity-0
                                transition-opacity duration-200 delay-100 group-hover:opacity-100 text-[0.7rem] ${
                                  isActive
                                    ? 'text-primary'
                                    : isOutbound
                                    ? 'text-primary/90 group-hover/item:text-primary'
                                    : 'text-on-surface-variant group-hover/item:text-on-surface'
                                }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Socials */}
        <div className="mt-1 flex flex-col items-center gap-2 pt-2 group-hover:flex-row group-hover:items-center group-hover:justify-center group-hover:gap-4">
          <a
            href="https://github.com/KMercad0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 px-1 text-on-surface-variant transition-colors hover:text-primary"
          >
            <GithubIcon />
            <span className="hidden whitespace-nowrap font-mono uppercase tracking-widest text-[0.65rem] group-hover:inline">
              GH
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/kmercad0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 px-1 text-on-surface-variant transition-colors hover:text-primary"
          >
            <LinkedinIcon />
            <span className="hidden whitespace-nowrap font-mono uppercase tracking-widest text-[0.65rem] group-hover:inline">
              LI
            </span>
          </a>
        </div>
      </m.aside>

      {/* ─── Mobile floating button ─────────────────────────────────── */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full
                   border border-outline-variant/30 bg-background/80 backdrop-blur-md md:hidden"
      >
        <span className="relative block h-[18px] w-[18px]">
          <span
            className={`absolute left-0 top-[3px] block h-px w-[18px] bg-on-surface transition-transform duration-300 ${
              open ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`absolute left-0 top-[9px] block h-px w-[18px] bg-on-surface transition-opacity duration-300 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-0 top-[15px] block h-px w-[18px] bg-on-surface transition-transform duration-300 ${
              open ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <m.div
            key="mobile-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 bottom-24 z-50 rounded-lg border border-outline-variant/30 bg-background/95 p-6 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col gap-5">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  {...(item.download ? { download: true } : {})}
                  {...(item.outbound && !item.download ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 font-mono uppercase tracking-widest transition-colors text-base ${
                    item.outbound
                      ? 'text-primary/90 hover:text-primary'
                      : active === item.id
                      ? 'text-primary'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <span className="font-mono tracking-widest text-on-surface-variant text-[0.7rem]">
                    {item.index}
                  </span>
                  <span>{item.label}</span>
                </a>
              ))}

              <div className="mt-2 flex items-center gap-5 border-t border-outline-variant/20 pt-4">
                <a
                  href="https://github.com/KMercad0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kmercad0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
