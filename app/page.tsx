import { pageMetadata } from "./seo";
import { StructuredData } from "./components/structured-data";
import { Header } from "./components/header";
import { HeroVisual } from "./components/hero-visual";
import { Icon, BrandMark } from "./components/icons";
import { ProjectForm } from "./components/project-form";
import { AutomationTeasers } from "./components/automation-teasers";
import { BusinessEssentials } from "./components/business-essentials";
import { TechStack } from "./components/tech-stack";
import { ProjectGallery } from "./components/project-gallery";
import { Footer } from "./components/footer";
import { siteContact } from "./site-config";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/");

const faqs = [
  {
    question: "Can these services be booked separately?",
    answer:
      "Yes. Google Business Profile optimization, custom websites, and AI automations are each available on their own. We’ll start with the part of your business that needs attention and connect the services where it helps.",
  },
  {
    question: "Should a local business start with a Google profile or a website?",
    answer:
      "If nearby customers are your priority, your Google Business Profile may be a useful first step. It helps people check your business on Search and Maps. A website gives them more detail about your work and services. We’ll look at what you already have and where customers need a clearer next step.",
  },
  {
    question: "What can AI automation actually do for a business?",
    answer:
      "We’ve built agents that respond to WhatsApp conversations and incoming emails, along with a workflow that saves new IndiaMART leads to a database. We’ll look at your day-to-day work and choose a practical place to start.",
  },
  {
    question: "Can you work with an existing website and tools?",
    answer:
      "Yes. We’ll look at what you already use and what’s getting in the way. We’ll check the available integrations before recommending a rebuild, an improvement, or a new workflow.",
  },
  {
    question: "How much will it cost, and how long will it take?",
    answer:
      "That depends on the pages, features, and integrations involved. After discussing your project, we’ll provide a clear scope, price, and timeline for approval before work begins.",
  },
  {
    question: "Can you also help with business email, domains, and hosting?",
    answer:
      "Yes. We can set up professional Google Workspace email on your domain and help with your domain and hosting. These supporting services are available separately or alongside your project, with ongoing costs and support agreed in advance.",
  },
  {
    question: "Is a detailed brief required?",
    answer:
      "No detailed brief is needed. Share what your business does, what isn’t working, or a task that takes too much time. We can find the right starting point together.",
  },
];

const steps = [
  {
    number: "01",
    title: "First, we talk.",
    copy: "Tell us about your business and what you want to improve. We’ll define the right solution, scope, and budget.",
  },
  {
    number: "02",
    title: "Then, we build.",
    copy: "We build your website or automation, or improve your Google Business Profile. You see what’s changing and why along the way.",
  },
  {
    number: "03",
    title: "We make it yours.",
    copy: "We check the work together, walk through what you need to know, and agree on any ongoing updates or support.",
  },
];

export default function Home() {
  return (
    <>
      <StructuredData path="/" />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <section
          className="hero section-wrap"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" /> DIGITAL SERVICES. BUILT AROUND YOUR BUSINESS.
            </p>
            <h1 id="hero-title">
              Get found.
              <br />
              Get <em>chosen.</em>
              <br />
              Work smarter<span className="orange-text">.</span>
            </h1>
            <p className="hero-description">
              Custom websites, Google Business Profile optimization, and AI
              automations for small businesses. Practical support to improve your
              online presence and reduce repetitive work. Based in Bhiwadi,
              we also work with businesses remotely.
            </p>
            <div className="hero-actions">
              <a className="button button-orange" href="#contact">
                Discuss your project <Icon name="arrow-up-right" />
              </a>
              <a className="text-link" href="#services">
                Explore services <Icon name="arrow-down" />
              </a>
            </div>
            <p className="hero-footnote">
              <span className="tiny-star" aria-hidden="true">✳</span> Clear scope, price, and timeline before work begins.
            </p>
          </div>
          <HeroVisual />
        </section>

        <section
          className="services section-wrap section-space"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="section-marker" /> WHAT WE DO
              </p>
              <h2 id="services-title">
                Find the right
                <br />
                <em>starting point.</em>
              </h2>
            </div>
            <p className="section-description">
              Get discovered locally, give customers confidence, and spend less
              time on repeat tasks. Start where your business needs it most.
            </p>
          </div>
          <div className="pathways">
            <article className="pathway pathway-local">
              <div className="pathway-number"><span>01</span><Icon name="map-pin" /></div>
              <div className="pathway-main">
                <p>FOR LOCAL BUSINESSES</p>
                <h3>Google Business Profile<br /><em>optimization.</em></h3>
                <p className="pathway-description">Keep your business details, services, and photos clear and up to date on Google Search and Maps, so nearby customers know how to call or visit.</p>
                <Link href="/google-business-profile" className="text-link">Explore profile services <Icon name="arrow-up-right" /></Link>
              </div>
            </article>

            <article className="pathway pathway-web">
              <div className="pathway-number"><span>02</span><Icon name="browser" /></div>
              <div className="pathway-main">
                <p>YOUR OWN ONLINE PRESENCE</p>
                <h3>Custom<br /><em>websites.</em></h3>
                <p className="pathway-description">Show your services and past work on a website designed for your business, with readable mobile layouts and clear ways to get in touch.</p>
                <Link href="/websites" className="text-link">Explore websites <Icon name="arrow-up-right" /></Link>
              </div>
            </article>

            <article className="pathway pathway-automation">
              <div className="pathway-number"><span>03</span><Icon name="workflow" /></div>
              <div className="pathway-main">
                <p>THE WAY YOU GET THINGS DONE</p>
                <h3>AI<br /><em>automations.</em></h3>
                <p className="pathway-description">Handle repeat questions on WhatsApp and email, or capture IndiaMART leads in a database. Start with one task and agree when you need to take over.</p>
                <Link href="/ai-automations" className="text-link">Explore automations <Icon name="arrow-up-right" /></Link>
              </div>
            </article>
          </div>
          <p className="services-note">
            <Icon name="plus" /> Start with one service. Connect your profile,
            website, and follow-up as your business needs grow.
          </p>
        </section>

        <section className="section-wrap selected-work" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="section-marker" /> SELECTED WEBSITE PROJECTS</p>
              <h2 id="work-title">Different businesses.<br /><em>Distinctly their own.</em></h2>
            </div>
            <p className="section-description">A closer look at websites we’ve worked on, from interior design to water treatment and industrial supply. Explore the actual sites below.</p>
          </div>
          <ProjectGallery limit={2} />
          <div className="selected-work-actions">
            <a className="text-link selected-work-link" href="/websites#website-projects">See all website projects <Icon name="arrow-up-right" /></a>
            <a className="button button-dark" href="#contact">Discuss your project <Icon name="arrow-down" /></a>
          </div>
        </section>

        <AutomationTeasers />
        <BusinessEssentials />

        <section
          className="process section-wrap section-space"
          id="process"
          aria-labelledby="process-title"
        >
          <div className="process-intro">
            <p className="eyebrow">
              <span className="section-marker" /> HOW WE’LL WORK
            </p>
            <h2 id="process-title">
              Good work.
              <br />
              A <em>simple</em> process.
            </h2>
            <p className="section-description">
              Stay involved, see progress along the way, and understand
              what you’re getting before we begin.
            </p>
            <div className="personal-note">
              <BrandMark />
              <p>
                Focused support, by design.
                <br />
                <span>Clear communication from the first conversation to launch.</span>
              </p>
            </div>
          </div>
          <ol className="process-steps">
            {steps.map((step) => (
              <li key={step.number}>
                <span className="step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
                <Icon name="arrow-up-right" />
              </li>
            ))}
          </ol>
        </section>

        <TechStack />

        <section
          className="faq-section section-wrap"
          id="faq"
          aria-labelledby="faq-title"
        >
          <div>
            <p className="eyebrow">
              <span className="section-marker" /> A FEW MORE THINGS
            </p>
            <h2 id="faq-title">
              Good <em>questions.</em>
              <br />
              Straight answers.
            </h2>
            <p className="section-description">
              Wondering where to start?
              <br />
              You’re in the right place.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question} name="questions">
                <summary>
                  <span className="faq-number">0{index + 1}</span>
                  <span>{faq.question}</span>
                  <Icon name="plus" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          className="contact-section section-wrap"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-copy">
            <p className="eyebrow">
              <span className="section-marker" /> YOUR NEXT CHAPTER
            </p>
            <h2 id="contact-title">
              Got something
              <br />
              in <em>mind?</em>
              <span className="contact-spark" aria-hidden="true">✳</span>
            </h2>
            <p>
              Let’s turn “there must be a better way” into something that works for
              you.
            </p>
            <p className="contact-small">
              Want a stronger local presence, a better website, or less manual
              work? Tell us about your business and what you’d like to improve.
            </p>
            <div className="contact-next">
              <h3>What happens next?</h3>
              <ol>
                <li>Share your business and what you want to improve.</li>
                <li>We discuss the right starting point and any questions.</li>
                <li>You review the scope, price, and timeline before deciding.</li>
              </ol>
            </div>
            <span className="contact-signoff">
              Good things start with a conversation. <Icon name="arrow-down" />
            </span>
          </div>
          <ProjectForm
            contactEmail={process.env.CONTACT_EMAIL || siteContact.email}
            bookingUrl={process.env.BOOKING_URL}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
