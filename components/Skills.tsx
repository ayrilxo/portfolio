import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { skillGroups } from "@/data/profile";

export default function Skills() {
  return (
    <Section id="skills" index="04" label="Skills" title="Tools I work with.">
      <dl className="divide-y divide-line border-y border-line">
        {skillGroups.map((group) => (
          <div key={group.name} className="grid gap-3 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
            <dt className="pt-1 text-sm font-medium">{group.name}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Tag>{skill}</Tag>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
