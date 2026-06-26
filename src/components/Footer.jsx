import { Instagram, Linkedin, Mail } from "lucide-react";
import { brand, footerGroups } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-4">
              <div className="rounded-[1.3rem] bg-white px-3 py-3">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-10 w-auto"
                />
              </div>
            </div>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/68 sm:text-base">
              Tapro Media builds digital presence through strategy, social media
              management, personal brand development, and content creation that
              feels modern, consistent, and memorable.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={brand.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerGroups).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/54">
                  {category}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        className="text-sm text-white/72 hover:text-[var(--color-accent-soft)]"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-white/58 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {brand.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <a href="#about" className="hover:text-white">
                About
              </a>
              <a href="#services" className="hover:text-white">
                Services
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
