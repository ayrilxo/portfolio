import Section from "@/components/ui/Section";
import { education } from "@/data/profile";

export default function Education() {
  return (
    <Section id="education" index="05" label="Education" title="Computer Science at UiTM.">
      <ol className="grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <li
            key={`${item.title}-${item.period}`}
            className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition duration-300 ease-out-soft hover:-translate-y-0.5 hover:border-line-strong md:p-7"
          >
            <p className="font-mono text-xs text-faint">{item.period}</p>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-balance">{item.title}</h3>
            <p className="mt-1 text-sm text-muted">{item.place}</p>
            <p className="mt-4 text-sm leading-relaxed text-pretty text-muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
