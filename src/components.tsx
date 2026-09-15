import { useEffect, useRef, useState, type ReactNode } from 'react';
import { navigation } from './data';

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <a tabIndex={0} href={href} className="d-if ai-c g-3 py-2 tdl-u tuo-4 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">{children}<Arrow /></a>;
}

export function Label({ children }: { children: ReactNode }) {
  return <p className="fs-sm tt-u ls-4 c-graphite">{children}</p>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    menu.current?.querySelector('a')?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 48rem)');
    const resize = () => {
      if (desktop.matches) {
        const inside = menu.current?.contains(document.activeElement);
        setOpen(false);
        if (inside) document.querySelector<HTMLAnchorElement>('#wordmark')?.focus();
      }
    };
    window.addEventListener('keydown', close);
    desktop.addEventListener('change', resize);
    return () => {
      window.removeEventListener('keydown', close);
      desktop.removeEventListener('change', resize);
    };
  }, [open]);
  return (
    <header className="bbw-1 bc-ash" onBlur={(event) => {
      if (open && event.relatedTarget && !event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
    }}>
      <div className="d-f ai-c jc-sb g-4 py-5 @md:py-7">
        <a tabIndex={0} id="wordmark" href="/" aria-label="Fieldwork home" className="ff-s fw-700 fs-4xl ls-2 lh-1 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">fieldwork<span className="fs-xxl">.</span></a>
        <nav aria-label="Main navigation" className="d-none @md:d-f ai-c g-9 fs-sm">
          {navigation.map((item) => <a tabIndex={0} key={item.label} href={item.href} className="py-3 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">{item.label}</a>)}
        </nav>
        <a tabIndex={0} href="/#contact" className="d-none @md:d-if ai-c g-5 fs-sm py-3 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">Let’s talk <Arrow /></a>
        <button ref={trigger} type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="@md:d-none p-3 bw-1 bc-ash fs-sm c-ink br-0 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">{open ? 'Close' : 'Menu'}</button>
      </div>
      <nav id="mobile-navigation" ref={menu} aria-label="Mobile navigation" hidden={!open} className="@md:d-none pb-6">
        <div className="d-f fd-c ai-s g-2">
          {[...navigation, { label: 'Let’s talk', href: '/#contact' }].map((item) => <a tabIndex={0} key={item.label} href={item.href} onClick={() => {
            setOpen(false);
            const target = document.querySelector<HTMLElement>(item.href.slice(1));
            target?.focus();
          }} className="py-3 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">{item.label}</a>)}
        </div>
      </nav>
    </header>
  );
}

export function Disclosure({ question, children }: { question: string; children: ReactNode }) {
  return <details className="btw-1 bc-ash">
    <summary className="py-6 pr-3 fs-md c-ink c-p fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">{question}</summary>
    <div className="pb-7 c-graphite lh-5 max-w-180">{children}</div>
  </details>;
}

export function Footer() {
  return <footer className="btw-1 bc-ash pt-8 pb-6">
    <div className="d-g g-8 @md:gtc-3">
      <div><a tabIndex={0} href="/" className="ff-s fw-700 fs-3xl ls-2 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">fieldwork</a><p className="mt-3 fs-sm c-graphite">Independent thinking.<br />Considered work.</p></div>
      <nav aria-label="Footer navigation" className="d-f fw-w g-6 ai-s fs-sm">
        {navigation.map((item) => <a tabIndex={0} key={item.label} href={item.href} className="py-2 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">{item.label}</a>)}
        <a tabIndex={0} href="/#faq" className="py-2 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">FAQ</a>
      </nav>
      <address className="fs-n fs-sm c-graphite @md:ta-r">
        <a tabIndex={0} href={`mailto:${__CONTACT_EMAIL__}`} className="d-ib py-2 ow-bw fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">{__CONTACT_EMAIL__}</a><br />London, UK / Working everywhere
      </address>
    </div>
    <div className="d-f fd-c @md:fd-r jc-sb g-3 mt-14 pt-5 btw-1 bc-ash fs-xs c-smoke">
      <p>© {new Date().getFullYear()} Fieldwork. A fictional studio.</p>
      <p>Concept projects. Illustrative results. No tracking.</p>
      <a tabIndex={0} href="#top" className="py-1 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">Back to top ↑</a>
    </div>
  </footer>;
}




