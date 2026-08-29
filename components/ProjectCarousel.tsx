import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectsRow1, projectsRow2 } from "../constants/data";

const ProjectCarousel: React.FC = () => {
  return (
    <section id="project-carousel" className="py-24 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-white"
        >
          Conversion-Focused <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
            Digital Experiences
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Explore our portfolio of high-performing websites designed to turn
          visitors into loyal customers.
        </motion.p>
      </div>

      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col gap-6"
        >
          {/* Row 1 - Scrolling Left */}
          <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
            {[...projectsRow1, ...projectsRow1].map((project, idx) => (
              <motion.a
                key={`${project.id}-${idx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: false }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/917410998149?text=Hi%2C%20I%20would%20like%20to%20see%20your%20live%20projects.%20Could%20you%20please%20share%20the%20links%3F"
                className="relative group w-[280px] md:w-[350px] lg:w-[400px] px-3 flex-shrink-0"
              >
                <div className="relative overflow-hidden border border-white/10 bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 "
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-bold text-xl">
                        {project.title}
                      </h3>
                      <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-black transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Row 2 - Scrolling Right */}
          <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
            {[...projectsRow2, ...projectsRow2, ...projectsRow2].map((project, idx) => (
              <motion.a
                key={`${project.id}-${idx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/917410998149?text=Hi%2C%20I%20would%20like%20to%20see%20your%20live%20projects.%20Could%20you%20please%20share%20the%20links%3F"
                className="relative group w-[180px] md:w-[240px] px-3 flex-shrink-0"
              >
                <div className="relative overflow-hidden rounded-xs border border-white/10 bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-bold text-xl">
                        {project.title}
                      </h3>
                      <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-black transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
