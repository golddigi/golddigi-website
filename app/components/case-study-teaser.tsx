import Link from "next/link";
import { Icon } from "./icons";
import styles from "./case-study-teaser.module.css";

export function CaseStudyTeaser({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`${styles.section} ${compact ? styles.compact : ""}`}
      aria-labelledby={
        compact ? "case-study-teaser-title-compact" : "case-study-teaser-title"
      }
    >
      <div className={`section-wrap ${styles.inner}`}>
        <div className={styles.story}>
          <p className={styles.label}>WHATSAPP CAMPAIGN CASE STUDY</p>
          <h2
            id={
              compact
                ? "case-study-teaser-title-compact"
                : "case-study-teaser-title"
            }
          >
            ₹189.88 in message spend.
            <br />
            <em>₹4 lakh in reported gross sales.</em>
          </h2>
          <p>
            A carefully selected audience made this three-day campaign relevant.
            Two months of website, catalogue, search, and Google Business
            Profile improvements then helped interested recipients verify the
            supplier.
          </p>
          <Link
            className="button button-dark"
            href="/case-studies/whatsapp-campaign-result"
          >
            Read the case study <Icon name="arrow-up-right" />
          </Link>
        </div>
        <dl
          className={styles.results}
          aria-label="Campaign results at a glance"
        >
          <div>
            <dt>Messages delivered</dt>
            <dd>220</dd>
          </div>
          <div>
            <dt>Messages read</dt>
            <dd>154</dd>
          </div>
          <div>
            <dt>Customers reported</dt>
            <dd>6</dd>
          </div>
          <div>
            <dt>Campaign duration</dt>
            <dd>3 days</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
