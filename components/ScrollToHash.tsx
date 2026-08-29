import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SCROLL_OFFSET = 90;

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = hash.slice(1);
    const scrollToSection = () => {
      const element = document.getElementById(id);
      if (!element) return;

      const top =
        element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const timeoutId = window.setTimeout(scrollToSection, 100);
    return () => window.clearTimeout(timeoutId);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
