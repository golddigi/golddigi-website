// ============================================================
// Golddigi Blog — Sanity Schema
// HOW TO USE:
//   1. Copy this entire file into your Sanity Studio project
//      at: schemas/post.ts
//   2. In your schemaTypes/index.ts, add:
//        import post from './post'
//        export const schemaTypes = [post]
//   3. Run `npx sanity dev` in your studio folder to see it
// ============================================================

export default {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    // ── Core Content ───────────────────────────────────────
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required().max(80),
    },
    {
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      description: "The URL path for this post. Example: how-to-rank-on-google",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "A short summary shown in the blog listing and SEO meta description (max 160 chars).",
      validation: (Rule: any) => Rule.max(160),
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for SEO and accessibility",
        },
      ],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
        list: [
          { title: "SEO", value: "SEO" },
          { title: "Web Design", value: "Web Design" },
          { title: "Local SEO", value: "Local SEO" },
          { title: "Bhiwadi", value: "Bhiwadi" },
          { title: "Rajasthan", value: "Rajasthan" },
          { title: "Digital Marketing", value: "Digital Marketing" },
          { title: "Tips", value: "Tips" },
        ],
      },
    },

    // ── Body Content ───────────────────────────────────────
    {
      name: "body",
      title: "Body Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: (Rule: any) =>
                      Rule.uri({ allowRelative: true, scheme: ["https", "http", "mailto", "tel"] }),
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Alt Text" },
            { name: "caption", type: "string", title: "Caption (optional)" },
          ],
        },
      ],
    },

    // ── SEO Overrides ──────────────────────────────────────
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "If left blank, the post title will be used. (Recommended: 50–60 chars)",
      validation: (Rule: any) => Rule.max(60),
      group: "seo",
    },
    {
      name: "seoDescription",
      title: "SEO Meta Description",
      type: "text",
      rows: 2,
      description: "If left blank, the excerpt will be used. (Recommended: 120–160 chars)",
      validation: (Rule: any) => Rule.max(160),
      group: "seo",
    },
  ],

  // ── Field Groups (organises Studio sidebar) ─────────────
  groups: [
    { name: "seo", title: "SEO" },
  ],

  // ── Studio Preview ─────────────────────────────────────
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "coverImage",
    },
    prepare({ title, subtitle, media }: any) {
      return {
        title,
        subtitle: subtitle
          ? new Date(subtitle).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })
          : "Draft",
        media,
      };
    },
  },
};
