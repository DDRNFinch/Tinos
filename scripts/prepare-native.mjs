import { cp, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const webDir = resolve(root, 'www');

const files = [
  'index.html',
  'styles.css',
  'app.js',
  'manifest.webmanifest',
  'service-worker.js',
  'tinos-180.png',
  'tinos-192.png',
  'tinos-512.png',
  'tinos-icon.svg'
];

await rm(webDir, { recursive: true, force: true });
await mkdir(webDir, { recursive: true });

for (const file of files) {
  await cp(resolve(root, file), resolve(webDir, file));
}

console.log(`Prepared ${files.length} Tinos web assets in www/ for Capacitor.`);
