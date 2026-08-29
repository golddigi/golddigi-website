import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectCarousel from "../components/ProjectCarousel";
import WhyUs from "../components/WhyUs";
import CustomBenefits from "../components/CustomBenefits";
import Services from "../components/Services";
import Footer from "../components/Footer";
import GradientBackground from "../components/GradientBackground";
import Pricing from "../components/Pricing";
import Projects from "../components/Projects";
import LatestBlogPosts from "../components/LatestBlogPosts";

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Reset title and meta for homepage
    document.title =
      "Website Developer in Bhiwadi | Custom Web Design & Development - Golddigi";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Looking for a website developer in Bhiwadi? Golddigi builds fast, SEO-friendly, mobile-first websites for businesses in Bhiwadi, Alwar & Rajasthan. Get a free quote today!"
      );
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      <GradientBackground />

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <main>
              <Hero />
              <ProjectCarousel />
              <CustomBenefits />
              <Services />
              <Projects />
              <Pricing />
              <LatestBlogPosts />
              {/* <WhyUs /> */}
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
