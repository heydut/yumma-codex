import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const widths = [320, 375, 640, 768, 1024, 1440];

test('responsive layout, no overflow, semantic headings and clean runtime', async ({ page }, testInfo) => {
  const errors: string[] = [];
  const failures: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('requestfailed', request => failures.push(request.url()));
  await page.goto('/');
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Good work.Out in the world.');
    const overflow = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, width: window.innerWidth }));
    expect(overflow.scroll, `Overflow at ${width}px`).toBeLessThanOrEqual(overflow.width);
    const cta = page.getByRole('link', { name: 'Start a conversation' });
    await expect(cta).toBeVisible();
    expect((await cta.boundingBox())!.y).toBeLessThan(900);
    if (testInfo.project.name === 'chromium' && [320, 375, 768, 1440].includes(width)) {
      await page.screenshot({ path: `artifacts/fieldwork-${width}.png`, fullPage: true });
    }
  }
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto('/');
  const shortScreenCta = await page.getByRole('link', { name: 'Start a conversation' }).boundingBox();
  expect(shortScreenCta!.y + shortScreenCta!.height).toBeLessThanOrEqual(568);
  await page.setViewportSize({ width: 667, height: 375 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(667);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
  expect(errors).toEqual([]);
  expect(failures).toEqual([]);
});

test('keyboard menu, Escape, focus restoration, skip and disclosures', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await page.keyboard.press('Tab');
  const skip = page.getByRole('link', { name: 'Skip to content' });
  await expect(skip).toBeFocused();
  const focus = await skip.evaluate(element => ({ color: getComputedStyle(element).outlineColor, width: getComputedStyle(element).outlineWidth, top: element.getBoundingClientRect().top }));
  expect(focus.width).toBe('2px');
  expect(focus.color).not.toBe('rgba(0, 0, 0, 0)');
  expect(focus.top).toBeGreaterThanOrEqual(0);
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  const menu = page.getByRole('button', { name: 'Menu', exact: true });
  await menu.focus(); await page.keyboard.press('Enter');
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Work', exact: true })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused();
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await menu.click();
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Services', exact: true }).click();
  await expect(page.locator('#services')).toBeFocused();
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  const summary = page.locator('#faq summary').first();
  await summary.focus(); await page.keyboard.press('Enter');
  await expect(page.locator('#faq details').first()).toHaveAttribute('open', '');
  await page.keyboard.press('Space');
  await expect(page.locator('#faq details').first()).not.toHaveAttribute('open', '');
  const concept = page.locator('#work summary').first();
  await concept.focus(); await page.keyboard.press('Enter');
  await expect(page.getByText('The brief', { exact: true }).first()).toBeVisible();
});

test('mobile menu touch, resizing and all internal links', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Menu', exact: true }).click();
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeHidden();
  await page.getByRole('button', { name: 'Menu', exact: true }).click();
  await page.setViewportSize({ width: 1024, height: 768 });
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeHidden();
  await page.setViewportSize({ width: 375, height: 812 });
  await expect(page.getByRole('button', { name: 'Menu', exact: true })).toHaveAttribute('aria-expanded', 'false');
  const badLinks = await page.locator('a').evaluateAll(links => links.flatMap(link => {
    const href = link.getAttribute('href') || '';
    if (href.startsWith('mailto:')) return /^mailto:[^@]+@[^?]+/.test(href) ? [] : [href];
    const url = new URL(href, location.origin);
    if (url.pathname !== '/') return [href];
    if (url.hash && !document.getElementById(url.hash.slice(1))) return [href];
    return [];
  }));
  expect(badLinks).toEqual([]);
  await page.getByRole('link', { name: 'Start a conversation' }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.locator('#contact a')).toHaveAttribute('href', /^mailto:hello@fieldwork\.example\?subject=/);
});

test('accessibility at narrow and desktop sizes, including expanded contents', async ({ page }) => {
  await page.goto('/');
  for (const width of [320, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(result.violations).toEqual([]);
  }
  await page.locator('details').evaluateAll(elements => elements.forEach(element => element.setAttribute('open', '')));
  const expanded = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(expanded.violations).toEqual([]);
});

test('metadata, assets, caching, compression and real 404 responses', async ({ page, request }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Fieldwork | Independent strategy & creative studio');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://fieldwork.example/');
  await expect(page.locator('meta[property="og:image"]')).toHaveCount(2);
  expect(await page.locator('script[type="application/ld+json"]').textContent()).toContain('Fictional');
  for (const path of ['/og.png', '/og-fallback.png', '/favicon.ico', '/favicon.svg', '/favicon-32.png', '/apple-touch-icon.png', '/icon-192.png', '/icon-512.png', '/robots.txt', '/sitemap.xml', '/site.webmanifest']) {
    expect((await request.get(path)).status(), path).toBe(200);
  }
  const html = await request.get('/', { headers: { 'Accept-Encoding': 'br' } });
  expect(html.headers()['content-encoding']).toBe('br');
  expect(html.headers()['cache-control']).toBe('public, max-age=0, must-revalidate');
  const asset = await page.locator('script[type="module"]').getAttribute('src');
  expect((await request.get(asset!)).headers()['cache-control']).toContain('immutable');
  const alias = await request.get('/index.html', { maxRedirects: 0 });
  expect(alias.status()).toBe(308);
  expect(alias.headers()['location']).toBe('/');
  const missing = await page.goto('/some/unpublished-page');
  expect(missing!.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('off the map');
  await expect(page).toHaveTitle('Page not found: /some/unpublished-page | Fieldwork');
  expect((await page.reload())!.status()).toBe(404);
  await expect(page.locator('h1')).toHaveCount(1);
  await page.getByRole('link', { name: 'Back to Fieldwork' }).click();
  await expect(page).toHaveURL('/');
  expect((await request.get('/assets/missing.js.map')).status()).toBe(404);
});


