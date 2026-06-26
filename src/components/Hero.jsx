import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { brand, heroContent } from "../data/siteContent";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pt-24 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,106,0,0.12),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(13,34,61,0.08),transparent_24%)]" />
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[var(--color-navy)]/8 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 py-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="space-y-8">
          <div className="eyebrow animate-in slide-in-from-bottom duration-700 w-fit border-[var(--color-line)] bg-white/78 text-[var(--color-navy)] shadow-[0_12px_30px_rgba(16,35,60,0.06)]">
            <Sparkles className="h-4 w-4 text-[var(--color-accent)]" />
            {heroContent.eyebrow}
          </div>

          <div className="animate-in slide-in-from-bottom duration-700 delay-100 space-y-6">
            <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] text-[var(--color-navy)] sm:text-5xl lg:text-7xl">
              A brand deserves
              <br />
              <span className="text-[var(--color-accent)]">a story</span>
              <span className="text-[var(--color-navy)]"> worth seeing,</span>
              <br />
              sharing, and trusting.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[var(--color-ink-soft)] sm:text-lg">
              {heroContent.description}
            </p>
          </div>

          <div className="animate-in slide-in-from-bottom duration-700 delay-200 flex flex-col gap-4 sm:flex-row">
            <a href={heroContent.primaryCta.href} className="brand-button">
              {heroContent.primaryCta.label}
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href={heroContent.secondaryCta.href} className="brand-button--ghost">
              {heroContent.secondaryCta.label}
            </a>
          </div>

          <div className="animate-in slide-in-from-bottom duration-700 delay-300 flex flex-wrap gap-3">
            {heroContent.highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--color-line)] bg-white/75 px-4 py-2 text-sm font-medium text-[var(--color-ink-soft)]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="animate-in slide-in-from-bottom duration-700 delay-300 grid gap-4 sm:grid-cols-3">
            {heroContent.checklist.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/70 bg-white/84 p-4 text-sm leading-6 text-[var(--color-ink-soft)] shadow-[0_16px_40px_rgba(16,35,60,0.06)]"
              >
                <CheckCircle2 className="mb-3 h-5 w-5 text-[var(--color-accent)]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="animate-in slide-in-from-bottom duration-700 delay-300 relative">
          <div className="surface-card relative overflow-hidden rounded-[2rem] border border-white/80 p-6 sm:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.94),rgba(255,255,255,0.62))]" />
            <div className="relative space-y-6">
              <div className="rounded-[1.75rem] bg-white px-5 py-6 shadow-[0_18px_45px_rgba(16,35,60,0.08)]">
                <img
                  src={brand.logo}
                  alt={`${brand.name} wordmark`}
                  className="w-full object-contain"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-accent-soft)] p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                    Positioning
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--color-navy)]">
                    A brand voice and visual direction that feels intentional from the first glance.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-navy)] p-5 text-white">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/70">
                    Consistency
                  </p>
                  <p className="mt-3 text-base leading-7 text-white/78">
                    Social and content systems that keep the brand recognizable across every touchpoint.
                  </p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white px-5 py-5 text-sm leading-7 text-[var(--color-ink-soft)]">
                <span className="font-semibold text-[var(--color-navy)]">
                  {brand.slogan}.
                </span>{" "}
                Tapro Media helps brands look sharper, sound clearer, and carry a
                stronger presence across digital platforms.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
