import { ArrowRight } from "lucide-react";
import { brand, serviceShowcase, services } from "../data/siteContent";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="absolute right-0 top-12 h-72 w-72 rounded-full bg-[var(--color-accent-soft)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-accent)]">
            Services
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-[var(--color-navy)] sm:text-5xl lg:text-6xl">
            Services designed to make your brand feel stronger and more consistent online.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--color-ink-soft)] sm:text-lg">
            We combine direction, content, and execution so your digital presence
            looks intentional and performs with more clarity.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 sm:gap-10 lg:mb-20 lg:gap-12">
          {services.map((service) => (
            <article
              key={service.title}
              className="surface-card group rounded-[2rem] p-7 sm:p-8"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)]">
                <service.icon className="h-8 w-8 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-navy)]">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-[var(--color-ink-soft)]">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-[var(--color-ink-soft)] sm:text-base"
                  >
                    <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mb-16 sm:mb-20">
          <div className="surface-card rounded-[2rem] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  Delivery model
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-[var(--color-navy)] sm:text-4xl">
                  Strategy first, brand discipline always.
                </h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-[var(--color-ink-soft)]">
                  {brand.name} keeps the workflow structured so the work feels
                  deliberate, elevated, and easier to manage as the brand grows.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {serviceShowcase.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] border border-[var(--color-line)] bg-white p-5"
                  >
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      {item.title}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)] sm:text-base">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="mx-auto max-w-2xl">
            <h3 className="text-2xl font-semibold text-[var(--color-navy)] sm:text-3xl">
              Need a tailored direction for your brand?
            </h3>
            <p className="mt-4 text-base leading-8 text-[var(--color-ink-soft)] sm:text-lg">
              We can shape a service mix around your current stage, audience,
              and brand goals.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a href="#contact" className="brand-button">
                Talk with Tapro Media
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#about" className="brand-button--light">
                See how we work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
