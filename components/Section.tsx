type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

// The shared wrapper for every section below the hero.
// It keeps the same width, padding and heading style everywhere.
export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-3xl tracking-tight md:mb-14 md:text-5xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}
