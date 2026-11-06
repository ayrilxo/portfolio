import Section from "@/components/Section";
import { skillGroups } from "@/data/profile";

export default function Skills() {
  return (
    <Section id="skills" title="Skills and expertise" className="bg-surface">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.name}>
            <h3 className="mb-4 text-xl font-medium">{group.name}</h3>
            <ul className="space-y-2 text-lg text-muted">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
