import { useEffect, useState } from "react";
import { ArrowRight, Instagram, Mail, Phone } from "lucide-react";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Process from "./Process.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./Testimonials.jsx";
import { brand } from "./data/siteContent";

function ContactSection() {
  return (
    <section id="contact" className="relative border-t border-white/8 bg-[var(--color-navy-strong)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-[var(--color-navy)] text-white shadow-[0_30px_80px_rgba(16,35,60,0.18)]">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative overflow-hidden p-8 sm:p-10 lg:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,106,0,0.2),transparent_35%)]" />
              <div className="relative">
                <p className="eyebrow w-fit border-white/14 bg-white/8 text-white/76">
                  Contact
                </p>
                <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
                  {brand.slogan}. Let&apos;s tell it clearly.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/76 sm:text-lg">
                  Reach out if you need branding, personal branding, web design,
                  or social media support built around a story your audience will
                  actually remember.
                </p>

                <div className="mt-10 space-y-5">
                  <a
                    href={`mailto:${brand.email}`}
                    className="flex items-center gap-4 rounded-3xl border border-white/12 bg-white/8 px-5 py-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/62">Email</p>
                      <p className="font-semibold">{brand.email}</p>
                    </div>
                  </a>

                  <a
                    href={brand.phoneHref}
                    className="flex items-center gap-4 rounded-3xl border border-white/12 bg-white/8 px-5 py-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/62">Phone</p>
                      <p className="font-semibold">{brand.phone}</p>
                    </div>
                  </a>

                  <a
                    href={brand.secondaryPhoneHref}
                    className="flex items-center gap-4 rounded-3xl border border-white/12 bg-white/8 px-5 py-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/62">Phone</p>
                      <p className="font-semibold">{brand.secondaryPhone}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 rounded-3xl border border-white/12 bg-white/8 px-5 py-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/62">Address</p>
                      <p className="font-semibold">{brand.address}</p>
                    </div>
                  </div>

                  <a
                    href={brand.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-3xl border border-white/12 bg-white/8 px-5 py-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12">
                      <Instagram className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/62">Instagram</p>
                      <p className="font-semibold">Visit our profile</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 lg:p-12 text-[var(--color-ink)]">
              <div className="max-w-xl">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  Honest conversation
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-[var(--color-navy)] sm:text-4xl">
                  No pitch decks. No pressure. Just clarity.
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--color-ink-soft)]">
                  Tell us where you are, what you want to change, and what kind
                  of presence you want your audience to feel when they meet your
                  brand.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-accent-soft)] p-5">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      Start here
                    </p>
                    <p className="mt-3 text-base leading-7 text-[var(--color-navy)]">
                      If your brand feels unclear, inconsistent, or invisible,
                      that is exactly where the conversation should begin.
                    </p>
                  </div>

                  <div className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-5">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      Preferred contact
                    </p>
                    <p className="mt-3 text-base leading-7 text-[var(--color-ink-soft)]">
                      Email us or call directly with your business name, current
                      challenge, and the story you want your audience to see.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a href={`mailto:${brand.email}`} className="brand-button">
                    Email Tapro Media
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <a href={brand.phoneHref} className="brand-button--light">
                    Call now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--color-navy)] text-white">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Process />
      <ContactSection />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
