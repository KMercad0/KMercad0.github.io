import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#0e0e0e"/>
  <text x="32" y="44" font-family="Georgia, serif" font-size="36" font-weight="700" text-anchor="middle" fill="#ff9157">K</text>
</svg>`;

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

for (const { name, size } of sizes) {
  await sharp(Buffer.from(svg))
    .resize(size, size)
    .png()
    .toFile(`public/${name}`);
  console.log('wrote', name);
}

// favicon.ico from 32x32 PNG (sharp doesn't write .ico, so save 32px PNG renamed)
// browsers accept PNG inside .ico container poorly without proper writer;
// best practice: serve favicon.svg + favicon-32x32.png; reference both in metadata.
// Generate a 48x48 PNG as favicon.ico fallback (works in modern browsers).
await sharp(Buffer.from(svg)).resize(48, 48).png().toFile('public/favicon.ico');
console.log('wrote favicon.ico (PNG bytes)');

// OG image — 1200x630 with text
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0e0e0e"/>
  <rect x="0" y="0" width="1200" height="630" fill="url(#g)" opacity="0.4"/>
  <defs>
    <radialGradient id="g" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#ff9157" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0e0e0e" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <text x="80" y="160" font-family="Georgia, serif" font-size="40" fill="#ff9157" font-style="italic">KMercado.</text>
  <text x="80" y="340" font-family="Georgia, serif" font-size="96" font-weight="700" fill="#ffffff">lock in,</text>
  <text x="80" y="450" font-family="Georgia, serif" font-size="96" font-weight="700" fill="#ffffff">crash out,</text>
  <text x="80" y="560" font-family="Georgia, serif" font-size="96" font-weight="700" fill="#ff9157">repeat.</text>
</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og.png');
console.log('wrote og.png');
