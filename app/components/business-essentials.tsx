import { Icon } from "./icons";
import styles from "./business-essentials.module.css";

const essentials = [
  {
    number: "01",
    icon: "mail" as const,
    title: "Email that means business.",
    label: "GOOGLE WORKSPACE",
    description:
      "A professional email address on your own domain, with Google Workspace set up for the way your business works.",
    items: ["Email on your business domain", "Gmail and Workspace setup"],
  },
  {
    number: "02",
    icon: "browser" as const,
    title: "A home for your website.",
    label: "DOMAIN & HOSTING",
    description:
      "Help with your domain, hosting, and getting your website online, with ongoing hosting support agreed around your needs.",
    items: ["Domain and hosting setup", "Launch and hosting support"],
  },
];

export function BusinessEssentials() {
  return (
    <section
      className={`section-wrap section-space ${styles.section}`}
      id="business-setup"
      aria-labelledby="essentials-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span className="section-marker" /> ALSO TAKEN CARE OF
          </p>
          <h2 id="essentials-title">
            The essentials,
            <br />
            <em>looked after.</em>
          </h2>
        </div>
        <p className="section-description">
          Professional email, domain, and hosting setup to support your online
          presence. Available on their own or alongside your website.
        </p>
      </div>
      <div className={styles.grid}>
        {essentials.map((item) => (
          <article className={styles.item} key={item.number}>
            <div className={styles.topline}>
              <Icon name={item.icon} />
              <span>{item.number}</span>
            </div>
            <p className={styles.label}>{item.label}</p>
            <h3>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <ul>
              {item.items.map((entry) => (
                <li key={entry}>
                  <Icon name="check" />
                  {entry}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className={styles.note}>
        <p>
          We’ll agree on the setup and ongoing support you need. Domain, hosting,
          and software subscriptions are scoped separately.
        </p>
        <a className="text-link" href="#contact">
          Get the essentials sorted <Icon name="arrow-up-right" />
        </a>
      </div>
    </section>
  );
}
