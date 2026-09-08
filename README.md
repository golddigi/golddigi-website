# Golddigi

A digital services website for custom websites, Google Business Profile optimization, and AI automations. Built with Next.js 16, React 19, and CSS, with responsive layouts and locally served brand assets.

## Development

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000). Run `npm run lint` and `npm run build` to validate the project.

## Pages and content

- `/`: core services, selected work, automation previews, business essentials, technology stack, process, FAQs, and enquiries.
- `/websites`: website services, four existing projects, deliverables, and supporting services.
- `/google-business-profile`: local discovery, profile optimization, ongoing management, FAQs, and a direct enquiry path.
- `/ai-automations`: interactive explanations of the WhatsApp agent, email reply agent, and IndiaMART lead capture workflow.

Automation visuals contain labeled sample conversations and lead records. They explain existing capabilities; they do not execute workflows or connect to customer accounts.

## Project enquiries

Public contact details live in `app/site-config.ts`. The enquiry form asks for a service, name, optional business or website, and a short description. “Continue on WhatsApp” opens a prefilled message to the configured number. “Use email instead” opens a prefilled email draft. The visitor reviews and sends the message in their chosen app.

The website does not submit enquiries to a backend or save them in a database. It does not send messages automatically. No API credentials are needed for this contact flow.

Optional environment settings in `.env.local`:

```dotenv
CONTACT_EMAIL=your-business-email@example.com
BOOKING_URL=https://your-booking-page.example.com
```

`CONTACT_EMAIL` overrides the enquiry form’s recipient; other public contact links use `app/site-config.ts`. `BOOKING_URL` adds a booking link below the form. Restart the development server after changing these values, and rebuild for production because the homepage is statically rendered.

## Main files

- `app/globals.css`: shared design system and homepage layout.
- `app/components/header.tsx` and `footer.tsx`: shared navigation and contact links.
- `app/components/project-gallery.tsx`: selected projects and verified public URLs.
- `app/components/automation-showcase.tsx`: selectable workflow explanations and sample visuals.
- `app/components/local-presence.tsx`: prominent homepage service for Google Business Profile optimization.
- `app/components/business-essentials.tsx`: supporting Google Workspace, domain, and hosting services.
- `app/components/tech-stack.tsx`: tools grouped by their role.
- `app/components/project-form.tsx`: validated WhatsApp and email handoff.
