import { clients } from "./data/siteContent";

export default function Testimonials() {
  return (
    <section className="border-y border-white/8 bg-[var(--color-navy-strong)] px-4 py-18 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-medium tracking-[0.08em] text-white/54">
            Trusted by
          </p>
        </div>

        <div className="mt-12 grid items-center gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex min-h-[110px] flex-col items-center justify-center text-center"
            >
              <div className="flex h-[88px] items-center justify-center">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className={`${client.imageClassName} opacity-88 transition duration-300 group-hover:opacity-100 group-hover:scale-[1.02]`}
                />
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/36">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
