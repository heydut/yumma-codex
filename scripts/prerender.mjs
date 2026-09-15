import { readFile, writeFile, readdir } from 'node:fs/promises';
import { brotliCompressSync, gzipSync } from 'node:zlib';
import { render, origin } from '../.build/server/entry-server.js';

const template = await readFile('dist/index.html', 'utf8');
await writeFile('.build/template.html', template);
for (const [path, file] of [['/', 'index.html'], ['/404', '404.html']]) {
  const { html, head } = render(path);
  await writeFile(`dist/${file}`, template.replace('<!--app-head-->', head).replace('<!--app-html-->', html));
}
await writeFile('public/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
await writeFile('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/</loc></url></urlset>\n`);
for (const name of ['robots.txt', 'sitemap.xml']) await writeFile(`dist/${name}`, await readFile(`public/${name}`));
async function compress(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) await compress(path);
    else if (/\.(html|js|css|svg|xml|txt|webmanifest)$/.test(path)) {
      const content = await readFile(path);
      await writeFile(`${path}.br`, brotliCompressSync(content));
      await writeFile(`${path}.gz`, gzipSync(content, { level: 9 }));
    }
  }
}
await compress('dist');
process.stdout.write('Prerendered home and 404; generated sitemap, robots, Brotli and gzip assets.\n');

