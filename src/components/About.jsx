import { CheckCircle2 } from "lucide-react";
import { aboutContent, processSteps } from "../data/siteContent";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="absolute inset-x-0 top-12 h-64 bg-[radial-gradient(circle,rgba(255,106,0,0.1),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="surface-card rounded-[2rem] p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              {aboutContent.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-navy)] sm:text-5xl">
              {aboutContent.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-ink-soft)] sm:text-lg">
              {aboutContent.description}
            </p>

            <div className="mt-8 space-y-4">
              {aboutContent.focusAreas.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[var(--color-line)] bg-white px-4 py-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                  <p className="text-sm leading-7 text-[var(--color-ink-soft)] sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card rounded-[2rem] p-8 sm:p-10">
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Process
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-[var(--color-navy)] sm:text-4xl">
                Built to keep the brand strong from planning to execution.
              </h3>
            </div>

            <div className="flex flex-col gap-8">
              {processSteps.map((step, index) => (
                <div key={step.title} className="relative group">
                  <div className="flex items-start gap-5 sm:gap-6">
                    <div className="flex flex-col items-center">
                      <div className="z-10 mb-2 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-accent-soft)] group-hover:scale-105">
                        <step.icon className="h-7 w-7 text-[var(--color-accent)]" />
                      </div>
                      {index !== processSteps.length - 1 && (
                        <div className="absolute left-8 top-16 h-full min-h-[3rem] w-px -translate-x-1/2 bg-gradient-to-b from-[var(--color-accent)]/40 to-transparent" />
                      )}
                    </div>

                    <div className="max-w-md flex-1 pb-6 pt-2">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                          {step.number}
                        </span>
                      </div>
                      <h4 className="text-2xl font-semibold text-[var(--color-navy)]">
                        {step.title}
                      </h4>
                      <p className="mt-3 text-base leading-7 text-[var(--color-ink-soft)]">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
