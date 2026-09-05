"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark, Icon } from "./icons";

const links = [
  { label: "Websites", href: "/websites" },
  { label: "Google Business Profile", href: "/google-business-profile" },
  { label: "AI automations", href: "/ai-automations" },
  { label: "Selected work", href: "/#work" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Service pages start at their introduction; fragment links keep their target.
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          event.currentTarget
            .querySelector<HTMLButtonElement>(".menu-toggle")
            ?.focus();
        }
      }}
    >
      <div className="header-inner section-wrap">
        <Link
          className="brand"
          href="/"
          aria-label="Golddigi home"
          onClick={() => setOpen(false)}
        >
          <BrandMark />
          <span>
            golddigi<span className="orange-text">.</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => {
            const NavigationLink = link.href.includes("#") ? "a" : Link;
            return (
              <NavigationLink key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
                {link.label}
              </NavigationLink>
            );
          })}
        </nav>
        <a
          className="button button-small button-dark header-cta"
          href={pathname === "/" ? "#contact" : "/#contact"}
          onClick={() => setOpen(false)}
        >
          Let’s talk <Icon name="arrow-up-right" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {links.map((link) => {
          const NavigationLink = link.href.includes("#") ? "a" : Link;
          return (
          <NavigationLink
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
            <Icon name="arrow-up-right" />
          </NavigationLink>
          );
        })}
        <a href={pathname === "/" ? "#contact" : "/#contact"} onClick={() => setOpen(false)}>
          Let’s talk<Icon name="arrow-up-right" />
        </a>
      </nav>
    </header>
  );
}
