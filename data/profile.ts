// All the text on the site lives in this file.
// To update the site, edit the values below. The components read from here.

export type SkillGroup = {
  name: string;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  category: string; // filter buttons appear once there are two or more categories
  tags: string[];
  image?: string; // path inside /public, e.g. "/projects/my-app.png"
  liveUrl?: string;
  codeUrl?: string;
};

export type TimelineItem = {
  title: string;
  place: string;
  period: string;
  description: string;
  current?: boolean; // shows the "Current" badge and the line in the hero
  highlights?: string[]; // systems or topics worth calling out
  stack?: string[];
};

export type SocialLink = {
  label: string;
  url: string;
};

export const profile = {
  name: "Aiman Ashri",
  role: "Software Engineer",
  intro: "Turning complex problems into practical, reliable software solution.",
  photo: "/profile.jpeg", // e.g. "/me.jpg" in /public. Leave empty to show your initials.
  email: "ayman160@gmail.com",
  // The stack shown along the bottom of the hero.
  coreStack: ["Laravel", "PHP", "React", "Next.js", "PostgreSQL"],
};

export const about = [
  "I'm a Software Engineer interested in the intersection of business problems and technology. " +
    "I focus on understanding how systems and processes work, identifying inefficiencies, and translating business requirements into practical software solutions. " +
    "Rather than simply implementing features, I value understanding the reasoning behind technical decisions and how each part of a system contributes to the bigger picture.",
  "My experience spans full-stack web development, with a focus on Laravel, PHP, React, Next.js, and PostgreSQL. " +
    "I'm particularly interested in backend engineering, system architecture, database design, and application performance. " +
    "As AI continues to reshape software development, I see it as a tool to work more effectively, not a replacement for engineering judgment. " +
    "I believe the real value of an engineer lies in understanding problems, making sound technical decisions, evaluating trade-offs, and building software that remains reliable and maintainable beyond its initial release.",
];

// The areas named in the second about paragraph.
export const focusAreas = [
  "Backend engineering",
  "System architecture",
  "Database design",
  "Application performance",
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    skills: ["PHP", "TypeScript", "JavaScript", "Python", "Java", "C++", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    name: "Backend",
    skills: ["Laravel", "Node.js", "REST APIs"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Linux", "VS Code"],
  },
];

export const projects: Project[] = [
  {
    title: "Bizflow",
    description:
      "A business workflow management application designed to simplify processes, organise information, and improve operational efficiency.",
    category: "Web",
    tags: ["Laravel", "PostgreSQL"],
    codeUrl: "https://github.com/ayrilxo/bizflow",
  },
];

export const experience: TimelineItem[] = [
  {
    title: "Software Engineer",
    place: "Khind IQ Sdn Bhd",
    period: "Jan 2025 – Present",
    current: true,
    description:
      "Develop and maintain business applications using Laravel, PHP, React, and PostgreSQL. Work on REST APIs, database management, application enhancements, and production issue resolution, while contributing to system improvements and technical decisions.",
    stack: ["Laravel", "PHP", "React", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Back-End Developer Intern",
    place: "Khind Holding Sdn Bhd",
    period: "Sept 2024 – Jan 2025",
    description:
      "Developed backend features and business applications using Laravel, PHP, and PostgreSQL. Contributed to internal systems including Promo Bundling, Sales Order Tracker, and Business Partner Information, translating business requirements into functional solutions.",
    highlights: ["Promo Bundling", "Sales Order Tracker", "Business Partner Information"],
    stack: ["Laravel", "PHP", "PostgreSQL"],
  },
];

export const education: TimelineItem[] = [
  {
    title: "Bachelor of Computer Science (Hons.)",
    place: "Universiti Teknologi MARA (UiTM), Shah Alam",
    period: "2022 – 2024",
    description:
      "Focused on software development, algorithms, database systems, and Software Engineer ating. Final Year Project: BlockVote, a partially decentralized voting system using blockchain technology.",
  },
  {
    title: "Diploma in Computer Science",
    place: "Universiti Teknologi MARA (UiTM), Tapah",
    period: "Jan 2020 – Sept 2022",
    description:
      "Built a foundation in programming, database management, computer systems, and software development.",
  },
];

export const socials: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/ayrilxo" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-aiman-bb4962227/" },
];

// The links shown in the navigation bar. Each `id` matches a section id,
// and the order matches the order of the sections on the page.
export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
