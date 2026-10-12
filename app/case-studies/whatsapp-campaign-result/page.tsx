import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Icon } from "../../components/icons";
import { StructuredData } from "../../components/structured-data";
import { pageMetadata } from "../../seo";
import { whatsappLink } from "../../site-config";
import styles from "./case-study.module.css";

const path = "/case-studies/whatsapp-campaign-result" as const;
export const metadata: Metadata = pageMetadata(path);

const platformResults = [
  ["Campaign spend", "₹189.88"],
  ["Messages sent", "223"],
  ["Messages delivered", "220"],
  ["Messages read", "154 (70%)"],
  ["Unique replies", "6"],
] as const;

const reportedOutcomes = [
  ["Catalogue views", "25"],
  ["Website visits", "12"],
  ["Phone calls", "6"],
  ["Customers", "6"],
  ["Gross sales", "₹4 lakh"],
] as const;

export default function WhatsAppCampaignCaseStudy() {
  return (
    <>
      <StructuredData path={path} />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <article>
          <header className={`section-wrap ${styles.hero}`}>
            <div className={styles.heroCopy}>
              <Link className="text-link" href="/ai-automations">AI automations <Icon name="arrow-right" /></Link>
              <h1>₹189.88 in message spend.<br /><em>₹4 lakh in reported gross sales.</em></h1>
              <p className={styles.intro}>A targeted three-day WhatsApp campaign sent to selected recipients for a water-treatment chemicals and industrial RO supplier, supported by two months of work across its website, catalogue, search presence, and Google Business Profile.</p>
            </div>
            <dl className={styles.heroFacts}>
              <div><dt>Audience</dt><dd>250 recipients</dd></div>
              <div><dt>Campaign</dt><dd>3 days</dd></div>
              <div><dt>Preparation</dt><dd>2 months</dd></div>
              <div><dt>Customers reported</dt><dd>6</dd></div>
            </dl>
          </header>

          <section className={styles.resultBand} aria-labelledby="results-title">
            <div className="section-wrap">
              <div className={styles.resultHeading}>
                <h2 id="results-title">What the campaign recorded.</h2>
                <p>Platform figures come from the supplied campaign report. Sales and customer outcomes were reported by the client.</p>
              </div>
              <div className={styles.metrics}>
                {platformResults.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
              </div>
              <div className={styles.outcomeRow}>
                {reportedOutcomes.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
              </div>
            </div>
          </section>

          <div className={`section-wrap ${styles.body}`}>
            <aside className={styles.summary} aria-label="Case study summary">
              <p>THE SHORT VERSION</p>
              <strong>Relevant people received the message. The digital foundation gave them credible information when they checked the business.</strong>
            </aside>
            <div className={styles.narrative}>
              <section aria-labelledby="challenge-title">
                <h2 id="challenge-title">The message was only the beginning.</h2>
                <p>The client supplies water-treatment chemicals and industrial RO products. A buyer in this market needs more than a promotion: they need to understand the product range, see credible business information, and find a clear way to ask technical or commercial questions.</p>
                <p>That meant the campaign could not be treated as an isolated three-day push. Before sending it, we spent approximately two months improving what prospective customers would find when they investigated the business.</p>
              </section>

              <section aria-labelledby="foundation-title">
                <h2 id="foundation-title">Two months spent building the proof behind the promotion.</h2>
                <p>We expanded and refined the website so buyers could reach relevant information quickly. The work was designed to improve conventional search visibility and make the business easier for answer engines and AI-assisted discovery tools to understand.</p>
                <ul>
                  <li>Detailed product and service information for water treatment and industrial RO requirements.</li>
                  <li>A clearer information structure, straightforward navigation, and easier enquiry routes.</li>
                  <li>Certificates and business credentials placed where buyers could verify them.</li>
                  <li>Transparent company, product, and contact information across the website.</li>
                  <li>Ongoing on-page SEO and content improvements.</li>
                  <li>A completed Google Business Profile with consistent details, products, and regular updates.</li>
                </ul>
              </section>

              <section aria-labelledby="campaign-title">
                <h2 id="campaign-title">The campaign went to selected people—not a broad list.</h2>
                <p>The audience was deliberately limited to 250 selected recipients. This targeting was central to the campaign: the message reached people chosen for their relevance to the client’s offer instead of trying to create interest from an unfiltered mass audience.</p>
                <p>The supplied report shows that 223 messages were sent, 220 were delivered, and 154 were read. Six recipients sent a unique reply.</p>
                <p>When interested recipients wanted to check the supplier, they could move beyond the message to a detailed website, product catalogue, certificates, and an active Google Business Profile. The reported activity included 25 catalogue views, 12 website visits, and six phone calls.</p>
              </section>

              <section aria-labelledby="lesson-title">
                <h2 id="lesson-title">Targeting created relevance. The wider system supported the decision.</h2>
                <p>The client reported six customers and ₹4 lakh in gross sales associated with the campaign period. We do not present the ₹189.88 spend alone as the cause of those sales. The selected audience made the campaign relevant; the message prompted attention; and the website, catalogue, search presence, Google profile, and the client’s sales conversations helped recipients evaluate the business.</p>
                <blockquote>Reach the right people, then make the business behind the message easy to verify.</blockquote>
              </section>
            </div>
          </div>

          <section className={`section-wrap ${styles.note}`} aria-labelledby="context-title">
            <h2 id="context-title">Result context</h2>
            <p>This case study describes one targeted campaign and does not promise the same result for another business. ₹4 lakh is client-reported gross sales, not profit. Audience selection, offer relevance, timing, the client’s sales process, and the supporting digital presence can all affect results. Website visits, catalogue views, replies, calls, and customers are reported outcomes and may overlap; they are not presented as a strict sequential funnel.</p>
          </section>

          <section className={`section-wrap ${styles.cta}`} aria-labelledby="case-study-contact-title">
            <div><h2 id="case-study-contact-title">Build the trust<br /><em>before the send.</em></h2><p>Tell us how your customers currently discover, check, and contact your business. We’ll look for the missing steps before recommending a campaign or automation.</p></div>
            <div><a className="button button-dark" href={whatsappLink("Hello, we’d like to discuss our website, Google presence, and a WhatsApp campaign.")} target="_blank" rel="noopener noreferrer">Discuss your campaign <Icon name="arrow-up-right" /></a><span>Opens WhatsApp with a draft you can review and send.</span></div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
