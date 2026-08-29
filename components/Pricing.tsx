import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { pricingPackages } from "../constants/data";

const Pricing: React.FC = () => {
  const whatsappLink =
    "https://wa.me/917410998149?text=Hello%20I%20am%20interested%20in%20your%20pricing%20packages";

  return (
    <section id="pricing" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Choose Your <span className="text-amber-400">Growth Package</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Transparent pricing designed to match your business stage and growth
            ambitions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className={`bg-glass rounded-[2rem] p-10 border flex flex-col h-full transition-all group
              ${
                pkg.highlight
                  ? "border-amber-400 scale-105"
                  : "border-white/5 hover:border-amber-400/20"
              }`}
            >
              <div className="mb-8 p-4 inline-block bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                {pkg.icon}
              </div>

              <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-400 transition-colors">
                {pkg.name}
              </h3>

              <p className="text-3xl font-extrabold mb-8 text-amber-400">
                {pkg.price}
              </p>

              <ul className="space-y-4 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-400 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-3 text-amber-500/60 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-10 w-full py-4 rounded-xl text-center font-bold transition-all text-sm
                ${
                  pkg.highlight
                    ? "bg-amber-400 text-black hover:opacity-90"
                    : "border border-white/10 group-hover:bg-white group-hover:text-black"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
