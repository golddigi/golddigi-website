import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="pt-24 pb-12 px-6 border-t border-white/5 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center font-bold text-black text-xl">
                G
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Golddigi
              </span>
            </div>

            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Crafting premium digital experiences for forward-thinking
              businesses. We build for scale, speed, and success.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="hover:text-amber-400 transition-colors"
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  to="/#projects"
                  className="hover:text-amber-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="hover:text-amber-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-amber-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/#footer" className="hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-gray-500">
              {/* Email (Clickable) */}
              <li>
                <a
                  href="mailto:apurv@golddigi.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  apurv@golddigi.com
                </a>
              </li>

              {/* Phone (Clickable) */}
              <li>
                <a
                  href="tel:+917410998149"
                  className="hover:text-amber-400 transition-colors"
                >
                  +91 7410998149
                </a>
              </li>

              {/* Address (Not Clickable) */}
              <li>TC-514, Capital High Street, Bhiwadi</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-gray-600 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Golddigi Services. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link to="/" className="hover:text-amber-400">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-amber-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
