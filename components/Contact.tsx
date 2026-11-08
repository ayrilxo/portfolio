import CopyEmailButton from "@/components/CopyEmailButton";
import { ArrowUpRight, Mail, SocialIcon } from "@/components/ui/Icons";
import { profile, socials } from "@/data/profile";

// Final section with a separate layout to highlight the call to action.
export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal relative isolate overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-16 text-center sm:px-12 md:py-24">
          <div aria-hidden className="grid-backdrop absolute inset-0 -z-10" />

          <p className="flex items-center justify-center gap-3 font-mono text-xs tracking-wide text-faint uppercase">
            <span className="text-accent-strong">06</span>
            <span aria-hidden className="h-px w-6 bg-line-strong" />
            Contact
          </p>
          <h2
            id="contact-title"
            className="mx-auto mt-6 max-w-2xl text-4xl font-semibold tracking-[-0.03em] text-balance md:text-6xl"
          >
            Let&apos;s work together.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg text-pretty text-muted">
            Have a project in mind or want to work together? Send me an email.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex h-12 max-w-full items-center gap-2.5 rounded-full bg-ink px-6 text-sm font-medium text-white shadow-sm shadow-ink/10 transition duration-200 hover:-translate-y-px hover:bg-ink-soft active:translate-y-0 active:scale-[0.98]"
            >
              <Mail />
              <span className="truncate">{profile.email}</span>
            </a>
            <CopyEmailButton email={profile.email} />
          </div>

          <ul className="mt-12 flex items-center justify-center gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm text-muted transition duration-200 hover:-translate-y-px hover:border-line-strong hover:text-ink"
                >
                  <SocialIcon label={social.label} />
                  {social.label}
                  <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
