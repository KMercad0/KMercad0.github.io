import { readFile, writeFile } from 'node:fs/promises';

const files = [
  'components/Cotton.tsx',
  'components/Projects.tsx',
  'components/Hero.tsx',
  'components/Automations.tsx',
  'components/SplashScreen.tsx',
];

const fixes = [
  ['â€”', '—'],
  ['â€“', '–'],
  ['â€˜', '‘'],
  ['â€™', '’'],
  ['â€œ', '“'],
  ['â€', '”'],
  ['Â·', '·'],
  ['Â', ''],
  ['â†’', '→'],
  ["â†'", '←'],
];

for (const f of files) {
  let s = await readFile(f, 'utf8');
  const before = s;
  for (const [bad, good] of fixes) s = s.split(bad).join(good);
  if (s !== before) {
    await writeFile(f, s, 'utf8');
    console.log('fixed', f);
  } else {
    console.log('clean', f);
  }
}
