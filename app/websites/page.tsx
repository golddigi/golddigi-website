import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { BrandMark, Icon } from "../components/icons";
import { ProjectGallery } from "../components/project-gallery";
import styles from "./websites.module.css";

export const metadata: Metadata = {
  title: "Custom Websites for Your Business | Golddigi",
  description:
    "Custom business websites with clear content, thoughtful design and an easy path to enquire. Explore Golddigi’s work and website, CMS, hosting and business setup services.",
  alternates: { canonical: "/websites" },
  openGraph: {
    title: "Custom Websites for Your Business | Golddigi",
    description:
      "Custom websites with clear content, thoughtful design and an easy path to enquire. Explore real projects and find the right website setup for your business.",
    url: "/websites",
  },
};

const deliverables = [
  { title: "A design that fits your business", text: "A considered visual direction, with layouts, colours and typography that suit what you do and who you serve." },
  { title: "Content people can follow", text: "Clear page structure and navigation that help visitors understand your services, explore your work and take the next step." },
  { title: "Care on every screen", text: "Responsive layouts, readable content and attention to performance, so the experience holds together on phones and desktops." },
  { title: "An easy way to enquire", text: "Contact forms, WhatsApp links or booking links connected to the way your business receives enquiries." },
  { title: "Content you can keep fresh", text: "A Sanity CMS setup when you need to manage projects, services or articles without editing website code." },
  { title: "A proper launch and handover", text: "Checks before launch, help connecting your domain and a walkthrough of the parts you’ll manage afterwards." },
];

const support = [
  { icon: "browser" as const, title: "Domain & hosting", text: "Help choosing and connecting the domain and hosting your website needs, with ongoing support available." },
  { icon: "mail" as const, title: "Professional business email", text: "Google Workspace setup for email on your own domain, plus the Gmail and Drive tools your team uses." },
  { icon: "map-pin" as const, title: "Google Business Profile", text: "Help nearby customers find and choose your business on Search and Maps. Available as a dedicated service, with initial optimization and ongoing management.", href: "/google-business-profile" },
];

const faqs = [
  { question: "Can you redesign my current website?", answer: "Yes. We start by looking at what you have, what still works and what needs to change. Useful pages and content can carry over, and any URL changes are planned before launch." },
  { question: "Will I be able to update it myself?", answer: "If regular updates are part of your needs, we can include Sanity CMS for the content you want to manage. The proposal will set out which content is editable, and I’ll show you how to use it." },
  { question: "Do you also handle domain, email and hosting?", answer: "Yes, those can be scoped alongside your website. Setup and ongoing support are agreed in the proposal. Domain renewals, hosting and third-party subscriptions such as Google Workspace are separate recurring costs." },
  { question: "Can my website connect to an automation?", answer: "Yes. For example, a website enquiry can feed into your lead database or a follow-up workflow. We’ll first confirm the tools and access you have, then define exactly what the connection should do." },
  { question: "How do we work out the cost and timeline?", answer: "Share a little about your business, the pages or features you need and whether you have content ready. I’ll then put together a scope, timeline and quote for you to review before we start." },
];

export default function WebsitesPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <section className={`section-wrap ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow"><span className={styles.dot} /> CUSTOM WEBSITES</p>
            <h1>A website that feels like you. <em>And works for your business.</em></h1>
            <p className={styles.intro}>Give people a clear picture of what you do, a reason to trust you and an easy way to get in touch. I design and build your website around all three.</p>
            <div className={styles.actions}>
              <Link className="button button-orange" href="/#contact">Let’s discuss your website <Icon name="arrow-up-right" /></Link>
              <a className="text-link" href="#website-projects">Explore my work <Icon name="arrow-down" /></a>
            </div>
          </div>
          <aside className={styles.pathCard} aria-label="The visitor journey">
            <div className={styles.pathTop}><span>DESIGNED WITH PURPOSE</span><BrandMark /></div>
            <p className={styles.pathHeadline}>From first impression<br />to <em>first conversation.</em></p>
            <ol className={styles.pathSteps}>
              <li><span>01</span><div><strong>Understand your business</strong><p>What you do. Who you help.</p></div></li>
              <li><span>02</span><div><strong>See a reason to trust you</strong><p>Your work. Your expertise.</p></div></li>
              <li><span>03</span><div><strong>Take the next step</strong><p>A clear, straightforward enquiry.</p></div><Icon name="arrow-up-right" /></li>
            </ol>
          </aside>
        </section>

        <div className={styles.stackStrip}>
          <div className={`section-wrap ${styles.stackInner}`}>
            <p>A considered toolkit.<br /><strong>A website built for you.</strong></p>
            <div><span>Next.js</span><small>WEBSITE DEVELOPMENT</small></div>
            <div><span>Sanity</span><small>CONTENT MANAGEMENT</small></div>
            <div><span>GitHub</span><small>CODE & VERSION HISTORY</small></div>
          </div>
        </div>

        <section className="section-wrap section-space" id="website-projects">
          <div className={styles.sectionHeading}>
            <div><p className="eyebrow">01 / SELECTED WORK</p><h2>Different businesses.<br /><em>Their own presence.</em></h2></div>
            <p>Architecture, healthcare, manufacturing and consultancy. Explore websites I’ve worked on for real businesses.</p>
          </div>
          <ProjectGallery />
        </section>

        <section className={styles.deliverables}>
          <div className="section-wrap section-space">
            <div className={styles.sectionHeading}>
              <div><p className="eyebrow">02 / YOUR WEBSITE</p><h2>Every part has<br /><em>a job to do.</em></h2></div>
              <p>We agree on the right pages, features and content tools for your business. Here’s what we can build into the plan.</p>
            </div>
            <div className={styles.deliverableGrid}>
              {deliverables.map((item, index) => (
                <article key={item.title} className={styles.deliverable}>
                  <span className={styles.number}>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap section-space" id="business-setup">
          <div className={styles.sectionHeading}>
            <div><p className="eyebrow">03 / BEYOND THE WEBSITE</p><h2>Make your online presence<br /><em>work together.</em></h2></div>
            <p>Connect your website with local discovery, professional email and reliable hosting. Each service can also be discussed on its own.</p>
          </div>
          <div className={styles.supportGrid}>
            {support.map((item) => (
              <article className={styles.supportCard} key={item.title}>
                <Icon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.href && <Link href={item.href} className="text-link">Explore profile services <Icon name="arrow-up-right" /></Link>}
              </article>
            ))}
          </div>
          <div className={styles.automationLink}>
            <span><Icon name="workflow" /><strong>What happens after an enquiry arrives?</strong></span>
            <Link href="/ai-automations">Explore AI automations <Icon name="arrow-up-right" /></Link>
          </div>
        </section>

        <section className={`section-wrap ${styles.faqSection}`}>
          <div><p className="eyebrow">04 / GOOD TO KNOW</p><h2>Before<br /><em>we build.</em></h2></div>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.question} className={styles.faq}>
                <summary>{faq.question}<Icon name="plus" /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={`section-wrap ${styles.finalCta}`}>
          <div><p className="eyebrow">A NEW WEBSITE. A CLEAR NEXT STEP.</p><h2>Let’s make your business<br /><em>easy to choose.</em></h2><p>Tell me what you do and what your current website is missing. We’ll work out what you need from there.</p></div>
          <Link className="button button-dark" href="/#contact">Talk about your website <Icon name="arrow-up-right" /></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
