import Link from "next/link";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { StructuredData } from "../components/structured-data";
import { pageMetadata } from "../seo";
import { siteContact } from "../site-config";

export const metadata = pageMetadata("/privacy");
const linkStyle = "inline-flex min-h-11 items-center text-[#9e351c]! underline! underline-offset-4";
const headingStyle = "mb-4! text-2xl! leading-tight! tracking-tight!";

export default function PrivacyPage() {
  return <>
    <StructuredData path="/privacy" />
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main" className="mx-auto max-w-4xl px-5 py-10 sm:px-10 sm:py-16">
      <Link href="/" className={linkStyle}>Home</Link>
      <h1 className="mb-5 mt-6 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">Privacy &amp; website analytics</h1>
      <p className="text-[15px] text-[#65675f]">Updated <time dateTime="2026-11-03">3 November 2026</time></p>
      <div className="mt-10 max-w-[70ch] space-y-10 text-base leading-relaxed sm:text-lg">
        <section>
          <h2 className={headingStyle}>Google Analytics</h2>
          <p>We use Google Analytics 4 to understand visits and improve our website. Our Google tag uses measurement ID G-FK4QX2QF54 and loads across the site. It sends usage information to Google, including page addresses, referring pages, browser and device information, and interactions collected according to our Analytics settings. Google Analytics can use first-party cookies to distinguish browsers and sessions and derive approximate location information.</p>
          <p className="mt-4">We do not add your enquiry text, name, email address or phone number to our analytics events. Avoid putting personal information into page addresses or search parameters, which may be included in page-view data.</p>
          <a href="https://policies.google.com/technologies/partner-sites" className={linkStyle}>How Google uses information from partner websites</a>
        </section>
        <section>
          <h2 className={headingStyle}>Your controls</h2>
          <p>You can manage or delete cookies through your browser settings. Google also provides an Analytics opt-out browser add-on. Browser privacy settings and blocking tools can affect whether analytics loads. This site currently loads the Google tag automatically; it does not offer an on-site analytics consent switch.</p>
          <a href="https://tools.google.com/dlpage/gaoptout" className={linkStyle}>Google Analytics opt-out browser add-on</a>
        </section>
        <section>
          <h2 className={headingStyle}>Enquiries &amp; external services</h2>
          <p>Our enquiry actions open WhatsApp or your email app. The website does not send the message for you or store enquiries through a server-side contact form. If you send us a message, we receive the details through that service and use them to respond to your enquiry. External services, including Google Maps embeds, handle information under their own policies.</p>
        </section>
        <section>
          <h2 className={headingStyle}>Contact us</h2>
          <p>For questions about this website’s privacy or analytics, email us.</p>
          <a href={`mailto:${siteContact.email}`} className={linkStyle}>{siteContact.email}</a>
        </section>
      </div>
    </main>
    <Footer />
  </>;
}
