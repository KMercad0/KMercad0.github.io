'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  src: string
  mobileSrc?: string
  poster?: string
  className?: string
  eager?: boolean
  rootMargin?: string
}

export default function LazyVideo({
  src,
  mobileSrc,
  poster,
  className = 'absolute inset-0 z-0 h-full w-full object-cover',
  eager = false,
  rootMargin = '300px',
}: Props) {
  const ref = useRef<HTMLVideoElement | null>(null)
  const [load, setLoad] = useState(eager)

  useEffect(() => {
    if (eager || load) return
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setLoad(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad(true)
          obs.disconnect()
        }
      },
      { rootMargin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [eager, load, rootMargin])

  useEffect(() => {
    if (!load) return
    const el = ref.current
    if (!el) return
    el.load()
    el.play().catch(() => {})
  }, [load])

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload={eager ? 'metadata' : 'none'}
      poster={poster}
      aria-hidden="true"
    >
      {load && mobileSrc && (
        <source src={mobileSrc} media="(max-width: 767px)" type="video/mp4" />
      )}
      {load && <source src={src} type="video/mp4" />}
    </video>
  )
}
