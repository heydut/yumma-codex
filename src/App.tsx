import { approach, faqs, metrics, projects, services } from './data';
import { Arrow, Disclosure, Footer, Header, Label, TextLink } from './components';

function Hero() {
  return <section aria-labelledby="hero-heading" className="pt-8 pb-14 @md:pt-14 @md:pb-20">
    <div className="d-f fd-c @sm:fd-r jc-sb g-3 mb-7 @md:mb-12">
      <Label>Independent strategy & creative studio</Label>
      <p className="fs-xs c-smoke">London, UK / Open to the world</p>
    </div>
    <div className="d-g g-6 @md:g-8 @lg:gtc-12 @lg:g-6 ai-fe">
      <h1 id="hero-heading" className="ff-s fw-400 fs-5xl @compact:fs-6xl @md:fs-8xl @xl:fs-9xl ls-2 lh-1 @lg:gc-s-9">Good work.<br />Out in the <span className="fs-i">world.</span></h1>
      <div className="@lg:gc-s-3 @lg:pb-3 max-w-120">
        <p className="c-graphite lh-5">We help thoughtful businesses find their voice, shape their identity and make their next move.</p>
        <p className="d-none @lg:d-b mt-6 fs-sm c-smoke">Strategy, design and a sense<br className="d-none @lg:d-b" /> of what matters.</p>
      </div>
    </div>
    <div className="d-f fd-c @sm:fd-r ai-s @sm:ai-c g-5 @sm:g-8 mt-7 @md:mt-12">
      <a tabIndex={0} href="#contact" className="d-if ai-c jc-sb g-10 px-6 py-4 bg-lake c-white fs-sm br-0 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">Start a conversation <Arrow /></a>
      <TextLink href="#work">Explore the work</TextLink>
      <p className="fs-xs c-graphite @lg:ml-auto">Enquiries welcome<br /><span className="c-smoke">Project timing agreed together</span></p>
    </div>
  </section>;
}

function ConceptExcerpt({ number }: { number: string }) {
  if (number === '01') return <div className="bg-moss p-6 @md:p-10 d-f fd-c jc-sb min-h-72 @md:min-h-88">
    <p className="fs-xs tt-u ls-4">A neighbourhood grocer / Concept 01</p>
    <p className="ff-s fs-5xl @md:fs-6xl lh-1 ls-2 py-8">Good food.<br />Close to home.</p>
    <p className="fs-xs">Around the corner. Around the table.</p>
  </div>;
  if (number === '02') return <div className="bg-clay p-6 @md:p-10 d-f fd-c jc-sb min-h-72 @md:min-h-88">
    <p className="fs-xs tt-u ls-4">An architecture practice / Concept 02</p>
    <p className="ff-s fs-5xl @md:fs-6xl fs-i lh-1 ls-2 py-8 ta-c">A home is a<br />way of living.</p>
    <p className="fs-xs ta-r">Spaces for the everyday.</p>
  </div>;
  return <div className="bg-ink c-parchment p-6 @md:p-10 d-f fd-c jc-sb min-h-72 @md:min-h-88">
    <p className="fs-xs tt-u ls-4">An arts programme / Concept 03</p>
    <p className="ff-s fs-5xl @md:fs-6xl lh-1 ls-2 py-8">Come<br /><span className="fs-i">as you are.</span></p>
    <p className="fs-xs">A little curiosity is all you need.</p>
  </div>;
}

function Work() {
  return <section id="work" tabIndex={-1} aria-labelledby="work-heading" className="btw-1 bc-ash py-10 @md:py-16">
    <div className="d-f fd-c @md:fd-r jc-sb @md:ai-fe g-5 mb-10">
      <div><Label>01 / Selected work</Label><h2 id="work-heading" className="ff-s fw-400 fs-4xl @md:fs-5xl ls-2 mt-4">Ideas, put into practice.</h2></div>
      <p className="fs-xs c-smoke max-w-76">Three fictional case studies.<br />Original concepts, not client commissions.</p>
    </div>
    {projects.map((project) => <article key={project.number} className="d-g @md:gtc-12 g-6 @md:g-10 py-9 btw-1 bc-ash">
      <div className="@md:gc-s-5 d-f fd-c ai-s">
        <p className="fs-xs tt-u ls-4 c-smoke">{project.number} / {project.category}</p>
        <h3 className="ff-s fw-400 fs-4xl @lg:fs-5xl ls-2 mt-7">{project.name}</h3>
        <p className="fs-md mt-4">{project.title}</p>
        <p className="c-graphite lh-5 mt-3 max-w-116">{project.description}</p>
        <p className="fs-xs c-smoke mt-6 mb-5">{project.scope} / {project.year}</p>
        <div className="mt-auto">
          <details>
            <summary className="fs-sm py-3 c-p tdl-u tuo-4 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">Read the {project.name} concept</summary>
            <dl className="pt-4 pb-2 fs-sm lh-5">
              <dt className="fw-700">The brief</dt><dd className="c-graphite mt-2 mb-4">{project.brief}</dd>
              <dt className="fw-700">The response</dt><dd className="c-graphite mt-2 mb-4">{project.response}</dd>
              <dt className="fw-700">The takeaway</dt><dd className="c-graphite mt-2">{project.takeaway}</dd>
            </dl>
          </details>
        </div>
      </div>
      <figure className="@md:gc-s-7">
        <ConceptExcerpt number={project.number} />
        <figcaption className="d-f jc-sb g-3 mt-3 fs-xs c-smoke"><span>Messaging study</span><span>Fictional project / {project.number}</span></figcaption>
      </figure>
    </article>)}
  </section>;
}

function PointOfView() {
  return <section aria-labelledby="pov-heading" className="btw-1 bbw-1 bc-ash py-16 @md:py-24 d-g @md:gtc-12 g-8">
    <div className="@md:gc-s-3"><Label>02 / Our point of view</Label><p aria-hidden="true" className="ff-s fs-8xl lh-1 mt-8 d-none @md:d-b">*</p></div>
    <div className="@md:gc-s-9">
      <h2 id="pov-heading" className="ff-s fw-400 fs-4xl @md:fs-6xl @lg:fs-7xl ls-2 lh-2">The world has enough noise.<br /><span className="fs-i">Make something worth<br className="d-none @lg:d-b" /> paying attention to.</span></h2>
      <div className="d-g @lg:gtc-2 g-8 mt-9 c-graphite lh-5">
        <p>Good brands begin with a useful truth. Something specific to the people behind the business and the people it serves.</p>
        <p>Our job is to find that truth and give it a clear expression. In the words, the identity and every place the work meets the world.</p>
      </div>
    </div>
  </section>;
}

function Services() {
  return <section id="services" tabIndex={-1} aria-labelledby="services-heading" className="py-14 @md:py-20 d-g @md:gtc-12 g-8 @md:g-12">
    <div className="@md:gc-s-4"><Label>03 / What we do</Label><h2 id="services-heading" className="ff-s fw-400 fs-4xl @md:fs-5xl lh-2 ls-2 mt-5">From first thought<br />to final detail.</h2><p className="mt-6 c-graphite max-w-96">Four connected disciplines. The right combination for the question at hand.</p></div>
    <ol className="@md:gc-s-8">
      {services.map((service, i) => <li key={service.name} className="btw-1 bc-ash py-7 d-g gtc-12 g-3">
        <span className="fs-sm c-smoke pt-2 gc-s-1">0{i + 1}</span>
        <div className="gc-s-11"><h3 className="ff-s fw-400 fs-3xl @lg:fs-4xl ls-2">{service.name}</h3><p className="mt-4 c-graphite max-w-148">{service.description}</p><p className="mt-5 fs-xs c-smoke">{service.deliverables}</p></div>
      </li>)}
    </ol>
  </section>;
}

function Approach() {
  return <section id="approach" aria-labelledby="approach-heading" className="btw-1 bc-ash py-14 @md:py-20">
    <div className="d-f fd-c @md:fd-r jc-sb g-6 mb-12"><div><Label>04 / How we work</Label><h2 id="approach-heading" className="ff-s fw-400 fs-4xl @md:fs-5xl ls-2 mt-5">A shared process.<br />A clear direction.</h2></div><p className="max-w-100 c-graphite @md:pt-12">Close collaboration, useful conversations and decisions made with purpose.</p></div>
    <ol className="d-g @sm:gtc-2 @lg:gtc-4 g-8">
      {approach.map((step, i) => <li key={step.name} className="btw-1 bc-ash pt-5"><p className="fs-xs c-smoke">0{i + 1}</p><h3 className="ff-s fw-400 fs-3xl ls-2 mt-7 mb-4">{step.name}</h3><p className="c-graphite lh-5">{step.text}</p></li>)}
    </ol>
  </section>;
}

function Results() {
  return <section aria-labelledby="results-heading" className="bg-mist p-6 @md:p-12 my-4">
    <div className="d-f fd-c @md:fd-r jc-sb g-5"><div><Label>05 / What progress could look like</Label><h2 id="results-heading" className="ff-s fw-400 fs-4xl @md:fs-5xl ls-2 mt-5">A way to measure the work.</h2></div><p className="fs-xs max-w-76 c-graphite">Illustrative metrics only.<br />Fictional numbers, not measured outcomes or forecasts.</p></div>
    <dl className="d-g @lg:gtc-3 g-9 mt-10">
      {metrics.map((metric) => <div key={metric.label} className="btw-1 bc-ash pt-6"><dt className="fs-sm">{metric.label}<span className="d-b c-graphite fs-xs mt-1">{metric.context}</span></dt><dd className="ff-s fs-6xl @md:fs-7xl ls-2 lh-1 mt-5 mb-5">{metric.value}</dd><dd className="fs-xs c-graphite">{metric.calculation}<br />{metric.note}</dd></div>)}
    </dl>
    <p className="mt-8 pt-5 btw-1 bc-ash fs-xs c-graphite">A real engagement would agree a baseline, a reporting period and a measurement method before launch. These examples make no claim of causation.</p>
  </section>;
}

function About() {
  return <section id="about" tabIndex={-1} aria-labelledby="about-heading" className="py-16 @md:py-24 d-g @md:gtc-12 g-8 @md:g-12">
    <div className="@md:gc-s-4"><Label>06 / The studio</Label><h2 id="about-heading" className="ff-s fw-400 fs-4xl @md:fs-5xl ls-2 lh-2 mt-5">Curious minds.<br />Feet on the ground.</h2></div>
    <div className="@md:gc-s-8"><p className="ff-s fs-3xl @lg:fs-4xl lh-3 ls-2">Fieldwork is imagined as a small, independent studio for businesses with something useful to bring to the world.</p><p className="c-graphite mt-7 lh-5">The model is simple: strategy and creative direction at one table, with specialist collaborators brought in to suit the work. Direct conversations with the people doing the thinking and making.</p>
      <dl className="d-g @sm:gtc-2 g-7 mt-10">
        <div className="btw-1 bc-ash pt-4"><dt className="fs-xs tt-u ls-4 c-smoke">Based in</dt><dd className="mt-3">London, UK.<br />Built for remote collaboration.</dd></div>
        <div className="btw-1 bc-ash pt-4"><dt className="fs-xs tt-u ls-4 c-smoke">Good company</dt><dd className="mt-3">Independent businesses, cultural organisations and teams ready for change.</dd></div>
        <div className="btw-1 bc-ash pt-4"><dt className="fs-xs tt-u ls-4 c-smoke">At the table</dt><dd className="mt-3">Strategy, writing, identity, art direction and web development.</dd></div>
        <div className="btw-1 bc-ash pt-4"><dt className="fs-xs tt-u ls-4 c-smoke">Availability</dt><dd className="mt-3">Enquiries welcome.<br />Scope and timing agreed together.</dd></div>
      </dl>
    </div>
  </section>;
}

function FAQ() {
  return <section id="faq" tabIndex={-1} aria-labelledby="faq-heading" className="btw-1 bc-ash py-14 @md:py-20 d-g @md:gtc-12 g-8 @md:g-12">
    <div className="@md:gc-s-4"><Label>07 / A few practicalities</Label><h2 id="faq-heading" className="ff-s fw-400 fs-4xl @md:fs-5xl ls-2 mt-5">Before we begin.</h2></div>
    <div className="@md:gc-s-8">{faqs.map((faq) => <Disclosure key={faq.question} question={faq.question}><p>{faq.answer}</p></Disclosure>)}</div>
  </section>;
}

function Contact() {
  const demo = __CONTACT_EMAIL__.endsWith('.example');
  return <section id="contact" tabIndex={-1} aria-labelledby="contact-heading" className="btw-1 bc-ash pt-14 pb-16 @md:py-24">
    <Label>08 / A good place to start</Label>
    <div className="d-g @lg:gtc-12 g-8 ai-fe mt-6">
      <h2 id="contact-heading" className="ff-s fw-400 fs-5xl @md:fs-7xl @xl:fs-8xl ls-2 lh-1 @lg:gc-s-8">What are you<br /><span className="fs-i">working towards?</span></h2>
      <div className="@lg:gc-s-4"><p className="c-graphite mb-6">Tell us where you are, where you want to go and what is getting in the way.</p><a tabIndex={0} href={`mailto:${__CONTACT_EMAIL__}?subject=${encodeURIComponent('A project for Fieldwork')}`} className="d-if ai-c g-4 py-3 tdl-u tuo-4 ow-bw fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">{__CONTACT_EMAIL__} <Arrow /></a><p className="fs-xs c-smoke mt-4">{demo ? 'Demo email address. Opens a draft; this inbox is not monitored.' : 'Opens your email app. Include your timing and a short project outline.'}</p></div>
    </div>
  </section>;
}

function NotFound() {
  return <section className="py-20 @md:py-32"><Label>404 / A small detour</Label><h1 className="ff-s fw-400 fs-5xl @md:fs-7xl ls-2 lh-1 mt-8">This page is<br /><span className="fs-i">off the map.</span></h1><p className="c-graphite max-w-128 mt-8 mb-7">There is no page at this address. Head back to the studio to explore the work or start a conversation.</p><TextLink href="/">Back to Fieldwork</TextLink></section>;
}

export function App({ path }: { path: string }) {
  return <div id="top" className="max-w-360 mx-auto px-5 @sm:px-8 @lg:px-14 @xl:px-18">
    <a tabIndex={0} href="#main" className="p-a t--20 l-5 f:t-4 zi-10 bg-ink c-parchment p-4 fs-sm fv:os-s fv:ow-2 fv:oc-parchment fv:oo-4">Skip to content</a>
    <Header />
    <main id="main" tabIndex={-1}>{path === '/' ? <><Hero /><Work /><PointOfView /><Services /><Approach /><Results /><About /><FAQ /><Contact /></> : <NotFound />}</main>
    <Footer />
  </div>;
}



