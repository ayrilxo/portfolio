// All the text on the site lives in this file.
// To update the site, edit the values below. The components read from here.
//
// Everything except `name` and `role` is placeholder content. Replace it with your own.

export type SkillGroup = {
  name: string;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  category: string; // used by the filter buttons in the gallery
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
};

export type SocialLink = {
  label: string;
  url: string;
};

export const profile = {
  name: "Aiman Ashri",
  role: "Software Engineer",
  intro:
    "I build web applications that are simple to use, quick to load and easy to maintain.",
  photo: "/profile.jpeg", // e.g. "/me.jpg" in /public. Leave empty to show your initials.
  email: "ayman160@gmail.com",
};

export const about = [
  "Write a short paragraph about yourself here: what you do, what you enjoy building and what kind of team you work best in.",
  "Add a second paragraph if you like: how you got into software, what you are learning now, or what you do outside of work.",
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML and CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "REST APIs", "PostgreSQL"],
  },
  {
    name: "Tools",
    skills: ["Git", "Docker", "Linux", "VS Code"],
  },
];

export const projects: Project[] = [
  {
    title: "Project one",
    description: "One sentence on what this project does and who it is for.",
    category: "Web",
    tags: ["Next.js", "TypeScript"],
    codeUrl: "https://github.com/ayrilxo",
  },
  {
    title: "Project two",
    description: "One sentence on what this project does and who it is for.",
    category: "Web",
    tags: ["React", "Node.js"],
  },
  {
    title: "Project three",
    description: "One sentence on what this project does and who it is for.",
    category: "Mobile",
    tags: ["React Native"],
  },
  {
    title: "Project four",
    description: "One sentence on what this project does and who it is for.",
    category: "Tools",
    tags: ["Python"],
  },
];

export const experience: TimelineItem[] = [
  {
    title: "Software Engineer",
    place: "Company name",
    period: "2024 to now",
    description: "One or two lines on what you work on and what you are proud of.",
  },
  {
    title: "Junior Developer",
    place: "Company name",
    period: "2022 to 2024",
    description: "One or two lines on what you worked on.",
  },
];

export const education: TimelineItem[] = [
  {
    title: "Degree name",
    place: "University name",
    period: "2018 to 2022",
    description: "Your focus, final project or anything worth mentioning.",
  },
];

export const socials: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/ayrilxo" },
  { label: "LinkedIn", url: "https://www.linkedin.com/" },
];

// The links shown in the navigation bar. Each `id` matches a section id.
export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
