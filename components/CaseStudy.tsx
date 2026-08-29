import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import { LiveProjects } from "../constants/data";

const CaseStudy: React.FC = () => {
  const whatsappLink =
    "https://wa.me/917410998149?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services";

  return (
    <section id="live-projects" className="py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Our <span className="text-amber-400">Live Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of digital experiences we've crafted for industry
            leaders, helping them dominate their local and digital markets.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {LiveProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-glass border border-white/5 rounded-[2.5rem] p-8 hover:border-amber-400/30 transition-all duration-500"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-amber-400/10 rounded-2xl text-amber-400">
                  <Globe className="w-6 h-6" />
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full hover:bg-amber-400 hover:text-black transition-all group-hover:rotate-12"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="mb-4">
                <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="text-3xl font-bold group-hover:text-white transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all"
              >
                Launch Live Site <span className="text-amber-400">-&gt;</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA for Projects */}
      <div className="mt-20 text-center">
        <p className="text-gray-500 mb-4 italic italic">
          Ready to see your business here?
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 font-bold hover:underline decoration-2 underline-offset-8"
        >
          Start Your Transformation Today
        </a>
      </div>
    </section>
  );
};

export default CaseStudy;
