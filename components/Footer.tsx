import { ArrowUp } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {profile.name} <span className="text-faint">· {profile.role}</span>
        </p>
        <a href="#top" className="group inline-flex items-center gap-1.5 transition-colors hover:text-ink">
          <span className="link">Back to top</span>
          <ArrowUp className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
