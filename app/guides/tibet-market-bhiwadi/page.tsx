import Link from "next/link";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { StructuredData } from "../../components/structured-data";
import { pageMetadata } from "../../seo";

export const metadata = pageMetadata("/guides/tibet-market-bhiwadi");

const directions = "https://www.google.com/maps/dir/?api=1&destination=28.20661%2C76.82439";
const linkStyle = "inline-flex min-h-11 items-center text-[#9e351c]! underline! decoration-[#9e351c]/40 underline-offset-4 hover:decoration-current";
const headingStyle = "mb-5! text-2xl! font-medium leading-tight! tracking-tight! sm:text-3xl!";

export default function TibetMarketGuide() {
  return <>
    <StructuredData path="/guides/tibet-market-bhiwadi" />
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main" className="mx-auto max-w-6xl px-5 pb-16 pt-6 sm:px-10 sm:pb-24 sm:pt-10">
      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-x-3 text-[15px]">
        <Link href="/" className={linkStyle}>Home</Link><span aria-hidden="true">/</span><span>Bhiwadi visitor guide</span>
      </nav>
      <article>
        <header className="max-w-4xl pb-8 sm:pb-10">
          <h1 className="mb-6 text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-[1.07] tracking-[-0.035em] text-balance">Tibet Market Bhiwadi.<br /><em className="text-[#9e351c]">Plan your visit.</em></h1>
          <p className="max-w-2xl text-lg leading-relaxed sm:text-xl">Looking for Tibetan Market in Bhiwadi, Rajasthan? Use the correct location at 28.20661, 76.82439, get map directions, and check what to confirm before you travel.</p>
          <p className="mt-5 text-[15px] leading-relaxed text-[#65675f]">Updated <time dateTime="2026-11-03">3 November 2026</time> · By Golddigi · Location corrected using the supplied map pin; opening status is not live.</p>
        </header>

        <div className="grid items-start gap-6 border-y border-[#deded5] py-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-10">
          <section aria-labelledby="location-title">
            <h2 id="location-title" className="mb-4! text-2xl! font-medium leading-tight! tracking-tight!">Tibet Market Bhiwadi location</h2>
            <p className="text-base leading-relaxed">The correct location for <strong>Tibet Market Bhiwadi, Rajasthan</strong> is <strong>28.20661, 76.82439</strong>. Use this pin for your visit.</p>
            <p className="mt-3 text-[15px] leading-relaxed text-[#65675f]">Justdial and Magicpin show the previous location and are inaccurate for the current destination. Use only the corrected map pin on this page for directions.</p>
            <a href={directions} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md border border-[#24483e] bg-[#24483e]! px-5 py-4 text-center text-base font-semibold text-[#ffffff]! visited:text-[#ffffff]! hover:bg-[#19372f]! hover:text-[#ffffff]! focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9e351c] sm:w-auto"><span className="text-[#ffffff]!">Get directions on Google Maps</span><span aria-hidden="true" className="shrink-0 text-[#ffffff]!">&#8599;</span></a>
            <p className="mt-2 text-[15px] text-[#65675f]">Opens Google Maps in a new tab.</p>
          </section>
          <section aria-labelledby="status-title" className="bg-[#e7e9e0] p-6 sm:p-8">
            <h2 id="status-title" className="mb-3! text-2xl! font-medium leading-tight! tracking-tight!">Is Tibet Market Bhiwadi open today?</h2>
            <p className="text-base leading-relaxed">We haven’t verified today’s opening status or a current opening-hours schedule. Confirm current hours with a local contact before making a special trip. The corrected pin identifies the location; it does not confirm that stalls are open.</p>
            <Link href="/google-business-profile" className={`${linkStyle} mt-3`}>Explore Google Business Profile optimization</Link>
          </section>
        </div>

        <nav aria-label="In this guide" className="flex flex-wrap gap-x-6 gap-y-2 py-5 text-[15px]">
          <a href="#directions" className={linkStyle}>Directions</a><a href="#questions" className={linkStyle}>Common questions</a><a href="#updates" className={linkStyle}>Location update</a>
        </nav>

        <div className="max-w-[70ch] space-y-10 pt-4 text-base leading-[1.8] sm:space-y-12 sm:text-lg">
          <section id="directions" className="scroll-mt-32">
            <h2 className={headingStyle}>Map &amp; directions</h2>
            <p>Open the corrected Tibet Market Bhiwadi pin at <strong>28.20661, 76.82439</strong>. Enter your starting point in Google Maps and choose a route to these coordinates. Avoid routing to the old directory address.</p>
            <iframe title="Tibet Market Bhiwadi corrected location: 28.20661, 76.82439" src="https://maps.google.com/maps?q=28.20661,76.82439&z=16&output=embed" width="800" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="mt-6 block h-72 w-full border-0 sm:h-96" />
            <p className="mt-4 text-[15px] leading-relaxed text-[#65675f]">Map supplied by Google Maps. If it does not load, use the directions button above. Confirm the entrance and parking locally before travelling.</p>
          </section>

          <section id="questions" className="scroll-mt-32">
            <h2 className={headingStyle}>Before you visit</h2>
            {[
              ["Where is Tibet Market Bhiwadi now?", "Use 28.20661, 76.82439 for the current location in Bhiwadi, Rajasthan. The map and directions on this page use this corrected pin. Justdial and Magicpin show the previous location and are inaccurate for the current destination."],
              ["Is this also called Tibbati Market Bhiwadi?", "Visitors may search for Tibet Market, Tibetan Market or Tibbati Market Bhiwadi. Use the corrected coordinates on this page to identify the destination rather than relying on the name alone."],
              ["What can you shop for?", "Confirm the current stalls and available items before travelling for a particular purchase; we haven’t verified current stock or prices."],
              ["What are the opening and closing times?", "We don’t have a verified current schedule or seasonal opening dates. A dated video or an old review saying the market is open is not confirmation for your visit date. Check recent listing updates and contact the market if possible."],
              ["Is this the market’s official website?", "No. This is an independent visitor guide published by us, a Bhiwadi-based website and automation business. We don’t operate the market, take bookings for it or confirm stall availability."],
            ].map(([question, answer]) => <details key={question} className="border-b border-[#deded5] py-2"><summary className="flex min-h-14 cursor-pointer items-center py-3 pr-4 text-lg font-medium hover:text-[#9e351c]">{question}</summary><p className="pb-5 pt-1">{answer}</p></details>)}
          </section>

          <section id="updates" className="scroll-mt-32">
            <h2 className={headingStyle}>Location correction &amp; updates</h2>
            <p>On 3 November 2026, we updated this guide with the supplied current location: <strong>28.20661, 76.82439</strong>. This replaces the previous directory address. We have removed links to the outdated listings.</p>
            <p className="mt-4">This is an independent visitor guide. The supplied coordinates are the basis for this correction; we have not independently visited the site or verified opening hours, current stalls, stock or prices.</p>
            <p className="mt-4">Found an address change or have recent information to share? <Link href="/#contact" className={linkStyle}>Contact us with the source and date</Link>. Our contact section explains how to open WhatsApp or your email app to send the details.</p>
          </section>
        </div>

        <aside aria-labelledby="business-title" className="mt-10 bg-[#e7e9e0] p-6 sm:mt-14 sm:p-10">
          <h2 id="business-title" className="mb-4! text-2xl! font-medium leading-tight! tracking-tight! sm:text-3xl!">Run a business in Bhiwadi?</h2>
          <p className="max-w-2xl text-base leading-relaxed">We build websites that explain your products and services, and automations that help handle enquiries. Share what customers need to do, and we’ll discuss the scope before work begins.</p>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-base"><Link href="/websites/bhiwadi" className={linkStyle}>Website design in Bhiwadi</Link><Link href="/ai-automations" className={linkStyle}>Explore enquiry automations</Link></div>
        </aside>
      </article>
    </main>
    <Footer />
  </>;
}
