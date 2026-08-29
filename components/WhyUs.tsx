import React from "react";
import { motion } from "framer-motion";
import { whyUs } from "../constants/data";

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Why Choose Us?
            </motion.h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We believe in more than just writing code. Our philosophy is built
              on human connection and unwavering integrity. We aren't just your
              developers; we are your strategic partners.
            </p>
            <button className="text-amber-400 font-bold flex items-center hover:translate-x-2 transition-transform">
              Learn more about our process →
            </button>
          </div>

          <div className="lg:w-1/2 grid gap-6">
            {whyUs.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-6 p-6 rounded-2xl border border-white/5 bg-glass hover:bg-white/5 transition-colors"
              >
                <div
                  className={`mt-1 w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white shrink-0`}
                >
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{value.title}</h4>
                  <p className="text-gray-400">{value.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
