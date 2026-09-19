# Golddigi SEO handoff

Updated: 2026-09-19

This file records the SEO review and implementation completed in the current session. A fresh model should read this before changing the SEO work.

## Business context confirmed

- Canonical live domain: `https://golddigi.com`.
- The business is based in Bhiwadi.
- Services have been delivered through in-person visits, but the current growth goal is mostly remote work.
- Priority locations mentioned by the owner: Bhiwadi, Manesar, Chopanki, Jaipur, Gurugram/Gurgaon, Neemrana, Delhi and Indore.
- Treat “Gurgaon” and “Gurugram” as one target location to avoid duplicate intent.
- No confirmation was supplied that the business has an office, Google Business Profile, or completed project in every priority city. Do not imply that it does.

## Work completed in this session

### Technical SEO

- Added `app/seo.ts` as the shared source for public page titles, descriptions, canonical paths and sitemap membership.
- Added `app/components/structured-data.tsx` with Organization, WebSite, WebPage and Service JSON-LD. It identifies Bhiwadi as the business location and only adds Bhiwadi as `areaServed` on the Bhiwadi service page. It does not invent ratings, offices, prices or service areas.
- Updated the homepage and all service routes to use clearer, search-oriented titles and H1s:
  - Website design & development
  - Google Business Profile optimization & management
  - AI automations for WhatsApp, email and IndiaMART leads
- Added optional Google and Bing verification metadata through `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION` environment variables.
- `/admin` now sends `noindex, nofollow` metadata and is excluded from the sitemap.
- The sitemap now includes the shared public-page registry, including the Bhiwadi page, and remains on `https://golddigi.com/sitemap.xml`.
- Added a permanent redirect from `www.golddigi.com` to `golddigi.com`, preserving path and query string.

### Content and internal linking

- Added `/websites/bhiwadi`, a substantive local service page based on confirmed facts: Bhiwadi base, remote collaboration, website projects, product/service/portfolio website use cases, launch ownership and FAQs.
- Added links to the Bhiwadi page from the website service page and footer.
- Added “Based in Bhiwadi” and remote-delivery language to the homepage/footer.
- Replaced vague service-page hero H1s with explicit service language.
- Changed the automation showcase so all three workflows are present in the initial server-rendered HTML, while tabs still control which panel is visible:
  - WhatsApp marketing agent
  - Email reply agent
  - IndiaMART lead capture
- Increased selected small service text sizes on narrow screens.
- Added crawlable project-detail pages for Shivom Designs and Daksha Enterprises, linked from every portfolio gallery. The pages use observable live-site facts and avoid unsupported performance or authorship claims.

### Verification completed

- `npm run lint` passes.
- `npm run build` passes with these static routes: `/`, `/websites`, `/google-business-profile`, `/ai-automations`, `/websites/bhiwadi`, `/work/shivom-designs` and `/work/daksha-enterprises`.
- `npm run verify:seo -- http://localhost:3102` passes when a production server is running on port 3102. It checks sitemap URLs, unique titles, one H1 per public page, canonical URLs, descriptions, JSON-LD, admin noindex, robots, 404 handling, initial automation HTML and the `www` redirect.
- Browser checks passed at 320px, 820px and 1440px for all public routes: no horizontal overflow, one H1, metadata/schema present and no runtime errors.
- Mobile menu Escape/focus return, FAQ opening, required form validity and all three automation tabs were checked.
- Screenshots from the final visual check are in `C:\Users\apurv\AppData\Local\Temp\golddigi-seo-review` (temporary local QA only).

## Important current repository state

The changes above are currently uncommitted. Do not reset or discard them. Run `git diff` before further edits and commit only after reviewing the complete diff.

## City-page strategy still to do

Do not generate seven near-identical city pages by swapping city names. Google identifies this pattern as doorway/scaled content risk. Each city page should be published only when it has real local usefulness and evidence.

Recommended sequence:

1. Keep Bhiwadi as the first indexable city page because it is the confirmed base.
2. Add a remote-service hub or section explaining that projects can be delivered remotely across Manesar, Chopanki, Neemrana, Gurugram, Jaipur, Delhi and Indore.
3. Add the next city only when there is at least one city-specific reason to exist: a completed project, a real client/customer scenario, a relevant industrial or business segment, original photographs, a documented remote workflow, or a useful local guide.
4. For every approved city page, add a unique title/H1, unique local introduction, service-specific examples, FAQs that answer local customer questions, relevant internal links, and a real CTA. Register it in `app/seo.ts` so it enters the sitemap.
5. Do not claim a local office, in-person availability, local clients, rankings, testimonials, pricing, turnaround or service-area status without evidence.

Suggested future URL structure (only when content is ready):

- `/websites/manesar`
- `/websites/chopanki`
- `/websites/neemrana`
- `/websites/gurugram`
- `/websites/jaipur`
- `/websites/delhi`
- `/websites/indore`

The pages should be service-led, not location-only pages. A useful first expansion could be one remote website page for the Bhiwadi–Neemrana–Manesar industrial belt if the owner can supply relevant experience or customer problems; otherwise keep the locations in the remote-working copy until evidence exists.

## Recommended off-site and measurement work

- Verify `golddigi.com` in Google Search Console and Bing Webmaster Tools; add the verification environment variables during deployment.
- Submit `https://golddigi.com/sitemap.xml` in Search Console.
- Inspect and request indexing for `/`, `/websites`, `/google-business-profile`, `/ai-automations` and `/websites/bhiwadi`.
- Create or complete the real Google Business Profile for the Bhiwadi business if eligible. Keep name, address/service area, phone, website and categories consistent.
- Build genuine local proof: ask permission to publish project case studies, add client/business location context where true, and earn local links from associations, suppliers, directories and client sites.
- Track impressions, clicks, queries, CTR and average position by page in Search Console monthly. Use the data to improve pages that receive impressions but low clicks before creating more city pages.
- Do not buy links, publish invented reviews, add fake addresses, or use ranking guarantees.

## Competitive notes from the review

- Mumbai/Bhiwadi competitors generally win attention with explicit location + service H1s, industry examples, detailed deliverables, visible proof and strong internal page depth.
- One Bhiwadi competitor has a large local-services/content architecture and many claims; those claims were not copied because this project has no supplied evidence for them.
- Google’s spam guidance warns against city pages that are substantially similar or funnel users to one page. The city strategy above is designed around that constraint.

## Next fresh-model prompt

“Read `SEO-HANDOFF.md`, inspect the current diff, and continue the organic-growth work. Keep Bhiwadi as the only fully evidenced city page until I provide project/client evidence for other locations. Do not discard existing changes. First run lint/build and review the Bhiwadi page, then propose or implement the next evidence-backed SEO improvement.”
