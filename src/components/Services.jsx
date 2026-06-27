import { services } from "../data/siteContent";

export default function Services() {
  return (
    <section id="work" className="border-b border-white/8 bg-[var(--color-navy)] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/30">
          What we do
        </p>

        <div className="mt-14">
          {services.map((service) => (
            <div
              key={service.title}
              className="grid gap-6 border-t border-white/8 py-8 lg:grid-cols-[64px_1fr_320px] lg:items-end"
            >
              <span className="text-xs font-medium text-white/24">{service.number}</span>
              <div className="flex items-center gap-4">
                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent)]/12 lg:flex">
                  <service.icon className="h-5 w-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="font-['Georgia'] text-3xl leading-none tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                  {service.title}
                </h3>
              </div>
              <p className="max-w-sm text-sm leading-7 text-white/40 lg:text-right">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
