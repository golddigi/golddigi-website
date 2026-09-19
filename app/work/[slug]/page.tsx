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

      <section className={`section-wrap ${styles.next}`} aria-labelledby="next-title">
        <div><p className="eyebrow">YOUR PROJECT</p><h2 id="next-title">Give customers the detail<br /><em>they need to enquire.</em></h2><p>Tell us what your business sells, what customers need to understand and how you want enquiries to reach you.</p></div>
        <div className={styles.nextActions}><Link className="button button-dark" href="/#contact">Discuss your website <Icon name="arrow-up-right" /></Link><Link className="text-link" href="/websites">Explore website services <Icon name="arrow-right" /></Link></div>
      </section>
    </main>
    <Footer />
  </>;
}
