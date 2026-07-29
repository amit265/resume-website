export function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-border/50 pb-8 mb-4">
      <div className="max-w-2xl">
        {eyebrow && <p className="text-accent font-mono text-sm uppercase tracking-widest mb-3">{eyebrow}</p>}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center gap-3">
          {title} <span className="text-accent opacity-80 animate-pulse text-2xl md:text-3xl">✦</span>
        </h2>
      </div>
      {copy && <p className="text-secondary text-lg max-w-md leading-relaxed lg:text-right">{copy}</p>}
    </div>
  );
}
