'use client'

import { useEffect, useRef, useState } from 'react'

const ROOT_MARGIN = '300px'

type Props = {
  src: string
  mobileSrc?: string
  className?: string
  eager?: boolean
}

export default function LazyVideo({
  src,
  mobileSrc,
  className = 'absolute inset-0 z-0 h-full w-full object-cover',
  eager = false,
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
      { rootMargin: ROOT_MARGIN }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [eager, load])

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
      aria-hidden="true"
    >
      {load && mobileSrc && (
        <source src={mobileSrc} media="(max-width: 767px)" type="video/mp4" />
      )}
      {load && <source src={src} type="video/mp4" />}
    </video>
  )
}
