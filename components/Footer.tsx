import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-inverse text-inverse-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm sm:flex-row sm:justify-between">
        <p>{profile.name}</p>
        <a href="#top" className="link hover:text-inverse-ink">
          Back to top
        </a>
      </div>
    </footer>
  );
}
