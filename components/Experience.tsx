import Section from "@/components/Section";
import { education, experience, type TimelineItem } from "@/data/profile";

type TimelineProps = {
  heading: string;
  items: TimelineItem[];
};

// One column of the section: a heading and a list of roles or schools.
function Timeline({ heading, items }: TimelineProps) {
  return (
    <div>
      <h3 className="mb-6 text-xl font-medium">{heading}</h3>
      <ol className="space-y-8 border-l-2 border-surface pl-6">
        {items.map((item) => (
          <li key={`${item.title}-${item.period}`} className="relative">
            {/* The dot on the line */}
            <span className="absolute top-2 -left-[31px] h-3 w-3 rounded-full bg-accent" />
            <p className="text-sm text-muted">{item.period}</p>
            <h4 className="mt-1 text-xl">{item.title}</h4>
            <p className="text-muted">{item.place}</p>
            <p className="mt-2">{item.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience and education">
      <div className="grid gap-14 md:grid-cols-2">
        <Timeline heading="Work" items={experience} />
        <Timeline heading="Education" items={education} />
      </div>
    </Section>
  );
}
