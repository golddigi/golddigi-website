import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { BrandMark, Icon } from "../components/icons";
import { siteContact, whatsappLink } from "../site-config";
import styles from "./business-profile.module.css";

export const metadata: Metadata = {
  title: "Google Business Profile Optimization & Management | Golddigi",
  description:
    "Google Business Profile optimization and ongoing management for local businesses. Get help with business details, services, photos, review replies and useful performance reporting.",
  alternates: { canonical: "/google-business-profile" },
  openGraph: {
    title: "Google Business Profile Optimization & Management | Golddigi",
    description:
      "Help local customers understand your business and take the next step. Explore Google Business Profile optimization and ongoing management with Golddigi.",
    url: "/google-business-profile",
  },
};

const enquiryMessage = [
  "Hi Apurv, I’d like to discuss my Google Business Profile.",
  "",
  "Business name: ",
  "City / area: ",
  "Profile link (optional): ",
].join("\n");

const customerSteps = [
  { title: "Find the right information.", text: "Your services, location or service area, and opening hours in one place.", icon: "document" as const },
  { title: "Get a feel for your business.", text: "Real photos, useful details and thoughtful responses to customer feedback.", icon: "person" as const },
  { title: "Take the next step.", text: "A clear way to call, visit your website or get directions when relevant.", icon: "arrow-up-right" as const },
];

const initialTasks = [
  "Review the current profile and agree on priorities",
  "Check business details, categories and services",
  "Clarify your description, hours and service area",
  "Organize supplied photos and useful website links",
  "Share completed changes and next steps",
];

const ongoingTasks = [
  "Keep hours, contact details and services current",
  "Add business updates and supplied photos",
  "Prepare or publish review replies as agreed",
  "Check profile changes that need attention",
  "Review available performance data and next actions",
];

const focusAreas = [
  { title: "Information people can rely on", text: "Accurate contact details, appropriate categories, services and hours that reflect how your business actually operates." },
  { title: "A business they can recognize", text: "Photos of your real team, location or work, with a description that explains what you offer in plain language." },
  { title: "Customer feedback, acknowledged", text: "Helpful replies in your business’s voice, with a clear process for questions or concerns that need your input." },
  { title: "Reporting you can understand", text: "A review of available profile data, such as website clicks, direction requests and call-button clicks, with practical next steps." },
];

function ProfileIllustration() {
  return (
    <figure className={styles.profileFigure}>
      <div className={styles.profileScene} aria-hidden="true">
        <div className={styles.sceneHeading}><span>YOUR LOCAL PRESENCE</span><BrandMark /></div>
        <div className={styles.map}>
          <svg viewBox="0 0 430 170" fill="none" preserveAspectRatio="xMidYMid slice">
            <rect width="430" height="170" fill="#dfe4d7" />
            <path d="M-20 130 150 66 470 105M89-20l45 215M301-20 269 200" stroke="#f8f7f1" strokeWidth="19" />
            <path d="M-20 130 150 66 470 105M89-20l45 215M301-20 269 200" stroke="#cbd1c2" strokeWidth="1" />
            <rect x="172" y="109" width="52" height="37" rx="5" fill="#c6cfbb" />
            <rect x="320" y="26" width="62" height="35" rx="5" fill="#c6cfbb" />
            <rect x="24" y="26" width="43" height="40" rx="5" fill="#cbd2c0" />
            <path d="M216 23c-17 0-31 13-31 30 0 24 31 47 31 47s31-23 31-47c0-17-14-30-31-30Z" fill="#d84e2b" />
            <circle cx="216" cy="53" r="11" fill="#fff8ec" />
            <ellipse cx="216" cy="109" rx="18" ry="4" fill="#536147" opacity=".15" />
          </svg>
          <span className={styles.mapLabel}>IN YOUR NEIGHBOURHOOD</span>
        </div>
        <div className={styles.profileCard}>
          <div className={styles.businessIdentity}><span className={styles.businessMark}><BrandMark /></span><div><span>BUSINESS PROFILE</span><strong>Your local business</strong><p>Your services · Your area</p></div></div>
          <div className={styles.profileActions}><span><Icon name="message" />Call</span><span><Icon name="arrow-up-right" />Directions</span><span><Icon name="browser" />Website</span></div>
          <div className={styles.profileDetail}><Icon name="check" /><div><strong>Helpful details, all together.</strong><span>Services · Hours · Photos · Reviews</span></div></div>
        </div>
        <div className={styles.sceneNote}><span />Help people go from looking to getting in touch.</div>
      </div>
      <figcaption>Illustrative profile · example layout, not a live listing</figcaption>
    </figure>
  );
}

export default function GoogleBusinessProfilePage() {
  const enquiryUrl = whatsappLink(enquiryMessage);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <section className={`section-wrap ${styles.hero}`} aria-labelledby="profile-title">
          <div className={styles.heroCopy}>
            <p className="eyebrow"><span className="section-marker" /> GOOGLE BUSINESS PROFILE</p>
            <h1 id="profile-title">Be ready when your next customer <em>looks you up.</em></h1>
            <p className={styles.intro}>Google Business Profile optimization and ongoing management for local businesses. I help you present the right information, keep it current and make it easier for people to get in touch.</p>
            <div className={styles.heroActions}><a className="button button-orange" href={enquiryUrl} target="_blank" rel="noopener noreferrer">Discuss my Business Profile <Icon name="arrow-up-right" /></a><a className="text-link" href="#profile-services">See what I can help with <Icon name="arrow-down" /></a></div>
            <p className={styles.heroNote}>For businesses that welcome customers or serve them in person.</p>
          </div>
          <ProfileIllustration />
        </section>

        <section className={styles.customerJourney} aria-label="Help local customers choose their next step">
          <div className={`section-wrap ${styles.journeyGrid}`}>
            {customerSteps.map((step) => <article key={step.title}><Icon name={step.icon} /><div><h2>{step.title}</h2><p>{step.text}</p></div></article>)}
          </div>
        </section>

        <section className="section-wrap section-space" id="profile-services" aria-labelledby="services-title">
          <div className={styles.sectionHeading}><div><p className="eyebrow">01 / HOW I CAN HELP</p><h2 id="services-title">Get the details right.<br /><em>Then keep them right.</em></h2></div><p>Start with a focused improvement to your existing profile, or arrange ongoing help. We agree on the work and frequency before we begin.</p></div>
          <div className={styles.packages}>
            <article className={styles.package}>
              <div className={styles.packageTop}><span>THE STARTING POINT</span><span>01</span></div>
              <h3>Initial optimization</h3>
              <p>A considered refresh of your profile, so it gives customers a clearer picture of your business.</p>
              <ul>{initialTasks.map((task) => <li key={task}><Icon name="check" />{task}</li>)}</ul>
              <a className="text-link" href={whatsappLink("Hi Apurv, I’d like help with initial Google Business Profile optimization.\n\nBusiness name: \nCity / area: \nProfile link (optional): ")} target="_blank" rel="noopener noreferrer">Discuss initial optimization <Icon name="arrow-up-right" /></a>
            </article>
            <article className={`${styles.package} ${styles.ongoing}`}>
              <div className={styles.packageTop}><span>THE REGULAR ATTENTION</span><span>02</span></div>
              <h3>Ongoing management</h3>
              <p>A regular point of contact for the updates and customer interactions your profile needs.</p>
              <ul>{ongoingTasks.map((task) => <li key={task}><Icon name="check" />{task}</li>)}</ul>
              <a className="text-link" href={whatsappLink("Hi Apurv, I’d like to discuss ongoing Google Business Profile management.\n\nBusiness name: \nCity / area: \nProfile link (optional): ")} target="_blank" rel="noopener noreferrer">Discuss ongoing management <Icon name="arrow-up-right" /></a>
            </article>
          </div>
          <p className={styles.scopeNote}>Google Business Profile itself is free. My fee covers the agreed optimization or management work. You can choose this service on its own.</p>
        </section>

        <section className={styles.focusSection} aria-labelledby="focus-title">
          <div className="section-wrap section-space">
            <div className={styles.sectionHeading}><div><p className="eyebrow">02 / WHAT GETS ATTENTION</p><h2 id="focus-title">The small details<br /><em>behind a good impression.</em></h2></div><p>Your profile should answer the questions people ask before they contact you: what you do, where you work and how to reach you.</p></div>
            <div className={styles.focusGrid}>{focusAreas.map((area, index) => <article key={area.title}><span>0{index + 1}</span><h3>{area.title}</h3><p>{area.text}</p></article>)}</div>
            <p className={styles.reportingNote}>Performance reporting depends on the data available for your verified profile. Call-button clicks show intent to call, not completed calls. <a href="https://support.google.com/business/answer/9918094?hl=en" target="_blank" rel="noopener noreferrer">About Google’s profile metrics <Icon name="arrow-up-right" /></a></p>
          </div>
        </section>

        <section className={`section-wrap section-space ${styles.fitSection}`} aria-labelledby="fit-title">
          <div><p className="eyebrow">03 / BUILT FOR LOCAL BUSINESS</p><h2 id="fit-title">Your customers<br /><em>are closer than you think.</em></h2><p>This service is for eligible businesses with a place customers can visit, or a team that visits or delivers to customers in person.</p><div className={styles.fitTags}><span>Shops & showrooms</span><span>Clinics & practices</span><span>Local service businesses</span></div></div>
          <div className={styles.websiteConnection}><Icon name="browser" /><h3>Your profile and website<br />work together.</h3><p>The profile helps people find the essentials on Search and Maps. Your website gives them room to explore your services, see your work and send a detailed enquiry.</p><Link className="text-link" href="/websites">Explore custom websites <Icon name="arrow-up-right" /></Link></div>
        </section>

        <section className={`section-wrap ${styles.faqSection}`} aria-labelledby="faq-title">
          <div><p className="eyebrow">04 / GOOD TO KNOW</p><h2 id="faq-title">A clear picture.<br /><em>Before we start.</em></h2></div>
          <div className={styles.faqList}>
            <details className={styles.faq}><summary>Can you guarantee a top position on Google?<Icon name="plus" /></summary><p>No. Local results depend on relevance, distance and how well-known a business is. I focus on accurate information and useful profile management, with progress reviewed using available data. <a href="https://support.google.com/business/answer/7091?hl=en" target="_blank" rel="noopener noreferrer">See Google’s explanation of local ranking.</a></p></details>
            <details className={styles.faq}><summary>Isn’t Google Business Profile free?<Icon name="plus" /></summary><p>Yes. Google lets you create and manage an eligible Business Profile for free. You’re paying Golddigi for the agreed work and ongoing support. Golddigi is an independent service provider. <a href="https://business.google.com/us/support/" target="_blank" rel="noopener noreferrer">Read Google’s Business Profile FAQs.</a></p></details>
            <details className={styles.faq}><summary>Can I use this service without buying a website?<Icon name="plus" /></summary><p>Yes. Profile optimization and management are available as standalone services. If you already have a website, we can work with that and check that the business information lines up.</p></details>
            <details className={styles.faq}><summary>What if my business doesn’t have a storefront?<Icon name="plus" /></summary><p>A service-area business can be eligible if it visits or delivers to customers in person. We’ll check how you operate and whether a Business Profile is appropriate before agreeing on the work.</p></details>
            <details className={styles.faq}><summary>What will you need from me?<Icon name="plus" /></summary><p>Your business name, area and existing profile link are enough for an initial conversation. For the work itself, we’ll agree on the access needed, confirm your business details and collect any photos or updates you want to share.</p></details>
            <details className={styles.faq}><summary>How often will you update my profile?<Icon name="plus" /></summary><p>The management plan sets out the schedule, tasks and review process. We’ll match it to how often your business has relevant changes, new photos or customer feedback to respond to.</p></details>
          </div>
        </section>

        <section className={`section-wrap ${styles.finalCta}`} aria-labelledby="contact-title">
          <div><p className="eyebrow">LET’S LOOK AT YOUR LOCAL PRESENCE</p><h2 id="contact-title">Make your next<br /><em>first impression count.</em></h2><p>Share your business name, city and profile link if you have one. We’ll discuss what needs attention and the right scope for you.</p></div>
          <div className={styles.ctaActions}><a className="button button-dark" href={enquiryUrl} target="_blank" rel="noopener noreferrer">Discuss my Business Profile <Icon name="arrow-up-right" /></a><span>Opens WhatsApp with a message you can edit.</span><a className={styles.emailLink} href={`mailto:${siteContact.email}?subject=${encodeURIComponent("Google Business Profile enquiry")}`}>Prefer email? Get in touch <Icon name="arrow-up-right" /></a></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
