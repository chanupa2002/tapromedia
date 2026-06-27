import { ArrowRight } from "lucide-react";
import { heroContent, stats, tickerItems } from "../data/siteContent";

export default function Hero() {
  const tickerLoop = [...tickerItems, ...tickerItems];

  return (
    <section id="home" className="relative overflow-hidden bg-[var(--color-navy)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,106,0,0.22),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_22%)]" />

      <div className="relative px-4 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl py-16 sm:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
              {heroContent.eyebrow}
            </p>

            <h1 className="mt-8 font-['Georgia'] text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.25rem]">
              {heroContent.title}
              <br />
              <span className="text-[var(--color-accent-soft)] italic">
                {heroContent.emphasis}
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              {heroContent.description}
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href={heroContent.primaryCta.href} className="brand-button">
                {heroContent.primaryCta.label}
              </a>
              <a
                href={heroContent.secondaryCta.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/52 transition hover:text-white"
              >
                {heroContent.secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-white/8 py-5">
        <div className="flex whitespace-nowrap animate-[ticker_20s_linear_infinite]">
          {tickerLoop.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span className="px-8 font-['Georgia'] text-2xl italic text-white/18 sm:text-3xl">
                {item}
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-white/20">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative grid border-b border-white/8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-8 py-10 ${
              index !== stats.length - 1 ? "border-b border-white/8 md:border-b-0 md:border-r" : ""
            } border-white/8`}
          >
            <div className="font-['Georgia'] text-4xl font-semibold text-white sm:text-5xl">
              {stat.value}
            </div>
            <div className="mt-3 max-w-xs text-sm leading-6 text-white/44">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
