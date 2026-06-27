import { ctaContent, processSteps } from "./data/siteContent";

export default function Process() {
  return (
    <>
      <section
        id="process"
        className="border-b border-white/8 bg-[var(--color-navy-strong)] px-4 py-20 text-white sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/30">
            How it works
          </p>

          <div className="mt-14">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="grid gap-6 border-t border-white/8 py-10 lg:grid-cols-[88px_1fr]"
              >
                <div className="font-['Georgia'] text-5xl font-semibold leading-none text-white/10">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/42 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-navy)] px-4 py-24 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-['Georgia'] text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Every great brand
            <br />
            starts with one
            <br />
            <span className="italic text-white/34">honest conversation.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/42">
            {ctaContent.subtitle}
          </p>
          <a href={ctaContent.primaryCta.href} className="brand-button mt-10 inline-flex">
            {ctaContent.primaryCta.label}
          </a>
        </div>
      </section>
    </>
  );
}
