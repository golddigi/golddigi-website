import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { services } from "../constants/data";

const Services: React.FC = () => {
  const whatsappLink =
    "https://wa.me/917410998149?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services";

  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            What We Do to Help You{" "}
            <span className="text-amber-400">Stand Out</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive digital services designed to turn your vision into a
            measurable competitive advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-glass rounded-[2rem] p-8 border border-white/5 flex flex-col h-full hover:border-amber-400/20 transition-all group"
            >
              <div className="mb-8 p-4 inline-block bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 group-hover:text-amber-400 transition-colors">
                {service.title}
              </h3>
              <ul className="space-y-4 flex-grow">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-400 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-3 text-amber-500/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 w-full py-4 rounded-xl border border-white/10 group-hover:bg-white group-hover:text-black text-center font-bold transition-all text-sm"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
