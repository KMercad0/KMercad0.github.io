'use client';

import { m, AnimatePresence } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';

/**
 * SplashScreen — once-per-session greeter.
 * Static dark bg, no video. Cotton portrait + flat speech card + enter CTA.
 *
 * Reveal staging (kept from prior version):
 *   - bubble (speech card) gated at 600ms
 *   - button gated at 1400ms
 *
 * Exit:
 *   - on enter: write splash_seen, restore scroll, set exiting=true,
 *     after 700ms setShow(false). A discrete <m.div> handles the fade.
 */

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function SplashScreen() {
  const [show, setShow]             = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [exiting, setExiting]       = useState(false);

  // Mount: sessionStorage gate
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const seen = sessionStorage.getItem('splash_seen');
    if (seen) {
      setShow(false);
      return;
    }

    setShow(true);
    document.body.style.overflow = 'hidden';

    const tBubble = window.setTimeout(() => setShowBubble(true), 600);
    const tButton = window.setTimeout(() => setShowButton(true), 1400);

    return () => {
      window.clearTimeout(tBubble);
      window.clearTimeout(tButton);
      document.body.style.overflow = '';
    };
  }, []);

  const handleEnter = useCallback(() => {
    sessionStorage.setItem('splash_seen', '1');
    document.body.style.overflow = '';
    setExiting(true);

    const t = window.setTimeout(() => setShow(false), 700);
    return () => window.clearTimeout(t);
  }, []);

  if (!show && !exiting) return null;

  return (
    <AnimatePresence>
      {show && (
        <m.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: exiting ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background px-6"
        >
          {/* â”€â”€ Atmosphere layers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}

          {/* Fractal noise */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04] mix-blend-screen"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="splash-noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#splash-noise)" />
          </svg>

          {/* Pinstripe */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, transparent 0 14px, rgba(255,255,255,0.012) 14px 15px)',
            }}
          />

          {/* Radial ambient */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,rgba(255,145,87,0.05),transparent_70%)]"
          />

          {/* â”€â”€ Top-left brand stamp â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="absolute left-6 top-6 z-10"
          >
            <p className="font-display font-semibold leading-none text-on-surface text-lg">
              KMercado<span className="text-primary">.</span>
            </p>
          </m.div>

          {/* â”€â”€ Bottom-right timestamp â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="absolute bottom-6 right-6 z-10 hidden font-mono uppercase tracking-widest text-on-surface-variant/70 text-[0.6rem] sm:block"
          >
            // transmission · {new Date().getFullYear()}
          </m.p>

          {/* â”€â”€ Center stack â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <div className="relative z-10 flex w-full max-w-md flex-col items-center gap-8 text-center">
            {/* Eyebrow */}
            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="font-mono uppercase tracking-widest text-primary text-[0.65rem]"
            >
              // incoming greeting
            </m.p>

            {/* Cotton portrait */}
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25, ease: easeOut }}
              className="h-36 w-36 overflow-hidden rounded-full border border-outline-variant/30 bg-surface-container sm:h-44 sm:w-44"
              style={{ filter: 'drop-shadow(0 0 40px rgba(255,145,87,0.15))' }}
            >
              <img
                src="/images/c4.webp"
                alt="Cotton"
                width={540}
                height={720}
                className="h-full w-full object-cover"
              />
            </m.div>

            {/* Caption */}
            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="font-mono uppercase tracking-widest text-on-surface-variant text-[0.6rem]"
            >
              cotton · chief greeter
            </m.p>

            {/* Speech card — gated by showBubble */}
            <m.div
              initial={{ opacity: 0, y: 12 }}
              animate={showBubble ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="w-full max-w-sm rounded-md border border-outline-variant/30 bg-surface-container-highest px-6 py-5 text-left"
            >
              <p className="mb-3 font-mono uppercase tracking-widest text-primary text-[0.6rem]">
                // transmission
              </p>
              <p className="font-sans leading-relaxed text-on-surface text-sm sm:text-base">
                Hi! Welcome to my Dad0&apos;s portfolio.
              </p>
              <p className="mt-2 font-sans italic text-on-surface-variant/70 text-sm">
                He made me greet you. I was napping.
              </p>
            </m.div>

            {/* Enter CTA — gated by showButton */}
            <m.button
              type="button"
              onClick={handleEnter}
              initial={{ opacity: 0 }}
              animate={showButton ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-md border border-outline-variant/40 bg-black/20 px-7 py-3 font-mono uppercase tracking-widest text-on-surface backdrop-blur-sm transition-colors duration-200 hover:border-primary/60 text-xs"
            >
              [ come in <span aria-hidden="true">→</span> ]
            </m.button>
          </div>
        </m.div>
      )}

      {/* Discrete exit overlay */}
      {exiting && (
        <m.div
          key="splash-exit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="pointer-events-none fixed inset-0 z-[100] bg-background"
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  );
}
