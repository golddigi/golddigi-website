# SEO implementation and measurement

Date: 1 November 2026. Market: India, English. Goal: 50–100 organic visits/month; a target, not a forecast or guarantee.

## Keyword map

Metrics below are from the Ubersuggest calls in this chat, not new measurements. Cached update dates differ. Intent and priority are editorial assessments. CPC uses the returned cpcDollars field.

| Keyword | Monthly volume | SD | CPC USD | Destination | Decision |
| --- | ---: | ---: | ---: | --- | --- |
| website design in bhiwadi | 10 | 10 | 0 reported | /websites/bhiwadi | First local commercial target |
| n8n automation services | 10 | 20 | 1.17 | /ai-automations | Secondary; validate SERP before splitting |
| google business profile optimization services | 480 | 61 | 1.37 | /google-business-profile | Longer-term commercial target |

Do not sum variant volumes as independent audiences. No traffic projection is supported by this limited sample.

### Validation queue — metrics unknown

- /websites/bhiwadi: web designing company in bhiwadi; website development company in bhiwadi; website designer in bhiwadi; website redesign in bhiwadi.
- /websites: product catalogue website development; industrial website design; manufacturing website design services.
- /ai-automations: IndiaMART CRM integration; IndiaMART leads to Google Sheets; Gmail to Google Sheets automation; WhatsApp chatbot development services.
- /google-business-profile: Google Business Profile management services; Google My Business optimization services.

Check metrics and the actual SERP before creating new pages. Merge equivalent intent into existing pages. No additional city pages without distinct local evidence. The keyword expansion endpoint returned HTTP 502, then overview hit the daily quota; no additional volumes were inferred.

## Baseline available from the earlier audit

- Ubersuggest India domain data: latest month September 2026, 0 detected organic keywords and 0 estimated visits. This is not measured traffic or proof of non-indexation.
- Technical crawl: 9 successful pages, score 99, 0 errors, 1 warning for /websites. The short readable URL is retained.
- Mobile lab LCP 1.4 s, CLS 0, TBT 3 ms. Desktop LCP 362 ms, CLS 0, TBT 19 ms. Real-user INP/field CWV not supplied.
- Domain authority 7; 165 backlinks, 114 referring domains. The ten sampled referring domains used identical PBN/link-purchase anchor text. Investigate provenance; no penalty inferred and no disavow submitted.

## Changes in this implementation

- Bhiwadi page connects the existing supplier project to catalogue and quotation requirements, and clarifies handover responsibilities.
- Website service page foregrounds supported website types, replaces a repeated visitor journey with brief preparation, and makes optional scope explicit. Removed the early technology strip; tools remain in the homepage disclosure.
- Automation FAQs explain how exception handling, duplicate checks, monitoring, access and data destinations must be scoped. These are not claimed as existing default features.
- GBP enquiry disclosures now accompany the initial actions; preparation covers approvals, supplied material and verification/suspension scope checks.
- Campaign metadata and prominent figures distinguish client-reported sales from messaging spend; no ROI claim.
- About page removes owner naming from visible copy, metadata and Person schema, following AGENTS.md. Business registration facts retained.
- Homepage removes repeated reassurance and gives concrete enquiry preparation.
- Added a code-generated social preview image. No analytics or server-side enquiry storage introduced.

## Measurement and access dependencies

No Search Console connector is available in this session. Do not record invented zeros in the measurement log. Obtain read access or exports for:

1. Performance: last 3 months, Web search, query/page/country/device breakdown; separate branded and non-branded queries.
2. Page indexing, sitemap status, URL inspection for each public route, manual actions and security issues.
3. Links report to compare suspicious sampled domains with known commissioned work.

Existing code supports GOOGLE_SITE_VERIFICATION and BING_SITE_VERIFICATION. Set actual issued tokens in the hosting environment; never invent tokens or expose credentials in commits. Verification alone does not establish indexation.

Ubersuggest account rechecked: reports 3/3 used; project slot 1/1 occupied by Daksha. Preserved that project. Further keyword research and separate Golddigi tracking need available quota/capacity. No plan upgrade or purchase authorised or performed.

## Review cadence

After release, record release date and establish the baseline. Review indexing and impressions after 2–4 weeks, query/page performance at 8–12 weeks, then monthly. These are review intervals, not promised ranking dates. Prioritise pages getting relevant impressions, then low-CTR snippets and relevant near-page-one queries. Track qualified enquiries manually until an actual measurement implementation is agreed.

| Review date | Period | Organic clicks | Impressions | Non-brand queries | Qualified organic enquiries | Source / notes |
| --- | --- | --- | --- | --- | --- | --- |
| Pending access | Last 28 days | Unknown | Unknown | Unknown | Unknown | Search Console baseline unavailable |

## Material still required

- Approved, precise Shivom contribution and project dates; no scope or outcomes invented.
- Dates and source reports for campaign and Daksha discovery evidence; explanation of 250 selected vs 223 sent, and sales attribution window. Existing caveats preserved.
- Testimonials, prices and delivery windows only when approved and supported.
- Hosting deployment access/configuration. Do not treat local validation as a live release.

## Verification and release status

- ESLint passed. Production `npm run build` passed, including TypeScript and static generation. The sandboxed build stalled; rerunning outside the sandbox completed successfully.
- `npm run verify:seo -- http://localhost:3102` passed against the production server for all nine public routes, metadata, JSON-LD, sitemap, robots, admin noindex, missing-page 404 and canonical host redirect.
- Browser checks at 320, 820 and 1440px passed for the homepage, three service pages, Bhiwadi, About and campaign page: one H1, no horizontal overflow, no failed loaded images.
- Mobile menu opened, Escape closed it and focus returned to the toggle. Homepage FAQ expanded; empty contact submission focused the required name field, with name and details invalid.
- Impeccable detector returned no findings for changed page components. No shared CSS changed.
- No production deployment performed: repository has no hosting configuration or connected deployment credentials identified. Git remote is GitHub; pushing source alone would not establish a verified release. Changes remain available for review in the working tree.
