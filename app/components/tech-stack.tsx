import Image from "next/image";
import styles from "./tech-stack.module.css";

type Logo = { src: string; wide?: boolean };

const groups: Array<{
  label: string;
  description: string;
  tools: Array<{ name: string; detail: string; logos: Logo[] }>;
}> = [
  {
    label: "Websites & content",
    description: "The website, its content, and the code behind it.",
    tools: [
      { name: "Next.js", detail: "Website development", logos: [{ src: "/brand-logos/nextjs.svg", wide: true }] },
      { name: "Sanity", detail: "Content management", logos: [{ src: "/brand-logos/sanity.svg" }] },
      { name: "GitHub", detail: "Code & version history", logos: [{ src: "/brand-logos/github.svg" }] },
    ],
  },
  {
    label: "Workflows & AI",
    description: "Connect tools and keep conversations moving.",
    tools: [
      { name: "n8n", detail: "Workflow orchestration", logos: [{ src: "/brand-logos/n8n.svg", wide: true }] },
      { name: "OpenAI", detail: "AI-generated responses", logos: [{ src: "/brand-logos/openai.svg" }] },
      { name: "WhatsApp Business Platform", detail: "Official WhatsApp API", logos: [{ src: "/brand-logos/whatsapp.svg" }] },
    ],
  },
  {
    label: "Workspace & data",
    description: "Email, files, and an organized home for your leads.",
    tools: [
      { name: "Gmail & Google Drive", detail: "Email and business files", logos: [{ src: "/brand-logos/gmail.svg" }, { src: "/brand-logos/google-drive.svg" }] },
      { name: "Google Workspace", detail: "Business email & collaboration", logos: [{ src: "/brand-logos/google-workspace.svg", wide: true }] },
      { name: "Supabase / PostgreSQL", detail: "Lead and application databases", logos: [{ src: "/brand-logos/supabase.svg" }, { src: "/brand-logos/postgresql.svg" }] },
    ],
  },
];

export function TechStack() {
  return (
    <section className={`section-wrap section-space ${styles.section}`} id="tools" aria-labelledby="stack-title">
      <details className={styles.disclosure}>
        <summary><div><p className="eyebrow">BEHIND THE BUILD</p><h2 id="stack-title">Curious about the tools?</h2><p className={styles.hint}>Explore the platforms we use for websites, workflows, and business setup.</p></div><span className={styles.toggle} aria-hidden="true">+</span></summary>
      <div className={styles.groups}>
        {groups.map((group) => (
          <article className={styles.group} key={group.label}>
            <h3>{group.label}</h3><p>{group.description}</p>
            <ul>{group.tools.map((tool) => (
              <li key={tool.name}>
                <span className={styles.mark} aria-hidden="true">
                  {tool.logos.map((logo) => <Image className={logo.wide ? styles.wideLogo : styles.logo} src={logo.src} alt="" width={56} height={40} unoptimized key={logo.src} />)}
                </span>
                <div><strong>{tool.name}</strong><span>{tool.detail}</span></div>
              </li>
            ))}</ul>
          </article>
        ))}
      </div>
      <p className={styles.brandNote}>Logos identify the products used. Each platform is provided and maintained by its respective company.</p>
      </details>
    </section>
  );
}
