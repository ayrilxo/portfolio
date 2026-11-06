import Section from "@/components/Section";
import { about } from "@/data/profile";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="max-w-3xl space-y-6 text-lg leading-relaxed md:text-xl">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
