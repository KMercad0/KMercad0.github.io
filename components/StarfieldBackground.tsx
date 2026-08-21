'use client';

/**
 * StarfieldBackground — static cosmic backdrop (no video). Used by Education
 * and Skills. Drop inside a `relative ... bg-background` section, before the
 * z-10 content. noiseId must be unique per instance — the SVG filter is
 * referenced by id, and duplicates collide.
 */
export default function StarfieldBackground({ noiseId }: { noiseId: string }) {
  return (
    <>
      {/* Star field — multi-layer radial dots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.6), transparent 50%),
            radial-gradient(1px 1px at 27% 73%, rgba(255,255,255,0.4), transparent 50%),
            radial-gradient(1.5px 1.5px at 41% 32%, rgba(255,255,255,0.7), transparent 50%),
            radial-gradient(1px 1px at 58% 81%, rgba(255,255,255,0.5), transparent 50%),
            radial-gradient(1px 1px at 67% 14%, rgba(255,255,255,0.6), transparent 50%),
            radial-gradient(1px 1px at 78% 56%, rgba(255,255,255,0.4), transparent 50%),
            radial-gradient(1.5px 1.5px at 88% 28%, rgba(255,255,255,0.7), transparent 50%),
            radial-gradient(1px 1px at 92% 88%, rgba(255,255,255,0.5), transparent 50%),
            radial-gradient(1px 1px at 5% 50%, rgba(255,255,255,0.5), transparent 50%),
            radial-gradient(1px 1px at 50% 8%, rgba(255,255,255,0.4), transparent 50%),
            radial-gradient(1px 1px at 63% 95%, rgba(255,255,255,0.45), transparent 50%),
            radial-gradient(2px 2px at 35% 55%, rgba(255,145,87,0.55), transparent 50%)
          `,
          backgroundSize: '100% 100%',
        }}
      />

      {/* Nebula glow — cool + warm blend */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 30% 40%, rgba(80,120,200,0.05), transparent 70%),
            radial-gradient(ellipse 40% 30% at 75% 65%, rgba(255,145,87,0.06), transparent 70%)
          `,
        }}
      />

      {/* Edge fade — bridges into adjacent video sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"
      />

      {/* SVG fractal noise */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.04] mix-blend-screen"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id={noiseId}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${noiseId})`} />
      </svg>

      {/* Diagonal pinstripe */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent 0 14px, rgba(255,255,255,0.015) 14px 15px)',
        }}
      />

      {/* Top-edge orange hairline */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        aria-hidden="true"
      />
    </>
  );
}
