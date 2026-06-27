import { storyContent } from "../data/siteContent";

export default function About() {
  return (
    <section id="about" className="border-b border-white/8 bg-[var(--color-navy-strong)] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/32">
            {storyContent.eyebrow}
          </p>
          <h2 className="mt-8 font-['Georgia'] text-4xl leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            {storyContent.title}
            <br />
            <span className="italic text-white/34">{storyContent.emphasis}</span>
          </h2>

          <div className="mt-8 space-y-5">
            {storyContent.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-2xl text-base leading-8 text-white/52 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="border border-white/10 bg-white/[0.04] p-8 sm:p-10">
          <div className="font-['Georgia'] text-6xl leading-none text-white/10">"</div>
          <p className="mt-4 font-['Georgia'] text-2xl italic leading-10 text-white/72">
            {storyContent.quote}
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/34">
            - {storyContent.quoteAttribution}
          </p>
        </div>
      </div>
    </section>
  );
}
