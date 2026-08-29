import React from "react";
import { motion } from "framer-motion";
import { customWebsiteBenefits } from "../constants/data";

const CustomBenefits: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Why Choose a Custom-Built Website?
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="w-24 h-1 bg-amber-400 mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {customWebsiteBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-glass p-10 rounded-3xl border border-white/5 group transition-all"
            >
              <div className="mb-6 p-4 inline-block bg-white/5 rounded-2xl group-hover:bg-amber-400/20 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center italic"
        >
          <p className="text-2xl md:text-3xl font-light text-amber-200/80">
            "Because your business deserves a website made just for you..."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomBenefits;
