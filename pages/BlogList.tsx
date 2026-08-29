import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, BookOpen, Tag } from "lucide-react";
import { client, urlFor } from "../lib/sanityClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Post {
  _id: string;
  title: string;
  slug?: { current?: string };
  excerpt: string;
  publishedAt: string;
  coverImage?: any;
  tags?: string[];
}

const QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  coverImage,
  tags
}`;

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Update meta for blog listing page
    document.title = "Blog | Web Design & SEO Tips - Golddigi";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Read Golddigi's blog for web design tips, SEO strategies, and digital growth advice for local businesses in Bhiwadi, Alwar & Rajasthan."
      );
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://golddigi.com/blog");
  }, []);

  useEffect(() => {
    client
      .fetch<Post[]>(QUERY)
      .then((data) => {
        setPosts((data || []).filter((post) => post.slug?.current));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setError("Could not load posts. Check your Sanity project ID in .env.local.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030712]">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-40 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Golddigi Blog
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Web Design &{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              SEO Insights
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Practical tips on web design, local SEO, and digital growth for businesses in
            Bhiwadi, Alwar & Rajasthan.
          </p>
        </motion.div>
      </section>

      {/* Posts Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-32">
        {loading && (
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-white/10" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-white/10 rounded w-3/4" />
                  <div className="h-3 bg-white/10 rounded w-full" />
                  <div className="h-3 bg-white/10 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="mt-12 p-6 rounded-2xl border border-red-500/30 bg-red-500/10 text-center">
            <p className="text-red-400 font-medium">{error}</p>
            <p className="text-gray-500 text-sm mt-2">
              Add <code className="text-amber-400">VITE_SANITY_PROJECT_ID</code> to
              your <code className="text-amber-400">.env.local</code> file.
            </p>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="mt-12 text-center py-24">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-amber-400" />
            </div>
            <h2 className="text-white text-xl font-semibold mb-2">No posts yet</h2>
            <p className="text-gray-500">
              Create your first post in Sanity Studio and it will appear here.
            </p>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <>
            {/* Featured post (first) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <Link to={`/blog/${posts[0].slug?.current}`}>
                <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:border-amber-400/40 transition-all duration-300 md:flex">
                  {posts[0].coverImage ? (
                    <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                      <img
                        src={urlFor(posts[0].coverImage).width(800).url()}
                        alt={posts[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-amber-500/20 to-yellow-500/5 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-amber-400/30" />
                    </div>
                  )}
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
                      Featured Post
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors">
                      {posts[0].title}
                    </h2>
                    <p className="text-gray-400 mb-6 line-clamp-3">{posts[0].excerpt}</p>
                    <div className="flex items-center gap-6 text-gray-500 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(posts[0].publishedAt).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1 text-amber-400 font-medium">
                        Read more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>

            {/* Rest of posts grid */}
            {posts.length > 1 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.slice(1).map((post, i) => (
                  <motion.div
                    key={post._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Link to={`/blog/${post.slug?.current}`} className="block h-full">
                      <article className="group h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/40 hover:bg-white/8 transition-all duration-300 flex flex-col">
                        {post.coverImage ? (
                          <div className="h-48 overflow-hidden">
                            <img
                              src={urlFor(post.coverImage).width(600).url()}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        ) : (
                          <div className="h-48 bg-gradient-to-br from-amber-500/10 to-transparent flex items-center justify-center">
                            <BookOpen className="w-10 h-10 text-amber-400/20" />
                          </div>
                        )}
                        <div className="p-6 flex flex-col flex-1">
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {post.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center gap-1 text-xs text-amber-400/70 bg-amber-400/10 px-2 py-0.5 rounded-full"
                                >
                                  <Tag className="w-3 h-3" />
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          <h2 className="text-white font-semibold text-lg mb-2 group-hover:text-amber-300 transition-colors line-clamp-2">
                            {post.title}
                          </h2>
                          <p className="text-gray-400 text-sm line-clamp-3 flex-1">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                            <span className="text-gray-500 text-xs flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                            <span className="text-amber-400 text-sm flex items-center gap-1 font-medium">
                              Read
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogList;
