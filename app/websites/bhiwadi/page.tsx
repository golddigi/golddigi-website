import Link from "next/link";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Icon } from "../../components/icons";
import { ProjectGallery } from "../../components/project-gallery";
import { StructuredData } from "../../components/structured-data";
import { pageMetadata } from "../../seo";
import { whatsappLink } from "../../site-config";
import styles from "../websites.module.css";

export const metadata = pageMetadata("/websites/bhiwadi");

const questions = [
  { question: "Are you based in Bhiwadi?", answer: "Yes. We are based in Bhiwadi and have delivered services through in-person visits. We now also welcome projects managed remotely, so you can share content and review the work without arranging a visit for every step." },
  { question: "What should we prepare for a website quote?", answer: "Share your business name, current website if you have one, the products or services you want to show, and how customers should contact you. Product photographs, specifications, project images and existing brochures help us understand the content. We agree on the pages, responsibilities, cost and timeline before work begins." },
  { question: "Can we show products without taking payments online?", answer: "Yes. A catalogue website can explain each product and give buyers a way to ask about specifications, availability or a quotation. An online checkout is a separate requirement to discuss when defining your project." },
  { question: "Can the website and Google Business Profile work together?", answer: "Yes. Your website can explain your services in detail while an eligible Business Profile shows your contact details, hours and location or service area. Profile optimization and management can be scoped separately. Neither a website nor a profile guarantees a particular search position." },
  { question: "Can we manage the project remotely?", answer: "Yes. We can discuss the brief, exchange content and review the website remotely. Before starting, we agree on how feedback will be collected, who approves the content and what support you need after launch." },
];

export default function BhiwadiWebsitesPage() {
  return <>
    <StructuredData path="/websites/bhiwadi" />
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <section className={`section-wrap ${styles.hero}`}>
        <div className={styles.heroCopy}>
          <nav aria-label="Breadcrumb"><Link className="text-link" href="/websites">Website services <Icon name="arrow-right" /></Link></nav>
          <h1>Website design in Bhiwadi. <em>Made for your business.</em></h1>
          <p className={styles.intro}>We design and develop business websites from Bhiwadi, with remote collaboration available from the first brief to handover. Give customers a clear way to explore your products, understand your services and send an enquiry.</p>
          <div className={styles.actions}><Link className="button button-orange" href="/#contact">Discuss your website <Icon name="arrow-up-right" /></Link><a className="text-link" href="#projects">View website projects <Icon name="arrow-down" /></a></div>
        </div>
        <aside className={styles.pathCard} aria-labelledby="brief-title">
          <h2 id="brief-title" className={styles.pathHeadline}>What should your<br /><em>website help people do?</em></h2>
          <ol className={styles.pathSteps}>
            <li><span>01</span><div><strong>Understand your offer</strong><p>Services, products and specifications.</p></div></li>
            <li><span>02</span><div><strong>Check your work</strong><p>Real project photographs and examples.</p></div></li>
            <li><span>03</span><div><strong>Ask the right question</strong><p>A quote, a consultation or product details.</p></div></li>
          </ol>
        </aside>
      </section>

      <section className="section-wrap section-space" aria-labelledby="scope-title">
        <div className={styles.sectionHeading}><h2 id="scope-title">Plan the pages<br /><em>around your buyers.</em></h2><p>A product enquiry and a service booking need different information. We start with what your customer needs to decide.</p></div>
        <div className={styles.deliverableGrid}>
          <article className={styles.deliverable}><h3>Product and supplier websites</h3><p>Organize your product range into clear categories. Use your photographs, specifications and application details to help buyers ask for the right item or quotation.</p></article>
          <article className={styles.deliverable}><h3>Service business websites</h3><p>Explain the work you offer, where you serve customers and what an enquiry should include. Add contact or booking links that match how you actually take enquiries.</p></article>
          <article className={styles.deliverable}><h3>Portfolio websites</h3><p>Present completed work with project images and clear descriptions of your contribution. Give visitors a route from a relevant example to discussing their own project.</p></article>
        </div>
      </section>

      <section className="section-wrap section-space" id="projects" aria-labelledby="projects-title">
        <div className={styles.sectionHeading}><h2 id="projects-title">See the work.<br /><em>Explore the websites.</em></h2><p>Examples from our website portfolio: architecture and interiors, and water treatment and industrial supply.</p></div>
        <ProjectGallery limit={2} />
      </section>

      <section className="section-wrap section-space" aria-labelledby="delivery-title">
        <div className={styles.sectionHeading}><h2 id="delivery-title">A local base.<br /><em>A remote working process.</em></h2><p>We agree on the scope before building. Share your existing website, content and priorities; we plan the pages, review the work together and prepare for launch.</p></div>
        <div className={styles.deliverableGrid}>
          <article className={styles.deliverable}><h3>Content and reviews</h3><p>We agree on who supplies copy, images and product details, and how feedback is collected. If you need to update content yourself, we can include an editable CMS in the scope.</p></article>
          <article className={styles.deliverable}><h3>Launch and ownership</h3><p>Domain and hosting setup, access handover and ongoing support are discussed before work begins. Renewals and third-party subscriptions are identified separately in your proposal.</p><Link className="text-link" href="/websites">Website deliverables <Icon name="arrow-right" /></Link></article>
          <article className={styles.deliverable}><h3>Discovery and follow-up</h3><p>Connect your website with your local presence or a lead workflow where it helps your business.</p><Link className="text-link" href="/google-business-profile">Google Business Profile services <Icon name="arrow-right" /></Link><Link className="text-link" href="/ai-automations">Enquiry automations <Icon name="arrow-right" /></Link></article>
        </div>
      </section>

      <section className={`section-wrap ${styles.faqSection}`} aria-labelledby="faq-title">
        <h2 id="faq-title">Website design in Bhiwadi.<br /><em>Your questions answered.</em></h2>
        <div className={styles.faqList}>{questions.map(({ question, answer }) => <details className={styles.faq} key={question}><summary>{question}<Icon name="plus" /></summary><p>{answer}</p></details>)}</div>
      </section>
      <section className={`section-wrap ${styles.finalCta}`} aria-labelledby="contact-title">
        <div><h2 id="contact-title">Tell us what your<br /><em>website needs to do.</em></h2><p>Share your business, products or services, and any existing website. We will discuss the scope, price and timeline with you before work begins.</p><p>Opens WhatsApp with a draft you can review and send.</p></div>
        <a className="button button-dark" href={whatsappLink("Hello, we would like to discuss website design in Bhiwadi.")} target="_blank" rel="noopener noreferrer">Discuss on WhatsApp <Icon name="arrow-up-right" /></a>
      </section>
    </main>
    <Footer />
  </>;
}
