import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";
import { client, urlFor } from "../lib/sanityClient";

interface Post {
  _id: string;
  title: string;
  slug?: { current?: string };
  excerpt: string;
  publishedAt: string;
  coverImage?: any;
  tags?: string[];
}

const QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) [0...3] {
  _id, title, slug, excerpt, publishedAt, coverImage, tags
}`;

const LatestBlogPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch<Post[]>(QUERY)
      .then((data) => {
        setPosts((data || []).filter((post) => post.slug?.current));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Don't render section at all if no posts and not loading
  if (!loading && posts.length === 0) return null;

  return (
    <section className="py-24 px-6 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              From the Blog
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Tips to Grow Your{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Business Online
              </span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-lg">
              Free web design & SEO advice for businesses in Bhiwadi and Rajasthan.
            </p>
          </div>

          <Link
            to="/blog"
            className="hidden md:inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors group"
          >
            All Posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Skeleton loading */}
        {loading && (
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden animate-pulse"
              >
                <div className="h-44 bg-white/10" />
                <div className="p-5 space-y-3">
                  <div className="h-3 bg-white/10 rounded w-1/3" />
                  <div className="h-4 bg-white/10 rounded w-4/5" />
                  <div className="h-3 bg-white/10 rounded w-full" />
                  <div className="h-3 bg-white/10 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Posts grid */}
        {!loading && posts.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.slug?.current}`} className="block h-full">
                  <article className="group h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    {/* Cover image */}
                    {post.coverImage ? (
                      <div className="h-44 overflow-hidden">
                        <img
                          src={urlFor(post.coverImage).width(600).url()}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="h-44 bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-transparent flex items-center justify-center">
                        <BookOpen className="w-10 h-10 text-amber-400/20" />
                      </div>
                    )}

                    <div className="p-5 flex flex-col flex-1">
                      {/* Date */}
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-3">
                        <Calendar className="w-3 h-3" />
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString("en-IN", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })
                          : "Draft"}
                      </div>

                      {/* Title */}
                      <h3 className="text-white font-semibold text-base mb-2 group-hover:text-amber-300 transition-colors line-clamp-2 flex-1">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-1 text-amber-400 text-sm font-medium mt-auto">
                        Read article
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Mobile "View all" button */}
        {!loading && posts.length > 0 && (
          <div className="mt-8 text-center md:hidden">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-amber-400/30 text-amber-400 font-medium hover:bg-amber-400/10 transition-colors"
            >
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestBlogPosts;
