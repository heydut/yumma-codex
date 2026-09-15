import { createServer as createHttpServer } from 'node:http';
import { createServer as createHttpsServer } from 'node:https';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { render } from '../.build/server/entry-server.js';

const root = resolve('dist');
const template = await readFile('.build/template.html', 'utf8');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.webmanifest': 'application/manifest+json' };
const handler = async (request, response) => {
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'none'");
  if (request.socket.encrypted) response.setHeader('Strict-Transport-Security', 'max-age=31536000');
  if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405, { Allow: 'GET, HEAD' }); response.end(); return; }
  try {
    const pathname = new URL(request.url, 'http://localhost').pathname;
    let decoded;
    try { decoded = decodeURIComponent(pathname); }
    catch { response.writeHead(400); response.end('Invalid URL'); return; }
    if (decoded === '/index.html') { response.writeHead(308, { Location: '/' }); response.end(); return; }
    const file = resolve(root, decoded === '/' ? 'index.html' : `.${decoded}`);
    const withinRoot = file === root || file.startsWith(`${root}${sep}`);
    const isFile = withinRoot && !decoded.endsWith('.map') && await stat(file).then(info => info.isFile()).catch(() => false);
    if (!isFile || decoded === '/404.html') {
      response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
      const { html, head } = render(pathname);
      response.end(request.method === 'HEAD' ? undefined : template.replace('<!--app-head-->', head).replace('<!--app-html-->', html));
      return;
    }
    response.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream');
    response.setHeader('Cache-Control', decoded.startsWith('/assets/') ? 'public, max-age=31536000, immutable' : 'public, max-age=0, must-revalidate');
    response.setHeader('Vary', 'Accept-Encoding');
    let selected = file;
    const accepted = request.headers['accept-encoding'] || '';
    for (const [encoding, suffix] of [['br', '.br'], ['gzip', '.gz']]) {
      if (accepted.split(',').some(item => item.trim().split(';')[0] === encoding && !/;\s*q=0(?:\.0*)?$/.test(item)) && await stat(`${file}${suffix}`).then(() => true).catch(() => false)) {
        selected = `${file}${suffix}`; response.setHeader('Content-Encoding', encoding); break;
      }
    }
    response.writeHead(200);
    response.end(request.method === 'HEAD' ? undefined : await readFile(selected));
  } catch {
    response.writeHead(500, { 'Content-Type': 'text/plain' });
    response.end('Unable to load this page. Please try again.');
  }
};
const tls = process.env.TLS_CERT && process.env.TLS_KEY;
const server = tls ? createHttpsServer({ cert: await readFile(process.env.TLS_CERT), key: await readFile(process.env.TLS_KEY) }, handler) : createHttpServer(handler);
server.listen(Number(process.env.PORT || 4173), process.env.HOST || '127.0.0.1', () => {
  process.stdout.write(`Fieldwork production server: ${tls ? 'https' : 'http'}://${process.env.HOST || '127.0.0.1'}:${process.env.PORT || 4173}\n`);
});

