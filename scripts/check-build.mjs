import assert from 'node:assert/strict';
import fs from 'node:fs';
import sharp from 'sharp';
const html = fs.readFileSync('dist/index.html', 'utf8');
for (const match of html.matchAll(/(?:src|href)="(public\/images\/[^"\s]+)"/g)) assert.ok(fs.existsSync(`dist/${match[1]}`), `Asset ausente: ${match[1]}`);
for (const match of html.matchAll(/public\/images\/[^"\s,]+\.webp/g)) assert.ok(fs.existsSync(`dist/${match[0]}`), `Variante ausente: ${match[0]}`);
assert.ok(html.includes('data-optimized="true"'));
const images = fs.readdirSync('dist/public/images').filter(file => file.endsWith('.webp'));
assert.equal(images.length, 60);
for (const file of images) {
  const meta = await sharp(`dist/public/images/${file}`).metadata();
  assert.ok(meta.width > 0 && meta.height > 0, `Imagem inválida: ${file}`);
  const width = file.match(/-(480|800|1200)\.webp$/)?.[1];
  if (width) assert.equal(meta.width, Number(width), `Largura incorreta: ${file}`);
}
const hero = await sharp('dist/public/images/hero-implante.webp').metadata();
assert.equal(hero.hasAlpha, true);
const maximum = Math.max(...images.map(file => fs.statSync(`dist/public/images/${file}`).size));
console.log(`Build verificado: ${images.length} WebP válidos, variantes e referências existentes; hero com alfa. Maior arquivo: ${Math.round(maximum / 1024)} KB.`);
