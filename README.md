# Fieldwork

An original, responsive marketing agency website built with Vite, React, TypeScript and Yumma CSS. Fieldwork is fictional. All three case studies and all metrics are expressly labelled as concepts or illustrations.

## Design rationale

The page borrows its rhythm from an independent journal: a large serif headline, monospaced annotations, numbered sections and fine horizontal rules. The asymmetric desktop layout becomes a single readable column on phones. Typography samples demonstrate the fictional projects' messaging without stock images, invented client logos or dashboard mockups. Lake blue appears on the primary action; parchment, graphite, ash and muted project surfaces carry the rest.

System serif and monospace stacks use Yumma's documented `ff-s` and `ff-m` utilities. This avoids third-party font requests, layout shifts from font loading and a separate font stylesheet. Native `details` and `summary` cover the disclosures accessibly. Yumma UI would add no useful capability for this scope, so no components or component dependencies were copied.

## Requirements

- Node.js 22.12 or later. Tested with 22.19.
- npm. Use the included lockfile for reproducible installation.

## Install and run

```sh
npm ci
npm run dev
```

The development server uses port 5173. If that port is occupied:

```sh
npm run dev -- --port 5174
```

Production build and local production server:

```sh
npm run build
npm run preview
```

The production preview runs at http://127.0.0.1:4173. It serves the built files, negotiates Brotli or gzip, applies caching and security headers, redirects `/index.html` to `/`, and responds to unknown routes with a rendered 404 and HTTP status 404. It is deliberately different from Vite's generic 200 fallback.

## Validation

```sh
npm run typecheck
npm run validate
npx yummacss-canon --config yumma.config.mjs
npm run check
npx playwright install chromium firefox webkit
npm test
npm run check:launch
```

`npm run build` includes TypeScript, Canon, asset generation, client bundling, server rendering, prerendering and compression. Canon scans `index.html` and every `.ts` and `.tsx` file under `src`, with no allowlist. `src/styles.css` contains only the required `@yummacss;` marker.

`check:launch` intentionally exits nonzero with the approved demo domain and email. It prevents these from silently passing a launch review.

## Public configuration

Copy `.env.example` to `.env` and set:

```dotenv
SITE_URL=https://fieldwork.example
CONTACT_EMAIL=hello@fieldwork.example
```

These are the user-approved placeholders. Replace them with an owned HTTPS origin and a monitored inbox before a public launch, then rebuild. Only these two public values are embedded in the application. Other environment variables are never copied to the browser. The example email link opens a draft; delivery to that reserved address is not possible. The website states that the inbox is not monitored. There is no pretend form or simulated submission.

## Routes and metadata

- `/`: prerendered home page, canonical URL, description, social metadata and explicitly fictional Organization JSON-LD.
- `/index.html`: permanent redirect to `/` on the supplied server.
- Unknown paths: custom 404 content, an HTTP 404 response and a path-specific title, description and canonical URL on the supplied server.
- `dist/404.html`: static fallback for hosting providers that support a custom error document. In a static deployment the error document's initial metadata is generic; the browser updates it to the requested path. The supplied Node server renders the requested path before responding.

Home content and native disclosures are readable before JavaScript loads. JavaScript hydrates React and handles the mobile navigation. Hash navigation remains ordinary browser navigation. No routing dependency is needed because there is one content route.

## Social images and icons

Every build automatically generates `og.png`, an original 1200 by 630 typographic social image, from SVG presentation attributes through sharp. `og-fallback.png` is a checked-in independent fallback. If primary generation fails, the generator copies that fallback to the primary URL. Both are declared as Open Graph image candidates.

The generator also writes an SVG favicon, a multi-resolution ICO, a 32px PNG, a 180px Apple touch icon and 192px/512px manifest icons. There are no content-image downloads. The on-page concept specimens are accessible HTML text, so responsive raster assets are unnecessary.

## Deployment and privacy

The deliverable is the local project and production build. It has not been published to a real domain.

### Supplied Node server

Run `npm run build` during deployment, retain `dist`, `.build`, `scripts/serve.mjs` and the production React dependencies, and start `npm run preview`. `HOST` and `PORT` control the listener. Put an HTTPS reverse proxy in front, or set `TLS_CERT` and `TLS_KEY` to certificate and private-key file paths. Private key material stays on the server. The server adds HSTS only for its own HTTPS connections; configure HSTS on a terminating reverse proxy separately.

### Static hosting

Publish only `dist`. `_headers` and `_redirects` provide provider-specific conventions for hosts supporting those files. Configure other hosts to serve `/` normally, redirect `/index.html` to `/`, serve existing assets directly and use `404.html` with status 404 for everything else. Do not send every unknown path to the home document with a 200 status. Verify the chosen host's fallback rules before launch.

Content-hashed assets have a one-year immutable cache policy on the supplied server. HTML, icons, robots and sitemap revalidate. Brotli and gzip sibling files are generated for text assets. Other hosts must enable compression and equivalent cache policies themselves. Source maps are disabled for both Vite builds; no public `.map` files are emitted. The server render bundle lives outside `dist`.

No analytics, trackers, cookies, local storage, third-party fonts or external runtime scripts are used. No consent interface is necessary for this build's behaviour. A future analytics, form or embedded service integration requires its own privacy review.

Real-domain TLS, DNS, CDN behaviour, production variables and inbox delivery remain deployment checks. They cannot be verified against the reserved `.example` configuration.

## Project tree

```text
fieldwork/
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json
├── vite.config.ts
├── yumma.config.mjs
├── README.md
├── VALIDATION.md
├── src/
│   ├── App.tsx
│   ├── components.tsx
│   ├── data.ts
│   ├── entry-server.tsx
│   ├── env.d.ts
│   ├── main.tsx
│   ├── seo.ts
│   └── styles.css
├── scripts/
│   ├── check.mjs
│   ├── check-launch.mjs
│   ├── generate-assets.mjs
│   ├── prerender.mjs
│   └── serve.mjs
├── tests/
│   └── site.spec.ts
├── public/
│   ├── _headers
│   ├── _redirects
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── og.png
│   ├── og-fallback.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── artifacts/                  QA screenshots
├── dist/                       Generated public production files
└── .build/                     Private render bundle and HTML template
```

## Official references consulted

- [Yumma UI CLI](https://www.yummacss.com/ui/components/cli.md)
- [Yumma installation](https://www.yummacss.com/docs/installation.md)
- [Yumma configuration](https://www.yummacss.com/docs/configuration.md)
- [Yumma Canon](https://www.yummacss.com/docs/canon.md)
- [Yumma utility index](https://www.yummacss.com/llms.txt)
- [Media queries](https://www.yummacss.com/docs/media-queries.md)
- [Pseudo classes](https://www.yummacss.com/docs/pseudo-classes.md)
- Property references linked from the utility index for typography, spacing, layout, positioning, wrapping, outlines and borders.

All utility names are validated by Canon 3.31.1 against the installed Yumma compiler. No Tailwind syntax, custom utility classes, arbitrary value syntax, inline styles, CSS Modules or CSS-in-JS are used.
