import Link from "next/link";
import { BrandMark, Icon } from "./icons";
import { siteContact, whatsappLink } from "../site-config";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={`footer section-wrap ${styles.footer}`}>
      <div className={styles.top}>
        <div>
          <Link className="brand" href="/" aria-label="Golddigi home">
            <BrandMark /><span>golddigi<span className="orange-text">.</span></span>
          </Link>
          <p className={styles.description}>Get found. Get chosen. Work smarter.<br />Built with you, by Apurv.</p>
        </div>
        <nav className={styles.links} aria-label="Footer navigation">
          <Link href="/websites">Custom websites</Link>
          <Link href="/google-business-profile">Google Business Profile</Link>
          <Link href="/ai-automations">AI automations</Link>
          <Link href="/#business-setup">Business essentials</Link>
          <Link href="/#faq">FAQs</Link>
        </nav>
        <div className={styles.contact}>
          <a href={`mailto:${siteContact.email}`}>{siteContact.email}<Icon name="arrow-up-right" /></a>
          <a href={whatsappLink("Hi Apurv, I’d like to discuss a project with Golddigi.")} target="_blank" rel="noopener noreferrer">Chat on WhatsApp<Icon name="message" /></a>
          <span>{siteContact.phone}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Golddigi</span>
        <span>Websites · Google Business Profile · AI automations</span>
        <span>Thoughtful by design <span className="orange-text">✳</span></span>
      </div>
    </footer>
  );
}
