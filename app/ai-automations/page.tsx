import { pageMetadata } from "../seo";
import { StructuredData } from "../components/structured-data";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { AutomationShowcase } from "../components/automation-showcase";
import { CaseStudyTeaser } from "../components/case-study-teaser";
import { Icon, BrandMark } from "../components/icons";
import { whatsappLink } from "../site-config";
import styles from "./automations.module.css";

export const metadata: Metadata = pageMetadata("/ai-automations");

const steps = [
  { title: "Start with the task.", description: "We look at how enquiries arrive, what you repeat, and where an automation would be useful." },
  { title: "Connect the right tools.", description: "We agree on the accounts, information, and reply rules your workflow needs, then build the connections." },
  { title: "Test it with real scenarios.", description: "We check the workflow together and decide what should happen when an enquiry needs your attention." },
  { title: "Make it part of your day.", description: "You get a walkthrough of how it runs, what it uses, and the support agreed for your setup." },
];

const faqs = [
  { question: "Are these systems you have actually built?", answer: "Yes. We’ve built WhatsApp product assistants, email reply agents, daily Gmail-to-Google-Sheets enquiry collection, personalized marketing emails, and a workflow that saves new IndiaMART leads to a database. The visuals on this page use sample conversations and lead details to explain how those systems work." },
  { question: "Do the WhatsApp and email agents send replies automatically?", answer: "Yes, the reply agents can generate and send responses. For your project, we’ll agree on the information the agent can use, the situations it should handle, and which conversations need your attention before enabling automatic replies." },
  { question: "Does the IndiaMART workflow also contact the leads?", answer: "The workflow shown here captures new IndiaMART leads and stores them in a database. Follow-up messages, reminders, or other actions can be discussed as a separate extension." },
  { question: "Can you use existing accounts?", answer: "We start with the tools and accounts you already use. We’ll check the available access and integrations before agreeing on the setup. You don’t need every tool shown on this website." },
  { question: "What is included in the cost?", answer: "The project quote sets out the workflow, integrations, testing, and handover. Hosting, messaging, AI usage, and other third-party subscriptions are discussed separately, along with any ongoing support." },
];

export default function AutomationsPage() {
  return (
    <>
      <StructuredData path="/ai-automations" />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <section className={`section-wrap ${styles.hero}`} aria-labelledby="automation-title">
          <div>
            <p className="eyebrow"><span className="section-marker" /> AI AUTOMATIONS</p>
            <h1 id="automation-title">AI automation<br />&amp; workflows.<br /><em>Less manual work.</em></h1>
          </div>
          <div className={styles.heroAside}>
            <BrandMark />
            <p>Stay in the conversation, without doing every step yourself.</p>
            <span>We build agents that respond on WhatsApp and email, and workflows that turn incoming IndiaMART enquiries into organized lead records.</span>
            <a className="button button-orange" href="#automation-showcase">See how they work <Icon name="arrow-down" /></a>
          </div>
        </section>

        <section className={`section-wrap ${styles.showcaseSection}`} id="automation-showcase" aria-labelledby="showcase-title">
          <div className={styles.showcaseHeading}>
            <div><p className="eyebrow">AUTOMATIONS WE’VE BUILT</p><h2 id="showcase-title">Explore our AI<br /><em>automation workflows.</em></h2></div>
            <p>We adapt each workflow to your business, connected accounts, and the tasks you want to automate.</p>
          </div>
          <div className="mb-9 grid grid-cols-1 gap-7 lg:grid-cols-3 lg:gap-9">
            <article>
              <h3 className="mb-3 text-2xl font-medium tracking-tight">WhatsApp outreach &amp; replies</h3>
              <p className="text-[15px] leading-relaxed text-[var(--muted)]">We connect template messages for opted-in customers with an AI agent that answers questions about your products, specifications and other supplied details. We agree on its information and reply rules before enabling automatic responses.</p>
            </article>
            <article>
              <h3 className="mb-3 text-2xl font-medium tracking-tight">Email reply automation</h3>
              <p className="text-[15px] leading-relaxed text-[var(--muted)]">We build an AI agent that reads incoming Gmail messages and sends relevant responses, with agreed context and rules for conversations that need your attention.</p>
            </article>
            <article>
              <h3 className="mb-3 text-2xl font-medium tracking-tight">IndiaMART lead capture</h3>
              <p className="text-[15px] leading-relaxed text-[var(--muted)]">We capture new IndiaMART enquiries and save the lead details to a database, giving you an organized place to review enquiries without copying each record by hand.</p>
            </article>
          </div>
          <AutomationShowcase />
        </section>

        <section className="section-wrap section-space" aria-labelledby="email-workflows-title">
          <h2 id="email-workflows-title" className="mb-8 text-3xl font-medium tracking-tight sm:text-4xl">Enquiry collection &amp; personalized email.</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <article>
              <h3 className="mb-3 text-2xl font-medium">Gmail enquiries to Google Sheets</h3>
              <p className="text-[15px] leading-relaxed text-[var(--muted)]">We built a daily workflow that adds incoming Gmail enquiries to a Google Sheets database at 8 am. It brings enquiry details into one place for review and follow-up. For your setup, we agree on the fields, schedule and time zone.</p>
            </article>
            <article>
              <h3 className="mb-3 text-2xl font-medium">Personalized marketing emails</h3>
              <p className="text-[15px] leading-relaxed text-[var(--muted)]">We built an email workflow that personalizes each marketing message before sending it. For your project, we agree on the recipient information, message content and sending rules.</p>
            </article>
          </div>
        </section>

        <CaseStudyTeaser />

        <section className={styles.connections} aria-labelledby="connections-title">
          <div className={`section-wrap ${styles.connectionInner}`}>
            <div><p className="eyebrow"><span className="section-marker" /> HOW IT COMES TOGETHER</p><h2 id="connections-title">One useful workflow.<br /><em>The right connections.</em></h2></div>
            <div className={styles.connectionList}>
              <article><span className={styles.toolMark}>n8n</span><div><h3>n8n connects the steps.</h3><p>It links the incoming event, the action to take, and the tool that receives the result.</p></div></article>
              <article><span className={styles.toolMark}>AI</span><div><h3>OpenAI powers the replies.</h3><p>It generates answers for the WhatsApp and email agents based on the message and configured context.</p></div></article>
              <article><span className={styles.toolMark}>DB</span><div><h3>Your tools keep their place.</h3><p>WhatsApp’s official API, Gmail, Google Drive, and PostgreSQL through Supabase can play a part where the workflow needs them.</p></div></article>
            </div>
          </div>
        </section>

        <section className={`section-wrap section-space ${styles.process}`} aria-labelledby="automation-process-title">
          <div className={styles.showcaseHeading}><div><p className="eyebrow"><span className="section-marker" /> BUILT AROUND YOUR BUSINESS</p><h2 id="automation-process-title">From a repeated task<br />to a <em>working system.</em></h2></div><p>A clear scope, connected accounts, and a workflow you understand before it becomes part of your day.</p></div>
          <ol>{steps.map((step, index) => <li key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
        </section>

        <section className={`section-wrap ${styles.faq}`} aria-labelledby="automation-faq-title">
          <div><p className="eyebrow"><span className="section-marker" /> GOOD TO KNOW</p><h2 id="automation-faq-title">AI automation<br /><em>FAQs.</em></h2></div>
          <div className="faq-list">{faqs.map((faq) => <details className="faq-item" name="automation-faq" key={faq.question}><summary><span>{faq.question}</span><Icon name="plus" /></summary><p>{faq.answer}</p></details>)}</div>
        </section>

        <section className={`section-wrap ${styles.cta}`} aria-labelledby="automation-contact-title">
          <div><p className="eyebrow">LET’S FIND YOUR STARTING POINT</p><h2 id="automation-contact-title">What would you love<br />to do <em>less of?</em></h2><p>Tell us about the conversations, enquiries, or repetitive work taking up your day.</p></div>
          <div className={styles.ctaActions}><a className="button button-dark" href={whatsappLink("Hello, we’d like to discuss an automation for our business.")} target="_blank" rel="noopener noreferrer">Discuss an automation <Icon name="arrow-up-right" /></a><Link className="text-link" href="/#contact">Share a few details first <Icon name="arrow-right" /></Link><span>Opens a conversation on WhatsApp.</span></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
