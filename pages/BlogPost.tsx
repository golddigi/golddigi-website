import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { Calendar, ArrowLeft, BookOpen, Share2 } from "lucide-react";
import { client, urlFor } from "../lib/sanityClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Post {
  title: string;
  slug: { current: string };
  excerpt: string;
  body: any[];
  publishedAt: string;
  coverImage?: any;
  seoTitle?: string;
  seoDescription?: string;
  tags?: string[];
}

const QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  slug,
  excerpt,
  body,
  publishedAt,
  coverImage,
  seoTitle,
  seoDescription,
  tags
}`;

// Custom PortableText components for rich styling
const portableTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold text-white mt-10 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold text-white mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold text-white mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-semibold text-amber-300 mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-300 leading-relaxed mb-5">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-amber-400 pl-6 py-2 my-6 bg-amber-400/5 rounded-r-xl italic text-gray-300">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="text-amber-300 italic">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-white/10 text-amber-300 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        rel="noopener noreferrer"
        target="_blank"
        className="text-amber-400 underline underline-offset-2 hover:text-amber-300 transition-colors"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-5 text-gray-300 pl-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-5 text-gray-300 pl-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
  },
  types: {
    image: ({ value }: any) => (
      <figure className="my-8">
        <img
          src={urlFor(value).width(800).url()}
          alt={value.alt || "Blog image"}
          className="w-full rounded-2xl border border-white/10"
        />
        {value.caption && (
          <figcaption className="text-center text-gray-500 text-sm mt-3">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const jsonLdRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (!slug) return;
    client
      .fetch<Post>(QUERY, { slug })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setError("Could not load this post.");
        setLoading(false);
      });
  }, [slug]);

  // Dynamic SEO meta tags
  useEffect(() => {
    if (!post) return;

    document.title = post.seoTitle || `${post.title} | Golddigi Blog`;

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", post.seoDescription || post.excerpt || "");

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `https://golddigi.com/blog/${slug}`);

    // Open Graph
    const setOg = (prop: string, val: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", prop);
        document.head.appendChild(el);
      }
      el.setAttribute("content", val);
    };
    setOg("og:title", post.seoTitle || post.title);
    setOg("og:description", post.seoDescription || post.excerpt || "");
    setOg("og:url", `https://golddigi.com/blog/${slug}`);
    setOg("og:type", "article");
    if (post.coverImage) setOg("og:image", urlFor(post.coverImage).width(1200).url());

    // JSON-LD BlogPosting schema
    if (jsonLdRef.current) document.head.removeChild(jsonLdRef.current);
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: post.coverImage ? urlFor(post.coverImage).width(1200).url() : undefined,
      datePublished: post.publishedAt,
      author: { "@type": "Organization", name: "Golddigi" },
      publisher: {
        "@type": "Organization",
        name: "Golddigi",
        logo: { "@type": "ImageObject", url: "https://golddigi.com/logo.png" },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://golddigi.com/blog/${slug}`,
      },
    });
    document.head.appendChild(script);
    jsonLdRef.current = script;

    return () => {
      if (jsonLdRef.current && document.head.contains(jsonLdRef.current)) {
        document.head.removeChild(jsonLdRef.current);
      }
    };
  }, [post, slug]);

  const handleShare = () => {
    if (navigator.share && post) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712]">
      <Navbar />

      {loading && (
        <div className="max-w-3xl mx-auto px-6 pt-40 pb-32 animate-pulse space-y-6">
          <div className="h-8 bg-white/10 rounded-full w-3/4 mx-auto" />
          <div className="h-4 bg-white/10 rounded w-1/2 mx-auto" />
          <div className="h-72 bg-white/10 rounded-2xl" />
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-4 bg-white/10 rounded" />
            ))}
          </div>
        </div>
      )}

      {error && (
        <div className="max-w-3xl mx-auto px-6 pt-40 pb-32 text-center">
          <p className="text-red-400 text-lg">{error}</p>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      )}

      {!loading && !error && !post && (
        <div className="max-w-3xl mx-auto px-6 pt-40 pb-32 text-center">
          <BookOpen className="w-16 h-16 text-amber-400/30 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-4">Post not found</h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      )}

      {!loading && !error && post && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Cover Image */}
          {post.coverImage && (
            <div className="relative h-[50vh] overflow-hidden">
              <img
                src={urlFor(post.coverImage).width(1400).url()}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
            </div>
          )}

          <article
            className={`max-w-3xl mx-auto px-6 pb-32 ${
              post.coverImage ? "-mt-24 relative" : "pt-40"
            }`}
          >
            {/* Back link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-amber-400 transition-colors text-sm mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All Posts
            </Link>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="text-gray-700">·</span>
                <span className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold text-xs">
                    G
                  </div>
                  Golddigi
                </span>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 text-gray-500 hover:text-amber-400 transition-colors text-sm"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            {/* Body */}
            <div className="blog-body">
              {post.body ? (
                <PortableText value={post.body} components={portableTextComponents} />
              ) : (
                <p className="text-gray-400">This post has no body content yet.</p>
              )}
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to grow your business online?
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                Golddigi builds fast, SEO-friendly websites for businesses in Bhiwadi & Rajasthan.
              </p>
              <a
                href="https://wa.me/917410998149?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-black font-bold rounded-full hover:bg-amber-300 transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </article>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
