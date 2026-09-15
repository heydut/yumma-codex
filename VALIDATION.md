# Validation report

Validated on 15 September 2026 against the built production files.

## Results

| Check | Result |
| --- | --- |
| Vite development server | Runs on port 5174 because 5173 was already occupied |
| TypeScript strict check | Pass |
| Production client and render builds | Pass |
| Yumma Canon 3.31.1 | 8 files, 199 unique classes, all valid, no allowlist |
| Source and artifact audit | Pass: 18 source files and 33 public artifacts |
| Full browser suite | 20 tests passed, none skipped |
| Final asset and routing regression | 4 tests passed after the server redirect and sharp update |
| Accessibility | No axe WCAG 2 A/AA or WCAG 2.1 AA violations in tested states |
| npm audit | Zero known vulnerabilities after updating sharp to 0.35.4 |
| Launch configuration | Intentionally incomplete: approved example domain and email |

## Browser coverage

- Chromium / Chrome for Testing 153.
- Firefox 155.
- Playwright WebKit 26.6, desktop configuration.
- Playwright WebKit with iPhone 13 emulation.

WebKit is useful Safari engine coverage. These checks are not a claim of testing the shipping Safari application on macOS or a physical iPhone. Real-device Safari validation remains a launch check.

## Responsive and visual checks

- 320, 375, 640, 768, 1024 and 1440 CSS pixel widths.
- 667 by 375 landscape mobile.
- Primary CTA fully visible at 320 by 568.
- No horizontal document overflow at the tested widths.
- Full-page screenshots saved at 320, 375, 768 and 1440.
- Desktop and narrow hero screenshots inspected visually.
- Generated Open Graph image inspected visually.
- No overflow masking, transitions, animations or smooth scrolling.
- Reduced-motion emulation reports zero active animations.

System-font rendering varies slightly by OS. Real browser text-only enlargement and assistive-technology user testing were not performed. Narrow reflow, heading semantics, keyboard focus and automated accessibility checks were performed.

## Interaction and accessibility checks

- Exactly one meaningful h1 on home and 404.
- Semantic header, nav, main, section, article, figure, address and footer elements.
- Skip link receives visible focus and moves focus to main.
- Explicit natural-order link tab stops also work in the tested Windows WebKit build.
- Mobile menu announces expanded state, focuses its first link and closes on Escape with focus restored.
- Menu closes when using its close control, choosing an anchor or moving to desktop width.
- Case study and FAQ disclosures respond to Enter and Space.
- Expanded disclosure contents included in accessibility audits.
- Every internal hash target resolves.
- Logo and return-home links work.
- Contact links are valid mailto links. The recipient remains an approved reserved example address; message delivery has not been tested.
- No form or asynchronous user action is present, so form loading/success/error states do not apply.
- No runtime console errors or failed page network requests in the responsive tests.

## Metadata and production checks

- Prerendered home title, description, canonical, Open Graph, social image candidates and JSON-LD.
- Distinct 404 metadata; supplied server renders path-specific metadata.
- Direct unknown-route load and refresh both return HTTP 404.
- `/index.html` permanently redirects to `/` on the supplied server.
- Home and 404 each have exactly one h1.
- All favicon, social-image, robots, sitemap and manifest URLs return HTTP 200.
- ICO contains 16, 32 and 48 pixel images. PNG and social dimensions validated.
- Primary and fallback social images are 1200 by 630.
- No production noindex directive.
- Brotli response encoding and immutable hashed-asset caching verified on the supplied server.
- Both Vite builds disable source maps. No public map files or sourceMappingURL references.
- No private environment values are compiled into the browser.
- No third-party runtime scripts, cookies, storage, remote fonts or analytics.
- Security and cache headers are implemented in the server and supplied static-host header configuration.

## Final compliance checklist

- [x] Vite, React, TypeScript and documented Yumma utilities.
- [x] Configured palette, serif headings and monospaced supporting typography.
- [x] All requested sections plus a custom 404.
- [x] Editorial rows, square edges, fine rules and responsive layouts.
- [x] Original, explicitly fictional case studies and illustrative metrics.
- [x] No stock photography, invented client logos, testimonials or unverified results.
- [x] No gradients, blurs, shadows, rounded UI, pill shapes, bento layout or hover animations.
- [x] No prohibited punctuation or copywriting patterns in authored site content.
- [x] No custom CSS rules, inline styles, arbitrary values or other CSS framework.
- [x] Reusable components and data arrays.
- [x] Focus, skip navigation, accessible menu and native disclosures.
- [x] Working navigation and email-draft links.
- [x] Complete metadata, generated social image, fallback, favicon set, robots and sitemap.
- [x] Production build, Canon, browser, accessibility and dependency checks.
- [ ] Replace example domain and email before public launch.
- [ ] Verify real-domain HTTPS, DNS, hosting compression/caching and production variables after deployment.
- [ ] Verify inbox delivery and shipping Safari on actual Apple devices.

The three unchecked items depend on production details or devices that were not supplied. No deployment, real inbox or physical Safari test is implied by this report.
