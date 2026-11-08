import Section from "@/components/ui/Section";
import { about, focusAreas } from "@/data/profile";

export default function About() {
  const [lead, ...rest] = about;

  return (
    <Section id="about" index="01" label="About" title="Understanding the problem before writing the code.">
      <div className="space-y-6">
        <p className="text-xl leading-relaxed font-medium tracking-tight text-pretty text-ink md:text-2xl md:leading-relaxed">
          {lead}
        </p>
        {rest.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-relaxed text-pretty text-muted">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-14">
        <h3 className="font-mono text-xs tracking-wide text-faint uppercase">Areas of interest</h3>
        <ul className="mt-5 grid overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 [&>li]:bg-surface gap-px">
          {focusAreas.map((area, i) => (
            <li
              key={area}
              className="group flex items-center justify-between p-6 transition-colors duration-300 hover:bg-subtle"
            >
              <span className="font-medium">{area}</span>
              <span className="font-mono text-xs text-faint transition-colors group-hover:text-accent-strong">
                {String(i + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
