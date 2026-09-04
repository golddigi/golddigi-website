import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "CONTACT", href: "#contact" },
];

const tools = ["NextJs", "Sanity", "PostgreSQL", "n8n", "OpenAI", "ElevenLabs"];

const benefits = [
  {
    before: "It Makes You Look ",
    highlight: "More Professional",
    after: " Than Competitors",
  },
  {
    before: "It ",
    highlight: "Works Faster",
    after: " and Gives a Better Experience to Your Customers",
  },
  {
    before: "It ",
    highlight: "Grows With Your Business",
    after: " Without Breaking",
  },
];

const serviceCards = [
  {
    title: "Bring Your Businesses Online",
    description: "A website built to represent you 24/7.",
    listLabel: "What you get:",
    bullets: [
      "Professional website",
      "A clean, modern website",
      "Audience-focused design",
      "Trust-building content and structure",
    ],
  },
  {
    title: "Market Where It Matters",
    description: "Marketing that fits your business — nothing extra.",
    listLabel: "What you get:",
    bullets: [
      "Right channels",
      "Real visibility",
      "Trust-building content",
      "Targeted campaigns",
      "Clear reports",
      "Zero unnecessary add-ons",
    ],
  },
  {
    title: "Google Business Profile Setup",
    bullets: [
      "Complete setup and optimization of your Google Business Profile",
      "Helps customers find you faster and boosts local visibility",
    ],
  },
  {
    title: "Optimize Your Social Media Accounts",
    bullets: [
      "Complete setup, optimization, and active handling of your social profiles",
      "Improves visibility and helps the right audience discover your brand",
    ],
  },
];

const coreValues = [
  {
    principle: "HONESTY",
    title: "Transparent Communication",
    description:
      "We deliver exactly what we promise—no shortcuts, no false claims.",
  },
  {
    principle: "RELIABILITY",
    title: "Reliable Delivery",
    description:
      "We prioritize your peace of mind by ensuring clear expectations, reliable timelines, and quality work that speaks for itself.",
  },
  {
    principle: "CUSTOMER FIRST",
    title: "Customer Satisfaction",
    description:
      "Driven by the freedom that comes from doing business the right way—where success is measured not just by results, but by the trust we build with every client.",
  },
];

export default function Home() {
  return (
    <main
      id="home"
      className="relative isolate min-h-svh overflow-hidden bg-background text-foreground"
    >
      <header className="relative z-30 mx-auto w-full max-w-[1040px] px-4 pt-4 sm:px-6 sm:pt-6">
        <nav
          aria-label="Main navigation"
          className="nav-shadow relative flex h-12 items-center bg-brand px-4 text-white sm:h-11 sm:px-5"
        >
          <Link
            href="#home"
            aria-label="G home"
            className="grid size-6 place-items-center border border-white/30 text-[10px] font-semibold tracking-[-0.04em] transition-colors hover:bg-white hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            G
          </Link>

          <div className="ml-8 hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[8px] font-medium tracking-[0.09em] text-white/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="#contact"
            className="ml-auto hidden bg-white px-4 py-2 text-[8px] font-semibold tracking-[0.04em] text-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:block"
          >
            REQUEST ACCESS
          </Link>

          <details className="group relative ml-auto md:hidden">
            <summary className="grid size-8 cursor-pointer list-none place-content-center gap-1 border border-white/35 [&::-webkit-details-marker]:hidden">
              <span className="h-px w-3.5 bg-white transition-transform group-open:translate-y-[2.5px] group-open:rotate-45" />
              <span className="h-px w-3.5 bg-white transition-transform group-open:-translate-y-[2.5px] group-open:-rotate-45" />
              <span className="sr-only">Open navigation</span>
            </summary>
            <div className="absolute right-0 top-10 flex w-44 flex-col border border-black/10 bg-white p-2 text-foreground shadow-xl">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2.5 text-[10px] font-semibold tracking-[0.08em] hover:bg-brand-soft"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-1 bg-foreground px-3 py-3 text-center text-[9px] font-semibold tracking-[0.06em] text-white"
              >
                REQUEST ACCESS
              </Link>
            </div>
          </details>
        </nav>
      </header>

      <section className="relative mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-[1040px] flex-col px-5 sm:min-h-[calc(100svh-4.75rem)] sm:px-8">
        <div
          aria-hidden="true"
          className="hero-art pointer-events-none absolute left-1/2 top-[39%] -z-10 w-[40rem] max-w-[135vw] -translate-x-1/2 opacity-[0.12] sm:top-[34%] sm:w-[49rem] sm:opacity-[0.14] lg:top-[31%] lg:w-[52rem] lg:opacity-[0.17]"
        >
          <Image
            src="/hero-web-studio.png"
            alt=""
            width={1536}
            height={1024}
            sizes="(max-width: 1023px) 90vw, 608px"
            className="h-auto w-full"
          />
        </div>

        <div className="hero-copy relative z-10 flex flex-col items-center pt-[clamp(4.5rem,13vh,8.5rem)] text-center">
          <div className="flex items-center gap-2.5 text-[8px] font-medium tracking-[0.055em] text-muted">
            <span className="bg-foreground px-2.5 py-1.5 text-[7px] text-white">
              GET
            </span>
            <span>YOURSELF GROWTH PARTNER</span>
          </div>

          <h1 className="mt-6 max-w-[720px] text-[clamp(2.35rem,6.4vw,5.2rem)] font-normal uppercase leading-[0.98] tracking-[-0.045em] text-balance sm:mt-7">
            Building websites for
            <br />
            trust and sales
          </h1>

          <p className="mt-7 max-w-[560px] text-[11px] leading-[1.65] tracking-[-0.01em] text-muted sm:text-xs">
            website designed according to the business to provide most value to
            customers visiting easy to understand and increased traffic that
            leads to sale and traffic
          </p>

          <Link
            href="#contact"
            className="mt-8 inline-flex min-h-9 items-center bg-foreground px-5 py-2.5 text-[8px] font-medium tracking-[0.055em] text-white transition-colors hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            REQUEST ACCESS
          </Link>
        </div>

        <div
          className="relative z-10 mx-auto mt-auto w-full max-w-[900px] pb-8 pt-20 sm:pb-[10vh] lg:pt-24"
        >
          <p className="sr-only">Technology we use</p>
          <ul className="grid grid-cols-2 gap-x-5 gap-y-5 text-center text-[11px] font-medium tracking-[-0.01em] text-foreground/80 min-[460px]:grid-cols-3 sm:flex sm:items-center sm:justify-between sm:text-xs">
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>

      </section>

      <section
        id="why-custom"
        aria-labelledby="why-custom-title"
        className="scroll-mt-6 border-x border-[#f0edb7] bg-section"
      >
        <div className="mx-auto w-full max-w-[1040px] px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="max-w-[820px]">
            <h2
              id="why-custom-title"
              className="text-[clamp(2rem,4.3vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.04em] text-balance"
            >
              Why Choose a Custom-Built Website?
            </h2>
            <p className="mt-5 max-w-[780px] text-sm leading-6 text-foreground/75 sm:mt-6 sm:text-base">
              Because your business deserves a website made just for you, not
              the same one everyone else uses.
            </p>
          </div>

          <div className="mt-14 grid gap-x-8 gap-y-10 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-20">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.highlight}
                className={`relative mx-auto w-full max-w-[245px] pl-3 pt-3 ${
                  index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-3 bottom-3 left-0 top-0 rounded-[15px] border border-[#d2cf78] bg-accent-soft"
                />
                <div className="relative flex min-h-[172px] flex-col rounded-[15px] border border-[#bfc1bb] bg-white px-6 py-6 sm:min-h-[180px]">
                  <span
                    aria-hidden="true"
                    className="mb-5 block size-10 shrink-0 rounded-full bg-[#d9dad7]"
                  />
                  <p className="max-w-[175px] text-[15px] leading-[1.16] tracking-[-0.018em]">
                    {benefit.before}
                    <mark className="benefit-highlight">
                      {benefit.highlight}
                    </mark>
                    {benefit.after}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <figure className="relative mt-16 aspect-[4/3] overflow-hidden rounded-[16px] border border-[#bfc1bb] bg-white sm:mt-20 sm:aspect-[16/8] lg:aspect-[16/7]">
            <Image
              src="/custom-built-website.png"
              alt="A custom website design system arranged for desktop and mobile screens"
              fill
              sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1080px) calc(100vw - 64px), 976px"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      <section
        id="services"
        aria-labelledby="services-title"
        className="relative scroll-mt-6 overflow-hidden border-x border-services-deep/30 bg-services"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-24 size-[30rem] rounded-full bg-white/60 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 bottom-12 size-[34rem] rounded-full bg-brand-soft/70 blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-[1040px] px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="max-w-[760px]">
            <p className="mb-4 text-[10px] font-semibold tracking-[0.16em] text-brand-deep">
              OUR SERVICES
            </p>
            <h2
              id="services-title"
              className="text-[clamp(2rem,4.3vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.04em] text-balance"
            >
              What We Do to Help You Stand Out
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:mt-16 md:grid-cols-2 lg:gap-10">
            {serviceCards.map((service, index) => (
              <article
                key={service.title}
                className="service-card group relative flex min-h-[360px] flex-col overflow-hidden rounded-[28px] border border-white/90 bg-white/85 p-7 backdrop-blur-md transition duration-300 hover:-translate-y-1 sm:p-8"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-full bg-services text-xs font-semibold tracking-[0.08em] text-brand-deep ring-1 ring-services-deep/25 transition-colors group-hover:bg-brand group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px w-16 bg-gradient-to-r from-services-deep/50 to-transparent"
                  />
                </div>

                <h3 className="max-w-[320px] text-[clamp(1.35rem,2.5vw,1.8rem)] leading-[1.08] tracking-[-0.035em] text-balance">
                  {service.title}
                </h3>

                {service.description ? (
                  <p className="mt-5 max-w-[340px] text-sm leading-6 text-foreground/65">
                    {service.description}
                  </p>
                ) : null}

                <div className="mt-auto pt-8">
                  {service.listLabel ? (
                    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/55">
                      {service.listLabel}
                    </p>
                  ) : null}
                  <ul className="space-y-2.5 text-sm leading-[1.45] text-foreground/80">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[0.5em] size-1.5 shrink-0 rounded-full bg-brand"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="values"
        aria-labelledby="values-title"
        className="relative overflow-hidden border-x border-t border-values-deep/40 bg-values"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(76rem,90%)] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/30 to-transparent"
        />

        <div className="relative mx-auto w-full max-w-[1040px] px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="max-w-[850px]">
            <p className="mb-4 text-[10px] font-semibold tracking-[0.16em] text-brand-deep">
              HOW WE WORK
            </p>
            <h2
              id="values-title"
              className="text-[clamp(2rem,4.3vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.04em] text-balance"
            >
              The Core Values and Principles That Drive Us
            </h2>
          </div>

          <div className="mt-14 grid gap-7 sm:mt-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
            {coreValues.map((value, index) => (
              <article
                key={value.title}
                className={`value-card group relative flex min-h-[320px] flex-col overflow-hidden rounded-[26px] border border-white/90 bg-white/80 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-brand/30 sm:min-h-[350px] sm:p-8 ${
                  index === 2 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute -right-2 -top-7 text-[7rem] font-semibold leading-none tracking-[-0.08em] text-values-deep/20 transition-colors group-hover:text-brand/15"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="size-2 rounded-full bg-brand ring-4 ring-brand-soft"
                  />
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-foreground/60">
                    {value.principle}
                  </p>
                </div>

                <div className="relative mt-auto pt-20">
                  <h3 className="max-w-[240px] text-[clamp(1.3rem,2.3vw,1.65rem)] leading-[1.12] tracking-[-0.035em] text-balance">
                    {value.title}
                  </h3>
                  <p className="mt-5 max-w-[280px] text-sm leading-[1.55] text-foreground/68">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="faq" className="sr-only" aria-hidden="true" />
      <div id="contact" className="sr-only" aria-hidden="true" />
    </main>
  );
}
