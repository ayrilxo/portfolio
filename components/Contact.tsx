import CopyEmailButton from "@/components/CopyEmailButton";
import { profile, socials } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="bg-inverse py-20 text-inverse-ink md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl tracking-tight md:text-5xl">Contact</h2>
        <p className="mt-6 max-w-xl text-lg text-inverse-muted">
          Have a project in mind or want to work together? Send me an email.
        </p>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <a href={`mailto:${profile.email}`} className="link text-2xl break-all md:text-4xl">
            {profile.email}
          </a>
          <CopyEmailButton email={profile.email} />
        </div>

        <ul className="mt-12 flex gap-8">
          {socials.map((social) => (
            <li key={social.label}>
              <a href={social.url} target="_blank" rel="noreferrer" className="link text-inverse-muted hover:text-inverse-ink">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
