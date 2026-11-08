type SectionProps = {
  id: string;
  index: string; // "01", "02"... shown above the heading
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

// The shared wrapper for every section below the hero.
export default function Section({ id, index, label, title, description, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal grid gap-10 border-t border-line pt-8 lg:grid-cols-12 lg:gap-8">
          <header className="lg:col-span-4">
            <p className="flex items-center gap-3 font-mono text-xs tracking-wide text-faint uppercase">
              <span className="text-accent-strong">{index}</span>
              <span aria-hidden className="h-px w-6 bg-line-strong" />
              {label}
            </p>
            <h2
              id={`${id}-title`}
              className="mt-5 text-3xl font-semibold tracking-tight text-balance md:text-4xl"
            >
              {title}
            </h2>
            {description && <p className="mt-4 max-w-sm text-pretty text-muted">{description}</p>}
          </header>
          <div className="lg:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
