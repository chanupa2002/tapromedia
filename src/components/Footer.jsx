import { brand } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[var(--color-navy)] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-['Georgia'] text-sm font-semibold lowercase text-white/34">
          tapro media
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-white/28">
          <a href={brand.facebook} target="_blank" rel="noreferrer" className="hover:text-white/60">
            Facebook
          </a>
          <a href={brand.instagram} target="_blank" rel="noreferrer" className="hover:text-white/60">
            Instagram
          </a>
          <a href={brand.linkedin} target="_blank" rel="noreferrer" className="hover:text-white/60">
            LinkedIn
          </a>
          <a href={`mailto:${brand.email}`} className="hover:text-white/60">
            {brand.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
