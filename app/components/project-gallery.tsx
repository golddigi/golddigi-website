import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icons";
import { projects } from "../work/projects";
import styles from "./project-gallery.module.css";

export function ProjectGallery({ limit }: { limit?: number }) {
  const projectList = Object.values(projects);
  return (
    <div>
      <div className={styles.grid}>
        {projectList.slice(0, limit).map((project, index) => (
          <article className={styles.project} key={project.name}>
            <a className={`${styles.preview} ${styles[project.theme]}`} href={project.website} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} website (opens in a new tab)`}>
              <div className={styles.browserBar} aria-hidden="true"><span className={styles.dots}>● ● ●</span><span>{project.domain}</span><Icon name="arrow-up-right" /></div>
              <div className={styles.screen}><Image src={project.image} alt={`${project.name} homepage preview`} width={1440} height={1000} sizes="(max-width: 640px) 100vw, 50vw" /></div>
              <span className={styles.open}>Explore live website <Icon name="arrow-up-right" /></span>
            </a>
            <div className={styles.caption}>
              <span className={styles.category}>0{index + 1} / {project.category}</span>
              <h3><Link href={project.path}>{project.name}</Link></h3><p>{project.summary}</p>
              <Link className={styles.detailsLink} href={project.path}>View project details <Icon name="arrow-right" /></Link>
            </div>
          </article>
        ))}
      </div>
      {!limit && <div className={styles.archive}>
        <h3>Other projects we’ve worked on</h3>
        <p>These websites are currently unavailable to preview.</p>
        <div><span>Soni Hospital</span><span>Healthcare website</span></div>
        <div><span>Divine Consultancy</span><span>Industrial consultancy website</span></div>
      </div>}
    </div>
  );
}
