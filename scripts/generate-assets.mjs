import sharp from 'sharp';
import { mkdir, writeFile, access, copyFile } from 'node:fs/promises';

await mkdir('public', { recursive: true });
const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" fill="#242424"/><path d="M172 405V188h-43v-35h43v-31c0-61 32-94 88-94 24 0 43 5 61 12v41c-16-11-31-15-47-15-31 0-47 19-47 58v29h77v35h-77v217z" fill="#f6f3f1"/></svg>`;
await writeFile('public/favicon.svg', icon);
for (const [size, name] of [[32,'favicon-32.png'],[180,'apple-touch-icon.png'],[192,'icon-192.png'],[512,'icon-512.png']]) {
  await sharp(Buffer.from(icon)).resize(size, size).png({ compressionLevel: 9 }).toFile(`public/${name}`);
}
const icoSizes = [16, 32, 48];
const pngs = await Promise.all(icoSizes.map(size => sharp(Buffer.from(icon)).resize(size, size).png().toBuffer()));
const header = Buffer.alloc(6 + 16 * pngs.length);
header.writeUInt16LE(1, 2); header.writeUInt16LE(pngs.length, 4);
let offset = header.length;
for (let i = 0; i < pngs.length; i++) {
  const index = 6 + i * 16;
  header[index] = icoSizes[i]; header[index + 1] = icoSizes[i];
  header.writeUInt16LE(1, index + 4); header.writeUInt16LE(32, index + 6);
  header.writeUInt32LE(pngs[i].length, index + 8); header.writeUInt32LE(offset, index + 12);
  offset += pngs[i].length;
}
await writeFile('public/favicon.ico', Buffer.concat([header, ...pngs]));
const social = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#f6f3f1"/><text x="68" y="86" font-family="Georgia,serif" font-size="44" font-weight="bold" fill="#242424">fieldwork.</text><path d="M68 116h1064M68 552h1064" stroke="#ccc6bf"/><text x="68" y="187" font-family="Courier New,monospace" font-size="16" fill="#51504d">INDEPENDENT STRATEGY &amp; CREATIVE STUDIO</text><g fill="#242424" font-family="Georgia,serif" font-size="102"><text x="64" y="322">Good work.</text><text x="64" y="438">Out in the <tspan font-style="italic">world.</tspan></text></g><text x="68" y="589" font-family="Courier New,monospace" font-size="16" fill="#51504d">LONDON, UK / A FICTIONAL STUDIO</text><path d="M1072 197h60v60h-60z" fill="#2b59d1"/></svg>`;
const fallback = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#242424"/><text x="70" y="295" font-family="Georgia,serif" font-size="125" fill="#f6f3f1">fieldwork.</text><text x="76" y="370" font-family="Courier New,monospace" font-size="24" fill="#f6f3f1">Good work. Out in the world.</text></svg>`;
try { await access('public/og-fallback.png'); }
catch { await sharp(Buffer.from(fallback)).png({ compressionLevel: 9 }).toFile('public/og-fallback.png'); }
try { await sharp(Buffer.from(social)).png({ compressionLevel: 9 }).toFile('public/og.png'); }
catch (error) { await copyFile('public/og-fallback.png', 'public/og.png'); process.stderr.write(`Social image fallback used: ${error.message}\n`); }
await writeFile('public/site.webmanifest', JSON.stringify({ name: 'Fieldwork', short_name: 'Fieldwork', description: 'Independent strategy and creative studio. A fictional agency concept.', start_url: '/', display: 'browser', background_color: '#f6f3f1', theme_color: '#f6f3f1', icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' }, { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' }] }, null, 2));
process.stdout.write('Generated social images and complete favicon set.\n');

