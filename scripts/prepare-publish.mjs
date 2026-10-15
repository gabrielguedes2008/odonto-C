import { cp, mkdir } from 'node:fs/promises';
import path from 'node:path';

// Keep the hosting source history separate from the user's project repository.
const destination = path.resolve('.sites-source');
await mkdir(destination, { recursive: true });
const entries = ['index.html', 'styles.css', 'app.js', 'site-config.js', 'package.json', 'package-lock.json', '.gitignore', '.openai', 'scripts', 'public', 'dist', 'README.md', 'DESIGN-SPEC.md', 'IMAGE-PROMPTS.md', 'IMAGES-GENERATED.md', 'brand'];
for (const entry of entries) await cp(entry, path.join(destination, entry), { recursive: true });
await mkdir('artifacts', { recursive: true });
console.log(`Fonte de publicação preparada em ${destination}`);
