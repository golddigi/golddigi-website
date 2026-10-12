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
          <p className={styles.description}>Based in Bhiwadi.<br />Websites, local presence and automations, delivered remotely too.</p>
        </div>
        <nav className={styles.links} aria-label="Footer navigation">
          <Link href="/about">About us</Link>
          <Link href="/websites">Custom websites</Link>
          <Link href="/websites/bhiwadi">Website design in Bhiwadi</Link>
          <Link href="/google-business-profile">Google Business Profile</Link>
          <Link href="/ai-automations">AI automations</Link>
          <Link href="/#business-setup">Business essentials</Link>
          <Link href="/#faq">FAQs</Link>
        </nav>
        <div className={styles.contact}>
          <a href={`mailto:${siteContact.email}`}>Email us<Icon name="arrow-up-right" /></a>
          <a href={whatsappLink("Hello, we’d like to discuss a project.")} target="_blank" rel="noopener noreferrer">Chat on WhatsApp<Icon name="message" /></a>
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
