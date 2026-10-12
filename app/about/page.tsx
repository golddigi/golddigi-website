import Link from "next/link";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { StructuredData } from "../components/structured-data";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("/about");

const services = [
  { title: "Website design & development", href: "/websites", color: "bg-[#203f35]", text: "Service pages, product catalogues and portfolios that help visitors understand your business and find the right enquiry option." },
  { title: "Google Business Profile", href: "/google-business-profile", color: "bg-[#263f57]", text: "Accurate business details, service information, photos and review replies for your presence on Google Search and Maps." },
  { title: "AI automations", href: "/ai-automations", color: "bg-[#8b4635]", text: "Workflows for WhatsApp conversations, email replies and IndiaMART lead capture, scoped around the tools you use." },
];

export default function AboutPage() {
  return (
    <>
      <StructuredData path="/about" />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" className="text-[16px] leading-relaxed sm:text-[17px]">
        <section className="section-wrap grid gap-8 py-16 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-16 md:py-24" aria-labelledby="about-title">
          <h1 id="about-title" className="max-w-3xl text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-balance">About us.<br /><em>Practical digital work for your business.</em></h1>
          <div className="max-w-xl">
            <p>We’re Golddigi, based in Bhiwadi and working with businesses remotely too. We build websites, manage Google Business Profiles and create automations for everyday enquiries and follow-ups.</p>
            <p className="mt-5">Our work starts with a customer task: finding a service, checking a product or asking for a quote. We plan the pages and connections that help that task happen.</p>
            <a href="#what-we-do" className="mt-6 inline-flex min-h-11 items-center underline decoration-[#b63619] underline-offset-4">Explore our services</a>
          </div>
        </section>

        <section id="what-we-do" className="section-wrap pb-16 md:pb-24" aria-labelledby="services-title">
          <h2 id="services-title" className="mb-7 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">What we do</h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.href} className={`${service.color} flex flex-col rounded-xl p-7 text-[#f7f6f2] sm:p-8`}>
                <h3 className="text-2xl font-semibold leading-tight">{service.title}</h3>
                <p className="mt-4 mb-6">{service.text}</p>
                <Link href={service.href} className="mt-auto inline-flex min-h-11 items-center underline underline-offset-4">Explore {service.title.toLowerCase()}</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#e7e9e0] py-16 md:py-24" aria-labelledby="developer-title">
          <div className="section-wrap grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <h2 id="developer-title" className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">Meet our developer</h2>
            <div className="max-w-2xl">
              <h3 className="text-3xl font-semibold sm:text-4xl">Apurv Sharma</h3>
              <p className="mt-2 font-medium text-[#8b321d]">Developer at Golddigi</p>
              <p className="mt-6">Apurv Sharma is our developer. Website development is part of our work, from structuring service information to connecting the ways customers get in touch.</p>
              <p className="mt-4">You can explore our published website projects to see the kinds of pages and customer journeys we build.</p>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
                <Link href="/work/shivom-designs" className="inline-flex min-h-11 items-center underline underline-offset-4">Shivom Designs website</Link>
                <Link href="/work/daksha-enterprises" className="inline-flex min-h-11 items-center underline underline-offset-4">Daksha Enterprises website</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap grid gap-8 pt-16 md:grid-cols-[1fr_1.4fr] md:gap-16 md:pt-24" aria-labelledby="registration-title">
          <div>
            <h2 id="registration-title" className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">Our business registration</h2>
            <p className="mt-5 max-w-lg">We operate under the registered enterprise name Gold Digi. Our Udyam Registration Certificate records the enterprise as a micro enterprise with services as its major activity.</p>
          </div>
          <div className="min-w-0 max-w-2xl">
            <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              <div><dt className="text-[15px] text-[#65675f]">Registered enterprise</dt><dd className="mt-1 font-semibold">GOLD DIGI</dd></div>
              <div><dt className="text-[15px] text-[#65675f]">Udyam registration number</dt><dd className="mt-1 break-words font-semibold">UDYAM-RJ-02-0144798</dd></div>
              <div><dt className="text-[15px] text-[#65675f]">Enterprise classification</dt><dd className="mt-1">Micro · Classification year 2025–26</dd></div>
              <div><dt className="text-[15px] text-[#65675f]">Classification date</dt><dd className="mt-1"><time dateTime="2026-02-23">23 February 2026</time></dd></div>
              <div><dt className="text-[15px] text-[#65675f]">Enterprise registration date</dt><dd className="mt-1"><time dateTime="2025-10-01">1 October 2025</time></dd></div>
              <div><dt className="text-[15px] text-[#65675f]">Business commencement date</dt><dd className="mt-1"><time dateTime="2025-10-01">1 October 2025</time></dd></div>
              <div><dt className="text-[15px] text-[#65675f]">Business location</dt><dd className="mt-1">Bhiwadi, Rajasthan · PIN 301019</dd></div>
              <div><dt className="text-[15px] text-[#65675f]">Major activity</dt><dd className="mt-1">Services</dd></div>
            </dl>
            <h3 className="mt-8 text-xl font-semibold">Registered business activities</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Web-page designing — NIC code 62012</li>
              <li>Advertising — NIC code 73100</li>
            </ul>
            <p className="mt-5 text-[15px] text-[#65675f]">Details transcribed from our Udyam Registration Certificate, showing the classification recorded on 23 February 2026.</p>
          </div>
        </section>

        <section className="section-wrap grid gap-8 py-16 md:grid-cols-[1fr_1.4fr] md:gap-16 md:py-24" aria-labelledby="process-title">
          <h2 id="process-title" className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">How we work with you</h2>
          <ol className="max-w-2xl list-decimal space-y-7 pl-6 marker:text-[#8b321d]">
            <li className="pl-2"><h3 className="text-xl font-semibold">Understand the task</h3><p className="mt-2">Tell us what your business does, what you need to change and which tools or content you already have.</p></li>
            <li className="pl-2"><h3 className="text-xl font-semibold">Agree on the scope</h3><p className="mt-2">We clarify the pages, features or workflow involved, then share a scope, timeline and quote for you to review before work starts.</p></li>
            <li className="pl-2"><h3 className="text-xl font-semibold">Build and review</h3><p className="mt-2">We use your business information to create the agreed work and review it with you. Website checks include phone layouts and enquiry paths.</p></li>
            <li className="pl-2"><h3 className="text-xl font-semibold">Launch and hand over</h3><p className="mt-2">We help with the agreed setup and explain the parts you’ll manage. Any ongoing support and third-party costs are set out in the proposal.</p></li>
          </ol>
        </section>

        <section className="section-wrap border-t border-[#deded5] py-16 md:py-20" aria-labelledby="contact-title">
          <h2 id="contact-title" className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">Tell us what you’d like to build.</h2>
          <p className="mt-5 max-w-2xl">Share your website, profile or workflow and the task you need help with. We’ll review the details and discuss the scope and next steps with you.</p>
          <Link href="/#contact" className="button button-orange mt-7">Discuss your project</Link>
          <p className="mt-4 max-w-2xl text-[15px] text-[#65675f]">Our enquiry options open WhatsApp or your email app. You review and send the message there.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
