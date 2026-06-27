import { Menu, X } from "lucide-react";
import { useState } from "react";
import { brand, navigationLinks } from "../data/siteContent";

export default function Navbar({ scrolled }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-[rgba(5,15,27,0.88)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a href="#home" className="flex items-center gap-3 sm:gap-4" aria-label={brand.name}>
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white shadow-[0_12px_30px_rgba(16,35,60,0.1)] sm:h-14 sm:w-14">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="absolute left-[-0.15rem] top-1/2 h-12 w-auto max-w-none -translate-y-1/2 object-contain sm:h-14"
              />
            </div>
            <div className="leading-none">
              <span className="block text-sm font-bold uppercase tracking-[0.24em] text-white sm:text-base">
                TAPRO
              </span>
              <span className="block pt-1 text-[10px] uppercase tracking-[0.34em] text-white/45 sm:text-[11px]">
                MEDIA
              </span>
            </div>
          </a>

          <div className="hidden items-center space-x-6 md:flex lg:space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/52 hover:text-white lg:text-base"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="brand-button">
              Book a free call
            </a>
          </div>

          <button
            className="cursor-pointer p-2 text-white md:hidden"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuIsOpen}
          >
            {mobileMenuIsOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuIsOpen && (
        <div className="animate-in slide-in-from-top duration-300 border-t border-white/8 bg-[rgba(5,15,27,0.96)] backdrop-blur-xl md:hidden">
          <div className="space-y-4 px-4 py-5">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuIsOpen(false)}
                className="block text-sm font-medium text-white/76 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuIsOpen(false)}
              className="brand-button inline-flex"
            >
              Book a free call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
