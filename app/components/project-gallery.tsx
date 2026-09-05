import Image from "next/image";
import { Icon } from "./icons";
import styles from "./project-gallery.module.css";

const projects = [
  { name: "Shivom Designs", category: "Architecture & interiors", description: "Interior design services and a visual project portfolio, with a clear route to an enquiry.", url: "https://shivomdesigns.com/", image: "/projects/shivom.png", domain: "shivomdesigns.com", style: "shivom" },
  { name: "Daksha Enterprises", category: "Water treatment & industrial supply", description: "A product-led website for RO systems, water treatment chemicals, and plant setup services.", url: "https://daksha-enterprises.com/", image: "/projects/daksha-enterprises.png", domain: "daksha-enterprises.com", style: "daksha" },
];

export function ProjectGallery({ limit }: { limit?: number }) {
  return (
    <div>
      <div className={styles.grid}>
        {projects.slice(0, limit).map((project, index) => (
          <article className={styles.project} key={project.name}>
            <a className={`${styles.preview} ${styles[project.style]}`} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} website (opens in a new tab)`}>
              <div className={styles.browserBar} aria-hidden="true"><span className={styles.dots}>● ● ●</span><span>{project.domain}</span><Icon name="arrow-up-right" /></div>
              <div className={styles.screen}><Image src={project.image} alt={`${project.name} homepage preview`} width={1440} height={1000} sizes="(max-width: 640px) 100vw, 50vw" /></div>
              <span className={styles.open}>Explore live website <Icon name="arrow-up-right" /></span>
            </a>
            <div className={styles.caption}>
              <span className={styles.category}>0{index + 1} / {project.category}</span>
              <h3>{project.name}</h3><p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
      {!limit && <div className={styles.archive}>
        <h3>Other projects I’ve worked on</h3>
        <p>These websites are currently unavailable to preview.</p>
        <div><span>Soni Hospital</span><span>Healthcare website</span></div>
        <div><span>Divine Consultancy</span><span>Industrial consultancy website</span></div>
      </div>}
    </div>
  );
}
