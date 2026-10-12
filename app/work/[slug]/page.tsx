import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Icon } from "../../components/icons";
import { StructuredData } from "../../components/structured-data";
import { pageMetadata } from "../../seo";
import { projects, type ProjectSlug } from "../projects";
import styles from "./work.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  if (!(slug in projects)) return {};
  return pageMetadata(projects[slug as ProjectSlug].path);
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  if (!(slug in projects)) notFound();
  const project = projects[slug as ProjectSlug];

  return <>
    <StructuredData path={project.path} />
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <section className={`section-wrap ${styles.hero}`}>
        <div>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/websites">Website projects</Link><span aria-hidden="true">/</span><span>{project.name}</span></nav>
          <p className="eyebrow"><span className="section-marker" /> {project.category}</p>
          <h1>{project.name}.<br /><em>A website built around the work.</em></h1>
          <p className={styles.intro}>{project.summary}</p>
          <div className={styles.actions}><a className="button button-orange" href={project.website} target="_blank" rel="noopener noreferrer">Explore the live website <Icon name="arrow-up-right" /></a><Link className="text-link" href="/#contact">Discuss your website <Icon name="arrow-right" /></Link></div>
        </div>
        <div className={`${styles.preview} ${styles[project.theme]}`}>
          <div className={styles.browserBar}><span aria-hidden="true">● ● ●</span><span>{project.domain}</span></div>
          <Image src={project.image} alt={`${project.name} homepage`} width={1440} height={1000} priority sizes="(max-width: 800px) 100vw, 48vw" />
        </div>
      </section>

      <section className={`section-wrap section-space ${styles.story}`} aria-labelledby="project-brief">
        <div><p className="eyebrow">PROJECT VIEW</p><h2 id="project-brief">What the website<br /><em>needed to make clear.</em></h2></div>
        <div className={styles.storyCopy}><h3>The content challenge</h3><p>{project.challenge}</p><h3>The website approach</h3><p>{project.solution}</p></div>
      </section>

      <section className={styles.detailsSection} aria-labelledby="details-title">
        <div className="section-wrap section-space">
          <div className={styles.sectionHeading}><div><p className="eyebrow">ON THE WEBSITE</p><h2 id="details-title">Useful content.<br /><em>A clear route through it.</em></h2></div><p>{project.evidence}</p></div>
          <ul className={styles.detailGrid}>{project.details.map((detail, index) => <li key={detail}><span>0{index + 1}</span><p>{detail}</p></li>)}</ul>
        </div>
      </section>

      {slug === "daksha-enterprises" && <section className="section-wrap section-space" aria-labelledby="ongoing-title">
        <h2 id="ongoing-title" className="mb-5 text-3xl font-medium tracking-tight sm:text-4xl">Ongoing website improvements.</h2>
        <p className="max-w-3xl text-[15px] leading-relaxed text-[var(--muted)]">We provide monthly website updates and improvements for Daksha Enterprises. Our managed website is daksha-enterprises.com, with work focused on keeping product information current and making the range easier to explore and enquire about.</p>
        <h3 className="mt-8 mb-4 text-2xl font-medium">Product discovery across Google and AI answers</h3>
        <p className="max-w-3xl text-[15px] leading-relaxed text-[var(--muted)]">The supplied screenshots document appearances of the business for these product enquiries:</p>
        <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-[var(--muted)]">
          <li><strong>Google AI Mode:</strong> names Daksha Enterprises for “micro bio culture supplier near me”.</li>
          <li><strong>Google Places:</strong> displays the Business Profile for a polyelectrolyte supplier search.</li>
          <li><strong>ChatGPT:</strong> lists Daksha Enterprises with a source citation for “citri acid supplier in bhiwadi”.</li>
        </ul>
        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[var(--muted)]">A separate Google Search screenshot shows a polyelectrolyte product result from daksha-enterprises.co.in. That result is not presented as evidence for our managed .com website. The Google captures show a signed-in profile manager view; these examples record appearances at capture time, rather than a measured increase or a guaranteed position.</p>
      </section>}

      <section className={`section-wrap ${styles.next}`} aria-labelledby="next-title">
        <div><p className="eyebrow">YOUR PROJECT</p><h2 id="next-title">Give customers the detail<br /><em>they need to enquire.</em></h2><p>Tell us what your business sells, what customers need to understand and how you want enquiries to reach you.</p></div>
        <div className={styles.nextActions}><Link className="button button-dark" href="/#contact">Discuss your website <Icon name="arrow-up-right" /></Link><Link className="text-link" href="/websites">Explore website services <Icon name="arrow-right" /></Link></div>
      </section>
    </main>
    <Footer />
  </>;
}
