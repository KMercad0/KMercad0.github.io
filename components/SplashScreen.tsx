'use client'

import { useState, useEffect, useCallback } from 'react'
import { m, AnimatePresence } from 'motion/react'

const SplashScreen = () => {
  const [show, setShow] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('splash_seen')) {
      setShow(false)
    } else {
      setShow(true)
      document.body.style.overflow = 'hidden'
      const bubbleTimer = setTimeout(() => setShowBubble(true), 600)
      const buttonTimer = setTimeout(() => setShowButton(true), 1400)
      return () => {
        clearTimeout(bubbleTimer)
        clearTimeout(buttonTimer)
      }
    }
  }, [])

  const handleEnter = useCallback(() => {
    setExiting(true)
    sessionStorage.setItem('splash_seen', '1')
    document.body.style.overflow = ''
    setTimeout(() => setShow(false), 700)
  }, [])

  if (!show) return null

  return (
    <AnimatePresence>
      {!exiting ? (
        <m.div
          key="splash"
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center px-6"
        >
          {/* Cotton + speech bubble */}
          <div className="flex flex-col items-center gap-6">
            {/* Speech bubble */}
            <m.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={showBubble ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative bg-surface-container-highest border border-outline-variant/20 rounded-2xl px-6 py-5 max-w-sm text-center"
            >
              <p className="text-on-surface/80 text-sm sm:text-base leading-relaxed font-body">
                Hi! Welcome to my Dad0&apos;s portfolio.
                <br />
                <span className="text-on-surface/40 serif-italic">He made me greet you. I was napping.</span>
              </p>
              {/* Bubble tail */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-surface-container-highest border-b border-r border-outline-variant/20 rotate-45" />
            </m.div>

            {/* Cotton image */}
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-outline-variant/20 bg-surface-container cotton-glow"
            >
              <img
                src="/images/c4.png"
                alt="Cotton"
                className="w-full h-full object-cover"
              />
            </m.div>

            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs font-label text-on-surface/30 tracking-[0.2em] uppercase"
            >
              Cotton, Chief Greeter
            </m.p>
          </div>

          {/* Enter button */}
          <m.div
            initial={{ opacity: 0 }}
            animate={showButton ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <button
              onClick={handleEnter}
              className="btn-ghost text-sm px-8 py-3 font-label"
            >
              Come in &rarr;
            </button>
          </m.div>
        </m.div>
      ) : (
        <m.div
          key="splash-exit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] bg-background pointer-events-none"
        />
      )}
    </AnimatePresence>
  )
}

export default SplashScreen
