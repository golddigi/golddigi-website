import { Icon } from "./icons";
import styles from "./project-gallery.module.css";

const projects = [
  {
    name: "Shivom Designs",
    category: "Architecture & interiors",
    description:
      "A portfolio website that gives architectural and interior projects room to speak for themselves.",
    url: "https://shivomdesigns.com/",
    style: "shivom",
  },
  {
    name: "Soni Hospital",
    category: "Healthcare",
    description:
      "A healthcare website that helps patients explore services and find the information they need.",
    url: "https://sonihospital.org.in/",
    style: "soni",
  },
  {
    name: "Antac",
    category: "Manufacturing & engineering",
    description:
      "A business website presenting industrial capabilities to prospective customers and partners.",
    url: "https://antac.in/",
    style: "antac",
  },
  {
    name: "Divine Consultancy",
    category: "Industrial consultancy",
    description:
      "A service website that makes an industrial consultancy’s offering easier to understand and enquire about.",
    url: "https://divineconsultancybhiwadi.com/",
    style: "divine",
  },
];

export function ProjectGallery({ limit }: { limit?: number }) {
  return (
    <div className={styles.grid}>
      {projects.slice(0, limit).map((project, index) => (
        <article className={styles.project} key={project.name}>
          <a
            className={`${styles.plaque} ${styles[project.style]}`}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.name} website (opens in a new tab)`}
          >
            <div className={styles.plaqueTop}>
              <span>SELECTED WORK / 0{index + 1}</span>
              <Icon name="arrow-up-right" />
            </div>
            <div className={styles.plaqueName}>{project.name}</div>
            <div className={styles.plaqueBottom}>
              <span>{project.category}</span>
              <span className={styles.mark} aria-hidden="true">↗</span>
            </div>
          </a>
          <div className={styles.caption}>
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <a
              className={styles.visit}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name} website (opens in a new tab)`}
            >
              Visit website <Icon name="arrow-up-right" />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
