import { readFile, readdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
import sharp from 'sharp';

async function files(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) result.push(...await files(path)); else result.push(path);
  }
  return result;
}
const sources = [...await files('src'), ...await files('scripts'), ...await files('tests'), 'index.html', 'vite.config.ts', 'yumma.config.mjs', 'playwright.config.ts'];
for (const path of sources) {
  const text = await readFile(path, 'utf8');
  assert(!text.includes(String.fromCodePoint(0x2014)), `Forbidden punctuation: ${path}`);
  if (path.startsWith('src/') || path === 'index.html') {
    assert(!/\bstyle\s*=|<style\b/i.test(text), `Inline CSS: ${path}`);
    assert(!/\bh:|\b(?:blur|shadow|gradient|scale)-/.test(text), `Forbidden visual treatment: ${path}`);
    assert(!/br-(?!0\b)[\w]+/.test(text), `Rounded UI: ${path}`);
  }
}
assert.equal((await readFile('src/styles.css', 'utf8')).trim(), '@yummacss;');
const built = await files('dist');
assert(!built.some(path => path.endsWith('.map')), 'Source map in public build');
const home = await readFile('dist/index.html', 'utf8');
const missing = await readFile('dist/404.html', 'utf8');
assert(home.includes('Good work.'));
assert(missing.includes('off the map.'));
assert(!home.includes('noindex'));
assert(!/sourceMappingURL/.test((await Promise.all(built.filter(path => /\.(js|css)$/.test(path)).map(path => readFile(path, 'utf8')))).join('')));
assert.notEqual(home.match(/<title>(.*?)<\/title>/s)?.[1], missing.match(/<title>(.*?)<\/title>/s)?.[1]);
for (const path of ['og.png', 'og-fallback.png']) {
  const metadata = await sharp(`dist/${path}`).metadata();
  assert.equal(metadata.width, 1200); assert.equal(metadata.height, 630);
}
for (const [path, size] of [['favicon-32.png',32], ['apple-touch-icon.png',180], ['icon-192.png',192], ['icon-512.png',512]]) {
  const metadata = await sharp(`dist/${path}`).metadata();
  assert.equal(metadata.width, size); assert.equal(metadata.height, size);
}
const ico = await readFile('dist/favicon.ico');
assert.equal(ico.readUInt16LE(2), 1); assert.equal(ico.readUInt16LE(4), 3);
process.stdout.write(`Static validation passed: ${sources.length} source files; ${built.length} public artifacts; complete icons and social images; no public source maps or custom CSS.\n`);
