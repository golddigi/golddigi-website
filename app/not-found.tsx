import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Icon } from "./components/icons";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found | Golddigi",
};

export default function NotFound() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className={`section-wrap ${styles.main}`}>
        <p className={styles.code} aria-hidden="true">404</p>
        <div className={styles.copy}>
          <h1>This page has moved—or never existed.</h1>
          <p>
            The address may be incorrect or the page may no longer be available.
            Choose where you would like to go next.
          </p>
          <div className={styles.actions}>
            <Link className="button button-dark" href="/">
              Go home <Icon name="arrow-right" />
            </Link>
            <Link className={styles.contactLink} href="/#contact">
              Contact us <Icon name="arrow-down" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
