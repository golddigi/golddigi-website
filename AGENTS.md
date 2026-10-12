<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## UI and content guidance

- Use Tailwind CSS for every new page and all new design work. Do not add new CSS Modules or new page-specific rules to `app/globals.css` for these changes.
- Preserve the warm off-white background, orange accents, serif emphasis, and dark green, blue, and terracotta service cards.
- Use a clear agency voice with “we,” “our,” and “us.” Do not name the owner, use first-person singular language, describe the business as a team or founder-led studio, or repeatedly name Golddigi in body copy. Use concrete deliverables and customer tasks; avoid repeated generic promises. Do not invent prices, turnaround times, testimonials, performance claims, or ranking guarantees.
- Keep service choices and contact actions easy to find. Explain what happens after an enquiry and disclose when a button opens WhatsApp or an email app; never imply a message was sent by the site.
- Keep primary body copy at least 15px on small screens, service labels at least 11px, and interactive targets at least 44px. Preserve visible keyboard focus, reduced motion support, semantic headings, and labelled inputs.
- Switch to the collapsible navigation before desktop links become crowded. Check Escape, focus return, active-page links, and menu scrolling on short screens.
- Review the homepage and all three service routes on phone, tablet, and desktop. Check horizontal overflow, service-title wrapping, FAQs, and contact validation after shared CSS changes.
- Run npm run lint and npm run build before delivering code changes. Preserve the generated Next.js instructions above.

## Follow-up improvements requiring real business material

- Actual screenshots are now included for the two available sites. Add detailed project scope and the business’s specific contribution when supplied.
- Add client testimonials only with permission and verified attribution.
- Add indicative pricing or typical delivery windows once actual packages and ongoing costs are agreed.
- Add relevant privacy information if a server-side contact form or analytics is introduced; describe the actual data handling.

## Design refinement completed (2026-09-05)

- Use actual captured homepage previews for available portfolio sites. Sources and availability notes are in public/projects/SOURCES.md.
- Present the three services as equal desktop columns and stacked mobile cards. Avoid repeating the same outcome in multiple nested boxes.
- Use a distinct pale portfolio section and lighter automation layouts to vary the page rhythm.
- Keep the detailed tool list in an accessible disclosure after the process section, so the business information comes first.
- Soni Hospital and Divine Consultancy remain listed as past work without external links while their destinations are unavailable. Recheck supplied replacement URLs before restoring links.
- The owner has no testimonials, approved pricing, delivery windows, or detailed role statements available yet. Leave these out until supplied; this is a content dependency, not unfinished implementation.
- No server-side form or analytics was added, so the conditional privacy-policy work remains inapplicable. Reassess if data collection changes.

## Work summary — recorded 2026-09-05 at 10:55 IST (UTC+05:30)

- Committed the original changes as `a561607` with the requested message, `dark colors used in service cards`.
- Reviewed the homepage and three service pages for content clarity, visual hierarchy, mobile readability, navigation, and enquiry flow.
- Improved supporting text sizes, touch targets, keyboard focus, tablet navigation, and Escape handling. Clarified service descriptions and added the enquiry next steps and messaging-app instructions.
- Committed that first improvement pass as `14a76d9`, `Improve mobile usability and clarify service content`.
- Refined the design with three desktop service columns, stacked phone cards, less duplicated content, a distinct portfolio background, lighter automation layouts, and an expandable tools section after the process.
- Added actual Shivom Designs and Antac homepage screenshots and documented their sources. Kept Soni Hospital and Divine Consultancy as past projects without live links after observing an expired domain and a certificate error respectively.
- Added ongoing design/content guidance and recorded dependencies for testimonials, pricing, delivery windows, and detailed project roles; these remain omitted because the owner has no supporting material yet.
- Validation completed during the implementation: ESLint and production build passed; all four public pages had no horizontal overflow at 320px, 820px, and 1440px. Also checked portfolio image loading, mobile menu/Escape behavior, FAQ expansion, required form fields, and the tools disclosure.
- At the time of this entry, the second design pass and this documentation update remain uncommitted. No deployment was performed.
