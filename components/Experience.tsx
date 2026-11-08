import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      label="Experience"
      title="Where I've worked."
      description="Building and maintaining business applications, from internal tools to production systems."
    >
      <ol className="relative space-y-4">
        {experience.map((item) => (
          <li key={`${item.title}-${item.period}`}>
            <article className="group grid gap-4 rounded-2xl border border-line bg-surface p-6 transition duration-300 ease-out-soft hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_12px_32px_-16px_rgb(15_23_42/0.14)] sm:grid-cols-[9.5rem_1fr] sm:gap-8 md:p-8">
              <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                <p className="font-mono text-xs text-faint">{item.period}</p>
                {item.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent-strong">
                    <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                    Current
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-0.5 text-muted">{item.place}</p>
                <p className="mt-4 leading-relaxed text-pretty text-muted">{item.description}</p>

                {item.highlights && (
                  <div className="mt-5">
                    <h4 className="font-mono text-xs tracking-wide text-faint uppercase">Systems I contributed to</h4>
                    <ul className="mt-3 space-y-2">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-3 text-sm text-ink-soft">
                          <span aria-hidden className="h-px w-3 bg-accent" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.stack && (
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                    {item.stack.map((tech) => (
                      <li key={tech}>
                        <Tag>{tech}</Tag>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
