import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, parse } from 'node:path';

const SRC = 'public/images';
const QUALITY = 82;

const files = await readdir(SRC);
let savedTotal = 0;

for (const f of files) {
  const p = parse(f);
  if (!['.png', '.jpg', '.jpeg'].includes(p.ext.toLowerCase())) continue;
  const inPath = join(SRC, f);
  const outPath = join(SRC, `${p.name}.webp`);
  const before = (await stat(inPath)).size;
  await sharp(inPath).webp({ quality: QUALITY }).toFile(outPath);
  const after = (await stat(outPath)).size;
  const saved = before - after;
  savedTotal += saved;
  console.log(`${f}  ${(before/1024).toFixed(1)}KB -> ${(after/1024).toFixed(1)}KB  (-${(saved/1024).toFixed(1)}KB)`);
}

console.log(`\nTotal saved: ${(savedTotal/1024).toFixed(1)}KB`);
console.log('Now update src refs from .png to .webp in components.');
