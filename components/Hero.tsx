import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Globe, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const whatsappLink =
    "https://wa.me/917410998149?text=Hi%2C%20I%20want%20to%20avail%20a%20free%20website%20audit%20for%20my%20website";

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
       

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight mb-8"
        >
          Custom Websites Built <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
            Specifically for Your Goals
          </span>
        </motion.h1>
        <h2 className="sr-only">Top Website Developer in Bhiwadi, Rajasthan</h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Think of your website as a 24/7 representative that never takes a day
          off. We build digital experiences that work as hard as you do,
          converting visitors into loyal customers around the clock.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-amber-400 text-black font-bold rounded-full hover:bg-amber-300 transition-all shadow-xl shadow-amber-400/20 active:scale-95"
          >
            Claim Free Website Audit
          </a>
          <Link
            to="/#services"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all active:scale-95"
          >
            Explore Our Services
          </Link>
        </motion.div>

        {/* Visual elements */}
        {/* <div className="mt-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-glass p-4 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent pointer-events-none"></div>
            <img
              src="assets/hero.jpg"
              alt="Dashboard Preview"
              className="rounded-xl w-full h-auto opacity-80"
            />
          </motion.div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
