import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#030712]">
      <Navbar />

      <main className="flex items-center justify-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg"
        >
          {/* 404 number */}
          <div className="relative mb-8">
            <span className="text-[120px] md:text-[160px] font-black text-white/5 leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                <Search className="w-10 h-10 text-amber-400/60" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-black font-bold rounded-full hover:bg-amber-300 transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-gray-300 font-medium rounded-full hover:border-amber-400/40 hover:text-amber-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Visit Blog
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
