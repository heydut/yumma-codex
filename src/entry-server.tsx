import { renderToString } from 'react-dom/server';
import { App } from './App';
import { renderHead } from './seo';

export function render(path: string) {
  return { html: renderToString(<App path={path} />), head: renderHead(path) };
}
export const origin = __SITE_URL__;
export const contactEmail = __CONTACT_EMAIL__;
