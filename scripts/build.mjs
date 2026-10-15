import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const output = path.resolve('dist');
await mkdir(path.join(output, 'public/images'), { recursive: true });
const html = await readFile('index.html', 'utf8');
const app = await readFile('app.js', 'utf8');
const files = new Set([...html.matchAll(/public\/images\/([^"\s]+\.png)/g)].map(match => match[1]));
for (const match of app.matchAll(/image: '([^']+)'/g)) files.add(`${match[1]}.png`);
await Promise.all([...files].map(async file => {
  const source = path.join('public/images', file);
  const base = file.replace(/\.png$/, '');
  const isHero = base === 'hero-implante';
  for (const width of [480, 800, 1200]) {
    await sharp(source).resize({ width }).webp({ quality: isHero ? 88 : 82, effort: 5 }).toFile(path.join(output, 'public/images', `${base}-${width}.webp`));
  }
  await sharp(source).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: isHero ? 88 : 82, effort: 5 }).toFile(path.join(output, 'public/images', `${base}.webp`));
}));
const optimizedHtml = html.replace('<html lang="pt-BR">', '<html lang="pt-BR" data-optimized="true">').replace(/<img\b[^>]*src="public\/images\/([^"\s]+)\.png"[^>]*>/g, (tag, base) => {
  const sizes = base === 'hero-implante' ? '(max-width: 767px) 340px, 480px' : base.startsWith('equipe-') ? '(max-width: 767px) calc(100vw - 40px), (max-width: 959px) 45vw, 280px' : '(max-width: 767px) calc(100vw - 40px), 600px';
  return tag.replace(`${base}.png`, `${base}.webp`).replace('>', ` srcset="${[480, 800, 1200].map(width => `public/images/${base}-${width}.webp ${width}w`).join(', ')}" sizes="${sizes}">`);
});
await writeFile(path.join(output, 'index.html'), optimizedHtml);
for (const file of ['styles.css', 'app.js', 'site-config.js']) await copyFile(file, path.join(output, file));
await copyFile('public/images/orvia-symbol.svg', path.join(output, 'public/images/orvia-symbol.svg'));
console.log(`Build concluído: dist/ · ${files.size} imagens otimizadas em WebP + versões responsivas.`);
