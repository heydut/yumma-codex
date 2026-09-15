export const siteTitle = 'Fieldwork | Independent strategy & creative studio';
export const siteDescription = 'A fictional London studio for positioning, brand systems, campaign direction and digital experiences. Explore original concept work and a considered approach.';

export function routeMeta(path: string) {
  const home = path === '/';
  const url = new URL(path, __SITE_URL__).href;
  return {
    title: home ? siteTitle : `Page not found: ${path} | Fieldwork`,
    description: home ? siteDescription : `There is no Fieldwork page at ${path}. Return to the studio to explore concept projects, services and contact details.`,
    url,
    image: `${__SITE_URL__}/og.png`,
    fallbackImage: `${__SITE_URL__}/og-fallback.png`
  };
}

export function agencySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${__SITE_URL__}/#organization`,
    name: 'Fieldwork',
    url: `${__SITE_URL__}/`,
    description: 'Fictional marketing and creative agency presented as an original design concept. Projects and metrics are illustrative.',
    email: __CONTACT_EMAIL__,
    logo: `${__SITE_URL__}/icon-512.png`,
    address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
    knowsAbout: ['Brand positioning', 'Brand identity', 'Campaign direction', 'Digital experiences']
  };
}

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!);

export function renderHead(path: string) {
  const meta = routeMeta(path);
  const tag = (name: string, content: string, property = false) => `<meta ${property ? 'property' : 'name'}="${name}" content="${escapeHtml(content)}" />`;
  return [
    `<title>${escapeHtml(meta.title)}</title>`,
    tag('description', meta.description),
    `<link rel="canonical" href="${escapeHtml(meta.url)}" />`,
    tag('og:title', meta.title, true), tag('og:description', meta.description, true),
    tag('og:url', meta.url, true), tag('og:type', 'website', true),
    tag('og:site_name', 'Fieldwork', true), tag('og:locale', 'en_GB', true),
    tag('og:image', meta.image, true), tag('og:image:width', '1200', true),
    tag('og:image:height', '630', true), tag('og:image:alt', 'Fieldwork. Good work. Out in the world. Independent strategy and creative studio.', true),
    tag('og:image', meta.fallbackImage, true),
    tag('twitter:card', 'summary_large_image'), tag('twitter:title', meta.title),
    tag('twitter:description', meta.description), tag('twitter:image', meta.image),
    ...(path === '/' ? [`<script type="application/ld+json">${JSON.stringify(agencySchema()).replace(/</g, '\\u003c')}</script>`] : [])
  ].join('\n');
}

export function updateDocumentMeta(path: string) {
  const parser = new DOMParser();
  const head = parser.parseFromString(`<head>${renderHead(path)}</head>`, 'text/html').head;
  document.head.querySelectorAll('title, meta[name="description"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"], script[type="application/ld+json"]').forEach(node => node.remove());
  Array.from(head.children).forEach(node => document.head.appendChild(document.importNode(node, true)));
}
